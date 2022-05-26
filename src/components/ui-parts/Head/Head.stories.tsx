import { ComponentStory, ComponentMeta } from '@storybook/react';

import Head from './index';

export default {
  title: 'ui-parts/Head',
  component: Head,
} as ComponentMeta<typeof Head>;

export const Default1: ComponentStory<typeof Head> = () => <Head />;
