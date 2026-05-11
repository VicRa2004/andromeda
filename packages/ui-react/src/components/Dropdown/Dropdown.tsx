import React, { useState, useRef, useEffect } from "react";

export interface DropdownProps {
	/** Trigger element */
	trigger: React.ReactNode;
	/** Size of the dropdown */
	size?: "sm" | "md" | "lg";
	/** Placement of the dropdown menu */
	placement?: "bottom" | "right";
	/** Children elements (Dropdown items) */
	children: React.ReactNode;
	/** Optional CSS class name */
	className?: string;
}

export interface DropdownItemProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	/** Content of the item */
	children: React.ReactNode;
	/** Optional CSS class name */
	className?: string;
}

/**
 * Dropdown component for displaying a menu of actions
 *
 * @example
 * <Dropdown trigger={<Button>Options</Button>}>
 *   <DropdownItem>Action 1</DropdownItem>
 *   <DropdownItem>Action 2</DropdownItem>
 * </Dropdown>
 */
export const Dropdown = ({
	trigger,
	size = "md",
	placement = "bottom",
	children,
	className = "",
}: DropdownProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);

	const toggleDropdown = () => setIsOpen(!isOpen);

	const handleClickOutside = (event: MouseEvent) => {
		if (
			dropdownRef.current &&
			!dropdownRef.current.contains(event.target as Node)
		) {
			setIsOpen(false);
		}
	};

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	const baseClass = "dropdown";
	const sizeClass = size !== "md" ? `${baseClass}--${size}` : "";
	const placementClass = placement === "right" ? `${baseClass}--placement-right` : "";
	const openClass = isOpen ? "is-open" : "";

	const classes = [baseClass, sizeClass, placementClass, openClass, className]
		.filter(Boolean)
		.join(" ");

	return (
		<div className={classes} ref={dropdownRef}>
			{React.Children.map(trigger, (child) => {
				if (React.isValidElement(child)) {
					const reactChild = child as React.ReactElement<any>;
					return React.cloneElement(reactChild, {
						...reactChild.props,
						className: [reactChild.props.className, `${baseClass}__trigger`]
							.filter(Boolean)
							.join(" "),
						onClick: (e: React.MouseEvent<any>) => {
							if (reactChild.props.onClick) reactChild.props.onClick(e);
							toggleDropdown();
						},
						"aria-expanded": isOpen,
						"aria-haspopup": "menu",
					});
				}
				// Fallback if trigger is not a valid React element
				return (
					<div
						className={`${baseClass}__trigger`}
						onClick={toggleDropdown}
						role="button"
						tabIndex={0}
						aria-expanded={isOpen}
						aria-haspopup="menu"
					>
						{child}
					</div>
				);
			})}
			<div className={`${baseClass}__menu`} role="menu">
				{React.Children.map(children, (child) => {
					if (React.isValidElement(child)) {
						const reactChild = child as React.ReactElement<any>;
						return React.cloneElement(reactChild, {
							...reactChild.props,
							onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
								if (reactChild.props.onClick)
									(reactChild.props.onClick as any)(e);
								setIsOpen(false);
							},
						} as React.HTMLAttributes<HTMLButtonElement>);
					}
					return child;
				})}
			</div>
		</div>
	);
};

export const DropdownItem = ({
	children,
	className = "",
	disabled,
	...props
}: DropdownItemProps) => {
	const classes = ["dropdown__item", disabled ? "is-disabled" : "", className]
		.filter(Boolean)
		.join(" ");

	return (
		<button
			type="button"
			role="menuitem"
			className={classes}
			disabled={disabled}
			{...props}
		>
			{children}
		</button>
	);
};
