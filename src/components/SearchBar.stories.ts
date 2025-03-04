import type { Meta, StoryObj } from "@storybook/react";
import { SearchBar } from "./SearchBar";
import { fn } from "@storybook/test";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/SearchBar",
  component: SearchBar,
  parameters: {
    docs: {
      description: {
        component:
          "SearchBar component is designed to allow users to search for items by typing a search query",
      },
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  args: {
    onChangeHandler: fn(),
  },
} satisfies Meta<typeof SearchBar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    placeholderText: "Search",
  },
};
