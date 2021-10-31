import { ApiAddress } from './api/controller/address.controller';

const api = new ApiAddress({
  apiKey: '7497f82295a3212ee0139629d32e3d6e'
});

(async () => {
  console.log(
    await api.getCities({
      FindByString: 'Сели',
    }),
  );
})();
