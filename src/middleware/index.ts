import axios, { Method } from 'axios';
import {
  ApiMethodType,
  ApiRequestBody,
  ApiRequestOptions,
  ApiResponseBody,
  FormatResponse,
  ModelType,
} from '../api/types';
import { ApiInformer } from './informer';

export class ApiMiddleware {
  constructor(private formatData: FormatResponse, private apiUrl: string, private apiKey: string) {}

  private async sendRequest<T>(method: Method, data: ApiRequestBody<any>) {
    const url = `${this.apiUrl}${this.formatData}/`;

    return await axios({
      method,
      url,
      data,
    }).then((resp) => {
      return new ApiInformer(resp.data as ApiResponseBody<T>).getApiResponse<T>();
    });
  }

  private getRequestData<T>(
    model: ModelType,
    methodName: ApiMethodType,
    properties?: T,
    system?: string,
  ): ApiRequestBody<any> {
    return {
      apiKey: this.apiKey,
      modelName: model,
      system: system,
      calledMethod: methodName,
      methodProperties: properties ?? {},
    };
  }

  async generateRequest<T, D>(opts: ApiRequestOptions<D>) {
    const { model, apiMethod, requestMethod, additionalOpts, nameSystem } = opts;

    const data = this.getRequestData<D>(model, apiMethod, additionalOpts, nameSystem);

    return await this.sendRequest<T>(requestMethod, data);
  }
}
