import {Method} from "axios";

export interface ApiRequestBody<T> {
  apiKey: string;
  modelName: string;
  calledMethod: string;
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
  useModelName: boolean;
  additionalOpts?: T;
}
