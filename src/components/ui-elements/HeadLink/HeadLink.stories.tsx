import { ComponentStory, ComponentMeta } from '@storybook/react';

import HeadLink from './index';

export default {
  title: 'ui-elements/HeadLink',
  component: HeadLink,
} as ComponentMeta<typeof HeadLink>;

export const Default1: ComponentStory<typeof HeadLink> = () => <HeadLink />;
