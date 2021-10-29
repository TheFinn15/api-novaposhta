import {
  ApiAreasResponse,
  ApiCitiesProperties,
  ApiCitiesResponse,
  ApiSearchCityAddress,
  ApiSearchCityProperties,
  ApiSearchResponse,
  ApiSearchStreetProperties,
  ApiSearchStreetResponse,
  ApiWarehouseProperties,
  ApiWarehouseResponse,
  ApiWarehouseStreetProperties,
  ApiWarehouseStreetResponse
} from "../types/address";
import {ApiConfigure} from "../middleware";

export class ApiAddress {
  constructor(private apiUrl: string, private config: ApiConfigure) {}

  async getCities(properties: ApiCitiesProperties) {
    return await this.config.generateRequest<ApiCitiesResponse, ApiCitiesProperties>({
      model: 'AddressGeneral',
      apiMethod: 'getSettlements',
      requestMethod: 'post',
      additionalOpts: properties
    });
  }

  async getAreas() {
    return await this.config.generateRequest<ApiAreasResponse, undefined>({
      model: 'Address',
      apiMethod: 'getAreas',
      requestMethod: 'post',
    });
  }

  async searchCity(properties: ApiSearchCityProperties) {
    return await this.config.generateRequest<ApiSearchResponse<ApiSearchCityAddress>, ApiSearchCityProperties>({
      model: 'Address',
      apiMethod: 'searchSettlements',
      requestMethod: 'post',
      additionalOpts: properties,
    });
  }

  async searchStreet(properties: ApiSearchStreetProperties) {
    return await this.config.generateRequest<ApiSearchResponse<ApiSearchStreetResponse>, ApiSearchStreetProperties>({
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
}
