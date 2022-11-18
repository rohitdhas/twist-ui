import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Select } from '../src';

const meta: Meta = {
  title: 'Select',
  component: Select,
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

const Template: Story = args => <Select itemList={['one', 'two']} {...args} />;
export const Default = Template.bind({});

Default.args = { itemList: ['one', 'two'] };
