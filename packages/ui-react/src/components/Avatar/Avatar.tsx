import type { HTMLAttributes, ImgHTMLAttributes } from "react";

export interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
	size?: "sm" | "md" | "lg" | "xl";
	src?: string;
	alt?: string;
	fallback?: string;
}

export const Avatar = ({
	size = "md",
	src,
	alt = "",
	fallback,
	className = "",
	...props
}: AvatarProps) => {
	const classes = ["avatar", size !== "md" ? `avatar--${size}` : "", className]
		.filter(Boolean)
		.join(" ");

	return (
		<div className={classes} {...props}>
			{src ? (
				<img src={src} alt={alt} className="avatar__img" />
			) : (
				<span>{fallback || alt.charAt(0).toUpperCase() || "?"}</span>
			)}
		</div>
	);
};
