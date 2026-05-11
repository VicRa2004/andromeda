import type { Meta, StoryObj } from "@storybook/react";
import { ListGroup, ListGroupItem, Badge } from "@andromeda/ui-react";

const meta: Meta<typeof ListGroup> = {
	title: "DataDisplay/ListGroup",
	component: ListGroup,
	tags: ["autodocs"],
	argTypes: {
		variant: {
			control: "select",
			options: ["bordered", "flush"],
		},
		interactive: {
			control: "boolean",
		},
	},
};

export default meta;
type Story = StoryObj<typeof ListGroup>;

export const Default: Story = {
	args: {
		children: [
			<ListGroupItem key="1">An item</ListGroupItem>,
			<ListGroupItem key="2">A second item</ListGroupItem>,
			<ListGroupItem key="3">A third item</ListGroupItem>,
			<ListGroupItem key="4">A fourth item</ListGroupItem>,
			<ListGroupItem key="5">And a fifth one</ListGroupItem>,
		],
	},
};

export const Interactive: Story = {
	args: {
		interactive: true,
		children: [
			<ListGroupItem key="1" as="button" active>
				Active item
			</ListGroupItem>,
			<ListGroupItem key="2" as="button">
				Clickable item
			</ListGroupItem>,
			<ListGroupItem key="3" as="button">
				Another clickable item
			</ListGroupItem>,
			<ListGroupItem key="4" as="button" disabled>
				Disabled item
			</ListGroupItem>,
		],
	},
};

export const Flush: Story = {
	args: {
		variant: "flush",
		children: [
			<ListGroupItem key="1">An item</ListGroupItem>,
			<ListGroupItem key="2">A second item</ListGroupItem>,
			<ListGroupItem key="3">A third item</ListGroupItem>,
		],
	},
};

export const WithContent: Story = {
	args: {
		interactive: true,
		children: [
			<ListGroupItem
				key="1"
				as="button"
				style={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
				}}
			>
				<span>Messages</span>
				<Badge variant="primary">14</Badge>
			</ListGroupItem>,
			<ListGroupItem
				key="2"
				as="button"
				style={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
				}}
			>
				<span>Notifications</span>
				<Badge variant="secondary">2</Badge>
			</ListGroupItem>,
			<ListGroupItem
				key="3"
				as="button"
				style={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
				}}
			>
				<span>Warnings</span>
				<Badge variant="error">1</Badge>
			</ListGroupItem>,
		],
	},
};
