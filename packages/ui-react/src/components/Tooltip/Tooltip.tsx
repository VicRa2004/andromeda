import React, { useState, useRef } from "react";
import {
	useFloating,
	autoUpdate,
	offset,
	flip,
	shift,
	useHover,
	useFocus,
	useDismiss,
	useRole,
	useInteractions,
	arrow,
	FloatingPortal,
} from "@floating-ui/react";
import type { Placement } from "@floating-ui/react";

export interface TooltipProps {
	/** Tooltip content */
	content: React.ReactNode;
	/** Placement of the tooltip */
	placement?: Placement;
	/** Visual variant */
	variant?: "dark" | "light";
	/** Trigger element */
	children: React.ReactElement;
	/** Optional CSS class */
	className?: string;
	/** Delay in ms before opening */
	delay?: number;
}

/**
 * Tooltip component for short descriptive information
 *
 * @example
 * <Tooltip content="Add to favorites">
 *   <button>Heart</button>
 * </Tooltip>
 */
export const Tooltip = ({
	content,
	placement = "top",
	variant = "dark",
	children,
	className = "",
	delay = 200,
}: TooltipProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const arrowRef = useRef<HTMLDivElement>(null);

	const { refs, floatingStyles, context } = useFloating({
		open: isOpen,
		onOpenChange: setIsOpen,
		placement,
		whileElementsMounted: autoUpdate,
		middleware: [
			offset(8),
			flip({ fallbackAxisSideDirection: "start" }),
			shift({ padding: 8 }),
			arrow({ element: arrowRef }),
		],
	});

	const hover = useHover(context, {
		move: false,
		delay: { open: delay, close: 0 },
	});
	const focus = useFocus(context);
	const dismiss = useDismiss(context);
	const role = useRole(context, { role: "tooltip" });

	const { getReferenceProps, getFloatingProps } = useInteractions([
		hover,
		focus,
		dismiss,
		role,
	]);

	const baseClass = "tooltip";
	const variantClass = `${baseClass}--${variant}`;

	const classes = [baseClass, variantClass, className]
		.filter(Boolean)
		.join(" ");

	return (
		<>
			{React.cloneElement(
				children,
				getReferenceProps({
					ref: refs.setReference,
					...(children.props as any),
				}),
			)}
			<FloatingPortal>
				{isOpen && (
					<div
						ref={refs.setFloating}
						style={{
							...floatingStyles,
							zIndex: "var(--ds-z-index-tooltip, 1000)",
						}}
						className={classes}
						{...getFloatingProps()}
					>
						<div className={`${baseClass}__content`}>{content}</div>
					</div>
				)}
			</FloatingPortal>
		</>
	);
};
