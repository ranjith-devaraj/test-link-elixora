import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Star, Quote, BadgeCheck } from "lucide-react";
import "./Reviews.css";

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

const DRAG_BUFFER = 30;
const VELOCITY_THRESHOLD = 500;
const GAP = 20;

const SPRING_OPTIONS = {
  type: "spring",
  stiffness: 300,
  damping: 30,
};

function ReviewCard({
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

  const rotateY = useTransform(x, range, [8, 0, -8], {
    clamp: false,
  });

  const initials = review.name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2);

  return (
    <motion.article
      className="review-carousel-card"
      style={{
        width: itemWidth,
        rotateY,
      }}
      transition={transition}
    >
      {/* Top section */}
      <div className="review-card-top">
        <div className="review-avatar">{initials}</div>

        <div className="review-user-info">
          <div className="review-name-row">
            <h3>{review.name}</h3>
            <BadgeCheck className="review-verified" size={16} />
          </div>

          <p>{review.role}</p>
        </div>

        <Quote className="review-quote-icon" size={30} />
      </div>

      {/* Stars */}
      <div className="review-stars">
        {Array.from({ length: review.rating }).map((_, starIndex) => (
          <Star
            key={starIndex}
            size={16}
            fill="currentColor"
            strokeWidth={1.5}
          />
        ))}
      </div>

      {/* Review */}
      <p className="review-text">"{review.text}"</p>

      {/* Bottom */}
      <div className="review-card-bottom">
        <span>Verified Customer</span>
        <span>{review.date}</span>
      </div>
    </motion.article>
  );
}

