import { DeliveryType, PayerType, PaymentMethods } from './enum/document.enum';
export declare type ServiceApiMethodType = 'CheckPossibilityChangeEW' | 'save' | 'delete' | 'getChangeEWOrdersList' | 'CheckPossibilityCreateReturn' | 'getReturnReasons' | 'getReturnReasonsSubtypes' | 'getReturnOrdersList' | 'checkPossibilityForRedirecting' | 'getRedirectionOrdersList';
export declare type ServiceModelType = 'AdditionalService' | 'AdditionalServiceGeneral';
export declare type CanSendRequestOptions = CheckPossibilityChangeEWProperties | CheckPossibilityBackwardProperties | CheckPossibilityReturnProperties;
export declare type CanSendRequestResponse = CheckPossibilityChangeEWResponse | CheckPossibilityBackwardResponse | CheckPossibilityReturnResponse;
export declare type CanSendRequestMethod = 'CheckPossibilityChangeEW' | 'CheckPossibilityCreateReturn' | 'checkPossibilityForRedirecting';
export declare type CreateRequestOptions = CreateChangeRequestDocProperties | (CreateBackwardRequestToWarehouseProperties | CreateBackwardRequestToDoorProperties) | CreateReturnRequestProperties;
export declare type CreateRequestResponse = CreateChangeRequestDocResponse | CreateBackwardRequestResponse | CreateReturnRequestResponse;
export declare type DeleteRequestOptions = DeleteChangeRequestProperties | DeleteBackwardRequestProperties | DeleteReturnRequestProperties;
export declare type DeleteRequestResponse = DeleteChangeRequestResponse | DeleteReturnRequestResponse;
export declare type ListRequestOptions = ListChangesDataProperties | ListBackwardRequestsProperties;
export declare type ListRequestMethod = 'getChangeEWOrdersList' | 'getRedirectionOrdersList' | 'getReturnReasons' | 'getReturnReasonsSubtypes' | 'getReturnOrdersList';
export declare type ListRequestResponse = ListChangesDataResponse | ListBackwardRequestsResponse | ListReturnReasonsResponse | ListReturnReasonsSubtypesResponse;
export interface CheckPossibilityChangeEWProperties {
    IntDocNumber: string;
}
export interface CheckPossibilityChangeEWResponse {
    CanChangeSender: boolean;
    CanChangeRecipient: boolean;
    CanChangePayerTypeOrPaymentMethod: boolean;
    SenderPhone: string;
    ContactPersonSender: string;
    RecipientPhone: string;
    ContactPersonRecipient: string;
    PayerType: PayerType;
    PaymentMethod: PaymentMethods;
    SenderCounterparty: string;
    RecipientCounterparty: string;
}
export interface CreateChangeRequestDocProperties {
    IntDocNumber: string;
    OrderType: string;
    SenderContactName?: string;
    SenderPhone?: string;
    Recipient?: string;
    RecipientContactName?: string;
    RecipientPhone?: string;
    PayerType?: PayerType;
    PaymentMethod?: PaymentMethods;
}
export interface CreateChangeRequestDocResponse {
    Ref: string;
    Number: string;
}
export interface DeleteChangeRequestProperties {
    Ref: string;
}
export interface DeleteChangeRequestResponse {
    Number: string;
}
export interface ListChangesDataProperties {
    Number?: string;
    Ref?: string;
    BeginDate: string;
    EndDate: string;
    Page: string;
    Limit: string;
}
export interface ListChangesDataResponse {
    OrderRef: string;
    OrderNumber: string;
    OrderType: string;
    DocumentNumber: string;
    DateTime: string;
    OrderStatus: string;
    Cost: number;
    BeforeChangeSenderPhone: string;
    AfterChangeSenderPhone: string;
}
export interface CheckPossibilityBackwardProperties {
    Number: string;
}
export interface CheckPossibilityBackwardResponse {
    Ref: string;
    Number: string;
    PayerType: PayerType;
    PaymentMethod: PaymentMethods;
    ServiceType: DeliveryType;
    WarehouseRef: string;
    WarehouseDescription: string;
    CityRecipient: string;
    CityRecipientDescription: string;
    SettlementRecipient: string;
    SettlementRecipientDescription: string;
    SettlementType: string;
    CounterpartyRecipientRef: string;
    CounterpartyRecipientDescription: string;
    RecipientName: string;
    PhoneSender: string;
    PhoneRecipient: string;
    DocumentWeight: string;
}
export interface CreateBackwardRequestToWarehouseProperties {
    OrderType: string;
    IntDocNumber: string;
    Customer: string;
    ServiceType: string;
    RecipientWarehouse: string;
    Recipient: string;
    RecipientContactName: string;
    RecipientPhone: string;
    PayerType: string;
    PaymentMethod: string;
    Note: string;
}
export interface CreateBackwardRequestToDoorProperties {
    OrderType: string;
    IntDocNumber: string;
    Customer: string;
    ServiceType: string;
    RecipientSettlement: string;
    RecipientSettlementStreet: string;
    BuildingNumber: string;
    NoteAddressRecipient: string;
    Recipient: string;
    RecipientContactName: string;
    RecipientPhone: string;
    PayerType: string;
    PaymentMethod: string;
    Note: string;
}
export interface CreateBackwardRequestResponse {
    Ref: string;
    Number: string;
}
export interface DeleteBackwardRequestProperties {
    Ref: string;
    OrderType: string;
}
export interface DeleteBackwardRequestResponse {
    Number: string;
}
export interface ListBackwardRequestsProperties {
    Number?: string;
    Ref?: string;
    BeginDate?: string;
    EndDate?: string;
    Page?: string;
    Limit?: string;
}
export interface ListBackwardRequestsResponse {
    OrderRef: string;
    OrderNumber: string;
    DateTime: string;
    OrderStatus: string;
    DocumentNumber: string;
    Note: string;
    CityRecipient: string;
    RecipientAddress: string;
    CounterpartyRecipient: string;
    RecipientName: string;
    PhoneRecipient: string;
    PayerType: string;
    PaymentMethod: string;
    DeliveryCost: number;
    EstimatedDeliveryDate: string;
    ExpressWaybillNumber: string;
    ExpressWaybillStatus: string;
}
export interface CheckPossibilityReturnProperties {
    Number: string;
}
export interface CheckPossibilityReturnResponse {
    NonCash: boolean;
    City: string;
    Counterparty: string;
    Address: string;
    Phone: string;
    Ref: string;
}
export interface ListReturnReasonsResponse {
    Ref: string;
    Description: string;
}
export interface ListReturnReasonsSubtypesProperties {
    ReasonsRef: string;
}
export interface ListReturnReasonsSubtypesResponse {
    Ref: string;
    Description: string;
    ReasonRef: string;
}
export interface CreateReturnRequestProperties {
    IntDocNumber: string;
    PaymentMethod: PaymentMethods;
    Reason: string;
    SubtypeReason: string;
    Note: string;
    OrderType: string;
    ReturnAddressRef: string;
}
export interface CreateReturnRequestResponse {
    Number: string;
    Ref: string;
}
export interface DeleteReturnRequestProperties {
    Ref: string;
}
export interface DeleteReturnRequestResponse {
    Number: string;
}
