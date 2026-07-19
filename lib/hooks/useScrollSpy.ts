"use client";

import { useEffect, useState } from "react";

/**
 * Tracks which section is currently in the middle band of the viewport.
 * Same observer parameters as the vanilla site's scroll-spy: a section is
 * "active" while it intersects the strip between 40% from the top and 40%
 * from the bottom of the viewport.
 */
export function useScrollSpy(ids: readonly string[]): string {
  const [active, setActive] = useState<string>(ids[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { root: null, rootMargin: "-40% 0px -40% 0px", threshold: 0 },
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [ids]);

  return active;
}
