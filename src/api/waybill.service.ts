import { ApiConfigure } from '../middleware';
import {
  ApiTrackingHistoryProperties,
  ApiTrackingHistoryResponse,
  ApiTrackingInfoProperties,
  ApiTrackingInfoResponse,
  ListWayBillResponse,
  TrackingWayBillResponse,
  WayBillMethodProperties,
} from '../types/waybill';

export class ApiWayBill {
  constructor(private apiUrl: string, private config: ApiConfigure) {}

  async getListWayBill(opts?: WayBillMethodProperties) {
    return await this.config.generateRequest<ListWayBillResponse, WayBillMethodProperties>({
      model: 'InternetDocument',
      apiMethod: 'getDocumentList',
      requestMethod: 'post',
      additionalOpts: opts ?? undefined,
    });
  }

  async getTrackingParcel(opts: WayBillMethodProperties) {
    return await this.config.generateRequest<TrackingWayBillResponse, WayBillMethodProperties>({
      model: 'TrackingDocument',
      apiMethod: 'getStatusDocuments',
      requestMethod: 'post',
      additionalOpts: opts,
    });
  }

  async getTrackingInfo(opts: ApiTrackingInfoProperties) {
    return await this.config.generateRequest<ApiTrackingInfoResponse, ApiTrackingInfoProperties>({
      model: 'InternetDocument',
      apiMethod: 'getDocumentsEWMovement',
      requestMethod: 'post',
      additionalOpts: opts,
      nameSystem: 'Tracking',
    });
  }

  async getTrackingHistory(opts: ApiTrackingHistoryProperties) {
    return await this.config.generateRequest<
      ApiTrackingHistoryResponse,
      ApiTrackingHistoryProperties
    >({
      model: 'TrackingDocumentGeneral',
      apiMethod: 'getDocumentTrackingHistory',
      requestMethod: 'post',
      additionalOpts: opts,
      nameSystem: 'Tracking',
    });
  }
}
