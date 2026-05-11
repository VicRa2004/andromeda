import type { Meta, StoryObj } from "@storybook/react";
import { Accordion, AccordionItem } from "@andromeda/ui-react";

const meta: Meta<typeof Accordion> = {
	title: "DataDisplay/Accordion",
	component: Accordion,
	tags: ["autodocs"],
	argTypes: {
		variant: {
			control: "select",
			options: [undefined, "bordered", "flush", "separated"],
		},
		multiple: {
			control: "boolean",
		},
	},
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
	args: {
		children: [
			<AccordionItem key="1" title="Is it accessible?" value="item1">
				Yes. It adheres to the WAI-ARIA design pattern.
			</AccordionItem>,
			<AccordionItem key="2" title="Is it styled?" value="item2">
				Yes. It comes with default styles that matches the other components'
				aesthetic.
			</AccordionItem>,
			<AccordionItem key="3" title="Is it animated?" value="item3">
				Yes. It's animated by default, but you can disable it if you prefer.
			</AccordionItem>,
		],
	},
};

export const Bordered: Story = {
	args: {
		...Default.args,
		variant: "bordered",
	},
};

export const Flush: Story = {
	args: {
		...Default.args,
		variant: "flush",
	},
};

export const Separated: Story = {
	args: {
		...Default.args,
		variant: "separated",
	},
};

export const Multiple: Story = {
	args: {
		...Default.args,
		multiple: true,
	},
};
