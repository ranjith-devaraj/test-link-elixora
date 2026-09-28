import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import {
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion";

import {
  Star,
  Quote,
  BadgeCheck,
} from "lucide-react";

import "./Reviews.css";

/* =========================================================
   REVIEWS DATA
========================================================= */

const REVIEWS = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Home Chef & Mother of Two",
    rating: 5,
    text: "Switching to Elixora Cold Pressed Groundnut Oil has completely changed my cooking. The aroma of pure groundnuts makes every dish taste authentic. My kids can easily notice the difference, and knowing it is 100% chemical-free gives me immense peace of mind.",
    date: "August 2026",
  },
  {
    id: 2,
    name: "Rohan Deshmukh",
    role: "Fitness Coach",
    rating: 5,
    text: "As someone highly conscious about nutrition and heart health, I recommend Elixora Coconut Oil. I use it for my morning bullet coffee and baking. It's incredibly light, doesn't smell processed, and is as raw and natural as it gets.",
    date: "July 2026",
  },
  {
    id: 3,
    name: "Ananya Iyer",
    role: "Yoga Practitioner",
    rating: 5,
    text: "Elixora Sesame Oil is a staple in my household. I use it for Ayurvedic oil pulling (Kavala) and traditional south Indian cooking. The richness and authentic wood-press flavor are unmatched by any supermarket brand I have tried.",
    date: "June 2026",
  },
];

/* =========================================================
   CAROUSEL SETTINGS
========================================================= */

const GAP = 16;

const DRAG_BUFFER = 30;

const VELOCITY_THRESHOLD = 500;

const SPRING_OPTIONS = {
  type: "spring",
  stiffness: 300,
  damping: 30,
};

/* =========================================================
   SHARED REVIEW CONTENT
========================================================= */

function ReviewContent({ review }) {
  const initials = review.name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2);

  return (
    <>
      {/* User information */}
      <div className="review-card-top">
        <div className="review-avatar">
          {initials}
        </div>

        <div className="review-user-info">
          <div className="review-name-row">
            <h3>{review.name}</h3>

            <BadgeCheck
              className="review-verified"
              size={16}
            />
          </div>

          <p>{review.role}</p>
        </div>

        <Quote
          className="review-quote-icon"
          size={30}
        />
      </div>

      {/* Rating */}
      <div className="review-stars">
        {Array.from({
          length: review.rating,
        }).map((_, index) => (
          <Star
            key={index}
            size={16}
            fill="currentColor"
            strokeWidth={1.5}
          />
        ))}
      </div>

      {/* Review */}
      <p className="review-text">
        "{review.text}"
      </p>

      {/* Footer */}
      <div className="review-card-bottom">
        <span>Verified Customer</span>

        <span>{review.date}</span>
      </div>
    </>
  );
}

/* =========================================================
   DESKTOP REVIEW CARD
========================================================= */

function DesktopReviewCard({ review }) {
  return (
    <article className="review-card">
      <ReviewContent review={review} />
    </article>
  );
}

/* =========================================================
   MOBILE CAROUSEL REVIEW CARD
========================================================= */

function CarouselReviewCard({
  review,
  index,
  itemWidth,
  trackItemOffset,
  x,
  transition,
}) {
  const range = [
    -(index + 1) * trackItemOffset,
    -index * trackItemOffset,
    -(index - 1) * trackItemOffset,
  ];

  const rotateY = useTransform(
    x,
    range,
    [8, 0, -8],
    {
      clamp: false,
    }
  );

  return (
    <motion.article
      className="review-card review-card-carousel"
      style={{
        width: itemWidth,
        rotateY,
      }}
      transition={transition}
    >
      <ReviewContent review={review} />
    </motion.article>
  );
}

/* =========================================================
   MOBILE CAROUSEL
========================================================= */

