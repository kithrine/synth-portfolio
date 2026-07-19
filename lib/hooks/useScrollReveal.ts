"use client";

import { useEffect } from "react";

const REVEAL_SELECTOR =
  ".section-card, .skill-item, .project-card, .timeline-item";

/**
 * Direct-DOM port of the vanilla scroll-reveal: adds `.reveal` after mount
 * (so content stays visible if JS never runs), then `.visible` the first
 * time each element scrolls into view.
 *
 * Deliberately not a wrapper component: these elements are CSS grid children
 * (.skill-item, .project-card, ...), and wrapping them would break the grid
 * layouts. React never re-renders these class attributes, and classList.add
 * is idempotent under StrictMode's double-invoked effects.
 */
export function useScrollReveal(): void {
  useEffect(() => {
    const els = document.querySelectorAll(REVEAL_SELECTOR);
    els.forEach((el) => el.classList.add("reveal"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );

    els.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
