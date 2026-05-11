import type { Meta, StoryObj } from "@storybook/react";
import { Tabs, Tab } from "@andromeda/ui-react";

const meta: Meta<typeof Tabs> = {
	title: "Navigation/Tabs",
	component: Tabs,
	tags: ["autodocs"],
	argTypes: {
		variant: {
			control: "select",
			options: ["underline", "pills", "bordered"],
		},
		orientation: {
			control: "radio",
			options: ["horizontal", "vertical"],
		},
	},
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
	args: {
		variant: "underline",
		defaultValue: "tab1",
		children: [
			<Tab key="1" label="Account" value="tab1">
				<div
					style={{
						padding: "16px",
						border: "1px solid var(--ds-color-border)",
						borderTop: "none",
					}}
				>
					<h3>Account Settings</h3>
					<p>Update your account details here.</p>
				</div>
			</Tab>,
			<Tab key="2" label="Password" value="tab2">
				<div
					style={{
						padding: "16px",
						border: "1px solid var(--ds-color-border)",
						borderTop: "none",
					}}
				>
					<h3>Password</h3>
					<p>Change your password here.</p>
				</div>
			</Tab>,
			<Tab key="3" label="Notifications" value="tab3">
				<div
					style={{
						padding: "16px",
						border: "1px solid var(--ds-color-border)",
						borderTop: "none",
					}}
				>
					<h3>Notifications</h3>
					<p>Manage your notifications here.</p>
				</div>
			</Tab>,
		],
	},
};

export const Pills: Story = {
	args: {
		...Default.args,
		variant: "pills",
		children: [
			<Tab key="1" label="Account" value="tab1">
				<div style={{ padding: "16px" }}>Account content</div>
			</Tab>,
			<Tab key="2" label="Password" value="tab2">
				<div style={{ padding: "16px" }}>Password content</div>
			</Tab>,
		],
	},
};

export const Bordered: Story = {
	args: {
		...Default.args,
		variant: "bordered",
		children: [
			<Tab key="1" label="Account" value="tab1">
				<div style={{ padding: "16px" }}>Account content</div>
			</Tab>,
			<Tab key="2" label="Password" value="tab2">
				<div style={{ padding: "16px" }}>Password content</div>
			</Tab>,
		],
	},
};

export const Vertical: Story = {
	args: {
		...Default.args,
		orientation: "vertical",
		children: [
			<Tab key="1" label="Account Settings" value="tab1">
				<div style={{ padding: "16px", height: "100%" }}>Account content</div>
			</Tab>,
			<Tab key="2" label="Password Options" value="tab2">
				<div style={{ padding: "16px", height: "100%" }}>Password content</div>
			</Tab>,
		],
	},
};
