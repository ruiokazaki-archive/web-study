import { ComponentStory, ComponentMeta } from '@storybook/react';

import CardDate from './index';

export default {
  title: 'ui-elements/CardDate',
  component: CardDate,
} as ComponentMeta<typeof CardDate>;

export const Default1: ComponentStory<typeof CardDate> = () => (
  <CardDate>2002.02.06</CardDate>
);
