import { BaseApi } from '../base';
import { CreateDocumentRegistryProperties, CreateDocumentRegistryResponse, DeleteRegistryProperties, DeleteRegistryResponse, InfoRegistryProperties, InfoRegistryResponse, ListRegistryResponse } from '../../types/registry';
import { DeleteDocumentProperties, DeleteDocumentResponse } from '../../types/document';
export default class ApiRegistry extends BaseApi {
    addDocumentToRegistry(opts: CreateDocumentRegistryProperties): Promise<import("../../types").InformerResponse<CreateDocumentRegistryResponse>>;
    getRegistryInfo(opts: InfoRegistryProperties): Promise<import("../../types").InformerResponse<InfoRegistryResponse>>;
    getListRegistryInfo(): Promise<import("../../types").InformerResponse<ListRegistryResponse>>;
    deleteRegistry(opts: DeleteRegistryProperties): Promise<import("../../types").InformerResponse<DeleteRegistryResponse>>;
    deleteDocumentFromRegistry(opts: DeleteDocumentProperties): Promise<import("../../types").InformerResponse<DeleteDocumentResponse>>;
}
