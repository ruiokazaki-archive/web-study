import { ComponentStory, ComponentMeta } from '@storybook/react';

import ArticleBody from './index';

export default {
  title: 'ui-parts/ArticleBody',
  component: ArticleBody,
} as ComponentMeta<typeof ArticleBody>;

export const Default1: ComponentStory<typeof ArticleBody> = () => (
  <ArticleBody />
);
