import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Blog } from 'types/blog';

import Card from './index';

export default {
  title: 'ui-parts/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

const blogData: Pick<
  Blog,
  'id' | 'title' | 'author' | 'thumbnail' | 'createdAt'
> = {
  id: '1',
  title: '俺たちがテニスの王子様です。越前リョーマです。',
  createdAt: '2020.02.06',
  author: ['okazaki'],
  thumbnail: {
    url: 'https://www.blky.me/wp/wp-content/uploads/2019/01/goodnotes-5-eyecatch.jpg',
    height: 23456,
    width: 12345,
  },
};

export const Default1: ComponentStory<typeof Card> = () => (
  <Card blogData={blogData} />
);
