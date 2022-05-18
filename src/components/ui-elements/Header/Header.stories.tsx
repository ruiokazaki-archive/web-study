import { ComponentStory, ComponentMeta } from '@storybook/react';

import Header from './index';

export default {
  title: 'ui-elements/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

export const Default1: ComponentStory<typeof Header> = () => (
  <Header />
  // コンポーねんとをここでよびだす
);
