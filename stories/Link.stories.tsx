import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Link } from '../src';

const meta: Meta = {
  title: 'Link',
  component: Link,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = args => (
  <Link href="#" {...args}>
    This is a link to nowhere!
  </Link>
);
export const Default = Template.bind({});
