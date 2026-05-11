import React from "react";

export interface ListGroupProps extends React.HTMLAttributes<HTMLUListElement> {
	/** Variant of the list group */
	variant?: "flush" | "bordered";
	/** Make items interactive (hover/focus states) */
	interactive?: boolean;
	/** Children elements (ListGroupItem) */
	children: React.ReactNode;
}

export interface ListGroupItemProps
	extends React.LiHTMLAttributes<HTMLLIElement> {
	/** Render item as a specific component (e.g. 'a', 'button') */
	as?: React.ElementType;
	/** Link destination (if as="a") */
	href?: string;
	/** Whether the item is active */
	active?: boolean;
	/** Whether the item is disabled */
	disabled?: boolean;
	/** Content of the item */
	children: React.ReactNode;
	/** onClick handler (if as="button") */
	onClick?: (e: React.MouseEvent) => void;
}

/**
 * List Group component for displaying series of content
 *
 * @example
 * <ListGroup interactive variant="bordered">
 *   <ListGroupItem as="button" active>Active Item</ListGroupItem>
 *   <ListGroupItem as="button">Item 2</ListGroupItem>
 *   <ListGroupItem as="button" disabled>Disabled Item</ListGroupItem>
 * </ListGroup>
 */
export const ListGroup = ({
	variant = "bordered",
	interactive = false,
	className = "",
	children,
	...props
}: ListGroupProps) => {
	const baseClass = "list-group";
	const variantClass = variant !== "bordered" ? `${baseClass}--${variant}` : "";
	const interactiveClass = interactive ? `${baseClass}--interactive` : "";

	const classes = [baseClass, variantClass, interactiveClass, className]
		.filter(Boolean)
		.join(" ");

	return (
		<ul className={classes} {...props}>
			{children}
		</ul>
	);
};

export const ListGroupItem = ({
	as: Component = "li",
	href,
	active,
	disabled,
	className = "",
	children,
	onClick,
	...props
}: ListGroupItemProps) => {
	const classes = [
		"list-group__item",
		active ? "is-active" : "",
		disabled ? "is-disabled" : "",
		className,
	]
		.filter(Boolean)
		.join(" ");

	// Adjust props based on component type
	const elementProps: any = {
		className: classes,
		...props,
	};

	if (Component === "a") {
		elementProps.href = disabled ? undefined : href;
		if (active) elementProps["aria-current"] = "true";
	} else if (Component === "button") {
		elementProps.type = "button";
		elementProps.disabled = disabled;
		elementProps.onClick = disabled ? undefined : onClick;
		if (active) elementProps["aria-pressed"] = "true";
	} else if (onClick) {
		// If it has onClick but is not a button, treat it like a generic clickable element
		elementProps.onClick = disabled ? undefined : onClick;
		elementProps.role = "button";
		elementProps.tabIndex = disabled ? -1 : 0;
	}

	return <Component {...elementProps}>{children}</Component>;
};
