import type { Meta, StoryObj } from "@storybook/react";
import { Tag } from "@andromeda/ui-react";

const meta: Meta<typeof Tag> = {
	title: "DataDisplay/Tag",
	component: Tag,
	tags: ["autodocs"],
	argTypes: {
		variant: {
			control: "select",
			options: ["default", "primary", "secondary", "outline"],
		},
	},
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Default: Story = {
	args: {
		children: "React",
	},
};

export const Variants: Story = {
	render: () => (
		<div style={{ display: "flex", gap: "8px" }}>
			<Tag variant="default">Default</Tag>
			<Tag variant="primary">Primary</Tag>
			<Tag variant="secondary">Secondary</Tag>
			<Tag variant="outline">Outline</Tag>
		</div>
	),
};

export const Closable: Story = {
	render: () => (
		<div style={{ display: "flex", gap: "8px" }}>
			<Tag variant="default" onClose={() => alert("Close tag")}>
				Default
			</Tag>
			<Tag variant="primary" onClose={() => alert("Close tag")}>
				Primary
			</Tag>
			<Tag variant="secondary" onClose={() => alert("Close tag")}>
				Secondary
			</Tag>
			<Tag variant="outline" onClose={() => alert("Close tag")}>
				Outline
			</Tag>
		</div>
	),
};
