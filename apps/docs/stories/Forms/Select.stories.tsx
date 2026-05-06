import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "@andromeda/ui-react";

const meta = {
	title: "Forms/Select",
	component: Select,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		label: "Country",
	},
	render: (args) => (
		<Select {...args} style={{ minWidth: "200px" }}>
			<option value="" disabled selected>
				Select a country
			</option>
			<option value="us">United States</option>
			<option value="ca">Canada</option>
			<option value="mx">Mexico</option>
			<option value="uk">United Kingdom</option>
		</Select>
	),
};

export const WithError: Story = {
	args: {
		label: "Theme",
		error: "Please select a valid theme",
	},
	render: (args) => (
		<Select {...args} style={{ minWidth: "200px" }}>
			<option value="light">Light</option>
			<option value="dark">Dark</option>
			<option value="system">System</option>
		</Select>
	),
};

export const Disabled: Story = {
	args: {
		label: "Language",
		disabled: true,
	},
	render: (args) => (
		<Select {...args} style={{ minWidth: "200px" }}>
			<option value="en" selected>
				English
			</option>
			<option value="es">Spanish</option>
		</Select>
	),
};
