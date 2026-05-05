import type { Meta, StoryObj } from "@storybook/react";
import { Spinner } from "@andromeda/ui-react";

const meta = {
	title: "Feedback/Spinner",
	component: Spinner,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		size: {
			control: "select",
			options: ["sm", "md", "lg"],
		},
		white: {
			control: "boolean",
		},
	},
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		size: "md",
	},
};

export const Small: Story = {
	args: {
		size: "sm",
	},
};

export const Large: Story = {
	args: {
		size: "lg",
	},
};

export const White: Story = {
	args: {
		size: "md",
		white: true,
	},
	parameters: {
		backgrounds: { default: "dark" },
	},
};
