import type { Meta, StoryObj } from "@storybook/react";
import { Pagination } from "@andromeda/ui-react";
import { useState } from "react";

const meta: Meta<typeof Pagination> = {
	title: "Navigation/Pagination",
	component: Pagination,
	tags: ["autodocs"],
	argTypes: {
		size: {
			control: "select",
			options: ["sm", "md", "lg"],
		},
		rounded: {
			control: "boolean",
		},
		siblingCount: {
			control: "number",
		},
	},
};

export default meta;
type Story = StoryObj<typeof Pagination>;

const PaginationWithState = (args: any) => {
	const [page, setPage] = useState(1);
	return <Pagination {...args} currentPage={page} onPageChange={setPage} />;
};

export const Default: Story = {
	render: (args) => <PaginationWithState {...args} />,
	args: {
		totalPages: 10,
	},
};

export const Small: Story = {
	render: (args) => <PaginationWithState {...args} />,
	args: {
		totalPages: 5,
		size: "sm",
	},
};

export const Large: Story = {
	render: (args) => <PaginationWithState {...args} />,
	args: {
		totalPages: 5,
		size: "lg",
	},
};

export const Rounded: Story = {
	render: (args) => <PaginationWithState {...args} />,
	args: {
		totalPages: 8,
		rounded: true,
	},
};

export const ManyPages: Story = {
	render: (args) => <PaginationWithState {...args} />,
	args: {
		totalPages: 100,
		siblingCount: 2,
	},
};
