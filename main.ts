import ApiCommon from './api/controller/common.controller';
import ApiService from './api/controller/service.controller';

const api = new ApiService({});

(async () => {
  console.dir(await api.canCreateChangeDataRequest(), { depth: null });
})();
