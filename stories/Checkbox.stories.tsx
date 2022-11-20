import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Checkbox } from '../src';

const meta: Meta = {
  title: 'Checkbox',
  component: Checkbox,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = args => <Checkbox itemList={[]} {...args} />;
export const Default = Template.bind({});

Default.args = {
  itemList: ['Apple', 'Mango', 'Banana', 'Pinapple'],
  onSelect: (val: string) => console.log(val),
};
