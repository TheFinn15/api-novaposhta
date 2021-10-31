import { Method } from 'axios';
import { AddressApiMethodType, AddressModelType } from './address';
import { WayBillApiMethodType, WaybillModelType } from './waybill';

export type ModelType = AddressModelType | WaybillModelType;

export type ApiMethodType = AddressApiMethodType | WayBillApiMethodType;

export interface ApiRequestBody<T> {
  apiKey: string;
  modelName: ModelType;
  system?: string;
  calledMethod: ApiMethodType;
  language?: 'ru' | 'ua';
  methodProperties: T;
}

export interface ApiResponseBody<T> {
  success: string;
  data: T[];
  errors: string[];
  warnings: string[];
  info: string[];
  messageCodes: string[];
  errorCodes: string[];
  warningCodes: string[];
  infoCodes: string[];
}

export interface ApiRequestOptions<T> {
  model: ModelType;
  apiMethod: ApiMethodType;
  requestMethod: Method;
  additionalOpts?: T;
  nameSystem?: string;
}
