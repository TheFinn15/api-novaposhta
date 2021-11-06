import { Method } from 'axios';
import { AddressApiMethodType, AddressModelType } from './address';
import { DocumentApiMethodType, DocumentModelType } from './document';

export type ModelType = AddressModelType | DocumentModelType;

export type ApiMethodType = AddressApiMethodType | DocumentApiMethodType;

export type ApiInformingType = 'error' | 'warning' | 'info' | null;

export interface ApiInformingOptions {
  descriptions: string[];
  codes: string[];
}

export interface ApiRequestBody<T> {
  apiKey: string;
  modelName: ModelType;
  system?: string;
  calledMethod: ApiMethodType;
  language?: 'ru' | 'ua';
  methodProperties: T;
}

export interface ApiResponseBody<T> {
  success: boolean;
  data: T[];
  errors: string[];
  warnings: string[];
  info: { totalCount: number } | any[];
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

export type FormatResponse = 'json' | 'xml';

export interface InitOptions {
  apiKey: string;
  apiUrl?: string;
  formatResponse?: FormatResponse;
}

export interface InformerResponse<T> {
  data: T[];
  warns: string[];
}

export interface InformerCheckWarnings {
  type: ApiInformingType;
  opts: ApiInformingOptions | null;
}
