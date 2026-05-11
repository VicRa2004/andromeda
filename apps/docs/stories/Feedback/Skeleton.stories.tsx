import type { Meta, StoryObj } from "@storybook/react";
import { Skeleton, Card } from "@andromeda/ui-react";

const meta: Meta<typeof Skeleton> = {
	title: "Feedback/Skeleton",
	component: Skeleton,
	tags: ["autodocs"],
	argTypes: {
		variant: {
			control: "select",
			options: ["text", "circle", "rectangle"],
		},
	},
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
	args: {
		variant: "text",
		width: "100%",
	},
};

export const Circle: Story = {
	args: {
		variant: "circle",
		width: "64px",
		height: "64px",
	},
};

export const Rectangle: Story = {
	args: {
		variant: "rectangle",
		width: "200px",
		height: "100px",
	},
};

export const CardLoadingState: Story = {
	render: () => (
		<Card style={{ width: "300px" }}>
			<div style={{ display: "flex", gap: "16px", marginBottom: "16px" }}>
				<Skeleton variant="circle" width="48px" height="48px" />
				<div
					style={{
						flex: 1,
						display: "flex",
						flexDirection: "column",
						gap: "8px",
						justifyContent: "center",
					}}
				>
					<Skeleton variant="text" width="60%" />
					<Skeleton variant="text" width="40%" />
				</div>
			</div>
			<Skeleton
				variant="rectangle"
				height="120px"
				style={{ marginBottom: "16px" }}
			/>
			<Skeleton variant="text" />
			<Skeleton variant="text" />
			<Skeleton variant="text" width="80%" />
		</Card>
	),
};
