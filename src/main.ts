import {ApiNovaPoshta} from "./api/api.controller";

const api = new ApiNovaPoshta('json');

(async () => {
  console.log((await api.searchStreet({
    StreetName: 'Перем',
    SettlementRef: 'e71db909-4b33-11e4-ab6d-005056801329',
    Limit: 100
  })).data[0].Addresses)
})();
