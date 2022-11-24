import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Alert } from '../src';

const meta: Meta = {
  title: 'Alert',
  component: Alert,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = args => {
  return (
    <div>
      <Alert
        style={{ margin: '10px 0' }}
        message="This is info alert"
        varient="info"
        closeIcon={true}
        {...args}
      />
      <Alert
        style={{ margin: '10px 0' }}
        message="This is success alert"
        varient="success"
        closeIcon={true}
        {...args}
      />
      <Alert
        style={{ margin: '10px 0' }}
        message="This is danger alert"
        varient="danger"
        closeIcon={true}
        {...args}
      />
      <Alert
        style={{ margin: '10px 0' }}
        message="This is warn alert"
        varient="warn"
        closeIcon={true}
        {...args}
      />
    </div>
  );
};
export const Default = Template.bind({});
