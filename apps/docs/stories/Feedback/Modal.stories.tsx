import type { Meta, StoryObj } from "@storybook/react";
import { Modal, Button } from "@andromeda/ui-react";
import { useState } from "react";

const meta = {
	title: "Feedback/Modal",
	component: Modal,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		size: {
			control: "radio",
			options: ["sm", "md", "lg", "xl"],
		},
		fullscreen: {
			control: "boolean",
		},
		center: {
			control: "boolean",
		},
		variant: {
			control: "radio",
			options: ["default", "primary", "secondary"],
		},
	},
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<
	Omit<React.ComponentProps<typeof Modal>, "isOpen" | "onClose">
>;

// Usamos un componente funcional para la story para manejar el estado de isOpen
const ModalStory = (args: any) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div>
			<Button variant="primary" onClick={() => setIsOpen(true)}>
				Open Modal
			</Button>

			<Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
				<Modal.Header>
					<Modal.Title>Example Modal</Modal.Title>
					<Modal.CloseButton onClick={() => setIsOpen(false)} />
				</Modal.Header>
				<Modal.Body>
					<p>
						This is the content of the modal. You can place forms, text, or any
						other elements here.
					</p>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="outline" onClick={() => setIsOpen(false)}>
						Close
					</Button>
					<Button variant="primary">Save Changes</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
};

export const Default: Story = {
	render: (args) => <ModalStory {...args} variant="default" />,
};

export const Primary: Story = {
	render: (args) => <ModalStory {...args} variant="primary" />,
};

export const Secondary: Story = {
	render: (args) => <ModalStory {...args} variant="secondary" />,
};

export const Small: Story = {
	args: {
		size: "sm",
	},
	render: (args) => <ModalStory {...args} />,
};

export const Large: Story = {
	args: {
		size: "lg",
	},
	render: (args) => <ModalStory {...args} />,
};
