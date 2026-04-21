"use client";

import { useEffect, useState, type CSSProperties, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** Milliseconds to wait before fading in. */
  delay?: number;
  /** Transition duration in milliseconds. */
  duration?: number;
  className?: string;
  style?: CSSProperties;
};

/**
 * Wrapper that fades its children in after a configurable delay.
 * Uses opacity only (no layout shift) and honors prefers-reduced-motion.
 */
export default function FadeIn({
  children,
  delay = 0,
  duration = 1000,
  className,
  style,
}: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setVisible(true);
      return;
    }
    const t = window.setTimeout(() => setVisible(true), delay);
    return () => window.clearTimeout(t);
  }, [delay]);

  return (
    <div
      className={`transition-opacity ${className ?? ""}`}
      style={{
        opacity: visible ? 1 : 0,
        transitionProperty: "opacity, transform",
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
