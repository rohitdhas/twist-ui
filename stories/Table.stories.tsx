import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Table } from '../src';

const meta: Meta = {
  title: 'Table',
  component: Table,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = args => {
  const columns = [
    { title: 'No.', key: 'no', dataIndex: 'number' },
    { title: 'Name', key: 'name', dataIndex: 'name' },
    { title: 'Age', key: 'age', dataIndex: 'age' },
    { title: 'Designation', key: 'designation', dataIndex: 'designation' },
    { title: 'Badge', key: 'badge', dataIndex: 'badge' },
  ];
  const dataSource = [
    {
      number: '1',
      name: 'Jhon Smith',
      age: 20,
      designation: 'CEO',
      badge: '🚀',
    },
    { number: '2', name: 'Ben Awad', age: 19, designation: 'CTO', badge: '🔥' },
    {
      number: '3',
      name: 'Kenny Gorten',
      age: 20,
      designation: 'Team Lead',
      badge: '✅',
    },
    { number: '4', name: 'Amy Woods', age: 21, designation: 'HR', badge: '⚡' },
  ];
  return <Table columns={columns} dataSource={dataSource} />;
};

export const Default = Template.bind({});
