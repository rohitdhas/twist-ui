import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Card, Button } from '../src';

const meta: Meta = {
  title: 'Card',
  component: Card,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = args => {
  return (
    <div style={{ height: 'auto', width: '400px' }}>
      <Card {...args}>
        <h1
          style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'slategray' }}
        >
          Simple Card
        </h1>
        <p style={{ color: 'gray', margin: '10px 0' }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
          sed consequuntur error repudiandae numquam deserunt quisquam repellat
          libero asperiores earum nam nobis, culpa ratione quam perferendis
          esse, cupiditate neque quas!
        </p>
        <Button label="Close" />
      </Card>
    </div>
  );
};
export const Default = Template.bind({});
