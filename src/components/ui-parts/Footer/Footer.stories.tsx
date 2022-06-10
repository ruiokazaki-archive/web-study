import { ComponentStory, ComponentMeta } from '@storybook/react';

import Footer from './index';

export default {
  title: 'ui-parts/Footer',
  component: Footer,
} as ComponentMeta<typeof Footer>;

export const Default1: ComponentStory<typeof Footer> = () => <Footer />;
