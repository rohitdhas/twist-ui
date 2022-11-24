import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { Dialog, Button } from '../src';

const meta: Meta = {
  title: 'Dialog',
  component: Dialog,
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
      <Dialog header="Hello Twist!" setVisible={setVisible} visible={visible}>
        <p
          style={{
            marginTop: '10px',
            marginBottom: '20px',
            color: 'slategray',
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
          sed consequuntur error repudiandae numquam deserunt quisquam repellat
          libero asperiores earum nam nobis, culpa ratione quam perferendis
          esse, cupiditate neque quas!
        </p>
        <div style={{ display: 'flex' }}>
          <Button style={{ marginRight: '10px' }} label="Save" />
          <Button
            onClick={() => setVisible(false)}
            outlined
            varient="danger"
            label="❌ Close"
          />
        </div>
      </Dialog>
      <Button onClick={() => setVisible(!visible)} label="Show Dialog 🚀" />
    </div>
  );
};
export const Default = Template.bind({});
