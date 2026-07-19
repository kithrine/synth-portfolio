"use client";

import { useEffect, useState } from "react";

type Star = {
  size: number;
  x: number;
  y: number;
  dur: string;
  delay: string;
  opacity: number;
};

const STAR_COUNT = 120;

/**
 * Randomized star field over the hero image. Stars are generated in an
 * effect — not during render — so the server HTML and the first client
 * render agree (both empty), avoiding a hydration mismatch from
 * Math.random(). Visually identical to the vanilla site, which also
 * populated the field only after DOMContentLoaded.
 */
export default function StarField({
  /* Hero keeps stars in the upper 55% (the sky above the skyline);
     full-viewport backdrops pass 100. */
  yMax = 55,
}: {
  yMax?: number;
}) {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    // Stars must be generated post-mount: rendering Math.random() output on
    // the server would hydration-mismatch. This one-shot setState runs once.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setStars(
      Array.from({ length: STAR_COUNT }, () => ({
        size: Math.random() * 2.5 + 0.5,
        x: Math.random() * 100,
        y: Math.random() * yMax,
        dur: `${(Math.random() * 4 + 2).toFixed(1)}s`,
        delay: `${(Math.random() * 5).toFixed(1)}s`,
        opacity: Math.random() * 0.6 + 0.2,
      })),
    );
  }, [yMax]);

  return (
    <div className="stars" id="stars">
      {stars.map((star, i) => (
        <div
          key={i}
          className="star"
          style={
            {
              width: `${star.size}px`,
              height: `${star.size}px`,
              left: `${star.x}%`,
              top: `${star.y}%`,
              opacity: star.opacity,
              "--dur": star.dur,
              "--delay": star.delay,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
