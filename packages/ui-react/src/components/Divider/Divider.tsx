import type { HTMLAttributes } from "react";

export interface DividerProps extends HTMLAttributes<HTMLHRElement> {
	orientation?: "horizontal" | "vertical";
	transparent?: boolean;
}

export const Divider = ({
	orientation = "horizontal",
	transparent = false,
	className = "",
	...props
}: DividerProps) => {
	const classes = [
		"divider",
		orientation === "vertical" ? "divider--vertical" : "",
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
