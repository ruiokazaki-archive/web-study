import { MicroCMSQueries } from 'microcms-js-sdk';

import { MicroCMSList } from 'types/microCMS';
import { News } from 'types/news';

export type Methods = {
  get: {
    query?: MicroCMSQueries;
    resBody: MicroCMSList<News>;
  };
};
