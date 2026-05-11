import type { Meta, StoryObj } from "@storybook/react";
import { Breadcrumb, BreadcrumbItem } from "@andromeda/ui-react";

const meta: Meta<typeof Breadcrumb> = {
	title: "Navigation/Breadcrumb",
	component: Breadcrumb,
	tags: ["autodocs"],
	argTypes: {
		separator: {
			control: "text",
		},
	},
};

export default meta;
type Story = StoryObj<typeof Breadcrumb>;

export const Default: Story = {
	args: {
		children: [
			<BreadcrumbItem key="1" href="/">
				Home
			</BreadcrumbItem>,
			<BreadcrumbItem key="2" href="/components">
				Components
			</BreadcrumbItem>,
			<BreadcrumbItem key="3" isCurrentPage>
				Breadcrumb
			</BreadcrumbItem>,
		],
	},
};

export const CustomSeparator: Story = {
	args: {
		separator: ">",
		children: [
			<BreadcrumbItem key="1" href="/">
				Store
			</BreadcrumbItem>,
			<BreadcrumbItem key="2" href="/category">
				Electronics
			</BreadcrumbItem>,
			<BreadcrumbItem key="3" isCurrentPage>
				Laptops
			</BreadcrumbItem>,
		],
	},
};

export const IconSeparator: Story = {
	args: {
		separator: (
			<svg
				width="12"
				height="12"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<polyline points="9 18 15 12 9 6"></polyline>
			</svg>
		),
		children: [
			<BreadcrumbItem key="1" href="/">
				Home
			</BreadcrumbItem>,
			<BreadcrumbItem key="2" href="/dashboard">
				Dashboard
			</BreadcrumbItem>,
			<BreadcrumbItem key="3" isCurrentPage>
				Analytics
			</BreadcrumbItem>,
		],
	},
};
