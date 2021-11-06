import {
  ApiTrackingHistoryProperties,
  ApiTrackingHistoryResponse,
  ApiTrackingInfoProperties,
  ApiTrackingInfoResponse,
  DocumentMethodProperties,
  EditDocumentProperties,
  EditDocumentResponse,
  ListDocumentResponse,
  ParcelDeliveryDateProperties,
  ParcelDeliveryDateResponse,
  ParcelPriceProperties,
  ParcelPriceResponse,
  TrackingDocumentResponse,
} from '../../types/document';
import { BaseApi } from '../base';

export default class ApiDocument extends BaseApi {
  async getListDocument(opts?: DocumentMethodProperties) {
    return await this.config.generateRequest<ListDocumentResponse, DocumentMethodProperties>({
      model: 'InternetDocument',
      apiMethod: 'getDocumentList',
      requestMethod: 'post',
      additionalOpts: opts ?? undefined,
    });
  }

  async getParcelDeliveryDate(opts: ParcelDeliveryDateProperties) {
    return await this.config.generateRequest<
      ParcelDeliveryDateResponse,
      ParcelDeliveryDateProperties
    >({
      model: 'InternetDocument',
      apiMethod: 'getDocumentDeliveryDate',
      requestMethod: 'post',
      additionalOpts: opts,
    });
  }

  async getParcelPrice(opts: ParcelPriceProperties) {
    return await this.config.generateRequest<ParcelPriceResponse, ParcelPriceProperties>({
      model: 'InternetDocument',
      apiMethod: 'getDocumentPrice',
      requestMethod: 'post',
      additionalOpts: opts,
    });
  }

  async updateDocument(opts: EditDocumentProperties) {
    return await this.config.generateRequest<EditDocumentResponse, EditDocumentProperties>({
      model: 'InternetDocument',
      apiMethod: 'update',
      requestMethod: 'post',
      additionalOpts: opts,
    });
  }

  async getTrackingParcel(opts: DocumentMethodProperties) {
    return await this.config.generateRequest<TrackingDocumentResponse, DocumentMethodProperties>({
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
