export type AddressModelType = 'Address' | 'AddressGeneral';

export type AddressApiMethodType =
  | 'getStreet'
  | 'getWarehouses'
  | 'getSettlements'
  | 'getAreas'
  | 'searchSettlements'
  | 'searchSettlementStreets'
  | 'delete'
  | 'save'
  | 'update'
  | 'getCities';

export enum CityTypeRu {
  Village = 'село',
  City = 'город',
  Settlement = 'пгт',
}

export enum CityType {
  Village = 'село',
  City = 'місто',
  Settlement = 'пгт',
}

export enum CityTypeCode {
  City = 'м.',
  Village = 'с.',
}

export enum StreetType {
  Street = 'вул.',
  Boulevard = 'бул.',
  Avenue = 'просп.',
  HighWay = 'шосе',
}

export interface ApiAreasResponse {
  Ref: string;
  AreasCenter: string;
  DescriptionRu: string;
  Description: string;
}

export interface ApiSettlementsProperties {
  Ref?: string;
  RegionRef?: string;
  FindByString?: string;
  Warehouse?: string;
  Page?: string;
}

export interface ApiSettlementsResponse {
  Ref: string;
  SettlementType: string;
  Description: string;
  DescriptionRu: string;
  Area: string;
  AreaDescription: string;
  AreaDescriptionRu: string;
  Latitude: string;
  Longitude: string;
  SettlementTypeDescription: CityType;
  SettlementTypeDescriptionRu: CityTypeRu;
  Region: string;
  RegionsDescription: string;
  RegionsDescriptionRu: string;
  Index1: string;
  Index2: string;
  Delivery1: string;
  Delivery2: string;
  Delivery3: string;
  Delivery4: string;
  Delivery5: string;
  Delivery6: string;
  Delivery7: string;
  IndexCOATSU1: string;
  Warehouse: string;
}

export interface ApiCitiesProperties {
  Ref?: string;
  Page?: number;
  FindByString?: string;
}

export interface ApiCitiesResponse {
  Description: string;
  DescriptionRu: string;
  Ref: string;
  Delivery1: string;
  Delivery2: string;
  Delivery3: string;
  Delivery4: string;
  Delivery5: string;
  Delivery6: string;
  Delivery7: string;
  Area: string;
  SettlementType: string;
  IsBranch: string;
  PreventEntryNewStreetsUser: string | null;
  Conglomerates: string | null;
  CityID: string;
  SettlementTypeDescriptionRu: CityTypeRu;
  SettlementTypeDescription: CityType;
}

export interface ApiSearchCityProperties {
  CityName: string;
  Limit: number;
}

export interface ApiSearchCityAddress {
  Warehouses: number;
  MainDescription: string;
  Area: string;
  Region: string;
  SettlementTypeCode: CityTypeCode;
  Ref: string;
  DeliveryCity: string;
  AddressDeliveryAllowed: boolean;
  StreetsAvailability: boolean;
  Present: string;
}

export interface ApiSearchResponse<T> {
  TotalCount: number;
  Addresses: T[];
}

export interface ApiSearchStreetProperties {
  StreetName?: string;
  SettlementRef?: string;
  Limit?: number;
}

export interface ApiSearchStreetResponse {
  SettlementRef: string;
  SettlementStreetRef: string;
  SettlementStreetDescription: string;
  SettlementStreetDescriptionRu: string;
  Present: string;
  StreetsType: string;
  StreetsTypeDescription: StreetType;
  Location: number[];
}

export interface ApiWarehouseLimitsWeight {
  Width: number;
  Height: number;
  Length: number;
}

export interface ApiWarehouseWeek {
  Monday: string;
  Tuesday: string;
  Wednesday: string;
  Thursday: string;
  Friday: string;
  Saturday: string;
  Sunday: string;
}

export interface ApiWarehouseProperties {
  CityName?: string;
  CityRef?: string;
  Page?: number;
  Limit?: number;
  Language?: string;
  FindByString?: string;
}

export interface ApiWarehouseResponse {
  SiteKey: string;
  Description: string;
  DescriptionRu: string;
  ShortAddress: string;
  ShortAddressRu: string;
  Phone: string;
  TypeOfWarehouse: string;
  Ref: string;
  Number: string;
  CityRef: string;
  CityDescription: string;
  CityDescriptionRu: string;
  SettlementRef: string;
  SettlementDescription: string;
  SettlementAreaDescription: string;
  SettlementRegionsDescription: string;
  SettlementTypeDescription: string;
  SettlementTypeDescriptionRu: string;
  Longitude: string;
  Latitude: string;
  PostFinance: string;
  BicycleParking: string;
  PaymentAccess: string;
  POSTerminal: string;
  InternationalShipping: string;
  SelfServiceWorkplacesCount: string;
  TotalMaxWeightAllowed: string;
  PlaceMaxWeightAllowed: string;
  SendingLimitationsOnDimensions: ApiWarehouseLimitsWeight;
  ReceivingLimitationsOnDimensions: ApiWarehouseLimitsWeight;
  Reception: ApiWarehouseWeek;
  Delivery: ApiWarehouseWeek;
  Schedule: ApiWarehouseWeek;
  DistrictCode: string;
  WarehouseStatus: string;
  WarehouseStatusDate: string;
  CategoryOfWarehouse: string;
  Direct: string;
  RegionCity: string;
  WarehouseForAgent: string;
  MaxDeclaredCost: string;
}

export interface ApiWarehouseStreetProperties {
  CityRef: string;
  FindByString?: string;
  Page?: number;
}

export interface ApiWarehouseStreetResponse {
  Ref: string;
  Description: string;
  StreetsTypeRef: string;
  StreetsType: StreetType;
}

export interface ApiDeleteAddress {
  Ref: string;
}

export interface ApiAddressProperties {
  CounterpartyRef: string;
  StreetRef: string;
  BuildingNumber: string;
  Flat: string;
  Note?: string;
}

export interface ApiAddressResponse {
  Ref: string;
  Description: string;
}
