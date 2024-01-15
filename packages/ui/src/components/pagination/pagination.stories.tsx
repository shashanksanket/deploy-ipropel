import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Pagination from "./pagination";

const meta: Meta = {
  title: "Components/Pagination",
  component: Pagination,
};

export default meta;

type Story = StoryObj<typeof Pagination>;

export const Base: Story = {
  render: (args) => <Pagination {...args} />,
  args: {
    currentPage: 5,
    totalPages: 20,
    pageRange: 2,
  },
};
