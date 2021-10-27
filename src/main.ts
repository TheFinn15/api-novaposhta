import {ApiNovaPoshta} from "./api";
import {WayBillFullList} from "./types/waybill";

const api = new ApiNovaPoshta('7497f82295a3212ee0139629d32e3d6e', 'json');

(async () => {
  console.log(await api.getListWayBill());
})();
