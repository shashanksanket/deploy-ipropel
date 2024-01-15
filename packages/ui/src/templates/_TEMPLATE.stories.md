import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { ComponentName } from "./ComponentName";

const meta: Meta<typeof ComponentName> = {
title: "Shared Components/ComponentName",
component: ComponentName,
argTypes: {},
};
export default meta;

type Story = StoryObj<typeof ComponentName>;

export const Base: Story = {
render: (args) => <ComponentName {...args}>ComponentName</ComponentName>,
args: {},
};

// Add more stories for different states or props of the component
