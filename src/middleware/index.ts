import axios, {Method} from "axios";
import {ApiRequestBody, ApiRequestOptions, ApiResponseBody} from "../types";
import {WayBillMethodProperties} from "../types/waybill";
import {ApiAreasResponse} from "../types/address";

export class ApiConfigure {
  constructor(private formatData: 'json' | 'xml' = 'json') {}

  async getRequest<T>(method: Method, data: ApiRequestBody<any>, useModelName = false) {
    let url = '';

    if (useModelName) url = `${process.env.API_HOST_URL}/${this.formatData}/${data.modelName}/${data.calledMethod}`;
    else url = `${process.env.API_HOST_URL}/${this.formatData}/${data.calledMethod}`;

    return (await axios({
      method,
      url,
      data: data
    })).data as ApiResponseBody<T>;
  }

  getRequestData<T>(model: string, methodName: string, properties?: T): ApiRequestBody<any> {
    return {
      apiKey: process.env.API_KEY as string,
      modelName: model,
      calledMethod: methodName,
      methodProperties: properties ?? {}
    };
  }

  async generateRequest<T, D>(opts: ApiRequestOptions<D>) {
    const {model, apiMethod, requestMethod, useModelName, additionalOpts} = opts;

    const data = this.getRequestData<D>(model, apiMethod, additionalOpts);

    return await this.getRequest<T>(requestMethod, data, useModelName);
  }
}
