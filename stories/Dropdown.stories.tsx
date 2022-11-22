import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Dropdown } from '../src';

const meta: Meta = {
  title: 'Dropdown',
  component: Dropdown,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = args => {
  return (
    <div>
      <Dropdown itemList={[]} {...args} />
    </div>
  );
};
export const Default = Template.bind({});

Default.args = {
  itemList: ['React ⚛️', 'Angular 🥕', 'Vue ✅', 'Svelte 🔥', 'Remix ⚡'],
  defaultText: 'Select the Best JavaScript Framework',
  onSelect: (val: string) => console.log(val),
};
