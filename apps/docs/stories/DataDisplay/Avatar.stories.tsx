import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "@andromeda/ui-react";

const meta = {
	title: "Data Display/Avatar",
	component: Avatar,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		size: {
			control: "select",
			options: ["sm", "md", "lg", "xl"],
		},
	},
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		size: "md",
		src: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
		alt: "User Avatar",
	},
};

export const Small: Story = {
	args: {
		size: "sm",
		src: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
		alt: "User Avatar",
	},
};

export const Large: Story = {
	args: {
		size: "lg",
		src: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
		alt: "User Avatar",
	},
};

export const ExtraLarge: Story = {
	args: {
		size: "xl",
		src: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
		alt: "User Avatar",
	},
};

export const FallbackInitials: Story = {
	args: {
		size: "md",
		fallback: "VR",
	},
};
