import { ComponentStory, ComponentMeta } from '@storybook/react';

import ArticleTags from './index';

export default {
  title: 'ui-elements/ArticleTags',
  component: ArticleTags,
} as ComponentMeta<typeof ArticleTags>;

export const Default1: ComponentStory<typeof ArticleTags> = () => (
  <ArticleTags />
);