function ReviewsCarousel({
  items = REVIEWS,
  baseWidth = 390,
  autoplay = true,
  autoplayDelay = 3500,
  pauseOnHover = true,
  loop = true,
}) {
  const containerPadding = 16;

  const itemWidth = baseWidth - containerPadding * 2;
  const trackItemOffset = itemWidth + GAP;

  const itemsForRender = useMemo(() => {
    if (!loop) return items;

    if (items.length === 0) return [];

    return [items[items.length - 1], ...items, items[0]];
  }, [items, loop]);

  const [position, setPosition] = useState(loop ? 1 : 0);

  const x = useMotionValue(0);

  const [isHovered, setIsHovered] = useState(false);
  const [isJumping, setIsJumping] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const containerRef = useRef(null);

  /* ---------------------------
     Hover handling
  ---------------------------- */

  useEffect(() => {
    if (!pauseOnHover || !containerRef.current) {
      return;
    }

    const container = containerRef.current;

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [pauseOnHover]);

  /* ---------------------------
     Autoplay
  ---------------------------- */

  useEffect(() => {
    if (!autoplay) return;

    if (itemsForRender.length <= 1) {
      return;
    }

    if (pauseOnHover && isHovered) {
      return;
    }

    const timer = setInterval(() => {
      setPosition((prev) => {
        const next = prev + 1;

        return Math.min(next, itemsForRender.length - 1);
      });
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

  /* ---------------------------
     Reset position
  ---------------------------- */

  useEffect(() => {
    const startingPosition = loop ? 1 : 0;

    setPosition(startingPosition);

    x.set(-startingPosition * trackItemOffset);
  }, [items.length, loop, trackItemOffset, x]);

  /* ---------------------------
     Position safety
  ---------------------------- */

  useEffect(() => {
    if (!loop && position > itemsForRender.length - 1) {
      setPosition(Math.max(0, itemsForRender.length - 1));
    }
  }, [itemsForRender.length, loop, position]);

  /* ---------------------------
     Transition
  ---------------------------- */

  const effectiveTransition = isJumping
    ? { duration: 0 }
    : SPRING_OPTIONS;

  /* ---------------------------
     Animation complete
  ---------------------------- */

  const handleAnimationStart = () => {
    setIsAnimating(true);
  };

  const handleAnimationComplete = () => {
    if (!loop || itemsForRender.length <= 1) {
      setIsAnimating(false);
      return;
    }

    const lastCloneIndex = itemsForRender.length - 1;

    /*
      Last clone reached
      Jump back to first real item
    */

    if (position === lastCloneIndex) {
      setIsJumping(true);

      const target = 1;

      setPosition(target);

      x.set(-target * trackItemOffset);

      requestAnimationFrame(() => {
        setIsJumping(false);
        setIsAnimating(false);
      });

      return;
    }

    /*
      First clone reached
      Jump to last real item
    */

    if (position === 0) {
      setIsJumping(true);

      const target = items.length;

      setPosition(target);

      x.set(-target * trackItemOffset);

      requestAnimationFrame(() => {
        setIsJumping(false);
        setIsAnimating(false);
      });

      return;
    }

    setIsAnimating(false);
  };

  /* ---------------------------
     Drag
  ---------------------------- */

  const handleDragEnd = (_, info) => {
    const { offset, velocity } = info;

    const direction =
      offset.x < -DRAG_BUFFER || velocity.x < -VELOCITY_THRESHOLD
        ? 1
        : offset.x > DRAG_BUFFER || velocity.x > VELOCITY_THRESHOLD
        ? -1
        : 0;

    if (direction === 0) return;

    setPosition((prev) => {
      const next = prev + direction;

      const max = itemsForRender.length - 1;

      return Math.max(0, Math.min(next, max));
    });
  };

  const dragProps = loop
    ? {}
    : {
        dragConstraints: {
          left: -trackItemOffset * Math.max(itemsForRender.length - 1, 0),
          right: 0,
        },
      };

  /* ---------------------------
     Active index
  ---------------------------- */

  const activeIndex =
    items.length === 0
      ? 0
      : loop
      ? (position - 1 + items.length) % items.length
      : Math.min(position, items.length - 1);

  if (!items.length) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      className="reviews-carousel-container"
      style={{
        width: `${baseWidth}px`,
      }}
    >
      <motion.div
        className="reviews-carousel-track"
        drag={isAnimating ? false : "x"}
        {...dragProps}
        style={{
          width: itemWidth,
          gap: `${GAP}px`,
          perspective: 1000,
          perspectiveOrigin: `${
            position * trackItemOffset + itemWidth / 2
          }px 50%`,
          x,
        }}
        animate={{
          x: -(position * trackItemOffset),
        }}
        transition={effectiveTransition}
        onDragEnd={handleDragEnd}
        onAnimationStart={handleAnimationStart}
        onAnimationComplete={handleAnimationComplete}
      >
        {itemsForRender.map((review, index) => (
          <ReviewCard
            key={`${review.id}-${index}`}
            review={review}
            index={index}
            itemWidth={itemWidth}
            trackItemOffset={trackItemOffset}
            x={x}
            transition={effectiveTransition}
          />
        ))}
      </motion.div>

      {/* Indicators */}
      <div className="reviews-indicators">
        {items.map((_, index) => (
          <motion.button
            key={index}
            type="button"
            aria-label={`Go to review ${index + 1}`}
            aria-current={activeIndex === index}
            className={
              activeIndex === index
                ? "review-indicator active"
                : "review-indicator"
            }
            animate={{
              scale: activeIndex === index ? 1.2 : 1,
            }}
            onClick={() => {
              setPosition(loop ? index + 1 : index);
            }}
            transition={{
              duration: 0.15,
            }}
          />
        ))}
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
      className="relative w-full overflow-hidden bg-brand-cream/20 px-0 py-0"
    >
      {/* Background decoration */}
      <div className="reviews-bg-decoration reviews-bg-decoration-one" />
      <div className="reviews-bg-decoration reviews-bg-decoration-two" />

      <div className="relative z-10 w-full">
        {/* Heading */}
        <div className="reviews-heading">
          <p className="reviews-eyebrow">CUSTOMER LOVE</p>

          <h2>
            What Our Customers
            <span> Say</span>
          </h2>

          <p className="reviews-subtitle">
            Real experiences from people who choose pure, traditionally
            pressed oils for their everyday cooking.
          </p>
        </div>

        {/* Carousel */}
        <div className="reviews-carousel-wrapper">
          <ReviewsCarousel
            items={REVIEWS}
            baseWidth={390}
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