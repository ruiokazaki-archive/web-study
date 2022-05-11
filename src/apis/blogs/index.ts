import { MicroCMSQueries } from 'microcms-js-sdk';

import { MicroCMSList, MicroCMSObject } from 'apis/MicroCMSTypes';
import { Tag } from 'apis/tags';

export type Blog = MicroCMSObject & {
  title: string;
  author: ('okazaki' | 'kobayashi' | 'satou' | 'kinoshita' | 'ryou' | 'suda')[];
  recommend: boolean;
  category: ('engineer' | 'design' | 'column')[];
  tags: Tag[];
  body: string;
};

export type Methods = {
  get: {
    query?: MicroCMSQueries;
    resBody: MicroCMSList<Blog>;
  };
};
