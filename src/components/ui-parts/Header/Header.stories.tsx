import { ComponentStory, ComponentMeta } from '@storybook/react';

import Header from './index';

export default {
  title: 'ui-parts/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

export const Default1: ComponentStory<typeof Header> = () => (
  <Header color="pink" />
);
