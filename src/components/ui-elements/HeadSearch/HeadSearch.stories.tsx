import { ComponentStory, ComponentMeta } from '@storybook/react';

import HeadSearch from './index';

export default {
  title: 'ui-elements/HeadSearch',
  component: HeadSearch,
} as ComponentMeta<typeof HeadSearch>;

export const Default1: ComponentStory<typeof HeadSearch> = () => (
  <HeadSearch></HeadSearch>
);
