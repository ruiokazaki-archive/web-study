import { MicroCMSQueries } from 'microcms-js-sdk';

import { MicroCMSList, MicroCMSObject } from 'apis/MicroCMSTypes';

export type Tag = MicroCMSObject & {
  nameEn: string;
  nameJa: string;
};

export type Methods = {
  get: {
    query?: MicroCMSQueries;
    resBody: MicroCMSList<Tag>;
  };
};
