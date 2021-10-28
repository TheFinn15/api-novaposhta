import {
  ApiAreasResponse,
  ApiCitiesProperties,
  ApiCitiesResponse,
  ApiSearchCityAddress,
  ApiSearchCityProperties,
  ApiSearchResponse,
  ApiSearchStreetProperties,
  ApiSearchStreetResponse
} from "../types/address";
import {ApiConfigure} from "../middleware";

export class ApiAddress {
  constructor(private apiUrl: string, private config: ApiConfigure) {}

  async getCities(properties: ApiCitiesProperties) {
    return await this.config.generateRequest<ApiCitiesResponse, ApiCitiesProperties>({
      model: 'AddressGeneral',
      apiMethod: 'getSettlements',
      requestMethod: 'post',
      useModelName: true,
      additionalOpts: properties
    });
  }

  async getAreas() {
    return await this.config.generateRequest<ApiAreasResponse, undefined>({
      model: 'Address',
      apiMethod: 'getAreas',
      requestMethod: 'post',
      useModelName: true
    });
  }

  async searchCity(properties: ApiSearchCityProperties) {
    return await this.config.generateRequest<ApiSearchResponse<ApiSearchCityAddress>, ApiSearchCityProperties>({
      model: 'Address',
      apiMethod: 'searchSettlements',
      requestMethod: 'post',
      useModelName: false,
      additionalOpts: properties,
    });
  }

  async searchStreet(properties: ApiSearchStreetProperties) {
    return await this.config.generateRequest<ApiSearchResponse<ApiSearchStreetResponse>, ApiSearchStreetProperties>({
      model: 'Address',
      apiMethod: 'searchSettlementStreets',
      requestMethod: 'post',
      useModelName: false,
      additionalOpts: properties,
    });
  }
}
