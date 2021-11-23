import {
  ApiAddressProperties,
  ApiAddressResponse,
  ApiAreasResponse,
  ApiCitiesProperties,
  ApiCitiesResponse,
  ApiDeleteAddress,
  ApiSearchCityAddress,
  ApiSearchCityProperties,
  ApiSearchResponse,
  ApiSearchStreetProperties,
  ApiSearchStreetResponse,
  ApiSettlementsProperties,
  ApiSettlementsResponse,
  ApiWarehouseProperties,
  ApiWarehouseResponse,
  ApiWarehouseStreetProperties,
  ApiWarehouseStreetResponse,
} from '../../types/address';
import { BaseApi } from '../base';

/*
 * API class for help working with addresses.
 */
export default class ApiAddress extends BaseApi {
  async getSettlements(properties: ApiSettlementsProperties) {
    return await this.config.generateRequest<ApiSettlementsResponse, ApiSettlementsProperties>({
      model: 'AddressGeneral',
      apiMethod: 'getSettlements',
      requestMethod: 'post',
      additionalOpts: properties,
    });
  }

  async getAreas() {
    return await this.config.generateRequest<ApiAreasResponse, undefined>({
      model: 'Address',
      apiMethod: 'getAreas',
      requestMethod: 'post',
    });
  }

  async getCities(properties: ApiCitiesProperties) {
    return await this.config.generateRequest<ApiCitiesResponse, ApiCitiesProperties>({
      model: 'Address',
      apiMethod: 'getCities',
      requestMethod: 'post',
      additionalOpts: properties,
    });
  }

  async searchCity(properties: ApiSearchCityProperties) {
    return await this.config.generateRequest<
      ApiSearchResponse<ApiSearchCityAddress>,
      ApiSearchCityProperties
    >({
      model: 'Address',
      apiMethod: 'searchSettlements',
      requestMethod: 'post',
      additionalOpts: properties,
    });
  }

  async searchStreet(properties: ApiSearchStreetProperties) {
    return await this.config.generateRequest<
      ApiSearchResponse<ApiSearchStreetResponse>,
      ApiSearchStreetProperties
    >({
      model: 'Address',
      apiMethod: 'searchSettlementStreets',
      requestMethod: 'post',
      additionalOpts: properties,
    });
  }

  async getWarehouses(properties: ApiWarehouseProperties) {
    return await this.config.generateRequest<ApiWarehouseResponse, ApiWarehouseProperties>({
      model: 'AddressGeneral',
      apiMethod: 'getWarehouses',
      requestMethod: 'post',
      additionalOpts: properties,
    });
  }

  async getWarehouseStreet(properties: ApiWarehouseStreetProperties) {
    return await this.config.generateRequest<ApiWarehouseStreetResponse, ApiWarehouseProperties>({
      model: 'Address',
      apiMethod: 'getStreet',
      requestMethod: 'post',
      additionalOpts: properties,
    });
  }

  async deleteContractorAddress(properties: ApiDeleteAddress) {
    return await this.config.generateRequest<ApiDeleteAddress, ApiDeleteAddress>({
      model: 'Address',
      apiMethod: 'delete',
      requestMethod: 'post',
      additionalOpts: properties,
    });
  }

  async createContractorAddress(properties: ApiAddressProperties) {
    return await this.config.generateRequest<ApiAddressResponse, ApiAddressProperties>({
      model: 'Address',
      apiMethod: 'save',
      requestMethod: 'post',
      additionalOpts: properties,
    });
  }

  async updateContractorAddress(properties: ApiAddressProperties) {
    return await this.config.generateRequest<ApiAddressResponse, ApiAddressProperties>({
      model: 'Address',
      apiMethod: 'update',
      requestMethod: 'post',
      additionalOpts: properties,
    });
  }
}
