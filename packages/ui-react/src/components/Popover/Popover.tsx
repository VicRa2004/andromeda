import React, { useState } from "react";
import {
	useFloating,
	autoUpdate,
	offset,
	flip,
	shift,
	useClick,
	useDismiss,
	useRole,
	useInteractions,
	FloatingPortal,
} from "@floating-ui/react";
import type { Placement } from "@floating-ui/react";

export interface PopoverProps {
	/** Popover content */
	content: React.ReactNode;
	/** Placement of the popover */
	placement?: Placement;
	/** Trigger element */
	children: React.ReactElement;
	/** Optional CSS class */
	className?: string;
}

/**
 * Popover component for displaying rich content in a popup
 *
 * @example
 * <Popover content={<div>More settings</div>}>
 *   <button>Settings</button>
 * </Popover>
 */
export const Popover = ({
	content,
	placement = "bottom",
	children,
	className = "",
}: PopoverProps) => {
	const [isOpen, setIsOpen] = useState(false);

	const { refs, floatingStyles, context } = useFloating({
		open: isOpen,
		onOpenChange: setIsOpen,
		placement,
		whileElementsMounted: autoUpdate,
		middleware: [
			offset(8),
			flip({ fallbackAxisSideDirection: "end" }),
			shift({ padding: 8 }),
		],
	});

	const click = useClick(context);
	const dismiss = useDismiss(context);
	const role = useRole(context);

	const { getReferenceProps, getFloatingProps } = useInteractions([
		click,
		dismiss,
		role,
	]);

	const baseClass = "popover";
	const classes = [baseClass, className].filter(Boolean).join(" ");

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
							zIndex: "var(--ds-z-index-popover, 1000)",
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
