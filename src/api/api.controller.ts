import {
  ApiCitiesProperties,
  ApiSearchCityProperties,
  ApiSearchStreetProperties,
  ApiWarehouseProperties,
} from '../types/address';
import { ApiAddress } from './address.service';
import { ApiConfigure } from '../middleware';
import dotenv from 'dotenv';
import { ApiTrackingHistoryProperties, ApiTrackingInfoProperties } from '../types/waybill';
import { ApiWayBill } from './waybill.service';

dotenv.config({ path: './.env.development' });

export class ApiNovaPoshta {
  constructor(private apiKey?: string, private format: 'json' | 'xml' = 'json') {}

  private hostUrl = `${process.env.API_HOST_URL}`;

  private config: ApiConfigure = new ApiConfigure(this.format);

  private addressApi: ApiAddress = new ApiAddress(this.hostUrl, this.config);

  private waybillApi: ApiWayBill = new ApiWayBill(this.hostUrl, this.config);

  async getCities(opts: ApiCitiesProperties) {
    return await this.addressApi.getCities(opts);
  }

  async getAreas() {
    return await this.addressApi.getAreas();
  }

  async searchCity(opts: ApiSearchCityProperties) {
    return await this.addressApi.searchCity(opts);
  }

  async searchStreet(opts: ApiSearchStreetProperties) {
    return await this.addressApi.searchStreet(opts);
  }

  async getWarehouses(opts: ApiWarehouseProperties) {
    return await this.addressApi.getWarehouses(opts);
  }

  async getTrackingInfo(opts: ApiTrackingInfoProperties) {
    return await this.waybillApi.getTrackingInfo(opts);
  }

  async getTrackingHistoryInfo(opts: ApiTrackingHistoryProperties) {
    return await this.waybillApi.getTrackingHistory(opts);
  }
}
