"use client";

import { useEffect } from "react";

/** Attaches IntersectionObserver to `.sr` elements (scroll-in fade). */
export default function ScrollRevealInit() {
  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>(".sr");
    if (!nodes.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -6% 0px" }
    );
    nodes.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
  return null;
}
