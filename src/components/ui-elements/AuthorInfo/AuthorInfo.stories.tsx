import { ComponentStory, ComponentMeta } from '@storybook/react';

import AuthorInfo from './index';

export default {
  title: 'ui-elements/AuthorInfo',
  component: AuthorInfo,
} as ComponentMeta<typeof AuthorInfo>;

export const Default1: ComponentStory<typeof AuthorInfo> = () => (
  <AuthorInfo />
);
