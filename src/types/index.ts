import {Method} from "axios";

export interface ApiRequestBody<T> {
  apiKey: string;
  modelName: string;
  system?: string;
  calledMethod: string;
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
  model: string;
  apiMethod: string;
  requestMethod: Method;
  additionalOpts?: T;
  nameSystem?: string;
}
