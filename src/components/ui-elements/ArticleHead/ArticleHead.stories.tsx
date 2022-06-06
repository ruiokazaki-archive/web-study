import { ComponentStory, ComponentMeta } from '@storybook/react';

import ArticleHead from './index';

export default {
  title: 'ui-elements/ArticleHead',
  component: ArticleHead,
} as ComponentMeta<typeof ArticleHead>;

export const Default1: ComponentStory<typeof ArticleHead> = () => (
  <ArticleHead />
);
