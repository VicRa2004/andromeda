import type { Meta, StoryObj } from "@storybook/react";
import { Radio } from "@andromeda/ui-react";

const meta = {
	title: "Forms/Radio",
	component: Radio,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		label: "Option 1",
		name: "demo-group",
	},
};

export const Checked: Story = {
	args: {
		label: "Option 2",
		name: "demo-group",
		defaultChecked: true,
	},
};

export const Disabled: Story = {
	args: {
		label: "Disabled option",
		disabled: true,
	},
};

export const Group: Story = {
	render: () => (
		<div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
			<Radio name="my-group" label="Apple" defaultChecked />
			<Radio name="my-group" label="Banana" />
			<Radio name="my-group" label="Orange" />
		</div>
	),
};
