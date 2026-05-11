import React from "react";

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
	/** Visual variant of the tag */
	variant?: "default" | "primary" | "secondary" | "outline";
	/** Content of the tag */
	children: React.ReactNode;
	/** Callback when close button is clicked. If provided, close button is shown. */
	onClose?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

/**
 * Tag (Chip) component for categorization and filtering
 *
 * @example
 * <Tag variant="primary" onClose={() => console.log('closed')}>React</Tag>
 */
export const Tag = ({
	variant = "default",
	children,
	onClose,
	className = "",
	...props
}: TagProps) => {
	const baseClass = "tag";
	const variantClass = variant !== "default" ? `${baseClass}--${variant}` : "";

	const classes = [baseClass, variantClass, className]
		.filter(Boolean)
		.join(" ");

	return (
		<span className={classes} {...props}>
			<span className={`${baseClass}__label`}>{children}</span>
			{onClose && (
				<button
					type="button"
					className={`${baseClass}__close`}
					onClick={onClose}
					aria-label="Remove tag"
				>
					<svg
						width="10"
						height="10"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="3"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<line x1="18" y1="6" x2="6" y2="18"></line>
						<line x1="6" y1="6" x2="18" y2="18"></line>
					</svg>
				</button>
			)}
		</span>
	);
};
