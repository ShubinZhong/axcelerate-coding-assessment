import type { Meta, StoryObj } from "@storybook/react";
import { Section } from "./Section";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Section",
  component: Section,
  parameters: {
    docs: {
      description: {
        component:
          "Section component displays a collapsible list of `ListItem` components, with a clickable header to toggle the list's visibility.",
      },
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Section>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    sectionName: "Absent",
    isActive: true,
    showEmail: false,
    listContent: [
      {
        contactName: "Dianne Russell",
        email: "dianne@hotmail.com",
        avatar: "",
        isActive: false,
        isEnabled: false,
      },
      {
        contactName: "Ronald Richards",
        email: "ronald@hotmail.com",
        avatar: "",
        isActive: false,
        isEnabled: false,
      },
      {
        contactName: "Arlene McCoy",
        email: "arlene@hotmail.com",
        avatar: "",
        isActive: false,
        isEnabled: false,
      },
      {
        contactName: "Kathryn Murphy",
        email: "kathryn@hotmail.com",
        avatar: "",
        isActive: false,
        isEnabled: false,
      },
    ],
  },
};
