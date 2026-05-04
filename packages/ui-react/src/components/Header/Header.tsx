import type {
	HTMLAttributes,
	ButtonHTMLAttributes,
	AnchorHTMLAttributes,
} from "react";

export interface HeaderProps extends HTMLAttributes<HTMLElement> {
	sticky?: boolean;
	inverted?: boolean;
}

export const Header = ({
	sticky,
	inverted,
	className = "",
	children,
	...props
}: HeaderProps) => {
	const classes = [
		"header",
		sticky ? "header--sticky" : "",
		inverted ? "header--inverted" : "",
		className,
	]
		.filter(Boolean)
		.join(" ");

	return (
		<header className={classes} {...props}>
			<div className="header__container">{children}</div>
		</header>
	);
};

export const HeaderLogo = ({
	className = "",
	...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) => (
	<a
		className={["header__logo", className].filter(Boolean).join(" ")}
		{...props}
	/>
);

export const HeaderNav = ({
	isOpen,
	className = "",
	...props
}: HTMLAttributes<HTMLElement> & { isOpen?: boolean }) => (
	<nav
		className={["header__nav", isOpen ? "is-open" : "", className]
			.filter(Boolean)
			.join(" ")}
		{...props}
	/>
);

export const HeaderLink = ({
	isActive,
	className = "",
	...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { isActive?: boolean }) => (
	<a
		className={["header__link", isActive ? "is-active" : "", className]
			.filter(Boolean)
			.join(" ")}
		{...props}
	/>
);

export const HeaderActions = ({
	className = "",
	...props
}: HTMLAttributes<HTMLDivElement>) => (
	<div
		className={["header__actions", className].filter(Boolean).join(" ")}
		{...props}
	/>
);

export const HeaderActionButton = ({
	className = "",
	...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => (
	<button
		type="button"
		className={["header__action-button", className].filter(Boolean).join(" ")}
		{...props}
	/>
);

export const HeaderMenuToggle = ({
	className = "",
	...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => (
	<button
		type="button"
		className={["header__menu-toggle", className].filter(Boolean).join(" ")}
		aria-label="Toggle menu"
		{...props}
	>
		{props.children || "☰"}
	</button>
);

Header.Logo = HeaderLogo;
Header.Nav = HeaderNav;
Header.Link = HeaderLink;
Header.Actions = HeaderActions;
Header.ActionButton = HeaderActionButton;
Header.MenuToggle = HeaderMenuToggle;
