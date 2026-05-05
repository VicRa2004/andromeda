import type { Meta, StoryObj } from "@storybook/react";
import { Divider } from "@andromeda/ui-react";

const meta = {
	title: "Data Display/Divider",
	component: Divider,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		orientation: {
			control: "select",
			options: ["horizontal", "vertical"],
		},
		transparent: {
			control: "boolean",
		},
	},
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
	render: (args) => (
		<div style={{ width: "300px" }}>
			<p>Content above</p>
			<Divider {...args} />
			<p>Content below</p>
		</div>
	),
};

export const Vertical: Story = {
	render: (args) => (
		<div style={{ display: "flex", height: "50px", alignItems: "center" }}>
			<p>Left content</p>
			<Divider {...args} orientation="vertical" />
			<p>Right content</p>
		</div>
	),
};
