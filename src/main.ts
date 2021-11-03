import ApiAddress from './api/controller/address.controller';

const api = new ApiAddress({
  apiKey: '<API_TOKEN>'
});

(async () => {
  console.log(
    (await api.searchStreet({StreetName: 'Пуш'}))
  );
})();
