import { ComponentStory, ComponentMeta } from '@storybook/react';

import Logo from './index';

export default {
  title: 'ui-elements/Logo',
  component: Logo,
} as ComponentMeta<typeof Logo>;

export const Default1: ComponentStory<typeof Logo> = () => <Logo />;
