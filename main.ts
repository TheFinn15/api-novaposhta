import ApiCommon from './api/controller/common.controller';

const api = new ApiCommon({});

(async () => {
  console.dir(await api.getPalletsList(), { depth: null });
})();
