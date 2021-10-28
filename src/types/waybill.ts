import {ApiRequest} from "./index";

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

export interface WayBillRequest extends ApiRequest<WayBillMethodProperties>{}

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