function ReviewsCarousel({
  items = REVIEWS,
  autoplay = true,
  autoplayDelay = 3500,
  pauseOnHover = true,
  loop = true,
}) {
  const containerRef = useRef(null);

  const [isHovered, setIsHovered] =
    useState(false);

  const [isJumping, setIsJumping] =
    useState(false);

  const [isAnimating, setIsAnimating] =
    useState(false);

  /*
   * The carousel width is calculated from the
   * available mobile screen width.
   */

  const [containerWidth, setContainerWidth] =
    useState(360);

  const x = useMotionValue(0);

  /* -----------------------------------------
     Responsive width
  ----------------------------------------- */

  useEffect(() => {
    const updateWidth = () => {
      const width =
        window.innerWidth;

      /*
       * Keep some side spacing on mobile.
       */

      const calculatedWidth =
        Math.min(width - 32, 390);

      setContainerWidth(
        Math.max(calculatedWidth, 280)
      );
    };

    updateWidth();

    window.addEventListener(
      "resize",
      updateWidth
    );

    return () => {
      window.removeEventListener(
        "resize",
        updateWidth
      );
    };
  }, []);

  const itemWidth =
    containerWidth - 32;

  const trackItemOffset =
    itemWidth + GAP;

  /* -----------------------------------------
     Infinite loop items
  ----------------------------------------- */

  const itemsForRender = useMemo(() => {
    if (!loop) {
      return items;
    }

    if (items.length === 0) {
      return [];
    }

    return [
      items[items.length - 1],
      ...items,
      items[0],
    ];
  }, [items, loop]);

  const [position, setPosition] =
    useState(loop ? 1 : 0);

  /* -----------------------------------------
     Reset position when width changes
  ----------------------------------------- */

  useEffect(() => {
    const startingPosition =
      loop ? 1 : 0;

    setPosition(startingPosition);

    x.set(
      -startingPosition *
        trackItemOffset
    );
  }, [
    loop,
    trackItemOffset,
    x,
  ]);

  /* -----------------------------------------
     Hover handling
  ----------------------------------------- */

  useEffect(() => {
    if (
      !pauseOnHover ||
      !containerRef.current
    ) {
      return;
    }

    const container =
      containerRef.current;

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    container.addEventListener(
      "mouseenter",
      handleMouseEnter
    );

    container.addEventListener(
      "mouseleave",
      handleMouseLeave
    );

    return () => {
      container.removeEventListener(
        "mouseenter",
        handleMouseEnter
      );

      container.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );
    };
  }, [pauseOnHover]);

  /* -----------------------------------------
     Autoplay
  ----------------------------------------- */

  useEffect(() => {
    if (!autoplay) {
      return;
    }

    if (
      itemsForRender.length <= 1
    ) {
      return;
    }

    if (
      pauseOnHover &&
      isHovered
    ) {
      return;
    }

    const timer = setInterval(() => {
      setPosition((previous) =>
        Math.min(
          previous + 1,
          itemsForRender.length - 1
        )
      );
    }, autoplayDelay);

    return () => {
      clearInterval(timer);
    };
  }, [
    autoplay,
    autoplayDelay,
    isHovered,
    pauseOnHover,
    itemsForRender.length,
  ]);

  /* -----------------------------------------
     Animation state
  ----------------------------------------- */

  const effectiveTransition =
    isJumping
      ? { duration: 0 }
      : SPRING_OPTIONS;

  const handleAnimationStart = () => {
    setIsAnimating(true);
  };

  /* -----------------------------------------
     Infinite loop handling
  ----------------------------------------- */

  const handleAnimationComplete =
    () => {
      if (
        !loop ||
        itemsForRender.length <= 1
      ) {
        setIsAnimating(false);
        return;
      }

      const lastCloneIndex =
        itemsForRender.length - 1;

      /*
       * Last clone reached.
       * Jump silently to first real item.
       */

      if (
        position === lastCloneIndex
      ) {
        setIsJumping(true);

        const target = 1;

        setPosition(target);

        x.set(
          -target *
            trackItemOffset
        );

        requestAnimationFrame(() => {
          setIsJumping(false);
          setIsAnimating(false);
        });

        return;
      }

      /*
       * First clone reached.
       * Jump silently to last real item.
       */

      if (position === 0) {
        setIsJumping(true);

        const target = items.length;

        setPosition(target);

        x.set(
          -target *
            trackItemOffset
        );

        requestAnimationFrame(() => {
          setIsJumping(false);
          setIsAnimating(false);
        });

        return;
      }

      setIsAnimating(false);
    };

  /* -----------------------------------------
     Drag / Swipe
  ----------------------------------------- */

  const handleDragEnd = (
    _,
    info
  ) => {
    const {
      offset,
      velocity,
    } = info;

    const direction =
      offset.x < -DRAG_BUFFER ||
      velocity.x <
        -VELOCITY_THRESHOLD
        ? 1
        : offset.x > DRAG_BUFFER ||
          velocity.x >
            VELOCITY_THRESHOLD
        ? -1
        : 0;

    if (direction === 0) {
      return;
    }

    setPosition((previous) => {
      const next =
        previous + direction;

      const max =
        itemsForRender.length - 1;

      return Math.max(
        0,
        Math.min(next, max)
      );
    });
  };

  /* -----------------------------------------
     Active indicator
  ----------------------------------------- */

  const activeIndex =
    items.length === 0
      ? 0
      : loop
      ? (position -
          1 +
          items.length) %
        items.length
      : Math.min(
          position,
          items.length - 1
        );

  if (!items.length) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      className="mobile-reviews-carousel"
    >
      <motion.div
        className="mobile-reviews-track"
        drag={
          isAnimating
            ? false
            : "x"
        }
        dragConstraints={
          loop
            ? undefined
            : {
                left:
                  -trackItemOffset *
                  Math.max(
                    itemsForRender.length -
                      1,
                    0
                  ),
                right: 0,
              }
        }
        style={{
          width: itemWidth,
          gap: `${GAP}px`,
          perspective: 1000,
          perspectiveOrigin: `${
            position *
              trackItemOffset +
            itemWidth / 2
          }px 50%`,
          x,
        }}
        animate={{
          x: -(
            position *
            trackItemOffset
          ),
        }}
        transition={
          effectiveTransition
        }
        onDragEnd={handleDragEnd}
        onAnimationStart={
          handleAnimationStart
        }
        onAnimationComplete={
          handleAnimationComplete
        }
      >
        {itemsForRender.map(
          (review, index) => (
            <CarouselReviewCard
              key={`${review.id}-${index}`}
              review={review}
              index={index}
              itemWidth={itemWidth}
              trackItemOffset={
                trackItemOffset
              }
              x={x}
              transition={
                effectiveTransition
              }
            />
          )
        )}
      </motion.div>

      {/* Indicators */}
      <div className="reviews-indicators">
        {items.map(
          (_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to review ${
                index + 1
              }`}
              aria-current={
                activeIndex === index
              }
              className={`review-indicator ${
                activeIndex === index
                  ? "active"
                  : ""
              }`}
              onClick={() => {
                setPosition(
                  loop
                    ? index + 1
                    : index
                );
              }}
            />
          )
        )}
      </div>
    </div>
  );
}

/* =========================================================
   MAIN REVIEWS SECTION
========================================================= */

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="reviews-section"
    >
      {/* Decorative background */}
      <div className="reviews-decoration reviews-decoration-one" />

      <div className="reviews-decoration reviews-decoration-two" />

      <div className="reviews-content">

        {/* Heading */}
        <div className="reviews-heading">

          <p className="reviews-eyebrow">
            CUSTOMER LOVE
          </p>

          <h2>
            What Our Customers
            <span> Say</span>
          </h2>

          <p className="reviews-subtitle">
            Real experiences from people
            who choose pure,
            traditionally pressed oils
            for their everyday cooking.
          </p>

        </div>

        {/* =====================================
            DESKTOP
        ====================================== */}

        <div className="reviews-desktop">

          <div className="reviews-grid">

            {REVIEWS.map(
              (review) => (
                <DesktopReviewCard
                  key={review.id}
                  review={review}
                />
              )
            )}

          </div>

        </div>

        {/* =====================================
            MOBILE
        ====================================== */}

        <div className="reviews-mobile">

          <ReviewsCarousel
            items={REVIEWS}
            autoplay={true}
            autoplayDelay={3500}
            pauseOnHover={true}
            loop={true}
          />

        </div>

      </div>
    </section>
  );
}