import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button } from '../src';

const meta: Meta = {
  title: 'Button',
  component: Button,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = args => <Button {...args} />;
export const Primary = Template.bind({});
export const Success = Template.bind({});
export const Danger = Template.bind({});
export const Warn = Template.bind({});

Primary.args = { label: 'Primary', varient: 'primary' };
Success.args = { label: 'Success', varient: 'success' };
Danger.args = { label: 'Danger', varient: 'danger' };
Warn.args = { label: 'Warn', varient: 'warn' };
