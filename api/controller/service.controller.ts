import { BaseApi } from '../base';
import {
  CanSendRequestMethod,
  CanSendRequestOptions,
  CanSendRequestResponse,
  CreateRequestOptions,
  CreateRequestResponse,
  DeleteRequestOptions,
  DeleteRequestResponse,
  ListRequestMethod,
  ListRequestOptions,
  ListRequestResponse,
  ServiceModelType,
} from '../../types/service';

/*
 * API class for help working with services.
 */
export default class ApiService extends BaseApi {
  async canCreateRequest(
    opts: CanSendRequestOptions,
    method: CanSendRequestMethod,
    model: ServiceModelType,
  ) {
    return await this.config.generateRequest<CanSendRequestResponse, CanSendRequestOptions>({
      model,
      apiMethod: method,
      requestMethod: 'post',
      additionalOpts: opts,
    });
  }

  async createServiceRequest(opts: CreateRequestOptions, model: ServiceModelType) {
    return await this.config.generateRequest<CreateRequestResponse, CreateRequestOptions>({
      model,
      apiMethod: 'save',
      requestMethod: 'post',
      additionalOpts: opts,
    });
  }

  async deleteServiceRequest(opts: DeleteRequestOptions, model: ServiceModelType) {
    return await this.config.generateRequest<DeleteRequestResponse, DeleteRequestOptions>({
      model,
      apiMethod: 'delete',
      requestMethod: 'post',
      additionalOpts: opts,
    });
  }

  async getListServiceRequests(
    model: ServiceModelType,
    method: ListRequestMethod,
    opts?: ListRequestOptions,
  ) {
    return await this.config.generateRequest<ListRequestResponse, ListRequestOptions>({
      model,
      apiMethod: method,
      requestMethod: 'post',
      additionalOpts: opts ?? {},
    });
  }
}
