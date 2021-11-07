import { CounterpartyType, PayerType } from './document.enum';
import { ApiResponseBody } from './index';

export type CounterpartyApiMethodType =
  | 'getCounterpartyAddresses'
  | 'getCounterpartyOptions'
  | 'getCounterpartyContactPerson'
  | 'getCounterparties'
  | 'update'
  | 'save'
  | 'delete';

export type CounterpartyModelType = 'Counterparty' | 'ContactPerson';

export interface CounterpartyAddressProperties {
  Ref: string;
  CounterpartyProperty: string;
}

export interface ReferenceParam {
  Ref: string;
}

export interface CounterpartyParamsResponse {
  FillingWarranty: boolean;
  AddressDocumentDelivery: boolean;
  CanPayTheThirdPerson: boolean;
  CanAfterpaymentOnGoodsCost: boolean;
  CanNonCashPayment: boolean;
  CanCreditDocuments: boolean;
  CanEWTransporter: boolean;
  CanSignedDocuments: boolean;
  HideDeliveryCost: boolean;
  BlockInternationalSenderLKK: boolean;
  PickupService: boolean;
  CanSameDayDelivery: boolean;
  CanSameDayDeliveryStandart: boolean;
  CanForwardingService: boolean;
  ShowDeliveryByHand: boolean;
  DeliveryByHand: boolean;
  PartialReturn: boolean;
  LoyaltyProgram: boolean;
  DescentFromFloor: boolean;
  BackDeliveryValuablePapers: boolean;
  BackwardDeliverySubtypesDocuments: boolean;
  AfterpaymentType: string;
  CreditDocuments: boolean;
  SignedDocuments: boolean;
  Services: boolean;
  Debtor: boolean;
  HaveMoneyWallets: boolean;
}

export interface ContactPersonsProperties {
  Ref?: string;
  Page?: string;
}

export interface ContactPersonsResponse {
  Description: string;
  Ref: string;
  Phones: string;
  Email: string;
  LastName: string;
  FirstName: string;
  MiddleName: string;
}

export interface CounterpartiesListProperties {
  CounterpartyProperty?: PayerType;
  Page?: string;
}

export interface CounterpartiesListResponse {
  Description: string;
  Ref: string;
  City: string;
  Counterparty: string;
  FirstName: string;
  LastName: string;
  MiddleName: string;
  OwnershipFormRef: string;
  OwnershipFormDescription: string;
  EDRPOU: string;
  CounterpartyType: CounterpartyType;
}

export interface EditContactPersonProperties {
  CounterpartyRef: string;
  Ref: string;
  FirstName: string;
  LastName: string;
  MiddleName: string;
  Phone: string;
}

export interface EditContactPersonResponse {
  Description: string;
  Ref: string;
  City: string;
  Counterparty: string;
  FirstName: string;
  LastName: string;
  MiddleName: string;
  Phones: string;
  Email: string;
}

export interface EditCounterpartyProperties {
  Ref: string;
  CityRef: string;
  FirstName: string;
  LastName: string;
  MiddleName?: string;
  Phone: string;
  CounterpartyType: CounterpartyType;
  CounterpartyProperty: string;
}

export interface EditCounterpartyResponse {
  Ref: string;
  Description: string;
  FirstName: string;
  MiddleName: string;
  LastName: string;
  Counterparty: string;
  OwnershipForm: string;
  OwnershipFormDescription: string;
  EDRPOU: string;
  CounterpartyType: string;
}

export interface CreateContactPersonProperties {
  CounterpartyRef: string;
  FirstName: string;
  LastName: string;
  MiddleName: string;
  Phone: string;
}

export interface CreateContactPersonResponse {
  Description: string;
  Ref: string;
  FirstName: string;
  LastName: string;
  MiddleName: string;
  Phones: string;
  Email: string;
}

export interface CreateCounterpartyProperties {
  FirstName: string;
  LastName: string;
  MiddleName: string;
  Phone: string;
  CounterpartyType: CounterpartyType;
  CounterpartyProperty: string;
}

export interface CreateCounterpartyResponse {
  Ref: string;
  Description: string;
  FirstName: string;
  MiddleName: string;
  LastName: string;
  Counterparty: string;
  OwnershipForm: string;
  OwnershipFormDescription: string;
  EDRPOU: string;
  CounterpartyType: CounterpartyType;
  ContactPerson: ApiResponseBody<ContactPerson>;
}

export interface ContactPerson {
  Description: string;
  Ref: string;
  LastName: string;
  FirstName: string;
  MiddleName: string;
}

export interface CreateLegalCounterpartyProperties {
  CounterpartyProperty?: string;
  CounterpartyType: CounterpartyType;
  EDRPOU: string;
}

export interface CreateLegalCounterpartyResponse {
  Ref: string;
  Description: string;
  FirstName: string;
  OwnershipForm: string;
  OwnershipFormDescription: string;
  EDRPOU: string;
  CounterpartyType: CounterpartyType;
}

export interface CreateThirdPersonCounterpartyProperties {
  CityRef: string;
  FirstName: string;
  MiddleName?: string;
  LastName?: string;
  Phone?: string;
  Email?: string;
  CounterpartyType: CounterpartyType;
  CounterpartyProperty: string;
}

export interface CreateThirdPersonCounterpartyResponse {
  Ref: string;
  Description: string;
  OwnershipForm: string;
  OwnershipFormDescription: string;
  EDRPOU: string;
  CounterpartyType: CounterpartyType;
}
