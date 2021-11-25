import { BaseApi } from './base';
import { Class, InitOptions } from './types';

export default class NovaPoshta extends BaseApi {
  private routes: Map<any, any> = new Map();

  get options(): InitOptions {
    return {
      apiKey: this.apiKey,
      apiUrl: this.apiUrl,
      formatResponse: this.formatResponse
    };
  }

  get<T>(cls: Class<T>): T {
    if (!this.routes.has(cls)) {
      this.routes.set(cls, new cls(this.options));
    }
    return this.routes.get(cls);
  }
}
