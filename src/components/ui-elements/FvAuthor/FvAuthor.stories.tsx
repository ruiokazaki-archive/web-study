import { ComponentStory, ComponentMeta } from '@storybook/react';

import FvAuthor from './index';

export default {
  title: 'ui-elements/FvAuthor',
  component: FvAuthor,
} as ComponentMeta<typeof FvAuthor>;

export const Default1: ComponentStory<typeof FvAuthor> = () => <FvAuthor />;
