"use client";

import { useEffect } from "react";

/**
 * Tracks cursor position over elements matching `selector` and writes it to
 * CSS custom properties (--mx, --my) so a pseudo-element can render a soft
 * radial glow that follows the cursor.
 */
export default function InteractiveCardTracker({
  selector = ".split-stack--lp-led-mock > .split",
}: {
  selector?: string;
}) {
  useEffect(() => {
    const cards = document.querySelectorAll<HTMLElement>(selector);
    if (!cards.length) return;

    const listeners: Array<[HTMLElement, (e: MouseEvent) => void, () => void]> = [];

    cards.forEach((card) => {
      const move = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        card.style.setProperty("--mx", `${x}%`);
        card.style.setProperty("--my", `${y}%`);
      };
      const leave = () => {
        card.style.setProperty("--mx", `50%`);
        card.style.setProperty("--my", `50%`);
      };
      card.addEventListener("mousemove", move);
      card.addEventListener("mouseleave", leave);
      listeners.push([card, move, leave]);
    });

    return () => {
      listeners.forEach(([card, move, leave]) => {
        card.removeEventListener("mousemove", move);
        card.removeEventListener("mouseleave", leave);
      });
    };
  }, [selector]);

  return null;
}
