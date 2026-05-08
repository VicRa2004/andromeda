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

export const AllVariants: Story = {
	render: () => (
		<div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
			<Alert variant="info">
				<Alert.Icon>
					<Info size={18} />
				</Alert.Icon>
				<Alert.Content>
					<Alert.Title>Information</Alert.Title>
					<Alert.Description>
						A new software update is available for download.
					</Alert.Description>
				</Alert.Content>
			</Alert>
			<Alert variant="success">
				<Alert.Icon>
					<CheckCircle size={18} />
				</Alert.Icon>
				<Alert.Content>
					<Alert.Title>Success</Alert.Title>
					<Alert.Description>
						Your changes have been saved successfully.
					</Alert.Description>
				</Alert.Content>
			</Alert>
			<Alert variant="warning">
				<Alert.Icon>
					<TriangleAlert size={18} />
				</Alert.Icon>
				<Alert.Content>
					<Alert.Title>Warning</Alert.Title>
					<Alert.Description>
						Your storage is almost full. Consider upgrading your plan.
					</Alert.Description>
				</Alert.Content>
			</Alert>
			<Alert variant="error">
				<Alert.Icon>
					<CircleX size={18} />
				</Alert.Icon>
				<Alert.Content>
					<Alert.Title>Error</Alert.Title>
					<Alert.Description>
						Failed to connect to the server. Please try again later.
					</Alert.Description>
				</Alert.Content>
			</Alert>
		</div>
	),
};
