
export interface ApiRequest<T> {
  apiKey: string;
  modelName: string;
  calledMethod: string;
  methodProperties: T;
}

export interface ApiResponse<T> {
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
