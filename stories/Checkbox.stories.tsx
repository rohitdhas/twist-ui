import React from 'react';
import { Meta, Story } from '@storybook/react';
import { CheckboxGroup } from '../src';

const meta: Meta = {
  title: 'CheckboxGroup',
  component: CheckboxGroup,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = args => <CheckboxGroup itemList={[]} {...args} />;
export const Default = Template.bind({});

Default.args = {
  itemList: ['Apple', 'Mango', 'Banana', 'Pinapple'],
  onSelect: (val: string) => console.log(val),
};
