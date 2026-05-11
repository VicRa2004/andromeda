import React, { useState, useRef, useEffect } from "react";

export interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
	/** Children elements (CarouselSlide) */
	children: React.ReactNode;
	/** Show navigation dots */
	showDots?: boolean;
	/** Show previous/next controls */
	showControls?: boolean;
	/** Number of items to show per view */
	itemsPerView?: number;
}

export interface CarouselSlideProps
	extends React.HTMLAttributes<HTMLDivElement> {
	/** Content of the slide */
	children: React.ReactNode;
	/** @internal flex-basis to control width */
	flexBasis?: string;
}

/**
 * Native CSS-based Carousel component (Scroll Snap)
 *
 * @example
 * <Carousel itemsPerView={2} showDots showControls>
 *   <CarouselSlide>Slide 1</CarouselSlide>
 *   <CarouselSlide>Slide 2</CarouselSlide>
 * </Carousel>
 */
export const Carousel = ({
	children,
	showDots = true,
	showControls = true,
	itemsPerView = 1,
	className = "",
	...props
}: CarouselProps) => {
	const [activeIndex, setActiveIndex] = useState(0);
	const trackRef = useRef<HTMLDivElement>(null);

	const validChildren = React.Children.toArray(children).filter(
		React.isValidElement,
	);
	const totalSlides = validChildren.length;
	// Calculate total dot pages needed depending on items per view
	const totalPages = Math.max(1, Math.ceil(totalSlides / itemsPerView));

	const handleScroll = () => {
		if (trackRef.current) {
			const scrollLeft = trackRef.current.scrollLeft;
			const slideWidth = trackRef.current.clientWidth / itemsPerView;
			// Find nearest slide
			const newIndex = Math.round(scrollLeft / slideWidth);
			// Calculate which page we are on
			const newPage = Math.min(
				Math.floor(newIndex / itemsPerView),
				totalPages - 1,
			);
			if (newPage !== activeIndex) {
				setActiveIndex(newPage);
			}
		}
	};

	const scrollToIndex = (index: number) => {
		if (trackRef.current) {
			const slideWidth = trackRef.current.clientWidth / itemsPerView;
			trackRef.current.scrollTo({
				left: index * slideWidth,
				behavior: "smooth",
			});
		}
	};

	const goToPrev = () => {
		if (trackRef.current) {
			const slideWidth = trackRef.current.clientWidth / itemsPerView;
			trackRef.current.scrollBy({ left: -slideWidth, behavior: "smooth" });
		}
	};

	const goToNext = () => {
		if (trackRef.current) {
			const slideWidth = trackRef.current.clientWidth / itemsPerView;
			trackRef.current.scrollBy({ left: slideWidth, behavior: "smooth" });
		}
	};

	const baseClass = "carousel";
	const classes = [baseClass, className].filter(Boolean).join(" ");
	const slideFlexBasis = `${100 / itemsPerView}%`;

	return (
		<div className={classes} {...props}>
			{showControls && (
				<>
					<button
						type="button"
						className="carousel__control carousel__control--prev"
						onClick={goToPrev}
						aria-label="Previous slide"
					>
						<svg
							width="20"
							height="20"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<polyline points="15 18 9 12 15 6"></polyline>
						</svg>
					</button>
					<button
						type="button"
						className="carousel__control carousel__control--next"
						onClick={goToNext}
						aria-label="Next slide"
					>
						<svg
							width="20"
							height="20"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<polyline points="9 18 15 12 9 6"></polyline>
						</svg>
					</button>
				</>
			)}

			<div className="carousel__track" ref={trackRef} onScroll={handleScroll}>
				{validChildren.map((child, index) =>
					React.cloneElement(child as React.ReactElement<any>, {
						flexBasis: slideFlexBasis,
						key: index,
					}),
				)}
			</div>

			{showDots && totalPages > 1 && (
				<div className="carousel__nav" role="tablist">
					{Array.from({ length: totalPages }).map((_, idx) => (
						<button
							key={idx}
							type="button"
							role="tab"
							aria-selected={idx === activeIndex}
							aria-label={`Go to slide ${idx + 1}`}
							className={`carousel__dot ${idx === activeIndex ? "is-active" : ""}`}
							onClick={() => scrollToIndex(idx * itemsPerView)}
						/>
					))}
				</div>
			)}
		</div>
	);
};

export const CarouselSlide = ({
	flexBasis,
	className = "",
	children,
	style,
	...props
}: CarouselSlideProps) => {
	const baseClass = "carousel__slide";
	const classes = [baseClass, className].filter(Boolean).join(" ");

	const slideStyle = {
		...style,
		flexBasis,
		maxWidth: flexBasis, // ensure it doesn't grow beyond
	};

	return (
		<div className={classes} style={slideStyle} {...props}>
			{children}
		</div>
	);
};
