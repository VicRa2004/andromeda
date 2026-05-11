import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip, Button } from "@andromeda/ui-react";

const meta: Meta<typeof Tooltip> = {
	title: "Feedback/Tooltip",
	component: Tooltip,
	tags: ["autodocs"],
	argTypes: {
		placement: {
			control: "select",
			options: ["top", "right", "bottom", "left"],
		},
		variant: {
			control: "select",
			options: ["dark", "light"],
		},
	},
	decorators: [
		(Story) => (
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					minHeight: "200px",
				}}
			>
				<Story />
			</div>
		),
	],
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
	args: {
		content: "This is a tooltip",
		children: <Button variant="outline">Hover me</Button>,
	},
};

export const LightVariant: Story = {
	args: {
		content: "This is a light tooltip",
		variant: "light",
		children: <Button variant="outline">Hover me</Button>,
	},
};

export const Placements: Story = {
	render: () => (
		<div style={{ display: "flex", gap: "1rem" }}>
			<Tooltip content="Tooltip on top" placement="top">
				<Button variant="ghost">Top</Button>
			</Tooltip>
			<Tooltip content="Tooltip on right" placement="right">
				<Button variant="ghost">Right</Button>
			</Tooltip>
			<Tooltip content="Tooltip on bottom" placement="bottom">
				<Button variant="ghost">Bottom</Button>
			</Tooltip>
			<Tooltip content="Tooltip on left" placement="left">
				<Button variant="ghost">Left</Button>
			</Tooltip>
		</div>
	),
};
