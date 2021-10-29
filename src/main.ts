import {ApiNovaPoshta} from "./api/api.controller";
import {NewFormatData} from "./types/waybill";

const api = new ApiNovaPoshta('json');

(async () => {
  console.dir((await api.getTrackingInfo({
    Number: '20400255487089',
    NewFormat: NewFormatData.New
  })), {depth: null, colors: true, maxArrayLength: null});
})();
