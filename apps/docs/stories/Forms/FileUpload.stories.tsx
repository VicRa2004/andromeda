import type { Meta, StoryObj } from "@storybook/react";
import { FileUpload } from "@andromeda/ui-react";

const meta: Meta<typeof FileUpload> = {
	title: "Forms/FileUpload",
	component: FileUpload,
	tags: ["autodocs"],
	argTypes: {
		multiple: { control: "boolean" },
		accept: { control: "text" },
	},
	decorators: [
		(Story) => (
			<div style={{ maxWidth: "600px" }}>
				<Story />
			</div>
		),
	],
};

export default meta;
type Story = StoryObj<typeof FileUpload>;

export const Default: Story = {
	args: {
		onChange: (files) => console.log("Files changed:", files),
	},
};

export const MultipleImages: Story = {
	args: {
		multiple: true,
		accept: "image/*",
		maxSize: 5 * 1024 * 1024, // 5MB
		onChange: (files) => console.log("Images selected:", files),
	},
};
