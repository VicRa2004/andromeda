import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "@andromeda/ui-react";

const meta = {
	title: "Forms/Textarea",
	component: Textarea,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		disabled: {
			control: "boolean",
		},
	},
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		label: "Message",
		placeholder: "Write your message here...",
	},
};

export const WithHelpText: Story = {
	args: {
		label: "Bio",
		placeholder: "Tell us about yourself",
		helpText: "Maximum 500 characters.",
	},
};

export const WithError: Story = {
	args: {
		label: "Feedback",
		defaultValue: "This is a bad message...",
		error: "Please avoid inappropriate language.",
	},
};

export const Disabled: Story = {
	args: {
		label: "Notes",
		defaultValue: "These notes cannot be edited right now.",
		disabled: true,
	},
};
