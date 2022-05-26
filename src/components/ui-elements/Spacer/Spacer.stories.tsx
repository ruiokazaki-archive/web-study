import { ComponentStory, ComponentMeta } from '@storybook/react';

import Spacer from './index';

export default {
  title: 'ui-elements/Spacer',
  component: Spacer,
} as ComponentMeta<typeof Spacer>;

export const Default1: ComponentStory<typeof Spacer> = () => <Spacer />;
