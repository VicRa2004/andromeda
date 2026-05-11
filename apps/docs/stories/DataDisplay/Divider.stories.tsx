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
		variant: {
			control: "select",
			options: ["default", "thick", "dashed", "gradient"],
		},
		spacing: {
			control: "select",
			options: ["compact", "default", "spacious"],
		},
		color: {
			control: "select",
			options: ["default", "primary", "secondary"],
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
		<div style={{ width: "400px" }}>
			<p>Content above</p>
			<Divider {...args} />
			<p>Content below</p>
		</div>
	),
};

export const Vertical: Story = {
	render: (args) => (
		<div
			style={{
				display: "flex",
				height: "50px",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<div style={{ display: "flex", alignItems: "center" }}>Left content</div>
			<Divider {...args} orientation="vertical" />
			<div style={{ display: "flex", alignItems: "center" }}>Right content</div>
		</div>
	),
};

export const Thick: Story = {
	render: (args) => (
		<div style={{ width: "400px" }}>
			<p>Content above</p>
			<Divider {...args} variant="thick" />
			<p>Content below</p>
		</div>
	),
};

export const Dashed: Story = {
	render: (args) => (
		<div style={{ width: "400px" }}>
			<p>Content above</p>
			<Divider {...args} variant="dashed" />
			<p>Content below</p>
		</div>
	),
};

export const Gradient: Story = {
	render: (args) => (
		<div style={{ width: "400px" }}>
			<p>Content above</p>
			<Divider {...args} variant="gradient" />
			<p>Content below</p>
		</div>
	),
};

export const AllVariants: Story = {
	render: () => (
		<div style={{ width: "400px" }}>
			<p style={{ fontSize: "12px", color: "#888" }}>Default</p>
			<Divider />
			<p style={{ fontSize: "12px", color: "#888" }}>Thick</p>
			<Divider variant="thick" />
			<p style={{ fontSize: "12px", color: "#888" }}>Dashed</p>
			<Divider variant="dashed" />
			<p style={{ fontSize: "12px", color: "#888" }}>Gradient</p>
			<Divider variant="gradient" />
		</div>
	),
};

export const Colors: Story = {
	render: () => (
		<div style={{ width: "400px" }}>
			<p style={{ fontSize: "12px", color: "#888" }}>Default</p>
			<Divider />
			<p style={{ fontSize: "12px", color: "#888" }}>Primary</p>
			<Divider color="primary" />
			<p style={{ fontSize: "12px", color: "#888" }}>Secondary</p>
			<Divider color="secondary" />
		</div>
	),
};
