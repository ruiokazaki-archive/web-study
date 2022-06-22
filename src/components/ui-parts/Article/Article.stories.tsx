import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Blog } from 'types/blog';

import Article from './index';

export default {
  title: 'ui-parts/Article',
  component: Article,
} as ComponentMeta<typeof Article>;

const blogData: Pick<
  Blog,
  'id' | 'title' | 'author' | 'thumbnail' | 'publishedAt'
> = {
  id: '1',
  title: '俺たちがテニスの王子様です。越前リョーマです。',
  publishedAt: '2020.02.06',
  author: ['okazaki'],
  thumbnail: {
    url: 'https://www.blky.me/wp/wp-content/uploads/2019/01/goodnotes-5-eyecatch.jpg',
    height: 23456,
    width: 12345,
  },
};

export const Default1: ComponentStory<typeof Article> = () => (
  <Article blogData={blogData} />
);
