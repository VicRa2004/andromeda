import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "@andromeda/ui-react";

const meta = {
	title: "Forms/Checkbox",
	component: Checkbox,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		label: "Accept terms and conditions",
	},
};

export const Checked: Story = {
	args: {
		label: "Subscribe to newsletter",
		defaultChecked: true,
	},
};

export const Disabled: Story = {
	args: {
		label: "You cannot change this",
		disabled: true,
	},
};

export const DisabledChecked: Story = {
	args: {
		label: "You cannot change this either",
		disabled: true,
		defaultChecked: true,
	},
};
