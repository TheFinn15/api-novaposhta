import { ApiNovaPoshta } from './api/api.controller';

const api = new ApiNovaPoshta('json');

(async () => {
  console.dir(
    await api.getTrackingHistoryInfo({
      Documents: [
        {
          DocumentNumber: '',
          Phone: '',
        },
      ],
    }),
    { depth: null, colors: true, maxArrayLength: null },
  );
})();
