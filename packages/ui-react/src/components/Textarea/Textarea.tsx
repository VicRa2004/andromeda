import { forwardRef, type TextareaHTMLAttributes } from "react";

export interface TextareaProps
	extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	label?: string;
	error?: string;
	helpText?: string;
	containerClassName?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
	(
		{
			label,
			error,
			helpText,
			containerClassName = "",
			className = "",
			required,
			id,
			...props
		},
		ref,
	) => {
		const generatedId =
			id || `textarea-${Math.random().toString(36).substring(2, 9)}`;

		const containerClasses = [
			"textarea",
			error ? "textarea--error" : "",
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
							"textarea__label",
							required ? "textarea__label--required" : "",
						]
							.filter(Boolean)
							.join(" ")}
					>
						{label}
					</label>
				)}
				<textarea
					ref={ref}
					id={generatedId}
					required={required}
					className={["textarea__field", className].filter(Boolean).join(" ")}
					{...props}
				/>
				{error && <span className="textarea__error-message">{error}</span>}
				{helpText && !error && (
					<span className="textarea__help">{helpText}</span>
				)}
			</div>
		);
	},
);

Textarea.displayName = "Textarea";
