import React from "react";

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
	/** Visual variant of the skeleton */
	variant?: "text" | "circle" | "rectangle";
	/** Width of the skeleton */
	width?: string | number;
	/** Height of the skeleton */
	height?: string | number;
}

/**
 * Skeleton component for loading states
 *
 * @example
 * <Skeleton variant="text" width="80%" />
 * <Skeleton variant="circle" width={40} height={40} />
 */
export const Skeleton = ({
	variant = "text",
	width,
	height,
	className = "",
	style,
	...props
}: SkeletonProps) => {
	const baseClass = "skeleton";
	const variantClass = `${baseClass}--${variant}`;

	const classes = [baseClass, variantClass, className]
		.filter(Boolean)
		.join(" ");

	const inlineStyle: React.CSSProperties = {
		...style,
	};

	if (width) inlineStyle.width = width;
	if (height) inlineStyle.height = height;

	return (
		<div
			className={classes}
			style={inlineStyle}
			aria-hidden="true"
			{...props}
		/>
	);
};
