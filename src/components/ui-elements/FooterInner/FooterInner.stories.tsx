import { ComponentStory, ComponentMeta } from '@storybook/react';

import FooterInner from './index';

export default {
  title: 'ui-elements/FooterInner',
  component: FooterInner,
} as ComponentMeta<typeof FooterInner>;

export const Default1: ComponentStory<typeof FooterInner> = () => (
  <FooterInner />
);
