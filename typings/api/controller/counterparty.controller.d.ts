import { BaseApi } from '../base';
import { DescriptionResponse } from '../../types/common';
import { ContactPersonsProperties, ContactPersonsResponse, CounterpartiesListProperties, CounterpartiesListResponse, CounterpartyAddressProperties, ReferenceParam, CounterpartyParamsResponse, CreateContactPersonProperties, CreateContactPersonResponse, CreateCounterpartyProperties, CreateCounterpartyResponse, CreateLegalCounterpartyProperties, CreateLegalCounterpartyResponse, CreateThirdPersonCounterpartyProperties, CreateThirdPersonCounterpartyResponse, EditContactPersonProperties, EditContactPersonResponse, EditCounterpartyProperties, EditCounterpartyResponse } from '../../types/counterparty';
export default class ApiCounterparty extends BaseApi {
    getCounterpartyAddresses(opts: CounterpartyAddressProperties): Promise<import("../../types").InformerResponse<DescriptionResponse>>;
    getCounterpartyOptions(opts: ReferenceParam): Promise<import("../../types").InformerResponse<CounterpartyParamsResponse>>;
    getCounterpartyContactPerson(opts: ContactPersonsProperties): Promise<import("../../types").InformerResponse<ContactPersonsResponse>>;
    getCounterparties(opts: CounterpartiesListProperties): Promise<import("../../types").InformerResponse<CounterpartiesListResponse>>;
    updateContactPerson(opts: EditContactPersonProperties): Promise<import("../../types").InformerResponse<EditContactPersonResponse>>;
    updateCounterparty(opts: EditCounterpartyProperties): Promise<import("../../types").InformerResponse<EditCounterpartyResponse>>;
    createContactPerson(opts: CreateContactPersonProperties): Promise<import("../../types").InformerResponse<CreateContactPersonResponse>>;
    createCounterparty(opts: CreateCounterpartyProperties): Promise<import("../../types").InformerResponse<CreateCounterpartyResponse>>;
    createLegalCounterparty(opts: CreateLegalCounterpartyProperties): Promise<import("../../types").InformerResponse<CreateLegalCounterpartyResponse>>;
    createThirdPersonCounterparty(opts: CreateThirdPersonCounterpartyProperties): Promise<import("../../types").InformerResponse<CreateThirdPersonCounterpartyResponse>>;
    deleteContactPerson(opts: ReferenceParam): Promise<import("../../types").InformerResponse<ReferenceParam>>;
    deleteCounterparty(opts: ReferenceParam): Promise<import("../../types").InformerResponse<ReferenceParam>>;
}
