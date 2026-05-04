import type { Meta, StoryObj } from "@storybook/react";
import { Navigation } from "@andromeda/ui-react";

const meta = {
	title: "Layout/Navigation",
	component: Navigation,
	parameters: {
		layout: "padded",
	},
	tags: ["autodocs"],
	argTypes: {
		variant: {
			control: "select",
			options: ["horizontal", "vertical", "breadcrumb"],
		},
	},
} satisfies Meta<typeof Navigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
	args: {
		variant: "horizontal",
	},
	render: (args) => (
		<Navigation {...args}>
			<Navigation.List>
				<Navigation.Item>
					<Navigation.Link href="#" isActive>Dashboard</Navigation.Link>
				</Navigation.Item>
				<Navigation.Item>
					<Navigation.Link href="#">Projects</Navigation.Link>
				</Navigation.Item>
				<Navigation.Item>
					<Navigation.Link href="#">Team</Navigation.Link>
				</Navigation.Item>
			</Navigation.List>
		</Navigation>
	),
};

export const Vertical: Story = {
	args: {
		variant: "vertical",
	},
	render: (args) => (
		<Navigation {...args} style={{ width: "200px" }}>
			<Navigation.List>
				<Navigation.Item>
					<Navigation.Link href="#" isActive>Overview</Navigation.Link>
				</Navigation.Item>
				<Navigation.Item>
					<Navigation.Link href="#">Settings</Navigation.Link>
				</Navigation.Item>
				<Navigation.Item>
					<Navigation.Link href="#" disabled>Billing (Coming Soon)</Navigation.Link>
				</Navigation.Item>
			</Navigation.List>
		</Navigation>
	),
};

export const Breadcrumb: Story = {
	args: {
		variant: "breadcrumb",
	},
	render: (args) => (
		<Navigation {...args}>
			<Navigation.List>
				<Navigation.Item>
					<Navigation.Link href="#">Home</Navigation.Link>
				</Navigation.Item>
				<Navigation.Item>
					<Navigation.Link href="#">Settings</Navigation.Link>
				</Navigation.Item>
				<Navigation.Item>
					<Navigation.Link href="#" isActive aria-current="page">Profile</Navigation.Link>
				</Navigation.Item>
			</Navigation.List>
		</Navigation>
	),
};
