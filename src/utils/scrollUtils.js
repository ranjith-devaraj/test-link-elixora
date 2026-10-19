/**
 * Accurately calculates the cumulative scroll offset required for a stacking section
 * to slide up and reach top: 0 of the viewport.
 * This avoids Chromium/WebKit bugs where element.scrollIntoView() calculates 0 on sticky elements.
 */
export const getSectionScrollTop = (targetElement) => {
  if (!targetElement) return 0;
  if (targetElement.id === 'home') return 0;

  const parent = targetElement.parentElement;
  if (parent) {
    let top = 0;
    for (const child of parent.children) {
      if (child === targetElement) {
        let currentParent = parent;
        while (currentParent && currentParent !== document.body) {
          top += currentParent.offsetTop || 0;
          currentParent = currentParent.offsetParent;
        }
        if (targetElement.id === 'about' && typeof window !== 'undefined') {
          return Math.max(top, window.innerHeight);
        }
        return top;
      }
      top += child.offsetHeight;
    }
  }

  let top = 0;
  let curr = targetElement;
  while (curr) {
    top += curr.offsetTop || 0;
    curr = curr.offsetParent;
  }

  if (targetElement.id === 'about' && typeof window !== 'undefined') {
    return Math.max(top, window.innerHeight);
  }

  return top;
};

// ── Scroll DOWN to next section ──────────────────────────────────────────────
export const scrollToNextSection = (e) => {
  if (e && e.preventDefault) e.preventDefault();

  const currentY = window.scrollY;
  const sections = Array.from(document.querySelectorAll('main > section[id]'));
  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  for (const section of sections) {
    const sectionTop = getSectionScrollTop(section);

    // Find the first section whose start position is meaningfully below current scroll
    if (sectionTop > currentY + 30) {
      window.scrollTo({
        top: sectionTop,
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
      });
      if (typeof window !== 'undefined' && window.history && window.location.hash !== `#${section.id}`) {
        window.history.replaceState(null, '', `#${section.id}`);
      }
      return;
    }
  }

  // Fallback: scroll down by 1 viewport height
  window.scrollBy({
    top: window.innerHeight,
    behavior: prefersReducedMotion ? 'auto' : 'smooth',
  });
};

// ── Scroll UP to previous section ─────────────────────────────────────────────
export const scrollToPrevSection = (e) => {
  if (e && e.preventDefault) e.preventDefault();

  const currentY = window.scrollY;
  const sections = Array.from(document.querySelectorAll('main > section[id]'));
  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  let targetTop = null;
  let targetId = null;

  for (const section of sections) {
    const sectionTop = getSectionScrollTop(section);
    if (sectionTop < currentY - 30) {
      targetTop = sectionTop;
      targetId = section.id;
    }
  }

  if (targetTop !== null) {
    window.scrollTo({
      top: targetTop,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
    if (targetId && typeof window !== 'undefined' && window.history && window.location.hash !== `#${targetId}`) {
      window.history.replaceState(null, '', `#${targetId}`);
    }
  } else {
    // Fallback: scroll up by 1 viewport height
    window.scrollBy({
      top: -window.innerHeight,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
  }
};
