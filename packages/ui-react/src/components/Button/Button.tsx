export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	/** Button variant - controls appearance and behavior */
	variant?: "primary" | "secondary" | "outline" | "ghost";
	/** Button size */
	size?: "sm" | "md" | "lg";
	/** Button contents */
	children?: React.ReactNode;
	/** Optional CSS class name to extend styling */
	className?: string;
}

/** Button UI component for user interaction
 * Uses BEM methodology with CSS custom properties for theming
 *
 * @example
 * <Button variant="primary" size="md">Click me</Button>
 * <Button variant="outline" size="sm">Secondary action</Button>
 */
export const Button = ({
	variant = "secondary",
	size = "md",
	className = "",
	children,
	...props
}: ButtonProps) => {
	const baseClass = "button";
	const variantClass = `${baseClass}--${variant}`;
	const sizeClass = `${baseClass}--${size}`;

	const classes = [baseClass, variantClass, sizeClass, className]
		.filter(Boolean)
		.join(" ");

	return (
		<button type="button" className={classes} {...props}>
			{children}
		</button>
	);
};
