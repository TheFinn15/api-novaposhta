import ApiDocument from './api/controller/document.controller';
import { CargoType, DeliveryType } from './types/document';

const api = new ApiDocument({
  apiKey: '<API_TOKEN>'
});

(async () => {
  console.dir(
    (await api.getParcelPrice(
      {
        CargoType: CargoType.Documents,
        Cost: '12',
        SeatsAmount: '50',
        Weight: '15',
        ServiceType: DeliveryType.WarehouseWarehouse,
        CitySender: '8d5a980d-391c-11dd-90d9-001a92567626',
        CityRecipient: '8d5a980d-391c-11dd-90d9-001a92567626',

      },
    )), {depth: null }
  );
})();
