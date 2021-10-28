import {ApiRequest} from "./index";

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

export interface ApiAreas {
  Ref: string;
  AreasCenter: string;
  DescriptionRu: string;
  Description: String;
}

export interface ApiCitiesProperties {
  Ref?: string;
  RegionRef?: string;
  FindByString?: string;
  Warehouse?: string;
  Page?: string;
}

export interface ApiCitiesRequest extends ApiRequest<ApiCitiesProperties>{}

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
