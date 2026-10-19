
import { useEffect } from 'react';

/**
 * useFullPageScroll
 *
 * Intentionally does not intercept wheel, touch, or keyboard scrolling.
 * Native browser scrolling allows sticky stacking sections and the
 * Framer Motion product showcases to work together naturally.
 *
 * Kept as a no-op for backward compatibility with existing imports.
 */
export default function useFullPageScroll() {
  useEffect(() => {
    // Native browser scrolling is intentionally preserved.
    return undefined;
  }, []);
}
