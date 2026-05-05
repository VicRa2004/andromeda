import { forwardRef, type InputHTMLAttributes } from "react";

export interface SwitchProps
	extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
	label?: string;
	containerClassName?: string;
}

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
	({ label, containerClassName = "", className = "", id, ...props }, ref) => {
		const generatedId =
			id || `switch-${Math.random().toString(36).substring(2, 9)}`;

		return (
			<label
				htmlFor={generatedId}
				className={["switch", containerClassName].filter(Boolean).join(" ")}
			>
				<input
					type="checkbox"
					role="switch"
					id={generatedId}
					ref={ref}
					className={["switch__input", className].filter(Boolean).join(" ")}
					{...props}
				/>
				{label && <span className="switch__label">{label}</span>}
			</label>
		);
	},
);

Switch.displayName = "Switch";
