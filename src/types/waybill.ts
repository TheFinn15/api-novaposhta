import {ApiRequestBody} from "./index";

export enum WayBillFullList {
  PerPage = 0,
  AllList = 1,
}

export enum WayBillPayerType {
  Sender = 'sender',
  Receiver = 'receiver',
}

export enum WayBillRedeliveryType {
  Recipient = 'recipient',
  Sender = 'sender',
}

export enum WayBillPartyType {
  PrivatePerson = 'PrivatePerson',
  Bussiness = 'Bussiness'
}

export enum WayBillPaymentMethod {
  Cash = 'cash',
  CreditCard = 'credit-card',
}

export enum NewFormatData {
  Old = 0,
  New = 1,
}

export interface WayBillDocument {
  DocumentNumber: string;
  Phone: string;
}

export interface WayBillMethodProperties {
  DateTimeFrom?: string;
  DateTimeTo?: string;
  Page?: string;
  GetFullList?: WayBillFullList;
  DateTime?: string;
  Documents?: WayBillDocument[];
}

export interface WayBillRequest extends ApiRequestBody<WayBillMethodProperties>{}

export interface ListWayBillResponse {
  Ref: string;
  DateTime: string;
  PreferredDeliveryDate: string;
  Weight: number;
  SeatsAmount: number;
  IntDocNumber: number;
  Cost: number;
  CitySender: string;
  CityRecipient: string;
  SenderAddress: string;
  RecipientAddress: string;
  CostOnSite: number;
  PayerType: WayBillPayerType;
  PaymentMethod: WayBillPaymentMethod;
  AfterpaymentOnGoodsCost: string;
  PackingNumber: string;
  RejectionReason: string;
}

export interface TrackingWayBillResponse {
  Number: string;
  Redelivery: number;
  RedeliverySum: number;
  RedeliveryNum: string;
  RedeliveryPayer: WayBillRedeliveryType;
  OwnerDocumentType: string;
  LastCreatedOnTheBasisDocumentType: string;
  LastCreatedOnTheBasisPayerType: string;
  LastCreatedOnTheBasisDateTime: string;
  LastTransactionStatusGM: number;
  LastTransactionDateTimeGM: string;
  DateCreated: string;
  DocumentWeight: string;
  FactualWeight: string;
  VolumeWeight: string;
  CheckWeight: string;
  CheckWeightMethod: string;
  DocumentCost: string;
  CalculatedWeight: string;
  PayerType: string;
  RecipientFullName: string;
  RecipientDateTime: string;
  ScheduledDeliveryDate: string;
  PaymentMethod: string;
  CargoDescriptionString: string;
  CargoType: string;
  CitySender: string;
  CityRecipent: string;
  WarehouseRecipient: string;
  CounterpartyType: WayBillPartyType;
  AfterpaymentOnGoodsCost: string;
  ServiceType: string;
  UndeliveryReasonsSubtypeDescription: string;
  WarehouseRecipientNumber: number;
  LastCreatedOnTheBasisNumber: string;
  PhoneRecipient: string;
  RecipientFullNameEW: string;
  WarehouseRecipientInternetAddressRef: string;
  MarketplacePartnerToken: string;
  ClientBarcode: string;
  RecipientAddress: string;
  CounterpartyRecipientDescription: string;
  CounterpartySenderType: string;
  DateScan: string;
  PaymentStatus: string;
  PaymentStatusDate: string;
  AmountToPay: string;
  AmountPaid: string;
  Status: string;
  StatusCode: string;
  RefEW: string;
  BackwardDeliverySubTypesActions: string;
  BackwardDeliverySubTypesServices: string;
  UndeliveryReasons: string;
  DatePayedKeeping: string;
}

export interface ApiTrackingInfoProperties {
  Number: string;
  NewFormat: NewFormatData;
}

export interface ApiTrackingInfoStatus {
  code: string;
  description: string;
  scheduledAt: string;
  settlementId: string;
  cityId: string;
  addressDescription: string;
}

export interface ApiTrackingInfoMovementType {
  Warehouse: string;
  WarehouseDescription: string;
  Barcode: string;
  ArrivalTime: string;
  Event: string;
  EventDescription: string;
  Settlement: string;
  SettlementDescription: string;
}

export interface ApiTrackingInfoMovement {
  passed: ApiTrackingInfoMovementType[];
  now: ApiTrackingInfoMovementType[];
  future: ApiTrackingInfoMovementType[];
}

export interface ApiTrackingInfoResponse {
  number: string;
  createdAt: string;
  status: ApiTrackingInfoStatus;
  movement: ApiTrackingInfoMovement;
}

export interface ApiTrackingHistoryProperties {
  Documents: WayBillDocument;
  Language?: string;
}

export interface ApiTrackingHistoryStatus {
  Number: string;
  StatusCode: string;
  Status: string;
  StatusDateTime: string;
}

