import { MicroCMSObject } from 'types/microCMS';
import { Tag } from 'types/tag';

export type Category = 'engineer' | 'design' | 'column';
export type Author =
  | 'okazaki'
  | 'kobayashi'
  | 'sato'
  | 'kinoshita'
  | 'ryou'
  | 'suda';

export type Blog = MicroCMSObject & {
  title: string;
  author: Author[];
  recommend: boolean;
  category: Category[];
  tags: Tag[];
  body: string;
  thumbnail: {
    url: string;
    height: number;
    width: number;
  };
};
