import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Tooltip, Button } from '../src';

const meta: Meta = {
  title: 'Tooltip',
  component: Tooltip,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = args => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '2rem',
      }}
    >
      <Tooltip {...args} content="Some random text 🔥">
        <Button label="Hover Me" />
      </Tooltip>
    </div>
  );
};

export const Default = Template.bind({});
