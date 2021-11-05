import axios, { Method } from 'axios';
import {
  ApiInformingOptions,
  ApiInformingType,
  ApiMethodType,
  ApiRequestBody,
  ApiRequestOptions,
  ApiResponseBody,
  ModelType,
} from '../types';
import { BaseApi } from '../api/base';

export class ApiMiddleware {
  constructor(private formatData: 'json' | 'xml' = 'json', private apiUrl: string) {}

  async getRequest<T>(method: Method, data: ApiRequestBody<any>) {
    const url = `${this.apiUrl}${this.formatData}/`;

    return await axios({
        method,
        url,
        data: data,
      }).then(resp => {
        const respBody = resp.data as ApiResponseBody<T>;
        const noDataState = this.isNoData(respBody);
        if (noDataState) return this.getInformingResponse(noDataState.type, noDataState.opts);
        return respBody;
      })
  }

  isNoData(resp: ApiResponseBody<any>): {type: ApiInformingType, opts: ApiInformingOptions} | undefined {
    if (resp.errors.length && !resp.data.length) {
     return {
       type: 'error',
       opts: {
         codes: resp.errorCodes,
         descriptions: resp.errors
       }
     };
    }
    if (resp.warnings.length  && !resp.data.length) {
      return {
        type: 'warning',
        opts: {
          codes: resp.warningCodes,
          descriptions: resp.warnings
        }
      };
    }
    if (resp.infoCodes.length  && !resp.data.length) {
      return {
        type: 'info',
        opts: {
          codes: resp.infoCodes,
          descriptions: resp.info as any[]
        }
      };
    }
    return undefined;
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

  getInformingResponse(type: ApiInformingType, opts: ApiInformingOptions) {
    const {descriptions, codes} = opts;
    const res = [];
    for (let i = 0; i < codes.length; i++) {
      res.push(
        `${type.toUpperCase()}: Gotten message - ${descriptions[i]} | CODE: ${codes[i]}`
      );
    }
    return res;
  }

  async generateRequest<T, D>(opts: ApiRequestOptions<D>) {
    const { model, apiMethod, requestMethod, additionalOpts, nameSystem } = opts;

    const data = this.getRequestData<D>(model, apiMethod, additionalOpts, nameSystem);

    return await this.getRequest<T>(requestMethod, data);
  }
}
