import React from 'react';
import { Meta, Story } from '@storybook/react';
import { RadioGroup } from '../src';

const meta: Meta = {
  title: 'RadioGroup',
  component: RadioGroup,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = args => <RadioGroup itemList={[]} {...args} />;
export const Default = Template.bind({});

Default.args = {
  itemList: ['One', 'Two', 'Three', 'Four'],
  onSelect: (val: string) => console.log(val),
};
