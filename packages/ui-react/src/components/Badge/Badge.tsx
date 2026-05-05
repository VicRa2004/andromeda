import type { HTMLAttributes } from "react";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
	variant?: "primary" | "secondary" | "success" | "warning" | "error" | "info";
	dot?: boolean;
}

export const Badge = ({
	variant = "primary",
	dot = false,
	className = "",
	children,
	...props
}: BadgeProps) => {
	const classes = [
		"badge",
		`badge--${variant}`,
		dot ? "badge--dot" : "",
		className,
	]
		.filter(Boolean)
		.join(" ");

	return (
		<span className={classes} {...props}>
			{!dot && children}
		</span>
	);
};
