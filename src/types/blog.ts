import { MicroCMSObject } from 'types/microCMS';
import { Tag } from 'types/tag';

export type Blog = MicroCMSObject & {
  title: string;
  author: ('okazaki' | 'kobayashi' | 'satou' | 'kinoshita' | 'ryou' | 'suda')[];
  recommend: boolean;
  category: ('engineer' | 'design' | 'column')[];
  tags: Tag[];
  body: string;
};
