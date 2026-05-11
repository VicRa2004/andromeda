import type { Meta, StoryObj } from "@storybook/react";
import { Steps, Step, Button } from "@andromeda/ui-react";
import { useState } from "react";

const meta: Meta<typeof Steps> = {
	title: "Navigation/Steps",
	component: Steps,
	tags: ["autodocs"],
	argTypes: {
		direction: {
			control: "select",
			options: ["horizontal", "vertical"],
		},
		current: {
			control: "number",
		},
	},
};

export default meta;
type Story = StoryObj<typeof Steps>;

export const Default: Story = {
	args: {
		current: 1,
		children: [
			<Step key="1" title="Account" description="Create an account" />,
			<Step key="2" title="Profile" description="Add profile details" />,
			<Step key="3" title="Payment" description="Add payment method" />,
			<Step key="4" title="Done" />,
		],
	},
};

export const Vertical: Story = {
	args: {
		current: 2,
		direction: "vertical",
		children: [
			<Step key="1" title="Ordered" description="Nov 10, 2024" />,
			<Step key="2" title="Processing" description="Nov 11, 2024" />,
			<Step key="3" title="Shipping" description="Pending" />,
			<Step key="4" title="Delivered" description="Pending" />,
		],
	},
};

export const Interactive: Story = {
	render: (args) => {
		const [current, setCurrent] = useState(0);

		return (
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					gap: "32px",
					maxWidth: "600px",
				}}
			>
				<Steps {...args} current={current}>
					<Step title="Step 1" />
					<Step title="Step 2" />
					<Step title="Step 3" />
				</Steps>
				<div
					style={{ display: "flex", gap: "16px", justifyContent: "flex-end" }}
				>
					<Button
						variant="outline"
						onClick={() => setCurrent((c) => Math.max(0, c - 1))}
						disabled={current === 0}
					>
						Previous
					</Button>
					<Button
						onClick={() => setCurrent((c) => Math.min(3, c + 1))}
						disabled={current === 3}
					>
						Next
					</Button>
				</div>
			</div>
		);
	},
};
