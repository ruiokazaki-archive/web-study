import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Tag } from 'types/tag';

import Footer from './index';

export default {
  title: 'ui-parts/Footer',
  component: Footer,
} as ComponentMeta<typeof Footer>;

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

export const Default1: ComponentStory<typeof Footer> = () => (
  <Footer tags={tags} />
);
