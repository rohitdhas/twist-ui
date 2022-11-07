import React from 'react';
import { Meta, Story } from '@storybook/react';
import { InputText } from '../src';

const meta: Meta = {
  title: 'Input',
  component: InputText,
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

const Template: Story = args => <InputText {...args} />;
export const Default = Template.bind({});

Default.args = { placeholder: 'Enter Value...', searchIcon: false };
