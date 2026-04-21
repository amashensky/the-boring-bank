"use client";

import { useEffect, useState, type CSSProperties } from "react";

type Props = {
  /**
   * Heading text. Use `\n` for explicit line breaks between logical lines —
   * each line is animated independently (characters cascade per line).
   */
  text: string;
  /** Initial delay before first char starts animating (ms). */
  delay?: number;
  /** Per-character stagger (ms). */
  charDelay?: number;
  /** Per-character transition duration (ms). */
  duration?: number;
  /** Extra className applied to each line <span>. */
  lineClassName?: string;
  /** Style applied to the wrapping heading element. */
  style?: CSSProperties;
  /** HTML tag to use for the heading. Defaults to h1. */
  as?: "h1" | "h2" | "h3" | "div";
  className?: string;
};

/**
 * Character-by-character entrance animation.
 * Each character starts at opacity:0 / translateX(-18px) and transitions
 * to opacity:1 / translateX(0) with a cascading delay.
 * Spaces render as non-breaking spaces so wrapping still works visually.
 */
export default function AnimatedHeading({
  text,
  delay = 200,
  charDelay = 30,
  duration = 500,
  lineClassName = "",
  style,
  as = "h1",
  className = "",
}: Props) {
  const [on, setOn] = useState(false);

  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setOn(true);
      return;
    }
    const t = window.setTimeout(() => setOn(true), delay);
    return () => window.clearTimeout(t);
  }, [delay]);

  const lines = text.split("\n");
  const Tag = as;

  return (
    <Tag className={className} style={style} aria-label={text.replace(/\n/g, " ")}>
      {lines.map((line, lineIdx) => {
        const chars = Array.from(line);
        const baseOffset = lineIdx * chars.length * charDelay;
        return (
          <span
            key={lineIdx}
            className={`block ${lineClassName}`}
            style={{ display: "block" }}
          >
            {chars.map((ch, i) => {
              const charOffset = baseOffset + i * charDelay;
              return (
                <span
                  key={i}
                  aria-hidden
                  style={{
                    display: "inline-block",
                    opacity: on ? 1 : 0,
                    transform: on ? "translateX(0)" : "translateX(-18px)",
                    transitionProperty: "opacity, transform",
                    transitionDuration: `${duration}ms`,
                    transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                    transitionDelay: `${charOffset}ms`,
                    whiteSpace: "pre",
                  }}
                >
                  {ch === " " ? "\u00A0" : ch}
                </span>
              );
            })}
          </span>
        );
      })}
    </Tag>
  );
}
