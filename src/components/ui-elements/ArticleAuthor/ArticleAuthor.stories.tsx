import { ComponentStory, ComponentMeta } from '@storybook/react';

import ArticleAuthor from './index';

export default {
  title: 'ui-elements/ArticleAuthor',
  component: ArticleAuthor,
} as ComponentMeta<typeof ArticleAuthor>;

export const Default1: ComponentStory<typeof ArticleAuthor> = () => (
  <ArticleAuthor authorData="okazaki" />
);
