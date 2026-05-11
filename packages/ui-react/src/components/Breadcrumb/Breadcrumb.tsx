import React from "react";

export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
	/** Children elements (BreadcrumbItem) */
	children: React.ReactNode;
	/** Separator string or element */
	separator?: React.ReactNode;
}

export interface BreadcrumbItemProps
	extends React.LiHTMLAttributes<HTMLLIElement> {
	/** Link destination */
	href?: string;
	/** Whether this is the current page */
	isCurrentPage?: boolean;
	/** Link component to render (e.g., 'a' or react-router Link) */
	as?: React.ElementType;
	/** Optional CSS class */
	className?: string;
	/** Content of the item */
	children: React.ReactNode;
}

/**
 * Breadcrumb component for navigation hierarchy
 *
 * @example
 * <Breadcrumb separator="/">
 *   <BreadcrumbItem href="/">Home</BreadcrumbItem>
 *   <BreadcrumbItem href="/docs">Docs</BreadcrumbItem>
 *   <BreadcrumbItem isCurrentPage>Components</BreadcrumbItem>
 * </Breadcrumb>
 */
export const Breadcrumb = ({
	children,
	separator = "/",
	className = "",
	...props
}: BreadcrumbProps) => {
	const items = React.Children.toArray(children).filter(React.isValidElement);

	return (
		<nav
			aria-label="Breadcrumb"
			className={`breadcrumb ${className}`}
			{...props}
		>
			<ol className="breadcrumb__list">
				{items.map((child, index) => {
					const isLast = index === items.length - 1;
					return (
						<React.Fragment key={index}>
							{child}
							{!isLast && (
								<li className="breadcrumb__separator" aria-hidden="true">
									{separator}
								</li>
							)}
						</React.Fragment>
					);
				})}
			</ol>
		</nav>
	);
};

export const BreadcrumbItem = ({
	href,
	isCurrentPage,
	as: Component = "a",
	className = "",
	children,
	...props
}: BreadcrumbItemProps) => {
	const linkProps = isCurrentPage
		? { "aria-current": "page" as const }
		: { href };

	return (
		<li className={`breadcrumb__item ${className}`} {...props}>
			{isCurrentPage ? (
				<span className="breadcrumb__link" {...linkProps}>
					{children}
				</span>
			) : (
				<Component className="breadcrumb__link" {...linkProps}>
					{children}
				</Component>
			)}
		</li>
	);
};
