import { BaseApi } from '../base';
import { CargoDescriptionsProperties, CargoDescriptionsResponse, DescriptionResponse, LogTypeResponse, PackListProperties, PackListResponse, PalletsListResponse, TimeIntervalsProperties, TimeIntervalsResponse, TiresWheelsListResponse } from '../../types/common';
export default class ApiCommon extends BaseApi {
    getTimeIntervals(opts: TimeIntervalsProperties): Promise<import("../../types").InformerResponse<TimeIntervalsResponse>>;
    getCargoTypes(): Promise<import("../../types").InformerResponse<DescriptionResponse>>;
    getBackwardDeliveryCargoTypes(): Promise<import("../../types").InformerResponse<DescriptionResponse>>;
    getPalletsList(): Promise<import("../../types").InformerResponse<PalletsListResponse>>;
    getPayersType(): Promise<import("../../types").InformerResponse<DescriptionResponse>>;
    getRedeliveryPayersType(): Promise<import("../../types").InformerResponse<DescriptionResponse>>;
    getPackList(opts: PackListProperties): Promise<import("../../types").InformerResponse<PackListResponse>>;
    getTiresWheelsList(): Promise<import("../../types").InformerResponse<TiresWheelsListResponse>>;
    getCargoDescriptionList(opts: CargoDescriptionsProperties): Promise<import("../../types").InformerResponse<CargoDescriptionsResponse>>;
    getMessageCodeText(): Promise<import("../../types").InformerResponse<LogTypeResponse>>;
    getServiceTypes(): Promise<import("../../types").InformerResponse<DescriptionResponse>>;
    getTypesOfCounterparties(): Promise<import("../../types").InformerResponse<DescriptionResponse>>;
    getPaymentForms(): Promise<import("../../types").InformerResponse<DescriptionResponse>>;
    getOwnershipFormsList(): Promise<import("../../types").InformerResponse<DescriptionResponse>>;
}
