import type { Meta, StoryObj } from "@storybook/react";
import { Dropdown, DropdownItem, Button } from "@andromeda/ui-react";

const meta: Meta<typeof Dropdown> = {
	title: "Navigation/Dropdown",
	component: Dropdown,
	tags: ["autodocs"],
	argTypes: {
		size: {
			control: "select",
			options: ["sm", "md", "lg"],
		},
	},
	decorators: [
		(Story) => (
			<div
				style={{
					minHeight: "200px",
					padding: "2rem",
					display: "flex",
					justifyContent: "center",
				}}
			>
				<Story />
			</div>
		),
	],
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
	args: {
		trigger: <Button variant="outline">Options</Button>,
		children: [
			<DropdownItem key="1">Profile</DropdownItem>,
			<DropdownItem key="2">Settings</DropdownItem>,
			<DropdownItem key="3" disabled>
				Billing (disabled)
			</DropdownItem>,
			<DropdownItem key="4" style={{ color: "var(--ds-color-error)" }}>
				Logout
			</DropdownItem>,
		],
	},
};

export const Small: Story = {
	args: {
		...Default.args,
		size: "sm",
		trigger: <Button size="sm">Small Dropdown</Button>,
	},
};

export const Large: Story = {
	args: {
		...Default.args,
		size: "lg",
		trigger: <Button size="lg">Large Dropdown</Button>,
	},
};
