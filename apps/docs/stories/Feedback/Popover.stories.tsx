import type { Meta, StoryObj } from "@storybook/react";
import { Popover, Button, Input } from "@andromeda/ui-react";

const meta: Meta<typeof Popover> = {
	title: "Feedback/Popover",
	component: Popover,
	tags: ["autodocs"],
	argTypes: {
		placement: {
			control: "select",
			options: ["top", "right", "bottom", "left"],
		},
	},
	decorators: [
		(Story) => (
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					minHeight: "300px",
				}}
			>
				<Story />
			</div>
		),
	],
};

export default meta;
type Story = StoryObj<typeof Popover>;

const PopoverContent = () => (
	<div
		style={{
			padding: "16px",
			display: "flex",
			flexDirection: "column",
			gap: "12px",
			width: "250px",
		}}
	>
		<h4 style={{ margin: 0 }}>Update details</h4>
		<p
			style={{
				margin: 0,
				fontSize: "0.875rem",
				color: "var(--ds-color-text-secondary)",
			}}
		>
			Set the dimensions for the layer.
		</p>
		<div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
			<label htmlFor="width" style={{ width: "60px", fontSize: "0.875rem" }}>
				Width
			</label>
			<Input id="width" defaultValue="100%" size="sm" />
		</div>
		<div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
			<label htmlFor="height" style={{ width: "60px", fontSize: "0.875rem" }}>
				Height
			</label>
			<Input id="height" defaultValue="25px" size="sm" />
		</div>
	</div>
);

export const Default: Story = {
	args: {
		content: <PopoverContent />,
		children: <Button variant="primary">Open Popover</Button>,
	},
};
