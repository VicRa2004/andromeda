import type { HTMLAttributes } from "react";

export interface DividerProps extends HTMLAttributes<HTMLHRElement> {
	orientation?: "horizontal" | "vertical";
	variant?: "default" | "thick" | "dashed" | "gradient";
	spacing?: "compact" | "default" | "spacious";
	transparent?: boolean;
}

export const Divider = ({
	orientation = "horizontal",
	variant = "default",
	spacing = "default",
	transparent = false,
	className = "",
	...props
}: DividerProps) => {
	const classes = [
		"divider",
		orientation === "vertical" ? "divider--vertical" : "",
		variant !== "default" ? `divider--${variant}` : "",
		spacing !== "default" ? `divider--${spacing}` : "",
		transparent ? "divider--transparent" : "",
		className,
	]
		.filter(Boolean)
		.join(" ");

	return (
		<hr
			className={classes}
			aria-orientation={orientation}
			role="separator"
			{...props}
		/>
	);
};
