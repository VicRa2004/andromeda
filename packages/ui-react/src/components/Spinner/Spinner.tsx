import type { HTMLAttributes } from "react";

export interface SpinnerProps extends HTMLAttributes<HTMLDivElement> {
	size?: "sm" | "md" | "lg";
	white?: boolean;
}

export const Spinner = ({
	size = "md",
	white = false,
	className = "",
	...props
}: SpinnerProps) => {
	const classes = [
		"spinner",
		size !== "md" ? `spinner--${size}` : "",
		white ? "spinner--white" : "",
		className,
	]
		.filter(Boolean)
		.join(" ");

	return (
		<div className={classes} role="status" aria-label="Loading" {...props} />
	);
};
