export declare type RegistryApiMethodType = 'insertDocuments' | 'getScanSheet' | 'getScanSheetList' | 'deleteScanSheet' | 'removeDocuments';
export declare type RegistryModelType = 'ScanSheet';
export interface CreateDocumentRegistryProperties {
    DocumentRefs: string[];
    Ref?: string;
    Date?: string;
}
export interface CreateDocumentRegistryResponse {
    Ref: string;
    Number: string;
    Date: string;
}
export interface InfoRegistryProperties {
    Ref: string;
    CounterpartyRef?: string;
}
export interface InfoRegistryResponse {
    Ref: string;
    Number: string;
    DateTime: string;
    Count: string;
    CitySenderRef: string;
    CitySender: string;
    SenderAddressRef: string;
    SenderAddress: string;
    SenderRef: string;
    Sender: string;
}
export interface ListRegistryResponse {
    Ref: string;
    Number: string;
    DateTime: string;
    Printed: string;
}
export interface DeleteRegistryProperties {
    ScanSheetRefs: string[];
}
export interface DeleteRegistryResponse {
    Ref: string;
    Number: string;
}
export interface DeleteRegistryDocumentProperties {
    DocumentRef: string[];
    Ref?: string;
}
export interface DeleteRegistryDocumentResponse {
    Ref: string;
    Number: string;
}
