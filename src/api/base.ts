import { FormatResponse, InitOptions } from '../types';
import { ApiMiddleware } from '../middleware';
import dotenv from 'dotenv';

dotenv.config({ path: './.env.development' });

export abstract class BaseApi {
  protected apiUrl?: string;

  private readonly formatResponse: FormatResponse = 'json';

  protected config: ApiMiddleware = new ApiMiddleware(
    this.formatResponse,
    this.apiUrl ?? 'https://api.novaposhta.ua/v2.0/',
  );

  protected apiKey?: string;

  constructor(options: InitOptions) {
    this.apiKey = options.apiKey;
    this.apiUrl = options.apiUrl;

    this.formatResponse = options.formatResponse ?? 'json';
  }
}
