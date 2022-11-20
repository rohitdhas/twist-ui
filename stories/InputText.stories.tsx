import React from 'react';
import { Meta, Story } from '@storybook/react';
import { InputText } from '../src';

const meta: Meta = {
  title: 'InputText',
  component: InputText,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = args => <InputText {...args} />;
export const Default = Template.bind({});

Default.args = { placeholder: 'Enter Value...', searchIcon: false };
