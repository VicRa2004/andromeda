import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "@andromeda/ui-react";

const meta = {
	title: "Layout/Card",
	component: Card,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		variant: {
			control: "select",
			options: ["elevated", "outlined", "flat"],
		},
	},
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Elevated: Story = {
	args: {
		variant: "elevated",
	},
	render: (args) => (
		<Card {...args} style={{ maxWidth: "300px" }}>
			<Card.Header>
				<Card.Title>Elevated Card</Card.Title>
				<Card.Subtitle>Secondary text</Card.Subtitle>
			</Card.Header>
			<Card.Body>
				<Card.Description>
					This is a basic elevated card. It has a slight box-shadow.
				</Card.Description>
			</Card.Body>
			<Card.Footer>
				<button>Action 1</button>
			</Card.Footer>
		</Card>
	),
};

export const Outlined: Story = {
	args: {
		variant: "outlined",
	},
	render: (args) => (
		<Card {...args} style={{ maxWidth: "300px" }}>
			<Card.Header>
				<Card.Title>Outlined Card</Card.Title>
			</Card.Header>
			<Card.Body>
				<Card.Description>This is an outlined card variant.</Card.Description>
			</Card.Body>
			<Card.Footer>
				<button>Action 1</button>
			</Card.Footer>
		</Card>
	),
};

export const Flat: Story = {
	args: {
		variant: "flat",
	},
	render: (args) => (
		<Card {...args} style={{ maxWidth: "300px", backgroundColor: "#f4f4f5" }}>
			<Card.Header>
				<Card.Title>Flat Card</Card.Title>
			</Card.Header>
			<Card.Body>
				<Card.Description>
					This is a flat card, usually blending more with a container.
				</Card.Description>
			</Card.Body>
		</Card>
	),
};

export const WithImage: Story = {
	render: (args) => (
		<Card {...args} style={{ maxWidth: "300px" }}>
			<Card.Image src="https://via.placeholder.com/300x150" alt="Placeholder" />
			<Card.Header>
				<Card.Title>Card with Image</Card.Title>
			</Card.Header>
			<Card.Body>
				<Card.Description>
					A card component that includes a top image.
				</Card.Description>
			</Card.Body>
		</Card>
	),
};
