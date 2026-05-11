import type { Meta, StoryObj } from "@storybook/react";
import { Drawer, Button } from "@andromeda/ui-react";
import { useState } from "react";

const meta: Meta<typeof Drawer> = {
	title: "Feedback/Drawer",
	component: Drawer,
	tags: ["autodocs"],
	argTypes: {
		placement: {
			control: "select",
			options: ["left", "right", "top", "bottom"],
		},
		size: {
			control: "select",
			options: ["sm", "md", "lg", "full"],
		},
		isOpen: {
			control: "boolean",
		},
	},
};

export default meta;
type Story = StoryObj<typeof Drawer>;

const DrawerDemo = (args: any) => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<Button onClick={() => setIsOpen(true)}>Open Drawer</Button>
			<Drawer {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
				<p>Some contents inside the drawer.</p>
				<p>You can close it by clicking the overlay or the close button.</p>
			</Drawer>
		</>
	);
};

export const Default: Story = {
	render: (args) => <DrawerDemo {...args} />,
	args: {
		title: "Drawer Title",
		placement: "right",
		size: "md",
	},
};

export const LeftPlacement: Story = {
	render: (args) => <DrawerDemo {...args} />,
	args: {
		title: "Navigation Menu",
		placement: "left",
		size: "sm",
	},
};

export const BottomPlacement: Story = {
	render: (args) => <DrawerDemo {...args} />,
	args: {
		title: "Bottom Sheet",
		placement: "bottom",
		size: "md",
	},
};
