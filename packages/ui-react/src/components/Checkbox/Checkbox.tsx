import { forwardRef, type InputHTMLAttributes } from "react";

export interface CheckboxProps
	extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
	label?: string;
	containerClassName?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
	({ label, containerClassName = "", className = "", id, ...props }, ref) => {
		const generatedId =
			id || `checkbox-${Math.random().toString(36).substring(2, 9)}`;

		return (
			<label
				htmlFor={generatedId}
				className={["checkbox", containerClassName].filter(Boolean).join(" ")}
			>
				<input
					type="checkbox"
					id={generatedId}
					ref={ref}
					className={["checkbox__input", className].filter(Boolean).join(" ")}
					{...props}
				/>
				{label && <span className="checkbox__label">{label}</span>}
			</label>
		);
	},
);

Checkbox.displayName = "Checkbox";
