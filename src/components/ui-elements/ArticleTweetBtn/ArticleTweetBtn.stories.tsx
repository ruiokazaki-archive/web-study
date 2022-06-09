import { ComponentStory, ComponentMeta } from '@storybook/react';

import ArticleTweetBtn from './index';

export default {
  title: 'ui-elements/ArticleTweetBtn',
  component: ArticleTweetBtn,
} as ComponentMeta<typeof ArticleTweetBtn>;

export const Default1: ComponentStory<typeof ArticleTweetBtn> = () => (
  <ArticleTweetBtn />
);
