import { BaseApi } from '../base';
import {
  CargoDescriptionsProperties,
  CargoDescriptionsResponse,
  DescriptionResponse,
  LogTypeResponse,
  PackListProperties,
  PackListResponse,
  PalletsListResponse,
  TimeIntervalsProperties,
  TimeIntervalsResponse,
  TiresWheelsListResponse,
} from '../types/common';

/*
 * API class for help working with reference books.
 */
export default class ApiCommon extends BaseApi {
  async getTimeIntervals(opts: TimeIntervalsProperties) {
    return await this.config.generateRequest<TimeIntervalsResponse, TimeIntervalsProperties>({
      model: 'Common',
      apiMethod: 'getTimeIntervals',
      requestMethod: 'post',
      additionalOpts: opts,
    });
  }

  async getCargoTypes() {
    return await this.config.generateRequest<DescriptionResponse, any>({
      model: 'Common',
      apiMethod: 'getCargoTypes',
      requestMethod: 'post',
      additionalOpts: {},
    });
  }

  async getBackwardDeliveryCargoTypes() {
    return await this.config.generateRequest<DescriptionResponse, any>({
      model: 'Common',
      apiMethod: 'getBackwardDeliveryCargoTypes',
      requestMethod: 'post',
      additionalOpts: {},
    });
  }

  async getPalletsList() {
    return await this.config.generateRequest<PalletsListResponse, any>({
      model: 'Common',
      apiMethod: 'getPalletsList',
      requestMethod: 'post',
      additionalOpts: {},
    });
  }

  async getPayersType() {
    return await this.config.generateRequest<DescriptionResponse, any>({
      model: 'Common',
      apiMethod: 'getTypesOfPayers',
      requestMethod: 'post',
      additionalOpts: {},
    });
  }

  async getRedeliveryPayersType() {
    return await this.config.generateRequest<DescriptionResponse, any>({
      model: 'Common',
      apiMethod: 'getTypesOfPayersForRedelivery',
      requestMethod: 'post',
      additionalOpts: {},
    });
  }

  async getPackList(opts: PackListProperties) {
    return await this.config.generateRequest<PackListResponse, PackListProperties>({
      model: 'Common',
      apiMethod: 'getPackList',
      requestMethod: 'post',
      additionalOpts: opts,
    });
  }

  async getTiresWheelsList() {
    return await this.config.generateRequest<TiresWheelsListResponse, any>({
      model: 'Common',
      apiMethod: 'getTiresWheelsList',
      requestMethod: 'post',
      additionalOpts: {},
    });
  }

  async getCargoDescriptionList(opts: CargoDescriptionsProperties) {
    return await this.config.generateRequest<
      CargoDescriptionsResponse,
      CargoDescriptionsProperties
    >({
      model: 'Common',
      apiMethod: 'getCargoDescriptionList',
      requestMethod: 'post',
      additionalOpts: opts,
    });
  }

  async getMessageCodeText() {
    return await this.config.generateRequest<LogTypeResponse, any>({
      model: 'Common',
      apiMethod: 'getMessageCodeText',
      requestMethod: 'post',
      additionalOpts: {},
    });
  }

  async getServiceTypes() {
    return await this.config.generateRequest<DescriptionResponse, any>({
      model: 'Common',
      apiMethod: 'getServiceTypes',
      requestMethod: 'post',
      additionalOpts: {},
    });
  }

  async getTypesOfCounterparties() {
    return await this.config.generateRequest<DescriptionResponse, any>({
      model: 'Common',
      apiMethod: 'getTypesOfCounterparties',
      requestMethod: 'post',
      additionalOpts: {},
    });
  }

  async getPaymentForms() {
    return await this.config.generateRequest<DescriptionResponse, any>({
      model: 'Common',
      apiMethod: 'getPaymentForms',
      requestMethod: 'post',
      additionalOpts: {},
    });
  }

  async getOwnershipFormsList() {
    return await this.config.generateRequest<DescriptionResponse, any>({
      model: 'Common',
      apiMethod: 'getOwnershipFormsList',
      requestMethod: 'post',
      additionalOpts: {},
    });
  }
}
