import { Meta, Story } from '@storybook/react';
import { ComponentProps } from 'react';

import Index from './index';

export default {
  title: 'uiParts/Alert',
  component: Index,
} as Meta;

const Template: Story<ComponentProps<typeof Index>> = (args) => (
  <Index {...args} />
);

export const Context1 = Template.bind({});
Context1.args = {};
