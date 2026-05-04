import type {
	HTMLAttributes,
	AnchorHTMLAttributes,
	LiHTMLAttributes,
} from "react";

export interface NavigationProps extends HTMLAttributes<HTMLElement> {
	variant?: "horizontal" | "vertical" | "breadcrumb";
}

export const Navigation = ({
	variant = "horizontal",
	className = "",
	children,
	...props
}: NavigationProps) => {
	const classes = [
		"navigation",
		variant !== "horizontal" ? `navigation--${variant}` : "",
		className,
	]
		.filter(Boolean)
		.join(" ");

	return (
		<nav
			className={classes}
			aria-label={variant === "breadcrumb" ? "Breadcrumb" : "Main"}
			{...props}
		>
			{children}
		</nav>
	);
};

export const NavigationList = ({
	className = "",
	...props
}: HTMLAttributes<HTMLUListElement>) => (
	<ul
		className={["navigation__list", className].filter(Boolean).join(" ")}
		{...props}
	/>
);

export const NavigationItem = ({
	className = "",
	...props
}: LiHTMLAttributes<HTMLLIElement>) => (
	<li
		className={["navigation__item", className].filter(Boolean).join(" ")}
		{...props}
	/>
);

export interface NavigationLinkProps
	extends AnchorHTMLAttributes<HTMLAnchorElement> {
	isActive?: boolean;
	icon?: React.ReactNode;
	badge?: React.ReactNode;
	disabled?: boolean;
}

export const NavigationLink = ({
	isActive,
	icon,
	badge,
	disabled,
	className = "",
	children,
	...props
}: NavigationLinkProps) => {
	const classes = ["navigation__link", isActive ? "is-active" : "", className]
		.filter(Boolean)
		.join(" ");

	return (
		<a
			className={classes}
			aria-current={isActive ? "page" : undefined}
			aria-disabled={disabled}
			tabIndex={disabled ? -1 : undefined}
			onClick={disabled ? (e) => e.preventDefault() : props.onClick}
			{...props}
		>
			{icon && <span className="navigation__icon">{icon}</span>}
			{children}
			{badge && <span className="navigation__badge">{badge}</span>}
		</a>
	);
};

Navigation.List = NavigationList;
Navigation.Item = NavigationItem;
Navigation.Link = NavigationLink;
