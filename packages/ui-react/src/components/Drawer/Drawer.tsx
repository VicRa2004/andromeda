import React, { useEffect, useRef } from "react";

export interface DrawerProps {
	/** Whether the drawer is open */
	isOpen: boolean;
	/** Callback when drawer requests to be closed */
	onClose: () => void;
	/** Placement of the drawer */
	placement?: "left" | "right" | "top" | "bottom";
	/** Size of the drawer */
	size?: "sm" | "md" | "lg" | "full";
	/** Title of the drawer */
	title?: React.ReactNode;
	/** Content of the drawer */
	children: React.ReactNode;
	/** Whether to show the close button */
	showCloseButton?: boolean;
	/** Custom CSS class */
	className?: string;
}

/**
 * Drawer (Offcanvas) component for side/top/bottom panels
 *
 * @example
 * <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} placement="right" title="Settings">
 *   Drawer content
 * </Drawer>
 */
export const Drawer = ({
	isOpen,
	onClose,
	placement = "right",
	size = "md",
	title,
	children,
	showCloseButton = true,
	className = "",
}: DrawerProps) => {
	const contentRef = useRef<HTMLDivElement>(null);

	// Lock body scroll when open
	useEffect(() => {
		if (isOpen) {
			const originalStyle = window.getComputedStyle(document.body).overflow;
			document.body.style.overflow = "hidden";
			return () => {
				document.body.style.overflow = originalStyle;
			};
		}
	}, [isOpen]);

	// Handle escape key
	useEffect(() => {
		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === "Escape" && isOpen) {
				onClose();
			}
		};
		document.addEventListener("keydown", handleEscape);
		return () => document.removeEventListener("keydown", handleEscape);
	}, [isOpen, onClose]);

	// Manage focus trapping (simplified version)
	useEffect(() => {
		if (isOpen && contentRef.current) {
			contentRef.current.focus();
		}
	}, [isOpen]);

	const baseClass = "drawer";
	const placementClass = `${baseClass}--${placement}`;
	const sizeClass = size !== "md" ? `${baseClass}--${size}` : "";
	const openClass = isOpen ? "is-open" : "";

	const classes = [baseClass, placementClass, sizeClass, openClass, className]
		.filter(Boolean)
		.join(" ");

	return (
		<div
			className={classes}
			aria-hidden={!isOpen}
			role="dialog"
			aria-modal="true"
		>
			<div
				className={`${baseClass}__overlay`}
				onClick={onClose}
				aria-hidden="true"
			/>
			<div className={`${baseClass}__content`} ref={contentRef} tabIndex={-1}>
				{(title || showCloseButton) && (
					<div className={`${baseClass}__header`}>
						{title && <h2 className={`${baseClass}__title`}>{title}</h2>}
						{showCloseButton && (
							<button
								type="button"
								className={`${baseClass}__close`}
								onClick={onClose}
								aria-label="Close"
							>
								<svg
									width="16"
									height="16"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<line x1="18" y1="6" x2="6" y2="18"></line>
									<line x1="6" y1="6" x2="18" y2="18"></line>
								</svg>
							</button>
						)}
					</div>
				)}
				<div className={`${baseClass}__body`}>{children}</div>
			</div>
		</div>
	);
};
