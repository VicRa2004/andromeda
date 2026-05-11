import React, { useState } from "react";

export interface TabsProps {
	/** Variant of the tabs */
	variant?: "underline" | "pills" | "bordered";
	/** Orientation of the tabs */
	orientation?: "horizontal" | "vertical";
	/** Default active tab value */
	defaultValue?: string;
	/** Children elements (Tab items) */
	children: React.ReactElement<TabProps>[];
	/** Optional CSS class name */
	className?: string;
	/** Callback when tab changes */
	onChange?: (value: string) => void;
}

export interface TabProps {
	/** Label of the tab */
	label: string;
	/** Unique value for the tab */
	value: string;
	/** Content of the tab */
	children: React.ReactNode;
	/** Disabled state */
	disabled?: boolean;
}

/**
 * Tabs component for organizing related content
 *
 * @example
 * <Tabs variant="underline" defaultValue="tab1">
 *   <Tab label="Tab 1" value="tab1">Content 1</Tab>
 *   <Tab label="Tab 2" value="tab2">Content 2</Tab>
 * </Tabs>
 */
export const Tabs = ({
	variant = "underline",
	orientation = "horizontal",
	defaultValue,
	children,
	className = "",
	onChange,
}: TabsProps) => {
	const initialValue =
		defaultValue || (children.length > 0 ? children[0].props.value : "");
	const [activeValue, setActiveValue] = useState(initialValue);

	const handleTabClick = (value: string, disabled?: boolean) => {
		if (disabled) return;
		setActiveValue(value);
		if (onChange) onChange(value);
	};

	const baseClass = "tabs";
	const variantClass =
		variant !== "underline" ? `${baseClass}--${variant}` : "";
	const orientationClass =
		orientation === "vertical" ? `${baseClass}--vertical` : "";

	const classes = [baseClass, variantClass, orientationClass, className]
		.filter(Boolean)
		.join(" ");

	return (
		<div className={classes}>
			<div
				className={`${baseClass}__list`}
				role="tablist"
				aria-orientation={orientation}
			>
				{children.map((child) => {
					const { label, value, disabled } = child.props;
					const isActive = activeValue === value;
					return (
						<button
							key={value}
							type="button"
							role="tab"
							aria-selected={isActive}
							aria-controls={`panel-${value}`}
							id={`tab-${value}`}
							tabIndex={isActive ? 0 : -1}
							className={`${baseClass}__trigger ${isActive ? "is-active" : ""}`}
							disabled={disabled}
							onClick={() => handleTabClick(value, disabled)}
						>
							{label}
						</button>
					);
				})}
			</div>
			{children.map((child) => {
				const { value, children: content } = child.props;
				const isActive = activeValue === value;
				return (
					<div
						key={value}
						role="tabpanel"
						id={`panel-${value}`}
						aria-labelledby={`tab-${value}`}
						hidden={!isActive}
						className={`${baseClass}__content`}
					>
						{content}
					</div>
				);
			})}
		</div>
	);
};

export const Tab = ({ children }: TabProps) => {
	return <>{children}</>;
};
