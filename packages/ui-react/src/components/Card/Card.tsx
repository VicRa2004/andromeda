import type { HTMLAttributes, ImgHTMLAttributes } from "react";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
	variant?: "elevated" | "outlined" | "flat";
}

export const Card = ({
	variant = "elevated",
	className = "",
	children,
	...props
}: CardProps) => {
	const classes = ["card", `card--${variant}`, className]
		.filter(Boolean)
		.join(" ");
	return (
		<div className={classes} {...props}>
			{children}
		</div>
	);
};

export const CardHeader = ({
	className = "",
	...props
}: HTMLAttributes<HTMLDivElement>) => (
	<div
		className={["card__header", className].filter(Boolean).join(" ")}
		{...props}
	/>
);

export const CardBody = ({
	className = "",
	...props
}: HTMLAttributes<HTMLDivElement>) => (
	<div
		className={["card__body", className].filter(Boolean).join(" ")}
		{...props}
	/>
);

export const CardFooter = ({
	className = "",
	...props
}: HTMLAttributes<HTMLDivElement>) => (
	<div
		className={["card__footer", className].filter(Boolean).join(" ")}
		{...props}
	/>
);

export const CardTitle = ({
	className = "",
	...props
}: HTMLAttributes<HTMLHeadingElement>) => (
	<h3
		className={["card__title", className].filter(Boolean).join(" ")}
		{...props}
	/>
);

export const CardSubtitle = ({
	className = "",
	...props
}: HTMLAttributes<HTMLHeadingElement>) => (
	<h4
		className={["card__subtitle", className].filter(Boolean).join(" ")}
		{...props}
	/>
);

export const CardDescription = ({
	className = "",
	...props
}: HTMLAttributes<HTMLParagraphElement>) => (
	<p
		className={["card__description", className].filter(Boolean).join(" ")}
		{...props}
	/>
);

export const CardImage = ({
	className = "",
	...props
}: ImgHTMLAttributes<HTMLImageElement>) => (
	<img
		className={["card__image", className].filter(Boolean).join(" ")}
		{...props}
		alt={props.alt || ""}
	/>
);

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;
Card.Title = CardTitle;
Card.Subtitle = CardSubtitle;
Card.Description = CardDescription;
Card.Image = CardImage;
