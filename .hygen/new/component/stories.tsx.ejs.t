---
to: "<%= haveStory ? `${path}/index.stories.ts` : null %>"
---

import { Meta, Story } from '@storybook/react';
import { ComponentProps } from 'react';
import { <%= componentName %> } from './index';

export default {
  title: '<%= feature %>/<%= componentName %>',
  component: <%= componentName %>,
} as Meta;

const Template: Story<ComponentProps<typeof <%= componentName %>>> = (args) => (
  <<%= componentName %> {...args} />
);

export const Context = Template.bind({});
Context.args = {};
