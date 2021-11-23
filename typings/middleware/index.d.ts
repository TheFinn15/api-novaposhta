import { ApiRequestOptions, FormatResponse } from '../types';
export declare class ApiMiddleware {
    private formatData;
    private apiUrl;
    private apiKey;
    constructor(formatData: FormatResponse, apiUrl: string, apiKey: string);
    private sendRequest;
    private getRequestData;
    generateRequest<T, D>(opts: ApiRequestOptions<D>): Promise<import("../types").InformerResponse<T>>;
}
