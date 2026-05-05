import type { Meta, StoryObj } from "@storybook/react";
import { ToastProvider, useToast } from "@andromeda/ui-react";

// Fake component purely for story metadata matching since Toast relies heavily on Context
const ToastDemo = () => {
	const { toast } = useToast();

	return (
		<div style={{ display: "flex", gap: "1rem" }}>
			<button
				type="button"
				className="button button--primary"
				onClick={() =>
					toast({
						title: "Task completed",
						description: "Your task has been successfully marked as completed.",
					})
				}
			>
				Show Toast
			</button>
			<button
				type="button"
				className="button button--secondary"
				onClick={() =>
					toast({
						title: "Error",
						description: "Something went wrong. Please try again.",
					})
				}
			>
				Show Error Toast
			</button>
		</div>
	);
};

const meta = {
	title: "Feedback/Toast",
	component: ToastDemo,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	decorators: [
		(Story) => (
			<ToastProvider>
				<Story />
			</ToastProvider>
		),
	],
} satisfies Meta<typeof ToastDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
