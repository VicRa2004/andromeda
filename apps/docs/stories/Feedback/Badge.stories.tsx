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
			options: [
				"primary",
				"secondary",
				"neutral",
				"success",
				"warning",
				"error",
				"info",
			],
		},
		size: {
			control: "select",
			options: ["sm", "md", "lg"],
		},
		dot: {
			control: "boolean",
		},
		outline: {
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

export const Sizes: Story = {
	render: () => (
		<div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
			<Badge variant="primary" size="sm">
				Small
			</Badge>
			<Badge variant="primary" size="md">
				Default
			</Badge>
			<Badge variant="primary" size="lg">
				Large
			</Badge>
		</div>
	),
};

export const Outline: Story = {
	render: () => (
		<div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
			<Badge variant="primary" outline>
				Primary
			</Badge>
			<Badge variant="secondary" outline>
				Secondary
			</Badge>
			<Badge variant="success" outline>
				Success
			</Badge>
			<Badge variant="warning" outline>
				Warning
			</Badge>
			<Badge variant="error" outline>
				Error
			</Badge>
			<Badge variant="info" outline>
				Info
			</Badge>
		</div>
	),
};

export const AllVariants: Story = {
	render: () => (
		<div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
			<Badge variant="primary">Primary</Badge>
			<Badge variant="secondary">Secondary</Badge>
			<Badge variant="neutral">Neutral</Badge>
			<Badge variant="success">Success</Badge>
			<Badge variant="warning">Warning</Badge>
			<Badge variant="error">Error</Badge>
			<Badge variant="info">Info</Badge>
		</div>
	),
};

export const Dot: Story = {
	render: () => (
		<div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
			<Badge variant="success" dot size="sm" />
			<Badge variant="warning" dot />
			<Badge variant="error" dot size="lg" />
		</div>
	),
};
