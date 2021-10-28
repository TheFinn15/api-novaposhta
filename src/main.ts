import {ApiNovaPoshta} from "./api";

const api = new ApiNovaPoshta('7497f82295a3212ee0139629d32e3d6e', 'json');

(async () => {
  console.log(await api.getAreas());
})();
