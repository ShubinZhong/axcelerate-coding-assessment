import type { Meta, StoryObj } from "@storybook/react";

import { SearchableList } from "./SearchableList";
import attendedList from "../data/attended-list.json";
import absentList from "../data/absent-list.json";
import { ListItemProps } from "./ListItem";
import { expect, userEvent, within } from "@storybook/test";

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
  showEmail: true,
  avatar: a.avatar,
}));
const absentGroup: ListItemProps[] = absentList.map((a) => ({
  contactName: a.contactName,
  isActive: a.isActive === "true",
  isEnabled: a.isEnabled === "true",
  email: a.email,
  showEmail: true,
  avatar: a.avatar,
}));

export const Standard: Story = {
  args: {
    showEmail: false,
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

export const EmailVariation: Story = {
  args: {
    showEmail: true,
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

export const TestSearch: Story = {
  ...Standard,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.type(canvas.getByTestId("name-search"), "R");
    await expect(canvas.getByText("Ronald Richards")).toBeInTheDocument();
    await expect(canvas.getByText("Ralph Edwards")).toBeInTheDocument();
  },
};
