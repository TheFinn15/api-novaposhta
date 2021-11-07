import ApiDocument from './api/controller/document.controller';

const api = new ApiDocument({
  apiKey: '7497f82295a3212ee0139629d32e3d6e',
});

(async () => {
  console.dir(await api.generateReport(
    {
      DocumentsRefs: ['1fb8943e-14e4-11e5-ad08-005056801333'],
      Type: 'csv'
    }
  ), { depth: null });
})();
