import { ComponentStory, ComponentMeta } from '@storybook/react';

import FirstView from './index';

export default {
  title: 'ui-parts/FirstView',
  component: FirstView,
} as ComponentMeta<typeof FirstView>;

export const Default1: ComponentStory<typeof FirstView> = () => <FirstView />;
