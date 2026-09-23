import React from 'react';
import { motion } from 'framer-motion';

// ── Scroll DOWN to next snap section ──────────────────────────────────────────
export const scrollToNextSection = (e) => {
  if (e) e.preventDefault();

  const currentY = window.scrollY;
  const sections = Array.from(document.querySelectorAll('.snap-section, .snap-end'));

  for (const section of sections) {
    const rect = section.getBoundingClientRect();
    const sectionTop = currentY + rect.top;

    // Find the first section that starts meaningfully below current position
    if (sectionTop > currentY + 25) {
      window.scrollTo({ top: sectionTop, behavior: 'smooth' });
      return;
    }
  }

  // Fallback
  window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
};

// ── Scroll UP to previous snap section ───────────────────────────────────────
export const scrollToPrevSection = (e) => {
  if (e) e.preventDefault();

  const currentY = window.scrollY;
  const sections = Array.from(document.querySelectorAll('.snap-section, .snap-end'));

  // Iterate in reverse to find the last section strictly above current position
  let target = null;
  for (const section of sections) {
    const rect = section.getBoundingClientRect();
    const sectionTop = currentY + rect.top;

    if (sectionTop < currentY - 25) {
      target = sectionTop;
    }
  }

  if (target !== null) {
    window.scrollTo({ top: target, behavior: 'smooth' });
  } else {
    // Fallback: scroll up by 1 viewport height
    window.scrollBy({ top: -window.innerHeight, behavior: 'smooth' });
  }
};

// ── Shared Arrow Component ────────────────────────────────────────────────────
export default function ScrollArrow({
  direction = 'down',   // 'down' | 'up'
  variant = 'light',    // 'light' | 'dark'
  className = '',
  onClick,
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
    ? `absolute top-6 md:top-8 left-1/2 -translate-x-1/2 z-30 pointer-events-auto ${className}`
    : `absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-30 pointer-events-auto ${className}`;

  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    } else if (isUp) {
      scrollToPrevSection(e);
    } else {
      scrollToNextSection(e);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.8 }}
      className={positionClass}
    >
      <button
        onClick={handleClick}
        className={`flex flex-col items-center justify-center ${colorClasses} transition-all duration-300 cursor-pointer group p-2 rounded-full focus:outline-none`}
        aria-label={isUp ? 'Scroll to previous section' : 'Scroll to next section'}
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
              /* Up chevron */
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              /* Down chevron */
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            }
          </svg>
        </motion.div>
      </button>
    </motion.div>
  );
}

// Backward-compat named export so existing imports of ScrollDownArrow still work
export const ScrollDownArrow = (props) => <ScrollArrow direction="down" {...props} />;

