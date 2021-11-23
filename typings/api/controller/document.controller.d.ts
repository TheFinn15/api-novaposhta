import { ApiTrackingHistoryProperties, ApiTrackingHistoryResponse, ApiTrackingInfoProperties, ApiTrackingInfoResponse, CreateDocumentProperties, CreateDocumentResponse, CreatePostomatDocumentResponse, DeleteDocumentProperties, DeleteDocumentResponse, DocumentMethodProperties, EditDocumentProperties, EditDocumentResponse, GenerateReportProperties, GenerateReportResponse, ListDocumentResponse, ParcelDeliveryDateProperties, ParcelDeliveryDateResponse, ParcelPriceProperties, ParcelPriceResponse, TrackingDocumentResponse } from '../../types/document';
import { BaseApi } from '../base';
export default class ApiDocument extends BaseApi {
    getListDocument(opts?: DocumentMethodProperties): Promise<import("../../types").InformerResponse<ListDocumentResponse>>;
    getParcelDeliveryDate(opts: ParcelDeliveryDateProperties): Promise<import("../../types").InformerResponse<ParcelDeliveryDateResponse>>;
    getParcelPrice(opts: ParcelPriceProperties): Promise<import("../../types").InformerResponse<ParcelPriceResponse>>;
    createDocument(opts: CreateDocumentProperties): Promise<import("../../types").InformerResponse<CreatePostomatDocumentResponse | CreateDocumentResponse>>;
    deleteDocument(opts: DeleteDocumentProperties): Promise<import("../../types").InformerResponse<DeleteDocumentResponse>>;
    generateReport(opts: GenerateReportProperties): Promise<import("../../types").InformerResponse<GenerateReportResponse>>;
    updateDocument(opts: EditDocumentProperties): Promise<import("../../types").InformerResponse<EditDocumentResponse>>;
    getStatusDocuments(opts: DocumentMethodProperties): Promise<import("../../types").InformerResponse<TrackingDocumentResponse>>;
    getTrackingInfo(opts: ApiTrackingInfoProperties): Promise<import("../../types").InformerResponse<ApiTrackingInfoResponse>>;
    getTrackingHistory(opts: ApiTrackingHistoryProperties): Promise<import("../../types").InformerResponse<ApiTrackingHistoryResponse>>;
}
