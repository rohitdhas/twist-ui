import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Radio } from '../src';

const meta: Meta = {
  title: 'Radio',
  component: Radio,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = args => <Radio itemList={[]} {...args} />;
export const Default = Template.bind({});

Default.args = {
  itemList: ['One', 'Two', 'Three', 'Four'],
  onSelect: (val: string) => console.log(val),
};
