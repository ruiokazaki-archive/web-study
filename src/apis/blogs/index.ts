import { MicroCMSQueries } from 'microcms-js-sdk';

import { Blog } from 'types/blog';
import { MicroCMSList } from 'types/microCMS';

export type Methods = {
  get: {
    query?: MicroCMSQueries;
    resBody: MicroCMSList<Blog>;
  };
};
