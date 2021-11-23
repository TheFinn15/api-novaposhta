import { FormatResponse, InitOptions } from '../types';
import { ApiMiddleware } from '../middleware';
export declare abstract class BaseApi {
    protected readonly apiUrl: string;
    protected readonly formatResponse: FormatResponse;
    protected readonly apiKey?: string;
    protected config: ApiMiddleware;
    constructor(options: InitOptions);
}
