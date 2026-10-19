import React from 'react';
import { motion } from 'framer-motion';
import {
  scrollToNextSection,
  scrollToPrevSection,
} from '../utils/scrollUtils';


// ── Shared Arrow Component ────────────────────────────────────────────────────
export default function ScrollArrow({
  direction = 'down',   // 'down' | 'up'
  variant = 'light',    // 'light' | 'dark'
  className = '',
  targetId = 'about',
  href,
  onClick,
  'aria-label': customAriaLabel,
}) {
  const isUp = direction === 'up';

  const colorClasses = variant === 'dark'
    ? 'text-[#4E3629]/70 hover:text-[#4E3629]'
    : 'text-brand-white/80 hover:text-brand-white';

  // Down arrow bounces downward; up arrow bounces upward
  const bounceAnim = isUp
    ? { y: [0, -8, 0] }
    : { y: [0, 8, 0] };

  // Positioning: down = bottom-6/8, up = top-6/8
  const positionClass = isUp
    ? `absolute top-6 md:top-8 left-1/2 -translate-x-1/2 z-40 pointer-events-auto ${className}`
    : `absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-40 pointer-events-auto ${className}`;

  const resolvedTarget = targetId || (href ? href.replace('#', '') : (isUp ? 'home' : 'about'));
  const resolvedHref = href || `#${resolvedTarget}`;
  const defaultLabel = isUp
    ? 'Scroll to previous section'
    : `Scroll to ${resolvedTarget.charAt(0).toUpperCase() + resolvedTarget.slice(1)} section`;
  const ariaLabel = customAriaLabel || defaultLabel;

  const handleClick = (e) => {
    if (e) {
      if (e.preventDefault) e.preventDefault();
      if (e.stopPropagation) e.stopPropagation();
    }

    if (onClick) {
      onClick(e);
      return;
    }

    const currentY = typeof window !== 'undefined' ? window.scrollY : 0;
    const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    const scrollBehavior = prefersReducedMotion ? 'auto' : 'smooth';

    const aboutElement = document.getElementById('about');
    const homeElement = document.getElementById('home');
    const heroHeight = homeElement
      ? homeElement.getBoundingClientRect().height
      : (typeof window !== 'undefined' ? window.innerHeight : 800);

    // If down arrow is clicked while in or near the Hero section, navigate directly to About
    if (!isUp) {
      if (currentY < heroHeight * 0.75) {
        window.scrollTo({
          top: heroHeight,
          behavior: scrollBehavior,
        });

        if (aboutElement) {
          try {
            aboutElement.scrollIntoView({
              behavior: scrollBehavior,
              block: 'start',
            });
          } catch {}
        }

        if (typeof window !== 'undefined' && window.history) {
          window.history.replaceState(null, '', '#about');
        }
        return;
      }

      // If already past Hero, advance to next section
      scrollToNextSection(e);
      return;
    }

    // Up arrow
    scrollToPrevSection(e);
  };

  return (
    <div className={positionClass}>
      <a
        href={resolvedHref}
        onClick={handleClick}
        className={`flex flex-col items-center justify-center ${colorClasses} transition-all duration-300 cursor-pointer group p-3 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2`}
        aria-label={ariaLabel}
      >
        <motion.div
          animate={bounceAnim}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg
            className="w-7 h-7 md:w-8 md:h-8 drop-shadow-md"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isUp
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            }
          </svg>
        </motion.div>
      </a>
    </div>
  );
}

// Backward-compat named export so existing imports of ScrollDownArrow still work
export const ScrollDownArrow = (props) => <ScrollArrow direction="down" {...props} />;
