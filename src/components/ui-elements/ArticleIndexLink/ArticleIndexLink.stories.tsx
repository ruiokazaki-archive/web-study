import { ComponentStory, ComponentMeta } from '@storybook/react';

import ArticleIndexLink from './index';

export default {
  title: 'ui-elements/ArticleIndexLink',
  component: ArticleIndexLink,
} as ComponentMeta<typeof ArticleIndexLink>;

export const Default1: ComponentStory<typeof ArticleIndexLink> = () => (
  <ArticleIndexLink />
);
