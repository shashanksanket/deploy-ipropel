import React from 'react';
import type { StoryFn, Meta } from '@storybook/react';
import Home from '@/app/page';

/* eslint-disable -- random */

export default {
  title: 'Pages/Home',
  component: Home,
} as Meta;

const Template: StoryFn = (args) => <Home {...args} />;

export const Default = Template.bind({});
Default.args = {};
