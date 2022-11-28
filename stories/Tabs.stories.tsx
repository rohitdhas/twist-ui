import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Tabs } from '../src';

const meta: Meta = {
  title: 'Tabs',
  component: Tabs,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = args => (
  <Tabs
    {...args}
    items={[
      {
        label: 'Tab 1',
        key: 'tab-1',
        children: 'Tab 1 Content 🚀',
      },
      { label: 'Tab 2', key: 'tab-2', children: 'Tab 2 Content ✅' },
      { label: 'Tab 3', key: 'tab-3', children: 'Tab 3 Content 🔥' },
    ]}
  />
);

// const Tab1Content = () => (
//   <h2 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Tab 1 Content 🚀</h2>
// );
// const Tab2Content = () => (
//   <h2 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Tab 2 Content 🔥</h2>
// );
// const Tab3Content = () => (
//   <h2 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Tab 3 Content ✅</h2>
// );

export const Default = Template.bind({});

Default.args = {
  onChange: (key: string) => console.log(key),
};
