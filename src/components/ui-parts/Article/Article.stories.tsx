import { ComponentStory, ComponentMeta } from '@storybook/react';

import Article from './index';

export default {
  title: 'ui-parts/Article',
  component: Article,
} as ComponentMeta<typeof Article>;
const blogData = {
  title: '俺たちがテニスの王子様です。越前リョーマです。',
  createdAt: '2020.02.06',
  thumbnail: {
    url: 'https://www.blky.me/wp/wp-content/uploads/2019/01/goodnotes-5-eyecatch.jpg',
    height: 23456,
    width: 12345,
  },
};
export const Default1: ComponentStory<typeof Article> = () => (
  <Article blogData={blogData} />
);
