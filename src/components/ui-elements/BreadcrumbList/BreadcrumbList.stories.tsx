import { ComponentStory, ComponentMeta } from '@storybook/react';

import BreadcrumbList from './index';

export default {
  title: 'ui-elements/BreadcrumbList',
  component: BreadcrumbList,
} as ComponentMeta<typeof BreadcrumbList>;

export const Default1: ComponentStory<typeof BreadcrumbList> = () => (
  <BreadcrumbList data={[{ name: 'test', url: 'test' }]} />
);
