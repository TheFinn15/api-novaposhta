import axios from 'axios';
import {ApiAreas} from "../types/address";
import {WayBillMethodProperties, WayBillRequest, WayBillResponse} from "../types/waybill";
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

  async getAreas(): Promise<ApiAreas[]> {
    const data = this.getRequestData('Address', 'getAreas');

    const resp = (await axios.post(`${this.hostUrl}${data.modelName}/${data.calledMethod}`, data)).data as ApiResponse<ApiAreas>;

    return resp.data;
  }

  async getListWayBill(opts: WayBillMethodProperties) {
    const data: WayBillRequest = this.getRequestData('InternetDocument', 'getDocumentList', opts);

    return (await axios.post(`${this.hostUrl}${data.calledMethod}`)).data as ApiResponse<WayBillResponse>;
  }
}
