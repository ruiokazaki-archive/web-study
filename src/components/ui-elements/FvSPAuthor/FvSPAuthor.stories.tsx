import { ComponentStory, ComponentMeta } from '@storybook/react';

import FvSPAuthor from './index';

export default {
  title: 'ui-elements/FvSPAuthor',
  component: FvSPAuthor,
} as ComponentMeta<typeof FvSPAuthor>;

export const Default1: ComponentStory<typeof FvSPAuthor> = () => <FvSPAuthor />;
