import { MicroCMSQueries } from 'microcms-js-sdk';

import { MicroCMSList, MicroCMSObject } from 'apis/MicroCMSTypes';

export type News = MicroCMSObject & {
  title: string;
  important: boolean;
  category: string[];
  notificationDate: Date;
  body: string;
};

export type Methods = {
  get: {
    query?: MicroCMSQueries;
    resBody: MicroCMSList<News>;
  };
};
