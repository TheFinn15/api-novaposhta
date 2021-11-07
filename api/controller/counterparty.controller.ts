import { BaseApi } from '../base';
import { DescriptionResponse } from '../../types/common';
import {
  ContactPersonsProperties,
  ContactPersonsResponse,
  CounterpartiesListProperties,
  CounterpartiesListResponse,
  CounterpartyAddressProperties,
  ReferenceParam,
  CounterpartyParamsResponse,
  CreateContactPersonProperties,
  CreateContactPersonResponse,
  CreateCounterpartyProperties,
  CreateCounterpartyResponse,
  CreateLegalCounterpartyProperties,
  CreateLegalCounterpartyResponse,
  CreateThirdPersonCounterpartyProperties,
  CreateThirdPersonCounterpartyResponse,
  EditContactPersonProperties,
  EditContactPersonResponse,
  EditCounterpartyProperties,
  EditCounterpartyResponse,
} from '../../types/counterparty';

/*
 * API class for help working with counterparties
 */
export default class ApiCounterparty extends BaseApi {
  async getCounterpartyAddresses(opts: CounterpartyAddressProperties) {
    return await this.config.generateRequest<DescriptionResponse, CounterpartyAddressProperties>({
      model: 'Counterparty',
      apiMethod: 'getCounterpartyAddresses',
      requestMethod: 'post',
      additionalOpts: opts,
    });
  }

  async getCounterpartyOptions(opts: ReferenceParam) {
    return await this.config.generateRequest<CounterpartyParamsResponse, ReferenceParam>({
      model: 'Counterparty',
      apiMethod: 'getCounterpartyOptions',
      requestMethod: 'post',
      additionalOpts: opts,
    });
  }

  async getCounterpartyContactPerson(opts: ContactPersonsProperties) {
    return await this.config.generateRequest<ContactPersonsResponse, ContactPersonsProperties>({
      model: 'Counterparty',
      apiMethod: 'getCounterpartyContactPerson',
      requestMethod: 'post',
      additionalOpts: opts,
    });
  }

  async getCounterparties(opts: CounterpartiesListProperties) {
    return await this.config.generateRequest<
      CounterpartiesListResponse,
      CounterpartiesListProperties
    >({
      model: 'Counterparty',
      apiMethod: 'getCounterparties',
      requestMethod: 'post',
      additionalOpts: opts,
    });
  }

  async updateContactPerson(opts: EditContactPersonProperties) {
    return await this.config.generateRequest<
      EditContactPersonResponse,
      EditContactPersonProperties
    >({
      model: 'ContactPerson',
      apiMethod: 'update',
      requestMethod: 'post',
      additionalOpts: opts,
    });
  }

  async updateCounterparty(opts: EditCounterpartyProperties) {
    return await this.config.generateRequest<EditCounterpartyResponse, EditCounterpartyProperties>({
      model: 'Counterparty',
      apiMethod: 'update',
      requestMethod: 'post',
      additionalOpts: opts,
    });
  }

  async createContactPerson(opts: CreateContactPersonProperties) {
    return await this.config.generateRequest<
      CreateContactPersonResponse,
      CreateContactPersonProperties
    >({
      model: 'ContactPerson',
      apiMethod: 'save',
      requestMethod: 'post',
      additionalOpts: opts,
    });
  }

  async createCounterparty(opts: CreateCounterpartyProperties) {
    return await this.config.generateRequest<
      CreateCounterpartyResponse,
      CreateCounterpartyProperties
    >({
      model: 'Counterparty',
      apiMethod: 'save',
      requestMethod: 'post',
      additionalOpts: opts,
    });
  }

  async createLegalCounterparty(opts: CreateLegalCounterpartyProperties) {
    return await this.config.generateRequest<
      CreateLegalCounterpartyResponse,
      CreateLegalCounterpartyProperties
    >({
      model: 'Counterparty',
      apiMethod: 'save',
      requestMethod: 'post',
      additionalOpts: opts,
    });
  }

  async createThirdPersonCounterparty(opts: CreateThirdPersonCounterpartyProperties) {
    return await this.config.generateRequest<
      CreateThirdPersonCounterpartyResponse,
      CreateThirdPersonCounterpartyProperties
    >({
      model: 'Counterparty',
      apiMethod: 'save',
      requestMethod: 'post',
      additionalOpts: opts,
    });
  }

  async deleteContactPerson(opts: ReferenceParam) {
    return await this.config.generateRequest<ReferenceParam, ReferenceParam>({
      model: 'ContactPerson',
      apiMethod: 'delete',
      requestMethod: 'post',
      additionalOpts: opts,
    });
  }

  async deleteCounterparty(opts: ReferenceParam) {
    return await this.config.generateRequest<ReferenceParam, ReferenceParam>({
      model: 'Counterparty',
      apiMethod: 'delete',
      requestMethod: 'post',
      additionalOpts: opts,
    });
  }
}
