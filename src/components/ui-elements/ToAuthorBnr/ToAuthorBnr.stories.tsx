import { ComponentStory, ComponentMeta } from '@storybook/react';

import ToAuthorBnr from './index';

export default {
  title: 'ui-elements/ToAuthorBnr',
  component: ToAuthorBnr,
} as ComponentMeta<typeof ToAuthorBnr>;

export const Default1: ComponentStory<typeof ToAuthorBnr> = () => (
  <ToAuthorBnr />
);
