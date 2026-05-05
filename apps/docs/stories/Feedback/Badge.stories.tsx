import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "@andromeda/ui-react";

const meta = {
	title: "Feedback/Badge",
	component: Badge,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		variant: {
			control: "select",
			options: ["primary", "secondary", "success", "warning", "error", "info"],
		},
		dot: {
			control: "boolean",
		},
	},
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		variant: "primary",
		children: "New",
	},
};

export const Secondary: Story = {
	args: {
		variant: "secondary",
		children: "Draft",
	},
};

export const Success: Story = {
	args: {
		variant: "success",
		children: "Completed",
	},
};

export const Warning: Story = {
	args: {
		variant: "warning",
		children: "Pending",
	},
};

export const ErrorBadge: Story = {
	args: {
		variant: "error",
		children: "Failed",
	},
};

export const Info: Story = {
	args: {
		variant: "info",
		children: "Update available",
	},
};

export const Dot: Story = {
	args: {
		variant: "error",
		dot: true,
	},
};
