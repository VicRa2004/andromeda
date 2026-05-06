import { forwardRef, type SelectHTMLAttributes } from "react";

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
	label?: string;
	error?: string;
	containerClassName?: string;
}

export const SelectNative = forwardRef<HTMLSelectElement, SelectProps>(
	(
		{
			label,
			error,
			containerClassName = "",
			className = "",
			required,
			id,
			children,
			...props
		},
		ref,
	) => {
		const generatedId =
			id || `select-${Math.random().toString(36).substring(2, 9)}`;

		const containerClasses = [
			"select",
			error ? "select--error" : "",
			containerClassName,
		]
			.filter(Boolean)
			.join(" ");

		return (
			<div className={containerClasses}>
				{label && (
					<label
						htmlFor={generatedId}
						className={[
							"select__label",
							required ? "select__label--required" : "",
						]
							.filter(Boolean)
							.join(" ")}
					>
						{label}
					</label>
				)}
				<div className="select__wrapper">
					<select
						ref={ref}
						id={generatedId}
						required={required}
						className={["select__field", className].filter(Boolean).join(" ")}
						{...props}
					>
						{children}
					</select>
				</div>
				{error && <span className="select__error-message">{error}</span>}
			</div>
		);
	},
);

SelectNative.displayName = "SelectNative";

// Mock implementation of Compound Component for future custom select logic
// that aligns with the user's desire to prepare for a Radix-like system.
// For now, it simply exports the native select to provide the UI wrapper,
// while establishing the export structure for future headless logic.

export const Select = SelectNative;
