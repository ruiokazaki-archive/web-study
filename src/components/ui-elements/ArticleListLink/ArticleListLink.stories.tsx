import { ComponentStory, ComponentMeta } from '@storybook/react';

import ArticleListLink from './index';

export default {
  title: 'ui-elements/ArticleListLink',
  component: ArticleListLink,
} as ComponentMeta<typeof ArticleListLink>;

export const Default1: ComponentStory<typeof ArticleListLink> = () => (
  <ArticleListLink />
);
