import { ComponentStory, ComponentMeta } from '@storybook/react';

import FooterText from './index';

export default {
  title: 'ui-elements/FooterText',
  component: FooterText,
} as ComponentMeta<typeof FooterText>;

const data = {
  title: 'string',
  contents: [
    {
      name: 'string',
      url: 'string',
    },
  ],
  id: 12,
};

export const Default1: ComponentStory<typeof FooterText> = () => (
  <FooterText data={data} />
);
