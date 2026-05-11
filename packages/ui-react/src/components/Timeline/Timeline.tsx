import React from "react";

export interface TimelineProps extends React.HTMLAttributes<HTMLUListElement> {
	/** Layout orientation */
	variant?: "left" | "right" | "alternate";
	/** Children elements (TimelineItem) */
	children: React.ReactNode;
}

export interface TimelineItemProps
	extends Omit<React.LiHTMLAttributes<HTMLLIElement>, "title"> {
	/** Title of the event */
	title: React.ReactNode;
	/** Time or date of the event */
	time?: React.ReactNode;
	/** Description of the event */
	description?: React.ReactNode;
	/** Custom marker element */
	marker?: React.ReactNode;
}

/**
 * Timeline component for displaying events in chronological order
 *
 * @example
 * <Timeline variant="alternate">
 *   <TimelineItem title="Created" time="2024-01-01" description="Project initialized" />
 * </Timeline>
 */
export const Timeline = ({
	variant = "left",
	className = "",
	children,
	...props
}: TimelineProps) => {
	const baseClass = "timeline";
	const variantClass = `${baseClass}--${variant}`;

	const classes = [baseClass, variantClass, className]
		.filter(Boolean)
		.join(" ");

	return (
		<ul className={classes} {...props}>
			{children}
		</ul>
	);
};

export const TimelineItem = ({
	title,
	time,
	description,
	marker,
	className = "",
	...props
}: TimelineItemProps) => {
	const baseClass = "timeline__item";
	const classes = [baseClass, className].filter(Boolean).join(" ");

	return (
		<li className={classes} {...props}>
			<div className="timeline__marker">{marker}</div>
			<div className="timeline__content">
				{time && <time className="timeline__time">{time}</time>}
				<h4 className="timeline__title">{title}</h4>
				{description && <p className="timeline__description">{description}</p>}
			</div>
		</li>
	);
};
