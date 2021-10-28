import {ApiRequestBody} from "./index";

export enum CityTypeRu {
  Village = 'село',
  City = 'город',
  Settlement = 'пгт'
}

export enum CityType {
  Village = 'село',
  City = 'місто',
  Settlement = 'пгт'
}

export enum CityTypeCode {
  City = 'м.',
  Village = 'с.'
}

export enum StreetType {
  Street= 'вул.',
  Boulevard = 'бул.',
  Avenue = 'просп.'
}

export interface ApiAreasResponse {
  Ref: string;
  AreasCenter: string;
  DescriptionRu: string;
  Description: string;
}

export interface ApiCitiesProperties {
  Ref?: string;
  RegionRef?: string;
  FindByString?: string;
  Warehouse?: string;
  Page?: string;
}

export interface ApiCitiesResponse {
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
  StreetName: string;
  SettlementRef: string;
  Limit: number;
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
