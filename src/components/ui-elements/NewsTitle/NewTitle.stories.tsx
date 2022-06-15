import { ComponentStory, ComponentMeta } from '@storybook/react';

import NewsTitle from './index';

export default {
  title: 'ui-elements/NewTitle',
  component: NewsTitle,
} as ComponentMeta<typeof NewsTitle>;

export const Default1: ComponentStory<typeof NewsTitle> = () => (
  <NewsTitle newsTitle="" newsUrl="" newsDate="" newCategory="" />
);
