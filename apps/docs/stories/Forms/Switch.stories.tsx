import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "@andromeda/ui-react";

const meta = {
	title: "Forms/Switch",
	component: Switch,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		label: "Enable notifications",
	},
};

export const Checked: Story = {
	args: {
		label: "Dark mode active",
		defaultChecked: true,
	},
};

export const Disabled: Story = {
	args: {
		label: "Airplane mode",
		disabled: true,
	},
};

export const DisabledChecked: Story = {
	args: {
		label: "Always on",
		disabled: true,
		defaultChecked: true,
	},
};
