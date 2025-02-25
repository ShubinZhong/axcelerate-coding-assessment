import type { Meta, StoryObj } from "@storybook/react";

import { SearchableList } from "./SearchableList";
import attendedList from "../data/attended-list.json";
import absentList from "../data/absent-list.json";
import { ListItemProps } from "./ListItem";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/SearchableList",
  component: SearchableList,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    // layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof SearchableList>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
const attendedGroup: ListItemProps[] = attendedList.map((a) => ({
  contactName: a.contactName,
  isActive: a.isActive === "true",
  isEnabled: a.isEnabled === "true",
  email: a.email,
  showEmail: a.showEmail === "true",
  avatar: a.avatar,
}));
const absentGroup: ListItemProps[] = absentList.map((a) => ({
  contactName: a.contactName,
  isActive: a.isActive === "true",
  isEnabled: a.isEnabled === "true",
  email: a.email,
  showEmail: a.showEmail === "true",
  avatar: a.avatar,
}));
export const Base: Story = {
  args: {
    lists: [
      {
        sectionName: "Attended",
        list: attendedGroup,
        isActive: false,
      },
      {
        sectionName: "Absent",
        list: absentGroup,
        isActive: true,
      },
    ],
  },
};
