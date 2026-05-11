import type { Meta, StoryObj } from "@storybook/react";
import { Timeline, TimelineItem } from "@andromeda/ui-react";

const meta: Meta<typeof Timeline> = {
	title: "DataDisplay/Timeline",
	component: Timeline,
	tags: ["autodocs"],
	argTypes: {
		variant: {
			control: "select",
			options: ["left", "right", "alternate"],
		},
	},
};

export default meta;
type Story = StoryObj<typeof Timeline>;

export const Default: Story = {
	args: {
		children: [
			<TimelineItem
				key="1"
				title="Initial Commit"
				time="2024-01-01"
				description="Started the Andromeda project with a basic setup."
			/>,
			<TimelineItem
				key="2"
				title="First Release"
				time="2024-03-15"
				description="Released v1.0.0 with core components."
			/>,
			<TimelineItem
				key="3"
				title="Design Update"
				time="2024-06-20"
				description="Updated the design system to use glassmorphism and modern shadows."
			/>,
		],
	},
};

export const Alternate: Story = {
	args: {
		variant: "alternate",
		children: [
			<TimelineItem
				key="1"
				title="Planning"
				time="Q1 2024"
				description="Defined component architecture and design tokens."
			/>,
			<TimelineItem
				key="2"
				title="Execution"
				time="Q2 2024"
				description="Built high-priority components like Button, Card, and Modal."
			/>,
			<TimelineItem
				key="3"
				title="Testing"
				time="Q3 2024"
				description="Integrated Vitest and Playwright for E2E testing."
			/>,
			<TimelineItem
				key="4"
				title="Launch"
				time="Q4 2024"
				description="Public release and marketing."
			/>,
		],
	},
};
