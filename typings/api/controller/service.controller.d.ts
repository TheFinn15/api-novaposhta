import { BaseApi } from '../base';
import { CanSendRequestMethod, CanSendRequestOptions, CanSendRequestResponse, CreateRequestOptions, CreateRequestResponse, DeleteRequestOptions, DeleteRequestResponse, ListRequestMethod, ListRequestOptions, ListRequestResponse, ServiceModelType } from '../../types/service';
export default class ApiService extends BaseApi {
    canCreateRequest(opts: CanSendRequestOptions, method: CanSendRequestMethod, model: ServiceModelType): Promise<import("../../types").InformerResponse<CanSendRequestResponse>>;
    createServiceRequest(opts: CreateRequestOptions, model: ServiceModelType): Promise<import("../../types").InformerResponse<CreateRequestResponse>>;
    deleteServiceRequest(opts: DeleteRequestOptions, model: ServiceModelType): Promise<import("../../types").InformerResponse<DeleteRequestResponse>>;
    getListServiceRequests(model: ServiceModelType, method: ListRequestMethod, opts?: ListRequestOptions): Promise<import("../../types").InformerResponse<ListRequestResponse>>;
}
