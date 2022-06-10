import { ComponentStory, ComponentMeta } from '@storybook/react';

import Tag from './index';

export default {
  title: 'ui-parts/Tag',
  component: Tag,
} as ComponentMeta<typeof Tag>;

export const Default1: ComponentStory<typeof Tag> = () => (
  <Tag tag="react" tagUrl="/react" />
);
