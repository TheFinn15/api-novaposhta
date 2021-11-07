import ApiAddress from 'api/controller/address.controller';

// describe('Testing address api', () => {
//   const api = new ApiAddress({apiKey: '<API_TOKEN>'});
//
//   test('Testing of getCities method', () => {
//     return api.getCities({FindByString: 'Кие'}).then(resp => {
//       expect(resp.data.length).toBeGreaterThan(0);
//     });
//   });
//
//   test('Testing of getAreas method', () => {
//     return api.getAreas().then(resp => {
//       expect(resp.data.length).toBeGreaterThan(0);
//     });
//   });
//
//   test('Testing of getSettlements method', () => {
//     return api.getSettlements({FindByString: 'Кие'}).then(resp => {
//       expect(resp.data.length).toBeGreaterThan(0);
//     });
//   });
//
//   test('Testing of getWarehouseStreet method', () => {
//     return api.getWarehouseStreet({CityRef: 'ebc0eda9-93ec-11e3-b441-0050568002cf'}).then(resp => {
//       expect(resp.data.length).toBeGreaterThan(0);
//     });
//   });
//
//   test('Testing of getWarehouses method', () => {
//     return api.getWarehouses({FindByString: 'Кие'}).then(resp => {
//       expect(resp.data.length).toBeGreaterThan(0);
//     });
//   });
//
//   test('Testing of searchCity method', () => {
//     return api.searchCity({CityName: 'Кие', Limit: 3}).then(resp => {
//       expect(resp.data.length).toBeGreaterThan(0);
//     });
//   });
//
//   test('Testing of searchStreet method', () => {
//     return api.searchStreet({ StreetName: 'Пуш', SettlementRef: 'e715719e-4b33-11e4-ab6d-005056801329'})
//       .then(resp => {
//         console.log(resp);
//         expect(resp.data.length).toBeGreaterThan(0);
//       });
//   });
// });
