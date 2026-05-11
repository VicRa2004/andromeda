import React from "react";

export interface ProgressProps {
	/** Current progress value (0 to max) */
	value?: number;
	/** Maximum progress value */
	max?: number;
	/** Size of the progress bar */
	size?: "sm" | "md" | "lg";
	/** Color variant */
	variant?: "primary" | "secondary" | "success" | "error";
	/** Whether the progress is indeterminate */
	indeterminate?: boolean;
	/** Whether to show stripes */
	striped?: boolean;
	/** Optional label text */
	label?: string;
	/** Whether to show the percentage */
	showPercentage?: boolean;
	/** Optional CSS class name */
	className?: string;
}

/**
 * Progress component to show completion status
 *
 * @example
 * <Progress value={50} max={100} variant="success" showPercentage />
 */
export const Progress = ({
	value = 0,
	max = 100,
	size = "md",
	variant = "primary",
	indeterminate = false,
	striped = false,
	label,
	showPercentage = false,
	className = "",
}: ProgressProps) => {
	const clampedValue = Math.min(Math.max(value, 0), max);
	const percentage = indeterminate
		? 100
		: Math.round((clampedValue / max) * 100);

	const baseClass = "progress";
	const sizeClass = size !== "md" ? `${baseClass}--${size}` : "";
	const variantClass = variant !== "primary" ? `${baseClass}--${variant}` : "";
	const indeterminateClass = indeterminate ? `${baseClass}--indeterminate` : "";
	const stripedClass = striped ? `${baseClass}--striped` : "";

	const classes = [
		baseClass,
		sizeClass,
		variantClass,
		indeterminateClass,
		stripedClass,
		className,
	]
		.filter(Boolean)
		.join(" ");

	return (
		<div
			className={classes}
			role="progressbar"
			aria-valuenow={indeterminate ? undefined : clampedValue}
			aria-valuemin={0}
			aria-valuemax={max}
		>
			{(label || showPercentage) && (
				<div className={`${baseClass}__label`}>
					{label && <span>{label}</span>}
					{showPercentage && !indeterminate && <span>{percentage}%</span>}
				</div>
			)}
			<div className={`${baseClass}__track`}>
				<div
					className={`${baseClass}__bar`}
					style={{ width: indeterminate ? "100%" : `${percentage}%` }}
				/>
			</div>
		</div>
	);
};
