export enum DeliveryType {
  DoorsDoors = 'DoorsDoors',
  DoorsWarehouse = 'DoorsWarehouse',
  WarehouseWarehouse = 'WarehouseWarehouse',
  WarehouseDoors = 'WarehouseAddress',
  DoorsPostomat = 'DoorsPostomat',
  WarehousePostomat = 'WarehousePostomat',
}

export enum CargoType {
  Cargo = 'Cargo',
  Documents = 'Documents',
  TiresWheels = 'TiresWheels',
  Pallet = 'Pallet',
}

export enum RedeliveryCargoType {
  Money = 'Money',
  Documents = 'Documents',
}

export enum PayerType {
  Sender = 'Sender',
  Receiver = 'Receiver',
  ThirdPerson = 'ThirdPerson',
}

export enum RedeliveryPayerType {
  Recipient = 'Recipient',
  Sender = 'Sender',
}

export enum CounterpartyType {
  Organisation = 'Organisation',
  PrivatePerson = 'PrivatePerson',
  Business = 'Business',
}

export enum PaymentMethods {
  Cash = 'Cash',
  NonCash = 'NonCash',
}

export enum FormatDataType {
  Old = 0,
  New = 1,
}

export enum DocumentFullList {
  PerPage = 0,
  AllList = 1,
}
