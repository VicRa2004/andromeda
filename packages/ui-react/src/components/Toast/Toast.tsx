import type { HTMLAttributes, ReactNode } from "react";

export interface ToastProps
	extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
	title?: ReactNode;
	description?: ReactNode;
	onClose?: () => void;
}

export const Toast = ({
	title,
	description,
	onClose,
	className = "",
	children,
	...props
}: ToastProps) => {
	const classes = ["toast", className].filter(Boolean).join(" ");

	return (
		<div className={classes} role="alert" {...props}>
			<div className="toast__content">
				{title && <div className="toast__title">{title}</div>}
				{description && <div className="toast__description">{description}</div>}
				{children}
			</div>
			{onClose && (
				<button
					type="button"
					className="toast__close"
					onClick={onClose}
					aria-label="Close"
				>
					×
				</button>
			)}
		</div>
	);
};

export const ToastContainer = ({
	className = "",
	...props
}: HTMLAttributes<HTMLDivElement>) => (
	<div
		className={["toast-container", className].filter(Boolean).join(" ")}
		role="region"
		aria-live="polite"
		{...props}
	/>
);
