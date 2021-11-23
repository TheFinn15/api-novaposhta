import { Method } from 'axios';
import { AddressApiMethodType, AddressModelType } from './address';
import { DocumentApiMethodType, DocumentModelType } from './document';
import { CommonApiMethodType, CommonModelType } from './common';
import { CounterpartyApiMethodType, CounterpartyModelType } from './counterparty';
import { RegistryApiMethodType, RegistryModelType } from './registry';
import { ServiceApiMethodType, ServiceModelType } from './service';
export declare type ModelType = AddressModelType | DocumentModelType | CommonModelType | CounterpartyModelType | RegistryModelType | ServiceModelType;
export declare type ApiMethodType = AddressApiMethodType | DocumentApiMethodType | CommonApiMethodType | CounterpartyApiMethodType | RegistryApiMethodType | ServiceApiMethodType;
export declare type ApiInformingType = 'error' | 'warning' | 'info' | null;
export declare type ReportType = 'xls' | 'csv';
export interface ApiInformingOptions {
    descriptions: string[];
    codes: string[];
}
export interface ApiRequestBody<T> {
    apiKey?: string;
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
    info: {
        totalCount: number;
    } | any[];
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
export declare type FormatResponse = 'json' | 'xml';
export interface InitOptions {
    apiKey?: string;
    apiUrl?: string;
    formatResponse?: FormatResponse;
}
export interface InformerResponse<T> {
    data: T[];
    logs: string[];
}
export interface InformerCheckWarnings {
    type: ApiInformingType;
    opts: ApiInformingOptions | null;
}
