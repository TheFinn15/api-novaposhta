import {
  DeliveryType,
  FormatDataType,
  PaymentMethods,
  RedeliveryCargoType,
  RedeliveryPayerType,
  CargoType,
  CounterpartyType,
  PayerType,
  DocumentFullList,
} from './document.enum';

export type DocumentModelType = 'InternetDocument' | 'TrackingDocument' | 'TrackingDocumentGeneral';

export type DocumentApiMethodType =
  | 'getDocumentList'
  | 'getStatusDocuments'
  | 'getDocumentsEWMovement'
  | 'getDocumentTrackingHistory' | 'getDocumentDeliveryDate' | 'getDocumentPrice' | 'update';

export interface DocumentType {
  DocumentNumber: string;
  Phone: string;
}

export interface DocumentMethodProperties {
  DateTimeFrom?: string;
  DateTimeTo?: string;
  Page?: string;
  GetFullList?: DocumentFullList;
  DateTime?: string;
  Documents?: DocumentType[];
}

export interface ListDocumentResponse {
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
  PayerType: PayerType;
  PaymentMethod: PaymentMethods;
  AfterpaymentOnGoodsCost: string;
  PackingNumber: string;
  RejectionReason: string;
}

export interface TrackingDocumentResponse {
  Number: string;
  Redelivery: number;
  RedeliverySum: number;
  RedeliveryNum: string;
  RedeliveryPayer: RedeliveryPayerType;
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
  CounterpartyType: CounterpartyType;
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
  NewFormat: FormatDataType;
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
  Documents: DocumentType[];
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

export interface ParcelDeliveryDateProperties {
  DateTime?: string;
  ServiceType: DeliveryType;
  CitySender: string;
  CityRecipient: string;
}

export interface ParcelDeliveryDateResponse {
  DeliveryDate: {
    date: string;
    timezone_type: number;
    timezone: string;
  }
}

export interface ParcelPriceProperties {
  CitySender: string;
  CityRecipient: string;
  Weight: string;
  ServiceType: DeliveryType;
  Cost: string;
  CargoType: CargoType;
  SeatsAmount: string;
  RedeliveryCalculate?: {
    CargoType: RedeliveryCargoType;
    Amount: string;
  };
  PackCount?: string;
  PackRef?: string;
  Amount?: string;
  CargoDetails?: string
}

export interface ParcelPriceResponse {
  AssessedCost: number;
  Cost: number;
  CostRedelivery?: number;
  TZoneInfo?: {
    TzoneName: string;
    TzoneID: string;
  },
  CostPack?: number;
}

export interface EditDocumentProperties {
  Ref: string;
  PayerType: PayerType;
  PaymentMethod: PaymentMethods;
  DateTime: string;
  CargoType: CargoType;
  VolumeGeneral: number;
  Weight: number;
  ServiceType: DeliveryType;
  SeatsAmount: string;
  Description: string;
  Cost: number;
  CitySender: string;
  Sender: string;
  SenderAddress: string;
  ContactSender: string;
  SendersPhone: string;
  CityRecipient: string;
  Recipient: string;
  RecipientAddress: string;
  ContactRecipient: string;
  RecipientsPhone: string;
}

export interface EditDocumentResponse {
  Ref: string;
  CostOnSite: string;
  EstimatedDeliveryDate: string;
  IntDocNumber: string;
  TypeDocument: string;
}
