import type { Meta, StoryObj } from "@storybook/react";
import { Carousel, CarouselSlide, Card } from "@andromeda/ui-react";

const meta: Meta<typeof Carousel> = {
	title: "DataDisplay/Carousel",
	component: Carousel,
	tags: ["autodocs"],
	argTypes: {
		itemsPerView: {
			control: { type: "range", min: 1, max: 4, step: 1 },
		},
		showDots: { control: "boolean" },
		showControls: { control: "boolean" },
	},
	decorators: [
		(Story) => (
			<div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
				<Story />
			</div>
		),
	],
};

export default meta;
type Story = StoryObj<typeof Carousel>;

export const Default: Story = {
	args: {
		itemsPerView: 1,
		children: [
			<CarouselSlide key="1">
				<div
					style={{
						height: "300px",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						background: "var(--ds-color-primary)",
						color: "white",
						fontSize: "2rem",
						borderRadius: "var(--ds-radius-md)",
					}}
				>
					Slide 1
				</div>
			</CarouselSlide>,
			<CarouselSlide key="2">
				<div
					style={{
						height: "300px",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						background: "var(--ds-color-secondary)",
						color: "white",
						fontSize: "2rem",
						borderRadius: "var(--ds-radius-md)",
					}}
				>
					Slide 2
				</div>
			</CarouselSlide>,
			<CarouselSlide key="3">
				<div
					style={{
						height: "300px",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						background: "var(--ds-color-success)",
						color: "white",
						fontSize: "2rem",
						borderRadius: "var(--ds-radius-md)",
					}}
				>
					Slide 3
				</div>
			</CarouselSlide>,
		],
	},
};

export const MultipleItems: Story = {
	args: {
		itemsPerView: 2,
		children: Array.from({ length: 6 }).map((_, i) => (
			<CarouselSlide key={i} style={{ padding: "0 8px" }}>
				<Card>
					<h3 style={{ margin: "0 0 8px" }}>Card {i + 1}</h3>
					<p style={{ margin: 0, color: "var(--ds-color-text-secondary)" }}>
						This is a slide inside a multi-item carousel. You can drag or use
						controls to see more.
					</p>
				</Card>
			</CarouselSlide>
		)),
	},
};
