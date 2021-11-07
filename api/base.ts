import { FormatResponse, InitOptions } from '../types';
import { ApiMiddleware } from '../middleware';

export abstract class BaseApi {
  protected readonly apiUrl: string = 'https://api.novaposhta.ua/v2.0/';

  protected readonly formatResponse: FormatResponse = 'json';

  protected readonly apiKey?: string;

  protected config: ApiMiddleware;

  constructor(options: InitOptions) {
    this.apiKey = options.apiKey;
    if (options.apiUrl) this.apiUrl = options.apiUrl;

    this.formatResponse = options.formatResponse ?? 'json';

    this.config = new ApiMiddleware(this.formatResponse, this.apiUrl, this.apiKey ?? '');
  }
}
