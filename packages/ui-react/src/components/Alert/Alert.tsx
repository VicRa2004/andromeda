import type { HTMLAttributes } from "react";

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
	variant?: "primary" | "secondary" | "info" | "success" | "warning" | "error";
}

export const Alert = ({
	variant = "primary",
	className = "",
	children,
	...props
}: AlertProps) => {
	const classes = ["alert", `alert--${variant}`, className]
		.filter(Boolean)
		.join(" ");
	return (
		<div className={classes} role="alert" {...props}>
			{children}
		</div>
	);
};

export const AlertIcon = ({
	className = "",
	...props
}: HTMLAttributes<HTMLDivElement>) => (
	<div
		className={["alert__icon", className].filter(Boolean).join(" ")}
		{...props}
	/>
);

export const AlertContent = ({
	className = "",
	...props
}: HTMLAttributes<HTMLDivElement>) => (
	<div
		className={["alert__content", className].filter(Boolean).join(" ")}
		{...props}
	/>
);

export const AlertTitle = ({
	className = "",
	...props
}: HTMLAttributes<HTMLHeadingElement>) => (
	<h5
		className={["alert__title", className].filter(Boolean).join(" ")}
		{...props}
	/>
);

export const AlertDescription = ({
	className = "",
	...props
}: HTMLAttributes<HTMLParagraphElement>) => (
	<div
		className={["alert__description", className].filter(Boolean).join(" ")}
		{...props}
	/>
);

Alert.Icon = AlertIcon;
Alert.Content = AlertContent;
Alert.Title = AlertTitle;
Alert.Description = AlertDescription;
