import type { Meta, StoryObj } from "@storybook/react";
import { Table } from "@andromeda/ui-react";

const meta = {
	title: "Data Display/Table",
	component: Table,
	parameters: {
		layout: "padded",
	},
	tags: ["autodocs"],
	argTypes: {
		hoverable: {
			control: "boolean",
		},
		striped: {
			control: "boolean",
		},
	},
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		hoverable: true,
		striped: false,
	},
	render: (args) => (
		<Table {...args}>
			<Table.Head>
				<Table.Row>
					<Table.HeadCell>ID</Table.HeadCell>
					<Table.HeadCell>Name</Table.HeadCell>
					<Table.HeadCell>Email</Table.HeadCell>
					<Table.HeadCell>Role</Table.HeadCell>
				</Table.Row>
			</Table.Head>
			<Table.Body>
				<Table.Row>
					<Table.Cell>1</Table.Cell>
					<Table.Cell>John Doe</Table.Cell>
					<Table.Cell>john@example.com</Table.Cell>
					<Table.Cell>Admin</Table.Cell>
				</Table.Row>
				<Table.Row>
					<Table.Cell>2</Table.Cell>
					<Table.Cell>Jane Smith</Table.Cell>
					<Table.Cell>jane@example.com</Table.Cell>
					<Table.Cell>User</Table.Cell>
				</Table.Row>
				<Table.Row>
					<Table.Cell>3</Table.Cell>
					<Table.Cell>Bob Johnson</Table.Cell>
					<Table.Cell>bob@example.com</Table.Cell>
					<Table.Cell>Editor</Table.Cell>
				</Table.Row>
			</Table.Body>
		</Table>
	),
};

export const Striped: Story = {
	args: {
		hoverable: false,
		striped: true,
	},
	render: Default.render,
};
