export {NovaPoshta} from './api';

export {ApiAddress} from './api/controller/address.controller';
export {ApiCommon} from './api/controller/common.controller';
export {ApiService} from './api/controller/service.controller';
export {ApiDocument} from './api/controller/document.controller';
export {ApiRegistry} from './api/controller/registry.controller';
export {ApiCounterparty} from './api/controller/counterparty.controller';

export * as BaseTypes from './api/types';
export * as AddressTypes from './api/types/address';
export * as CommonTypes from './api/types/common';
export * as ServiceTypes from './api/types/service';
export * as DocumentTypes from './api/types/document';
export * as RegistryTypes from './api/types/registry';
export * as CounterpartyTypes from './api/types/counterparty';

export * as AddressEnums from './api/types/enum/address.enum';
export * as DocumentEnums from './api/types/enum/document.enum';