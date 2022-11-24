import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { Drawer, Button } from '../src';

const meta: Meta = {
  title: 'Drawer',
  component: Drawer,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = args => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <Button onClick={() => setVisible(!visible)} label="Toggle Drawer 👆" />
      <Drawer setVisible={setVisible} visible={visible} header="Sample header">
        <p style={{ marginTop: '10px', marginBottom: '20px' }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
          sed consequuntur error repudiandae numquam deserunt quisquam repellat
          libero asperiores earum nam nobis, culpa ratione quam perferendis
          esse, cupiditate neque quas!
        </p>
        <div style={{ display: 'flex' }}>
          <Button
            outlined
            varient="success"
            style={{ marginRight: '10px' }}
            label="✅ Save"
          />
          <Button outlined varient="danger" label="❌ Cancel" />
        </div>
      </Drawer>
    </div>
  );
};
export const Default = Template.bind({});
