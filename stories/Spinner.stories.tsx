import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Spinner } from '../src';

const meta: Meta = {
  title: 'Spinner',
  component: Spinner,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = _args => {
  return (
    <div style={{ display: 'flex' }}>
      <Spinner style={{ margin: '0 5px' }} varient="primary" />
      <Spinner style={{ margin: '0 5px' }} varient="success" />
      <Spinner style={{ margin: '0 5px' }} varient="danger" />
      <Spinner style={{ margin: '0 5px' }} varient="warn" />
    </div>
  );
};
export const Default = Template.bind({});
