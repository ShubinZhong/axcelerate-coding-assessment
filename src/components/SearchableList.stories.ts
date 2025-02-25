import type { Meta, StoryObj } from "@storybook/react";
import { SearchableList } from "./SearchableList";
import { expect, userEvent, within } from "@storybook/test";
import { absentGroup, attendedGroup } from "../helpers/data-helper";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/SearchableList",
  component: SearchableList,
  parameters: {
    docs: {
      description: {
        component:
          "SearchableList component displays multiple `Section` components and includes a `SearchBar` for users to search and filter through the lists to find specific users based on their name",
      },
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof SearchableList>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
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

const testSectionById = async (id: string, canvasElement: HTMLElement) => {
  const canvas = within(canvasElement);

  await userEvent.click(canvas.getByTestId(id));
  await expect(canvas.queryByTestId(`${id}-result`)).toBeNull();

  await userEvent.click(canvas.getByTestId(id));
  await expect(canvas.getByTestId(`${id}-result`)).toBeInTheDocument();
};

export const TestClickAttendedSection: Story = {
  ...Standard,
  play: async ({ canvasElement }) => {
    await testSectionById("Attended", canvasElement);
  },
};

export const TestClickAbsentSection: Story = {
  ...Standard,
  play: async ({ canvasElement }) => {
    await testSectionById("Absent", canvasElement);
  },
};
