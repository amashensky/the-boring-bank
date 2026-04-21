"use client";

import { useEffect, useRef, useState } from "react";
import AnimatedRange from "@/components/AnimatedRange";

/**
 * Mini "loan dashboard" sticker — mirrors what an active NAV facility
 * readout looks like rather than a generic spec sheet. Shows a live-style
 * header pill, drawn vs available capacity with a progress meter, and a
 * small stack of key covenants / status rows. Counts up on scroll.
 */
function useReveal() {
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

export default function NavFacilitySticker() {
  const { ref, on } = useReveal();
  return (
    <aside
      ref={ref as React.RefObject<HTMLElement>}
      className={`nav-facility-sticker hd-reveal${on ? " hd-reveal--on" : ""}`}
      aria-label="Representative NAV facility dashboard"
    >
      <div className="nav-facility-sticker__head">
        <span className="nav-facility-sticker__status">
          <span className="nav-facility-sticker__dot" aria-hidden />
          <span className="nav-facility-sticker__status-label">Active</span>
        </span>
        <span className="nav-facility-sticker__id">Sample Facility</span>
      </div>

      <div className="nav-facility-sticker__capacity">
        <div className="nav-facility-sticker__capacity-head">
          <span className="nav-facility-sticker__label">Drawn</span>
          <span className="nav-facility-sticker__value">
            <AnimatedRange low={35} high={35} prefix="$" suffix="M" />
            <span className="nav-facility-sticker__of"> / $50M</span>
          </span>
        </div>
        <div className="nav-facility-sticker__meter" aria-hidden>
          <span className="nav-facility-sticker__meter-fill" />
        </div>
      </div>

      <div className="nav-facility-sticker__rows">
        <div className="nav-facility-sticker__row">
          <span className="nav-facility-sticker__label">Available</span>
          <span className="nav-facility-sticker__value">
            <AnimatedRange low={15} high={15} prefix="$" suffix="M" />
          </span>
        </div>
        <div className="nav-facility-sticker__row">
          <span className="nav-facility-sticker__label">Effective LTV</span>
          <span className="nav-facility-sticker__value nav-facility-sticker__value--healthy">
            <AnimatedRange low={18} high={18} suffix="%" />
            <span className="nav-facility-sticker__pill">Healthy</span>
          </span>
        </div>
        <div className="nav-facility-sticker__row">
          <span className="nav-facility-sticker__label">Next report</span>
          <span className="nav-facility-sticker__value">
            <AnimatedRange low={42} high={42} suffix=" days" />
          </span>
        </div>
      </div>

      <div className="nav-facility-sticker__foot">
        Representative &mdash; every facility is tailored.
      </div>
    </aside>
  );
}
