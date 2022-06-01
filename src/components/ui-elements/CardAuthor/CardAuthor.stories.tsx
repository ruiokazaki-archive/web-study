import { ComponentStory, ComponentMeta } from '@storybook/react';

import CardAuthor from './index';

export default {
  title: 'ui-elements/CardAuthor',
  component: CardAuthor,
} as ComponentMeta<typeof CardAuthor>;

export const Default1: ComponentStory<typeof CardAuthor> = () => (
  <CardAuthor author="kinoshita" />
);
