import { forwardRef, type InputHTMLAttributes } from "react";

export interface RadioProps
	extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
	label?: string;
	containerClassName?: string;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
	({ label, containerClassName = "", className = "", id, ...props }, ref) => {
		const generatedId =
			id || `radio-${Math.random().toString(36).substring(2, 9)}`;

		return (
			<label
				htmlFor={generatedId}
				className={["radio", containerClassName].filter(Boolean).join(" ")}
			>
				<input
					type="radio"
					id={generatedId}
					ref={ref}
					className={["radio__input", className].filter(Boolean).join(" ")}
					{...props}
				/>
				{label && <span className="radio__label">{label}</span>}
			</label>
		);
	},
);

Radio.displayName = "Radio";
