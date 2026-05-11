import React from "react";

export interface StepsProps extends React.HTMLAttributes<HTMLDivElement> {
	/** Direction of the steps */
	direction?: "horizontal" | "vertical";
	/** Current active step (0-indexed) */
	current?: number;
	/** Children elements (Step) */
	children: React.ReactNode;
}

export interface StepProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
	/** Title of the step */
	title: React.ReactNode;
	/** Description of the step */
	description?: React.ReactNode;
	/** Custom indicator (overrides step number) */
	indicator?: React.ReactNode;
	/** @internal Passed by Steps parent */
	isCompleted?: boolean;
	/** @internal Passed by Steps parent */
	isActive?: boolean;
	/** @internal Passed by Steps parent */
	stepNumber?: number;
}

/**
 * Steps component for guiding users through a process
 *
 * @example
 * <Steps current={1}>
 *   <Step title="Account" description="Create your account" />
 *   <Step title="Profile" description="Set up your profile" />
 *   <Step title="Done" />
 * </Steps>
 */
export const Steps = ({
	direction = "horizontal",
	current = 0,
	className = "",
	children,
	...props
}: StepsProps) => {
	const baseClass = "steps";
	const directionClass = `${baseClass}--${direction}`;

	const classes = [baseClass, directionClass, className]
		.filter(Boolean)
		.join(" ");

	const validChildren = React.Children.toArray(children).filter(
		React.isValidElement,
	);

	return (
		<div className={classes} {...props}>
			{validChildren.map((child, index) => {
				const isCompleted = index < current;
				const isActive = index === current;

				return React.cloneElement(child as React.ReactElement<any>, {
					isCompleted,
					isActive,
					stepNumber: index + 1,
					key: index,
				});
			})}
		</div>
	);
};

export const Step = ({
	title,
	description,
	indicator,
	isCompleted,
	isActive,
	stepNumber,
	className = "",
	...props
}: StepProps) => {
	const baseClass = "steps__item";
	const activeClass = isActive ? "is-active" : "";
	const completedClass = isCompleted ? "is-completed" : "";

	const classes = [baseClass, activeClass, completedClass, className]
		.filter(Boolean)
		.join(" ");

	// Default indicator is a checkmark if completed, otherwise the step number
	const defaultIndicator = isCompleted ? (
		<svg
			width="14"
			height="14"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="3"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<polyline points="20 6 9 17 4 12"></polyline>
		</svg>
	) : (
		stepNumber
	);

	return (
		<div className={classes} {...props}>
			<div className="steps__separator" aria-hidden="true" />
			<div className="steps__indicator">{indicator || defaultIndicator}</div>
			<div className="steps__content">
				<div className="steps__title">{title}</div>
				{description && <div className="steps__description">{description}</div>}
			</div>
		</div>
	);
};
