import type { Meta, StoryObj } from "@storybook/react";
import { ListItem } from "./ListItem";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/ContactListItem",
  component: ListItem,
  parameters: {
    docs: {
      description: {
        component:
          "ListItem component displays a user's basic information, including their name, avatar, and email.",
      },
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof ListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Base: Story = {
  args: {
    showEmail: true,
    contactName: "Jane Doe",
    email: "jane@hotmail.com",
    avatar: "",
    isActive: false,
    isEnabled: false,
  },
};

export const Active: Story = {
  args: {
    showEmail: true,
    contactName: "Jane Doe",
    email: "jane@hotmail.com",
    avatar: "",
    isActive: true,
    isEnabled: false,
  },
};

export const Enabled: Story = {
  args: {
    showEmail: true,
    contactName: "Jane Doe",
    email: "jane@hotmail.com",
    avatar: "",
    isActive: false,
    isEnabled: true,
  },
};
