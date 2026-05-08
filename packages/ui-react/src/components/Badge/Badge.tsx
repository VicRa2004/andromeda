import type { HTMLAttributes } from "react";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
	variant?:
		| "primary"
		| "secondary"
		| "neutral"
		| "success"
		| "warning"
		| "error"
		| "info";
	size?: "sm" | "md" | "lg";
	dot?: boolean;
	outline?: boolean;
}

export const Badge = ({
	variant = "primary",
	size = "md",
	dot = false,
	outline = false,
	className = "",
	children,
	...props
}: BadgeProps) => {
	const classes = [
		"badge",
		`badge--${variant}`,
		size !== "md" ? `badge--${size}` : "",
		dot ? "badge--dot" : "",
		outline ? "badge--outline" : "",
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