export interface ApiTrackingHistoryDocStatus {
  "Number": "20400255487089",
  "PhoneSender": "380634273067",
  "PhoneRecipient": "380953843368",
  "DocumentCost": "247",
  "CounterpartySender": "9825c14e-4d2f-eb11-8104-005056b29404",
  "ServiceType": "WarehouseWarehouse",
  "OwnerDocumentType": "",
  "RecipientFullName": "",
  "ScheduledDeliveryDate": "29-10-2021 18:00:00",
  "CounterpartyRecipientDescription": "Приватна особа",
  "CounterpartySenderDescription": "КОВАЛЬОВ СЕРГІЙ ОЛЕГОВИЧ ФОП",
  "AfterpaymentOnGoodsCost": 0,
  "OnlineCreditStatus": "",
  "PayerType": "Recipient",
  "CargoType": "Parcel",
  "SeatsAmount": "1",
  "FactualWeight": "5.63",
  "CalculatedWeight": "",
  "DocumentWeight": number,
  "CheckWeight": number,
  "PaymentMethod": "Cash",
  "CardMaskedNumber": "",
  "MarketplacePartnerToken": "",
  "InternationalDeliveryType": "",
  "SumBeforeCheckWeight": number,
  "UndeliveryReasons": "",
  "AdjustedDate": "2021-10-29 12:00:00",
  "ExpressWaybillPaymentStatus": "NeedPayment",
  "ExpressWaybillAmountToPay": number,
  "TrackingUpdateDate": "2021-10-28 15:58:46",
  "WarehouseRecipient": "Отделение №3 (до 30 кг на одно место): ул. Соленая, 114",
  "WarehouseSender": "Отделение №1: ул. С. Шковороды, 29",
  "DateCreated": "26-10-2021 17:32:23",
  "DateScan": "15:58 28.10.2021",
  "DateReturnCargo": "",
  "DateMoving": "",
  "DateFirstDayStorage": "",
  "DatePayedKeeping": "",
  "RecipientAddress": "м. Селидове, Відділення №3 (до 30 кг на одне місце), вул. Солона, 114",
  "RecipientDateTime": "",
  "RecipientFullNameEW": "Тимур Лавренцов",
  "RefCityRecipient": "1097567b-8a89-11e0-8140-969cd9edcd68",
  "RefCitySender": "f7062362-4078-11de-b509-001d92f78698",
  "RefSettlementRecipient": "e71db909-4b33-11e4-ab6d-005056801329",
  "RefSettlementSender": "e720343e-4b33-11e4-ab6d-005056801329",
  "SenderAddress": "смт. Шацьк, Відділення №1: вул. С. Шковороди, 29",
  "SenderFullNameEW": "Золотухіна Катерина Русланівна",
  "ClientBarcode": "593865",
  "CitySender": "Шацк",
  "CityRecipient": "Селидово",
  "CargoDescriptionString": "Заказы: 593865.",
  "AnnouncedPrice": number,
  "AdditionalInformationEW": "Стационарная игровая приставка Sony PlayStation 5 Di",
  "ActualDeliveryDate": "",
  "PostomatV3CellReservationNumber": boolean,
  "AmountToPay": "",
  "AmountPaid": "",
  "RefEW": "892d0bba-3669-11ec-80fb-b8830365bd04",
  "VolumeWeight": "10.00",
  "CheckWeightMethod": "Volumetric",
  "OwnerDocumentNumber": "",
  "LastCreatedOnTheBasisNumber": "",
  "LastCreatedOnTheBasisDateTime": "",
  "LastTransactionDateTimeGM": "",
  "PaymentStatus": "",
  "PaymentStatusDate": "",
  "LastAmountTransferGM": "24200.000",
  "LastAmountReceivedCommissionGM": number,
  "LastCreatedOnTheBasisPayerType": "Sender",
  "DeliveryTimeframe": "",
  "LastTransactionStatusGM": "",
  "CreatedOnTheBasis": [],
  "Redelivery": number,
  "RedeliveryNum": "",
  "RedeliverySum": number,
  "RedeliveryPayer": "Recipient",
  "UndeliveryReasonsDate": "",
  "UndeliveryReasonsSubtypeDescription": "",
  "RecipientWarehouseTypeRef": "841339c7-591a-42e2-8233-7a0a00f0ed6f",
  "WarehouseRecipientInternetAddressRef": "88a0d161-10e2-11ea-9295-005056b24375",
  "WarehouseRecipientNumber": number,
  "WarehouseRecipientRef": "034162a0-1c7a-4380-a04d-22b7f424ba15",
  "CategoryOfWarehouse": "Branch",
  "WarehouseRecipientAddress": "Селидово, Солона, 114",
  "WarehouseSenderInternetAddressRef": "2bb8cef7-e1c2-11e3-8c4a-0050568002cf",
  "WarehouseSenderAddress": "Шацк, С. Шковороди, 29",
  "CounterpartyType": "PrivatePerson",
  "CounterpartySenderType": "Organization",
  "AviaDelivery": 0,
  "BarcodeRedBox": "",
  "CargoReturnRefusal": boolean,
  "DaysStorageCargo": "",
  "ElevatorRecipient": "",
  "NumberOfFloorsLifting": "",
  "Packaging": [],
  "PartialReturnGoods": [],
  "SecurePayment": boolean,
  "StorageAmount": "",
  "StoragePrice": "",
  "BarcodePlacementCity": "Селидове",
  "BarcodePlacementWarehouse": "Відділення №3 (до 30 кг на одне місце): вул. Солона, 114",
  "PossibilityCreateRedirecting": boolean,
  "PossibilityCreateReturn": boolean,
  "PossibilityCreateRefusal": boolean,
  "PossibilityChangeEW": boolean,
  "PossibilityChangeCash2Card": boolean,
  "PossibilityChangeDeliveryIntervals": boolean
}

export interface ApiTrackingHistoryResponse {
  StatusData: {
    [key: string]: ApiTrackingHistoryStatus[];
  };
  DocumentData: {
    [key: string]: ApiTrackingHistoryDocStatus[]
  };
}
