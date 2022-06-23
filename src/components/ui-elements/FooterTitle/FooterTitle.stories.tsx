import { ComponentStory, ComponentMeta } from '@storybook/react';

import FooterTitle from './index';

export default {
  title: 'ui-parts/FooterTitle',
  component: FooterTitle,
} as ComponentMeta<typeof FooterTitle>;

export const Default1: ComponentStory<typeof FooterTitle> = () => (
  <FooterTitle title="test" />
);
