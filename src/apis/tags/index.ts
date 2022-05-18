import { MicroCMSQueries } from 'microcms-js-sdk';

import { MicroCMSList } from 'types/microCMS';
import { Tag } from 'types/tag';

export type Methods = {
  get: {
    query?: MicroCMSQueries;
    resBody: MicroCMSList<Tag>;
  };
};
