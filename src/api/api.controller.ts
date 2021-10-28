import {ApiCitiesProperties, ApiSearchCityProperties, ApiSearchStreetProperties} from "../types/address";
import {ApiAddress} from "./address.service";
import {ApiConfigure} from "../middleware";
import dotenv from 'dotenv';

dotenv.config({path: './.env.development'});

export class ApiNovaPoshta {
  constructor(private apiKey?: string, private format: 'json' | 'xml' = 'json') {}

  private hostUrl = `${process.env.API_HOST_URL ?? this.apiKey}`;

  private config: ApiConfigure = new ApiConfigure(this.format);

  private addressApi: ApiAddress = new ApiAddress(this.hostUrl, this.config);

  async getCities(opts: ApiCitiesProperties) {
    return (await this.addressApi.getCities(opts));
  }

  async getAreas() {
    return (await this.addressApi.getAreas());
  }

  async searchCity(opts: ApiSearchCityProperties) {
    return (await this.addressApi.searchCity(opts));
  }

  async searchStreet(opts: ApiSearchStreetProperties) {
    return (await this.addressApi.searchStreet(opts));
  }
}
