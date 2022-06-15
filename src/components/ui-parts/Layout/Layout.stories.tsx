import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Tag } from 'types/tag';

import Layout from './index';

export default {
  title: 'ui-parts/Layout',
  component: Layout,
} as ComponentMeta<typeof Layout>;

const tags: Tag[] = [
  {
    nameEn: 'design',
    nameJa: 'デザイン',
    id: 'string',
    createdAt: 'string',
    updatedAt: 'string',
    publishedAt: 'string',
    revisedAt: 'string',
  },
];

export const Default1: ComponentStory<typeof Layout> = () => (
  <Layout tags={tags}>contenst</Layout>
);
