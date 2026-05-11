import React, { useState } from "react";

export interface AccordionProps {
	/** Variant of the accordion */
	variant?: "bordered" | "flush" | "separated";
	/** Whether multiple items can be open at once */
	multiple?: boolean;
	/** Default expanded item values */
	defaultExpanded?: string[];
	/** Children elements (Accordion items) */
	children: React.ReactElement<AccordionItemProps>[];
	/** Optional CSS class name */
	className?: string;
}

export interface AccordionItemProps {
	/** Title of the item */
	title: React.ReactNode;
	/** Unique value for the item */
	value: string;
	/** Content of the item */
	children: React.ReactNode;
	/** Internal props passed by Accordion */
	isOpen?: boolean;
	onToggle?: () => void;
}

/**
 * Accordion component for collapsible content panels
 *
 * @example
 * <Accordion variant="bordered">
 *   <AccordionItem title="Item 1" value="item1">Content 1</AccordionItem>
 *   <AccordionItem title="Item 2" value="item2">Content 2</AccordionItem>
 * </Accordion>
 */
export const Accordion = ({
	variant,
	multiple = false,
	defaultExpanded = [],
	children,
	className = "",
}: AccordionProps) => {
	const [expanded, setExpanded] = useState<string[]>(defaultExpanded);

	const handleToggle = (value: string) => {
		if (multiple) {
			setExpanded((prev) =>
				prev.includes(value)
					? prev.filter((v) => v !== value)
					: [...prev, value],
			);
		} else {
			setExpanded((prev) => (prev.includes(value) ? [] : [value]));
		}
	};

	const baseClass = "accordion";
	const variantClass = variant ? `${baseClass}--${variant}` : "";

	const classes = [baseClass, variantClass, className]
		.filter(Boolean)
		.join(" ");

	return (
		<div className={classes}>
			{React.Children.map(children, (child) => {
				if (!React.isValidElement(child)) return null;
				const isOpen = expanded.includes(child.props.value);
				return React.cloneElement(child, {
					isOpen,
					onToggle: () => handleToggle(child.props.value),
				} as any);
			})}
		</div>
	);
};

export const AccordionItem = ({
	title,
	value,
	children,
	isOpen = false,
	onToggle,
}: AccordionItemProps) => {
	const baseClass = "accordion__item";
	const openClass = isOpen ? "is-open" : "";

	const classes = [baseClass, openClass].filter(Boolean).join(" ");

	return (
		<div className={classes}>
			<button
				type="button"
				className="accordion__trigger"
				aria-expanded={isOpen}
				aria-controls={`accordion-content-${value}`}
				id={`accordion-trigger-${value}`}
				onClick={onToggle}
			>
				{title}
			</button>
			<div
				id={`accordion-content-${value}`}
				role="region"
				aria-labelledby={`accordion-trigger-${value}`}
				className="accordion__content-wrapper"
			>
				<div className="accordion__content">
					<div
						className="accordion__content-inner"
						style={{ paddingTop: "var(--ds-space-2)" }}
					>
						{children}
					</div>
				</div>
			</div>
		</div>
	);
};
