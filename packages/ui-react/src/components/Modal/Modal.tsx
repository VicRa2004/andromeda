import { type HTMLAttributes, useEffect } from "react";

export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
	isOpen: boolean;
	onClose: () => void;
	size?: "sm" | "md" | "lg" | "xl";
	fullscreen?: boolean;
	center?: boolean;
}

export const Modal = ({
	isOpen,
	onClose,
	size,
	fullscreen,
	center = true,
	className = "",
	children,
	...props
}: ModalProps) => {
	useEffect(() => {
		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === "Escape" && isOpen) {
				onClose();
			}
		};

		if (isOpen) {
			document.addEventListener("keydown", handleEscape);
			document.body.style.overflow = "hidden";
		}

		return () => {
			document.removeEventListener("keydown", handleEscape);
			document.body.style.overflow = "";
		};
	}, [isOpen, onClose]);

	if (!isOpen) return null;

	const classes = [
		"modal is-open",
		size ? `modal--${size}` : "",
		fullscreen ? "modal--fullscreen" : "",
		center ? "modal--center" : "",
		className,
	]
		.filter(Boolean)
		.join(" ");

	return (
		<div className={classes} {...props} role="dialog" aria-modal="true">
			<div className="modal__overlay" onClick={onClose} aria-hidden="true" />
			<div className="modal__content">{children}</div>
		</div>
	);
};

export const ModalHeader = ({
	className = "",
	children,
	...props
}: HTMLAttributes<HTMLDivElement>) => (
	<div
		className={["modal__header", className].filter(Boolean).join(" ")}
		{...props}
	>
		{children}
	</div>
);

export const ModalTitle = ({
	className = "",
	...props
}: HTMLAttributes<HTMLHeadingElement>) => (
	<h2
		className={["modal__title", className].filter(Boolean).join(" ")}
		{...props}
	/>
);

export const ModalCloseButton = ({
	className = "",
	onClick,
	...props
}: HTMLAttributes<HTMLButtonElement>) => (
	<button
		type="button"
		className={["modal__close", className].filter(Boolean).join(" ")}
		onClick={onClick}
		aria-label="Close modal"
		{...props}
	>
		{props.children || "×"}
	</button>
);

export const ModalBody = ({
	className = "",
	...props
}: HTMLAttributes<HTMLDivElement>) => (
	<div
		className={["modal__body", className].filter(Boolean).join(" ")}
		{...props}
	/>
);

export const ModalFooter = ({
	className = "",
	...props
}: HTMLAttributes<HTMLDivElement>) => (
	<div
		className={["modal__footer", className].filter(Boolean).join(" ")}
		{...props}
	/>
);

Modal.Header = ModalHeader;
Modal.Title = ModalTitle;
Modal.CloseButton = ModalCloseButton;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;
