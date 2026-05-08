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
		variant: {
			control: "radio",
			options: ["default", "primary", "secondary"],
		},
	},
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleRows = [
	{ id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
	{ id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
	{ id: 3, name: "Bob Johnson", email: "bob@example.com", role: "Editor" },
	{ id: 4, name: "Alice Brown", email: "alice@example.com", role: "Viewer" },
];

const renderTable = (args: any) => (
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
			{sampleRows.map((row) => (
				<Table.Row key={row.id}>
					<Table.Cell>{row.id}</Table.Cell>
					<Table.Cell>{row.name}</Table.Cell>
					<Table.Cell>{row.email}</Table.Cell>
					<Table.Cell>{row.role}</Table.Cell>
				</Table.Row>
			))}
		</Table.Body>
	</Table>
);

export const Default: Story = {
	args: {
		hoverable: true,
		striped: false,
		variant: "default",
	},
	render: renderTable,
};

export const Primary: Story = {
	args: {
		hoverable: true,
		striped: false,
		variant: "primary",
	},
	render: renderTable,
};

export const Secondary: Story = {
	args: {
		hoverable: true,
		striped: false,
		variant: "secondary",
	},
	render: renderTable,
};

export const Striped: Story = {
	args: {
		hoverable: false,
		striped: true,
		variant: "default",
	},
	render: renderTable,
};

export const StripedHoverable: Story = {
	args: {
		hoverable: true,
		striped: true,
		variant: "default",
	},
	render: renderTable,
};
