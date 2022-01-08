export type CommonApiMethodType =
  | 'getTimeIntervals'
  | 'getCargoTypes'
  | 'getBackwardDeliveryCargoTypes'
  | 'getPalletsList'
  | 'getTypesOfPayers'
  | 'getTypesOfPayersForRedelivery'
  | 'getPackList'
  | 'getTiresWheelsList'
  | 'getCargoDescriptionList'
  | 'getMessageCodeText'
  | 'getServiceTypes'
  | 'getTypesOfCounterparties'
  | 'getPaymentForms'
  | 'getOwnershipFormsList';

export type CommonModelType = 'Common' | 'CommonGeneral';

export interface TimeIntervalsProperties {
  RecipientCityRef: string;
  DateTime?: string;
}

export interface TimeIntervalsResponse {
  Number: string;
  Start: string;
  End: string;
  onNextDay: number;
}

export interface DescriptionResponse {
  Description: string;
  Ref: string;
}

export interface PalletsListResponse {
  Ref: string;
  Description: string;
  DescriptionRu: string;
  Weight: string;
}

export interface PackListProperties {
  Length?: string;
  Width?: string;
  Height?: string;
  VolumetricWeight?: string;
  TypeOfPacking?: string;
}

export interface PackListResponse {
  Description: string;
  DescriptionRu: string;
  Length: string;
  Width: string;
  Height: string;
  VolumetricWeight: string;
  TypeOfPacking: string;
}

export interface TiresWheelsListResponse {
  Ref: string;
  Description: string;
  DescriptionRu: string;
  Weight: string;
  DescriptionType: 'Tires' | 'Wheels';
}

export interface CargoDescriptionsProperties {
  FindByString?: string;
  Page: string;
}

export interface CargoDescriptionsResponse {
  Ref: string;
  Description: string;
  DescriptionRu: string;
}

export interface LogTypeResponse {
  MessageCode: string;
  MessageText: string;
  MessageDescriptionRU: string;
  MessageDescriptionUA: string;
}
