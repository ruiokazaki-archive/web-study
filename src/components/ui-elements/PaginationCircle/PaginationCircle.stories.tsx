import { ComponentStory, ComponentMeta } from '@storybook/react';

import PaginationCircle from './index';

export default {
  title: 'ui-elements/PaginationCircle',
  component: PaginationCircle,
} as ComponentMeta<typeof PaginationCircle>;

export const Default1: ComponentStory<typeof PaginationCircle> = () => (
  <PaginationCircle pageNumber={1}>1</PaginationCircle>
);
