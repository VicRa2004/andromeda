import { type InputHTMLAttributes, forwardRef } from "react";

export interface InputProps
	extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
	label?: string;
	error?: string;
	success?: boolean;
	helpText?: string;
	size?: "sm" | "md" | "lg";
	containerClassName?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
	(
		{
			label,
			error,
			success,
			helpText,
			size = "md",
			containerClassName = "",
			className = "",
			required,
			disabled,
			id,
			...props
		},
		ref,
	) => {
		const generatedId =
			id || `input-${Math.random().toString(36).substring(2, 9)}`;

		const containerClasses = [
			"input",
			size !== "md" ? `input--${size}` : "",
			error ? "input--error" : "",
			success ? "input--success" : "",
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
							"input__label",
							required ? "input__label--required" : "",
						]
							.filter(Boolean)
							.join(" ")}
					>
						{label}
					</label>
				)}
				<div className="input__wrapper">
					<input
						ref={ref}
						id={generatedId}
						disabled={disabled}
						required={required}
						className={["input__field", className].filter(Boolean).join(" ")}
						{...props}
					/>
					{error && <span className="input__error-message">{error}</span>}
					{helpText && !error && (
						<span className="input__help">{helpText}</span>
					)}
				</div>
			</div>
		);
	},
);

Input.displayName = "Input";
