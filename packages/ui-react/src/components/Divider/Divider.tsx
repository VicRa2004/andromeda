import type { HTMLAttributes } from "react";

export interface DividerProps extends HTMLAttributes<HTMLDivElement> {
	orientation?: "horizontal" | "vertical";
	variant?: "default" | "thick" | "dashed" | "gradient";
	spacing?: "compact" | "default" | "spacious";
	color?: "default" | "primary" | "secondary";
	transparent?: boolean;
}

export const Divider = ({
	orientation = "horizontal",
	variant = "default",
	spacing = "default",
	color = "default",
	transparent = false,
	className = "",
	...props
}: DividerProps) => {
	const classes = [
		"divider",
		orientation === "vertical" ? "divider--vertical" : "",
		variant !== "default" ? `divider--${variant}` : "",
		spacing !== "default" ? `divider--${spacing}` : "",
		color !== "default" ? `divider--${color}` : "",
		transparent ? "divider--transparent" : "",
		className,
	]
		.filter(Boolean)
		.join(" ");

	return (
		<div
			className={classes}
			aria-orientation={orientation}
			role="separator"
			{...props}
		/>
	);
};
