import { ApiAddressProperties, ApiAddressResponse, ApiAreasResponse, ApiCitiesProperties, ApiCitiesResponse, ApiDeleteAddress, ApiSearchCityAddress, ApiSearchCityProperties, ApiSearchResponse, ApiSearchStreetProperties, ApiSearchStreetResponse, ApiSettlementsProperties, ApiSettlementsResponse, ApiWarehouseProperties, ApiWarehouseResponse, ApiWarehouseStreetProperties, ApiWarehouseStreetResponse } from '../../types/address';
import { BaseApi } from '../base';
export default class ApiAddress extends BaseApi {
    getSettlements(properties: ApiSettlementsProperties): Promise<import("../../types").InformerResponse<ApiSettlementsResponse>>;
    getAreas(): Promise<import("../../types").InformerResponse<ApiAreasResponse>>;
    getCities(properties: ApiCitiesProperties): Promise<import("../../types").InformerResponse<ApiCitiesResponse>>;
    searchCity(properties: ApiSearchCityProperties): Promise<import("../../types").InformerResponse<ApiSearchResponse<ApiSearchCityAddress>>>;
    searchStreet(properties: ApiSearchStreetProperties): Promise<import("../../types").InformerResponse<ApiSearchResponse<ApiSearchStreetResponse>>>;
    getWarehouses(properties: ApiWarehouseProperties): Promise<import("../../types").InformerResponse<ApiWarehouseResponse>>;
    getWarehouseStreet(properties: ApiWarehouseStreetProperties): Promise<import("../../types").InformerResponse<ApiWarehouseStreetResponse>>;
    deleteContractorAddress(properties: ApiDeleteAddress): Promise<import("../../types").InformerResponse<ApiDeleteAddress>>;
    createContractorAddress(properties: ApiAddressProperties): Promise<import("../../types").InformerResponse<ApiAddressResponse>>;
    updateContractorAddress(properties: ApiAddressProperties): Promise<import("../../types").InformerResponse<ApiAddressResponse>>;
}
