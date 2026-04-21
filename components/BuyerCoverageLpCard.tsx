"use client";

import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

const STEP_MS = 2000;
const FILL_STOPS = [10, 44, 68, 100] as const;
const DOT_POSITIONS = [0, 44, 68, 100] as const;

const TIERS = [
  { key: "sf", abbr: "SF", count: 210 },
  { key: "fo", abbr: "FO", count: 140 },
  { key: "en", abbr: "EN", count: 62 },
  { key: "pn", abbr: "PN", count: 48 },
  { key: "sv", abbr: "SV", count: 22 },
] as const;

export function BuyerCoverageLpCard() {
  const reducedMotion = usePrefersReducedMotion();
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (reducedMotion) {
      setStep(FILL_STOPS.length - 1);
      return;
    }
    const id = window.setInterval(() => {
      setStep((s) => (s + 1) % FILL_STOPS.length);
    }, STEP_MS);
    return () => window.clearInterval(id);
  }, [reducedMotion]);

  const width = FILL_STOPS[reducedMotion ? FILL_STOPS.length - 1 : step];
  const activeStep = reducedMotion ? FILL_STOPS.length - 1 : step;
  const total = TIERS.reduce((a, b) => a + b.count, 0);

  return (
    <div className="pv-card buyer-network-card--lp pv-card--live-timeline">
      <div className="pv-head">
        <div className="pv-title">Buyer Coverage</div>
        <span className="pv-badge live">
          <span className="live-dot" /> Live Mandates
        </span>
      </div>
      <div className="lp-chart-body" style={{ padding: "10px 4px 4px" }}>
        <div className="tl-track">
          <div className="tl-fill tl-fill--live" style={{ width: `${width}%` }} />
          {DOT_POSITIONS.map((pos, i) => (
            <div
              key={i}
              className={`tl-dot${activeStep === i ? " active" : ""}`}
              style={{ left: `${pos}%` }}
            />
          ))}
        </div>
        <div className="tl-labels buyer-lp-tl-labels" aria-label="Mandates by buyer type">
          {TIERS.map((t) => (
            <div key={t.key}>
              <div className="tl-day">{t.abbr}</div>
              <div className="tl-title tl-title--pop">{t.count}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="pv-field" style={{ marginTop: 18 }}>
        <span className="pv-label">Scored for your ticket</span>
        <span className="pv-value">58 mandates</span>
      </div>
      <div className="pv-field">
        <span className="pv-label">Active in network</span>
        <span className="pv-value big">{total} live</span>
      </div>
    </div>
  );
}
