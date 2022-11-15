import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Textarea } from '../src';

const meta: Meta = {
  title: 'TextArea',
  component: Textarea,
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

const Template: Story = args => <Textarea {...args} />;
export const Default = Template.bind({});

Default.args = { placeholder: 'Write a comment' };
