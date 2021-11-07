import {
  ApiInformingOptions,
  ApiInformingType,
  ApiResponseBody,
  InformerCheckWarnings,
  InformerResponse,
} from '../types';

export class ApiInformer {
  private readonly rawResponse: ApiResponseBody<any>;

  constructor(rawResponse: ApiResponseBody<any>) {
    this.rawResponse = rawResponse;
  }

  getApiResponse<T>(): InformerResponse<T> {
    const res: InformerResponse<T> = {
      data: [],
      logs: [],
    };
    if (this.rawResponse.data.length) res.data.push(...this.rawResponse.data);

    if (this.haveWarns.opts)
      for (let i = 0; i < this.haveWarns.opts.codes.length; i++) {
        const code = this.haveWarns.opts.codes[i];
        const description = this.haveWarns.opts.descriptions[i];
        res.logs.push(
          `${this.haveWarns.type?.toUpperCase()}: Gotten message - ${description} | CODE: ${code}`,
        );
      }
    return res;
  }

  private get haveWarns(): InformerCheckWarnings {
    return {
      type: this.mappedResp?.[0] ?? null,
      opts: this.mappedResp?.[1] ?? null,
    };
  }

  private get mappedResp(): [ApiInformingType, ApiInformingOptions] | null {
    const resp = this.rawResponse;
    if (resp.errors) return ['error', { codes: resp.errorCodes, descriptions: resp.errors }];
    if (resp.infoCodes)
      return ['info', { codes: resp.infoCodes, descriptions: resp.info as any[] }];
    if (resp.warnings)
      return ['warning', { codes: resp.warningCodes, descriptions: resp.warnings }];
    return null;
  }
}
