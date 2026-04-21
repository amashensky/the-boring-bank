"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Animates a numeric range (low–high) by counting each end up on scroll.
 * Used in the NAV facility sticker rows; mirrors the AnimatedCounter
 * ease-out-cubic interpolation so timing matches the home page band.
 */
type Props = {
  low: number;
  high: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
};

export default function AnimatedRange({
  low,
  high,
  prefix = "",
  suffix = "",
  duration = 1600,
}: Props) {
  const [l, setL] = useState(0);
  const [h, setH] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const tick = (now: number) => {
              const t = Math.min(1, (now - start) / duration);
              const eased = 1 - Math.pow(1 - t, 3);
              setL(low * eased);
              setH(high * eased);
              if (t < 1) requestAnimationFrame(tick);
              else {
                setL(low);
                setH(high);
              }
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [low, high, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {Math.round(l)}
      {"\u2013"}
      {Math.round(h)}
      {suffix}
    </span>
  );
}
