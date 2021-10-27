import axios, { AxiosRequestConfig, Method } from 'axios';
import {ApiAreas} from "../types/address";
import {WayBillMethodProperties, WayBillRequest, ListWayBillResponse, TrackingWayBillResponse} from "../types/waybill";
import {ApiRequest, ApiResponse} from "../types";

export class ApiNovaPoshta {
  private hostUrl = `https://api.novaposhta.ua/v2.0/${this.format}/`;

  constructor(private apiKey: string, private format: 'json' | 'xml') {}

  private getRequestData(model: string, methodName: string, properties?: WayBillMethodProperties): ApiRequest<any> {
    return {
      apiKey: this.apiKey,
      modelName: model,
      calledMethod: methodName,
      methodProperties: properties
    };
  }

  private async getRequest<T>(method: Method, data: ApiRequest<T>, useModelName = false) {
    let url = '';

    if (useModelName) url = `${this.hostUrl}${data.modelName}/${data.calledMethod}`;
    else url = `${this.hostUrl}${data.calledMethod}`;
    
    return (await axios({
      method,
      url,
      data: data
    })).data;
  }

  async getAreas(): Promise<ApiAreas[]> {
    const data = this.getRequestData('Address', 'getAreas');

    return await this.getRequest('post', data, true);
  }

  async getListWayBill(opts?: WayBillMethodProperties) {
    const data: WayBillRequest = this.getRequestData('InternetDocument', 'getDocumentList', opts ?? {});

    return await this.getRequest('post', data) as ApiResponse<ListWayBillResponse>;
  }

  async getTrackingParcel(opts: WayBillMethodProperties) {
    const data: WayBillRequest = this.getRequestData('TrackingDocument', 'getStatusDocuments', opts);

    return await this.getRequest('post', data) as ApiResponse<TrackingWayBillResponse>;
  }
}
