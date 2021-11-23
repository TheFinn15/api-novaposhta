import { ApiResponseBody, InformerResponse } from '../types';
export declare class ApiInformer {
    private readonly rawResponse;
    constructor(rawResponse: ApiResponseBody<any>);
    getApiResponse<T>(): InformerResponse<T>;
    private get haveWarns();
    private get mappedResp();
}
