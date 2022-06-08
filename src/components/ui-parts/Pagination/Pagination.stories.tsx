import { ComponentStory, ComponentMeta } from '@storybook/react';

import Pagination from './index';

export default {
  title: 'ui-parts/Pagination',
  component: Pagination,
} as ComponentMeta<typeof Pagination>;

export const Default1: ComponentStory<typeof Pagination> = () => (
  <Pagination totalBlogCount={85} currentPageNumber={5} />
);
