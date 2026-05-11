import type { Meta, StoryObj } from "@storybook/react";
import { Progress } from "@andromeda/ui-react";

const meta: Meta<typeof Progress> = {
	title: "Feedback/Progress",
	component: Progress,
	tags: ["autodocs"],
	argTypes: {
		size: {
			control: "select",
			options: ["sm", "md", "lg"],
		},
		variant: {
			control: "select",
			options: ["primary", "secondary", "success", "error"],
		},
		indeterminate: {
			control: "boolean",
		},
		striped: {
			control: "boolean",
		},
	},
	decorators: [
		(Story) => (
			<div style={{ width: "100%", maxWidth: "400px", padding: "1rem" }}>
				<Story />
			</div>
		),
	],
};

export default meta;
type Story = StoryObj<typeof Progress>;

export const Default: Story = {
	args: {
		value: 60,
	},
};

export const WithLabel: Story = {
	args: {
		value: 45,
		label: "Uploading file...",
		showPercentage: true,
	},
};

export const Variants: Story = {
	render: () => (
		<div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
			<Progress value={80} variant="primary" />
			<Progress value={60} variant="secondary" />
			<Progress value={100} variant="success" />
			<Progress value={30} variant="error" />
		</div>
	),
};

export const Sizes: Story = {
	render: () => (
		<div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
			<Progress value={40} size="sm" />
			<Progress value={60} size="md" />
			<Progress value={80} size="lg" />
		</div>
	),
};

export const Indeterminate: Story = {
	args: {
		indeterminate: true,
		label: "Processing data...",
	},
};

export const Striped: Story = {
	args: {
		value: 75,
		striped: true,
	},
};
