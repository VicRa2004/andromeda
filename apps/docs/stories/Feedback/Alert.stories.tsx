import type { Meta, StoryObj } from "@storybook/react";
import { Alert } from "@andromeda/ui-react";
import { Info, CheckCircle, TriangleAlert, CircleX } from "lucide-react";

const meta = {
	title: "Feedback/Alert",
	component: Alert,
	parameters: {
		layout: "padded",
	},
	tags: ["autodocs"],
	argTypes: {
		variant: {
			control: "select",
			options: ["info", "success", "warning", "error"],
		},
	},
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		variant: "info",
	},
	render: (args) => (
		<Alert {...args}>
			<Alert.Icon>
				<Info size={18} />
			</Alert.Icon>
			<Alert.Content>
				<Alert.Title>Information</Alert.Title>
				<Alert.Description>
					This is a generic informational alert message.
				</Alert.Description>
			</Alert.Content>
		</Alert>
	),
};

export const Success: Story = {
	args: {
		variant: "success",
	},
	render: (args) => (
		<Alert {...args}>
			<Alert.Icon>
				<CheckCircle size={18} />
			</Alert.Icon>
			<Alert.Content>
				<Alert.Title>Success!</Alert.Title>
				<Alert.Description>
					Your profile has been successfully updated.
				</Alert.Description>
			</Alert.Content>
		</Alert>
	),
};

export const Warning: Story = {
	args: {
		variant: "warning",
	},
	render: (args) => (
		<Alert {...args}>
			<Alert.Icon>
				<TriangleAlert size={18} />
			</Alert.Icon>
			<Alert.Content>
				<Alert.Title>Warning</Alert.Title>
				<Alert.Description>
					Your subscription is expiring in 3 days. Please renew to avoid
					interruption.
				</Alert.Description>
			</Alert.Content>
		</Alert>
	),
};

export const ErrorAlert: Story = {
	args: {
		variant: "error",
	},
	render: (args) => (
		<Alert {...args}>
			<Alert.Icon>
				<CircleX size={18} />
			</Alert.Icon>
			<Alert.Content>
				<Alert.Title>Action Required</Alert.Title>
				<Alert.Description>
					We could not process your payment. Please update your billing method.
				</Alert.Description>
			</Alert.Content>
		</Alert>
	),
};
