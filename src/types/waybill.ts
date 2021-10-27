import {ApiRequest} from "./index";

export enum WayBillFullList {
  PerPage = 0,
  AllList = 1,
}

export enum WayBillPayerType {
  Sender = 'sender',
  Receiver = 'receiver',
}

export enum WayBillPaymentMethod {
  Cash = 'cash',
  CreditCard = 'credit-card',
}

export interface WayBillMethodProperties {
  DateTimeFrom?: string;
  DateTimeTo?: string;
  Page?: string;
  GetFullList?: WayBillFullList;
  DateTime?: string;
}

export interface WayBillRequest extends ApiRequest<WayBillMethodProperties>{}

export interface WayBillResponse {
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
