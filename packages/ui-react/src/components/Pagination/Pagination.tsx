import React from "react";

export interface PaginationProps {
	/** Total number of pages */
	totalPages: number;
	/** Current active page (1-indexed) */
	currentPage: number;
	/** Callback when page changes */
	onPageChange: (page: number) => void;
	/** Size of the pagination */
	size?: "sm" | "md" | "lg";
	/** Rounded variant */
	rounded?: boolean;
	/** Number of siblings to show around current page */
	siblingCount?: number;
	/** Optional CSS class name */
	className?: string;
}

/**
 * Pagination component for navigating through pages
 *
 * @example
 * <Pagination totalPages={10} currentPage={1} onPageChange={(page) => setPage(page)} />
 */
export const Pagination = ({
	totalPages,
	currentPage,
	onPageChange,
	size = "md",
	rounded = false,
	siblingCount = 1,
	className = "",
}: PaginationProps) => {
	const generatePages = () => {
		const totalNumbers = siblingCount * 2 + 3; // siblings + current + first + last
		const totalBlocks = totalNumbers + 2; // + 2 for ellipsis

		if (totalPages <= totalBlocks) {
			return Array.from({ length: totalPages }, (_, i) => i + 1);
		}

		const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
		const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

		const showLeftEllipsis = leftSiblingIndex > 2;
		const showRightEllipsis = rightSiblingIndex < totalPages - 1;

		if (!showLeftEllipsis && showRightEllipsis) {
			const leftItemCount = 3 + 2 * siblingCount;
			const leftRange = Array.from({ length: leftItemCount }, (_, i) => i + 1);
			return [...leftRange, "...", totalPages];
		}

		if (showLeftEllipsis && !showRightEllipsis) {
			const rightItemCount = 3 + 2 * siblingCount;
			const rightRange = Array.from(
				{ length: rightItemCount },
				(_, i) => totalPages - rightItemCount + i + 1,
			);
			return [1, "...", ...rightRange];
		}

		const middleRange = Array.from(
			{ length: rightSiblingIndex - leftSiblingIndex + 1 },
			(_, i) => leftSiblingIndex + i,
		);
		return [1, "...", ...middleRange, "...", totalPages];
	};

	const pages = generatePages();

	const baseClass = "pagination";
	const sizeClass = size !== "md" ? `${baseClass}--${size}` : "";
	const roundedClass = rounded ? `${baseClass}--rounded` : "";

	const classes = [baseClass, sizeClass, roundedClass, className]
		.filter(Boolean)
		.join(" ");

	return (
		<nav aria-label="Pagination" className={classes}>
			<ul className={`${baseClass}__list`}>
				<li>
					<button
						type="button"
						className={`${baseClass}__link`}
						onClick={() => onPageChange(currentPage - 1)}
						disabled={currentPage === 1}
						aria-label="Previous page"
					>
						&laquo;
					</button>
				</li>
				{pages.map((page, index) => {
					if (page === "...") {
						return (
							<li key={`ellipsis-${index}`}>
								<span className={`${baseClass}__link is-disabled`}>...</span>
							</li>
						);
					}

					const isCurrent = page === currentPage;
					return (
						<li key={page}>
							<button
								type="button"
								className={`${baseClass}__link ${isCurrent ? "is-active" : ""}`}
								aria-current={isCurrent ? "page" : undefined}
								onClick={() => onPageChange(page as number)}
							>
								{page}
							</button>
						</li>
					);
				})}
				<li>
					<button
						type="button"
						className={`${baseClass}__link`}
						onClick={() => onPageChange(currentPage + 1)}
						disabled={currentPage === totalPages}
						aria-label="Next page"
					>
						&raquo;
					</button>
				</li>
			</ul>
		</nav>
	);
};
