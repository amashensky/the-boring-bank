"use client";

/* Small decorative visuals that sit to the right of section headers
   to fill otherwise-empty horizontal space. Pure HTML/CSS, no images.
   Both stickers animate in on scroll (slide from the right + fade)
   using IntersectionObserver — matches the AdvantageSection reveal feel. */

import { useEffect, useRef, useState, type ReactNode } from "react";

function useScrollReveal() {
  const ref = useRef<HTMLElement | null>(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setOn(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setOn(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -8% 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, on };
}

function Sticker({
  className,
  ariaLabel,
  children,
}: {
  className: string;
  ariaLabel: string;
  children: ReactNode;
}) {
  const { ref, on } = useScrollReveal();
  return (
    <aside
      ref={ref as React.RefObject<HTMLElement>}
      className={`${className} hd-reveal${on ? " hd-reveal--on" : ""}`}
      aria-label={ariaLabel}
    >
      {children}
    </aside>
  );
}

export function EcosystemCard() {
  return (
    <Sticker className="hd-velocity" ariaLabel="Time to close">
      <span className="hd-velocity__eyebrow">Time to Close</span>
      <div className="hd-velocity__rows">
        <div className="hd-velocity__row">
          <span className="hd-velocity__label">Industry</span>
          <span className="hd-velocity__track">
            <span
              className="hd-velocity__fill hd-velocity__fill--industry"
              style={{ width: "100%" }}
              aria-hidden
            />
          </span>
          <span className="hd-velocity__value hd-velocity__value--muted">6&ndash;9 mo</span>
        </div>
        <div className="hd-velocity__row">
          <span className="hd-velocity__label">The Boring Bank</span>
          <span className="hd-velocity__track">
            <span
              className="hd-velocity__fill hd-velocity__fill--us"
              style={{ width: "20%" }}
              aria-hidden
            />
          </span>
          <span className="hd-velocity__value">45 days</span>
        </div>
      </div>
      <div className="hd-velocity__foot">Intake &rarr; wire. Averaged.</div>
    </Sticker>
  );
}

export function AdvantageChecklistCard() {
  const items = [
    "Proven team",
    "Tech-enabled platform",
    "Proven concept",
    "Aligned fee model",
  ];
  return (
    <Sticker className="hd-checklist" ariaLabel="Why The Boring Bank">
      <div className="hd-checklist__head">
        <span className="hd-checklist__eyebrow">Why TBB</span>
        <span className="hd-checklist__badge">Vetted</span>
      </div>
      <ul className="hd-checklist__list">
        {items.map((item, i) => (
          <li
            key={item}
            className="hd-checklist__row hd-stagger"
            style={{ ["--hd-stagger-delay" as string]: `${i * 80}ms` }}
          >
            <span className="hd-checklist__check" aria-hidden>
              <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="3 8.5 6.5 12 13 4.5" />
              </svg>
            </span>
            <span className="hd-checklist__label">{item}</span>
          </li>
        ))}
      </ul>
      <div className="hd-checklist__foot">
        <span>Institutional-grade</span>
        <span className="hd-checklist__foot-num">LP-Led Secondaries</span>
      </div>
    </Sticker>
  );
}
