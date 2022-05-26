import { ComponentStory, ComponentMeta } from '@storybook/react';

import CardListTitle from './index';

export default {
  title: 'ui-parts/CardListTitle',
  component: CardListTitle,
} as ComponentMeta<typeof CardListTitle>;

export const Default: ComponentStory<typeof CardListTitle> = () => (
  <CardListTitle title="title" />
);
