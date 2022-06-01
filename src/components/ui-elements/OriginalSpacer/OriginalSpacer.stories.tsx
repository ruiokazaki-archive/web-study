import { ComponentStory, ComponentMeta } from '@storybook/react';

import OriginalSpacer from './index';

export default {
  title: 'ui-elements/OriginalSpacer',
  component: OriginalSpacer,
} as ComponentMeta<typeof OriginalSpacer>;

export const Default1: ComponentStory<typeof OriginalSpacer> = () => (
  <OriginalSpacer />
);
