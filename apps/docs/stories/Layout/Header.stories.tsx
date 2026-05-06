import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "@andromeda/ui-react";

const meta = {
	title: "Layout/Header",
	component: Header,
	parameters: {
		layout: "fullscreen",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: (args) => (
		<Header {...args}>
			<Header.Logo href="#">Andromeda</Header.Logo>
			<Header.Nav>
				<Header.Link href="#" isActive>
					Home
				</Header.Link>
				<Header.Link href="#">About</Header.Link>
				<Header.Link href="#">Contact</Header.Link>
			</Header.Nav>
			<Header.Actions>
				<Header.ActionButton>Log In</Header.ActionButton>
				<Header.MenuToggle />
			</Header.Actions>
		</Header>
	),
};

export const Inverted: Story = {
	args: {
		inverted: true,
	},
	render: (args) => (
		<Header {...args}>
			<Header.Logo href="#">Andromeda</Header.Logo>
			<Header.Nav>
				<Header.Link href="#" isActive>
					Home
				</Header.Link>
				<Header.Link href="#">About</Header.Link>
				<Header.Link href="#">Contact</Header.Link>
			</Header.Nav>
			<Header.Actions>
				<Header.ActionButton>Log In</Header.ActionButton>
				<Header.MenuToggle />
			</Header.Actions>
		</Header>
	),
};
