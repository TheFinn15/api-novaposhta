import { BaseApi } from '../base';
import {
  CreateDocumentRegistryProperties,
  CreateDocumentRegistryResponse,
  DeleteRegistryProperties,
  DeleteRegistryResponse,
  InfoRegistryProperties,
  InfoRegistryResponse,
  ListRegistryResponse,
} from '../types/registry';
import { DeleteDocumentProperties, DeleteDocumentResponse } from '../types/document';

/*
 * API class for help working with registry.
 */
export default class ApiRegistry extends BaseApi {
  async addDocumentToRegistry(opts: CreateDocumentRegistryProperties) {
    return await this.config.generateRequest<
      CreateDocumentRegistryResponse,
      CreateDocumentRegistryProperties
    >({
      model: 'ScanSheet',
      apiMethod: 'insertDocuments',
      requestMethod: 'post',
      additionalOpts: opts,
    });
  }

  async getRegistryInfo(opts: InfoRegistryProperties) {
    return await this.config.generateRequest<InfoRegistryResponse, InfoRegistryProperties>({
      model: 'ScanSheet',
      apiMethod: 'getScanSheet',
      requestMethod: 'post',
      additionalOpts: opts,
    });
  }

  async getListRegistryInfo() {
    return await this.config.generateRequest<ListRegistryResponse, any>({
      model: 'ScanSheet',
      apiMethod: 'getScanSheetList',
      requestMethod: 'post',
      additionalOpts: {},
    });
  }

  async deleteRegistry(opts: DeleteRegistryProperties) {
    return await this.config.generateRequest<DeleteRegistryResponse, DeleteRegistryProperties>({
      model: 'ScanSheet',
      apiMethod: 'deleteScanSheet',
      requestMethod: 'post',
      additionalOpts: opts,
    });
  }

  async deleteDocumentFromRegistry(opts: DeleteDocumentProperties) {
    return await this.config.generateRequest<DeleteDocumentResponse, DeleteDocumentProperties>({
      model: 'ScanSheet',
      apiMethod: 'removeDocuments',
      requestMethod: 'post',
      additionalOpts: opts,
    });
  }
}
