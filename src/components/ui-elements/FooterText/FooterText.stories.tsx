import { ComponentStory, ComponentMeta } from '@storybook/react';

import FooterText from './index';

export default {
  title: 'ui-elements/FooterText',
  component: FooterText,
} as ComponentMeta<typeof FooterText>;

export const Default1: ComponentStory<typeof FooterText> = () => (
  <FooterText about="テスト" url="/test" />
);
