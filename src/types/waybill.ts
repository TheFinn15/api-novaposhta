export type WaybillModelType = 'InternetDocument' | 'TrackingDocument' | 'TrackingDocumentGeneral';

export type WayBillApiMethodType = 'getDocumentList' | 'getStatusDocuments' | 'getDocumentsEWMovement' | 'getDocumentTrackingHistory';

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
  Bussiness = 'Bussiness',
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
  Documents: WayBillDocument[];
  Language?: string;
}

export interface ApiTrackingHistoryStatus {
  Number: string;
  StatusCode: string;
  Status: string;
  StatusDateTime: string;
}

export interface ApiTrackingHistoryDocStatus {
  Number: string;
  PhoneSender: string;
  PhoneRecipient: string;
  DocumentCost: string;
  CounterpartySender: string;
  ServiceType: string;
  OwnerDocumentType: string;
  RecipientFullName: string;
  ScheduledDeliveryDate: string;
  CounterpartyRecipientDescription: string;
  CounterpartySenderDescription: string;
  AfterpaymentOnGoodsCost: number;
  OnlineCreditStatus: string;
  PayerType: string;
  CargoType: string;
  SeatsAmount: string;
  FactualWeight: string;
  CalculatedWeight: string;
  DocumentWeight: number;
  CheckWeight: number;
  PaymentMethod: string;
  CardMaskedNumber: string;
  MarketplacePartnerToken: string;
  InternationalDeliveryType: string;
  SumBeforeCheckWeight: number;
  UndeliveryReasons: string;
  AdjustedDate: string;
  ExpressWaybillPaymentStatus: string;
  ExpressWaybillAmountToPay: number;
  TrackingUpdateDate: string;
  WarehouseRecipient: string;
  WarehouseSender: string;
  DateCreated: string;
  DateScan: string;
  DateReturnCargo: string;
  DateMoving: string;
  DateFirstDayStorage: string;
  DatePayedKeeping: string;
  RecipientAddress: string;
  RecipientDateTime: string;
  RecipientFullNameEW: string;
  RefCityRecipient: string;
  RefCitySender: string;
  RefSettlementRecipient: string;
  RefSettlementSender: string;
  SenderAddress: string;
  SenderFullNameEW: string;
  ClientBarcode: string;
  CitySender: string;
  CityRecipient: string;
  CargoDescriptionString: string;
  AnnouncedPrice: number;
  AdditionalInformationEW: string;
  ActualDeliveryDate: string;
  PostomatV3CellReservationNumber: boolean;
  AmountToPay: string;
  AmountPaid: string;
  RefEW: string;
  VolumeWeight: string;
  CheckWeightMethod: string;
  OwnerDocumentNumber: string;
  LastCreatedOnTheBasisNumber: string;
  LastCreatedOnTheBasisDateTime: string;
  LastTransactionDateTimeGM: string;
  PaymentStatus: string;
  PaymentStatusDate: string;
  LastAmountTransferGM: string;
  LastAmountReceivedCommissionGM: number;
  LastCreatedOnTheBasisPayerType: string;
  DeliveryTimeframe: string;
  LastTransactionStatusGM: string;
  CreatedOnTheBasis: any[];
  Redelivery: number;
  RedeliveryNum: string;
  RedeliverySum: number;
  RedeliveryPayer: string;
  UndeliveryReasonsDate: string;
  UndeliveryReasonsSubtypeDescription: string;
  RecipientWarehouseTypeRef: string;
  WarehouseRecipientInternetAddressRef: string;
  WarehouseRecipientNumber: number;
  WarehouseRecipientRef: string;
  CategoryOfWarehouse: string;
  WarehouseRecipientAddress: string;
  WarehouseSenderInternetAddressRef: string;
  WarehouseSenderAddress: string;
  CounterpartyType: string;
  CounterpartySenderType: string;
  AviaDelivery: number;
  BarcodeRedBox: string;
  CargoReturnRefusal: boolean;
  DaysStorageCargo: string;
  ElevatorRecipient: string;
  NumberOfFloorsLifting: string;
  Packaging: any[];
  PartialReturnGoods: any[];
  SecurePayment: boolean;
  StorageAmount: string;
  StoragePrice: string;
  BarcodePlacementCity: string;
  BarcodePlacementWarehouse: string;
  PossibilityCreateRedirecting: boolean;
  PossibilityCreateReturn: boolean;
  PossibilityCreateRefusal: boolean;
  PossibilityChangeEW: boolean;
  PossibilityChangeCash2Card: boolean;
  PossibilityChangeDeliveryIntervals: boolean;
}

export interface ApiTrackingHistoryResponse {
  StatusData: {
    [key: string]: ApiTrackingHistoryStatus[];
  };
  DocumentData: {
    [key: string]: ApiTrackingHistoryDocStatus[];
  };
}
