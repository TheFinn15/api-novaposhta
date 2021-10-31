import axios, { Method } from 'axios';
import { ApiMethodType, ApiRequestBody, ApiRequestOptions, ApiResponseBody, ModelType } from '../types';

export class ApiConfigure {
  constructor(private formatData: 'json' | 'xml' = 'json') {}

  async getRequest<T>(method: Method, data: ApiRequestBody<any>) {
    const url = `${process.env.API_HOST_URL}${this.formatData}/`;

    return (
      await axios({
        method,
        url,
        data: data,
      })
    ).data as ApiResponseBody<T>;
  }

  getRequestData<T>(
    model: ModelType,
    methodName: ApiMethodType,
    properties?: T,
    system?: string,
  ): ApiRequestBody<any> {
    return {
      apiKey: process.env.API_KEY as string,
      modelName: model,
      system: system,
      calledMethod: methodName,
      methodProperties: properties ?? {},
    };
  }

  async generateRequest<T, D>(opts: ApiRequestOptions<D>) {
    const { model, apiMethod, requestMethod, additionalOpts, nameSystem } = opts;

    const data = this.getRequestData<D>(model, apiMethod, additionalOpts, nameSystem);

    return await this.getRequest<T>(requestMethod, data);
  }
}
