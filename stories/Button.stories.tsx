import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button } from '../src';

const meta: Meta = {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = args => <Button label={''} {...args} />;
export const Primary = Template.bind({});
export const Secondary = Template.bind({});

Primary.args = { label: 'Primary' };
Secondary.args = { label: '' };
