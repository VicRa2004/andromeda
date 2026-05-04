import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "@andromeda/ui-react";

const meta = {
	title: "Forms/Input",
	component: Input,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		size: {
			control: "radio",
			options: ["sm", "md", "lg"],
		},
		success: {
			control: "boolean",
		},
		disabled: {
			control: "boolean",
		},
	},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		label: "Email",
		placeholder: "Enter your email",
	},
};

export const WithHelpText: Story = {
	args: {
		label: "Password",
		type: "password",
		placeholder: "Enter your password",
		helpText: "Must be at least 8 characters.",
	},
};

export const WithError: Story = {
	args: {
		label: "Username",
		placeholder: "Enter username",
		error: "This username is already taken.",
	},
};

export const Success: Story = {
	args: {
		label: "Username",
		placeholder: "Enter username",
		success: true,
	},
};

export const Disabled: Story = {
	args: {
		label: "Disabled Input",
		placeholder: "Not editable",
		disabled: true,
	},
};

export const Sizes: Story = {
	render: () => (
		<div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
			<Input size="sm" placeholder="Small input" />
			<Input size="md" placeholder="Medium input" />
			<Input size="lg" placeholder="Large input" />
		</div>
	),
};
