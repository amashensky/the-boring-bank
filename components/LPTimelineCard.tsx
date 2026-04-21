"use client";

import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

const STEP_MS = 2200;
/** Slight initial fill so the track never reads "empty" on first paint. */
const POSITIONS = [8, 40, 58, 100] as const;

export function TimelineCard() {
  const reducedMotion = usePrefersReducedMotion();
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (reducedMotion) {
      setStep(POSITIONS.length - 1);
      return;
    }
    const id = window.setInterval(() => {
      setStep((s) => (s + 1) % POSITIONS.length);
    }, STEP_MS);
    return () => window.clearInterval(id);
  }, [reducedMotion]);

  const width = POSITIONS[reducedMotion ? POSITIONS.length - 1 : step];
  const activeStep = reducedMotion ? POSITIONS.length - 1 : step;

  return (
    <div className="pv-card pv-card--live-timeline pv-card--lp-led-timeline">
      <div className="pv-head">
        <div className="pv-title">LP&#8209;Led Timeline</div>
        <span className="pv-badge">Illustrative</span>
      </div>
      <div className="tl-card-body">
        <div className="tl-track">
          <div className="tl-fill tl-fill--live" style={{ width: `${width}%` }} />
          {([0, 40, 58, 100] as const).map((pos, i) => (
            <div
              key={i}
              className={`tl-dot${activeStep === i ? " active" : ""}`}
              style={{ left: `${pos}%` }}
            />
          ))}
        </div>
        <div className="tl-labels">
          {["Intake", "Package Live", "Bids In", "Wire"].map((title, i) => (
            <div
              key={title}
              className={`tl-label-col${i === 0 ? " tl-label-col--start" : i === 3 ? " tl-label-col--end" : " tl-label-col--center"}`}
            >
              <div className="tl-day">Step 0{i + 1}</div>
              <div className="tl-title">{title}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="pv-field" style={{ marginTop: 18 }}>
        <span className="pv-label">Buyers Engaged</span>
        <span className="pv-value">11 of 58 matched</span>
      </div>
      <div className="pv-field">
        <span className="pv-label">Indicative Clear</span>
        <span className="pv-value big">96 to 99 NAV</span>
      </div>
    </div>
  );
}
