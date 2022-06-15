import { ComponentStory, ComponentMeta } from '@storybook/react';

import ArticleListHead from './index';

export default {
  title: 'ui-parts/ArticleListHead',
  component: ArticleListHead,
} as ComponentMeta<typeof ArticleListHead>;

export const Default1: ComponentStory<typeof ArticleListHead> = () => (
  <ArticleListHead title="デザイン" category="design" />
);
