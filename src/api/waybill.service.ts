import {ApiConfigure} from "../middleware";
import {ListWayBillResponse, TrackingWayBillResponse, WayBillMethodProperties, WayBillRequest} from "../types/waybill";

export class ApiWayBill {
  constructor(private apiUrl: string, private config: ApiConfigure) {}

  async getListWayBill(opts?: WayBillMethodProperties) {
    const data: WayBillRequest = this.config.getRequestData('InternetDocument', 'getDocumentList', opts ?? {});

    return await this.config.getRequest<ListWayBillResponse>('post', data);
  }

  async getTrackingParcel(opts: WayBillMethodProperties) {
    const data: WayBillRequest = this.config.getRequestData('TrackingDocument', 'getStatusDocuments', opts);

    return await this.config.getRequest<TrackingWayBillResponse>('post', data);
  }
}
