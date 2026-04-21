"use client";

import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

const ROTATE_MS = 2800;

export function BuyerFlowMockup() {
  const reducedMotion = usePrefersReducedMotion();
  const [focus, setFocus] = useState(0);

  useEffect(() => {
    if (reducedMotion) return;
    const id = window.setInterval(() => {
      setFocus((f) => (f + 1) % 3);
    }, ROTATE_MS);
    return () => window.clearInterval(id);
  }, [reducedMotion]);

  const pulse = (col: 0 | 1 | 2) => !reducedMotion && focus === col;
  const arrowPulse = (which: 0 | 1) => !reducedMotion && focus === which;

  return (
    <div className="sell-flow sell-flow--live">
      <div className={`sf-box${pulse(0) ? " sf-box--pulse" : ""}`}>
        <div className="sf-box-header">
          <div className="sf-box-kicker">Set your mandate</div>
        </div>
        <div className="sf-fields">
          <div className="sf-field">
            <div className="sf-field-label">Strategy</div>
            <div className="sf-field-value">NA Buyout</div>
          </div>
          <div className="sf-field">
            <div className="sf-field-label">Vintage</div>
            <div className="sf-field-value">2016–2021</div>
          </div>
          <div className="sf-field">
            <div className="sf-field-label">Ticket size</div>
            <div className="sf-field-value sf-field-value-big">$5M – $50M</div>
          </div>
          <div className="sf-field">
            <div className="sf-field-label">Structure</div>
            <div className="sf-field-value">LP stakes · GP-led OK</div>
          </div>
        </div>
      </div>

      <div className={`sf-arrow${arrowPulse(0) ? " sf-arrow--pulse" : ""}`}>
        <svg width="64" height="16" viewBox="0 0 64 16" fill="none" aria-hidden>
          <path d="M0 8h58M52 2l6 6-6 6" stroke="var(--taupe)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <div className={`sf-box sf-box-mid${pulse(1) ? " sf-box--pulse" : ""}`}>
        <div className="sf-box-header sf-box-header-dark">
          <div className="sf-box-kicker sf-box-kicker-light">Stay in the loop</div>
          <div className="sf-ai-dot" />
        </div>
        <div className="sf-steps">
          <div className="sf-step sf-step-done">
            <div className="sf-step-icon">&#10003;</div>
            <span className="sf-step-desc">Weekly mandate digest</span>
          </div>
          <div className="sf-step sf-step-done">
            <div className="sf-step-icon">&#10003;</div>
            <span className="sf-step-desc">Blind profiles before names</span>
          </div>
          <div className="sf-step sf-step-active">
            <div className="sf-step-icon sf-step-icon-spin">&#8635;</div>
            <span className="sf-step-desc">New match: 94% fit score</span>
          </div>
          <div className="sf-step">
            <div className="sf-step-icon">&#8226;</div>
            <span className="sf-step-desc">Process tracker · one thread</span>
          </div>
        </div>
      </div>

      <div className={`sf-arrow${arrowPulse(1) ? " sf-arrow--pulse" : ""}`}>
        <svg width="64" height="16" viewBox="0 0 64 16" fill="none" aria-hidden>
          <path d="M0 8h58M52 2l6 6-6 6" stroke="var(--taupe)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <div className={`sf-box sf-box-right${pulse(2) ? " sf-box--pulse" : ""}`}>
        <div className="sf-box-header sf-box-header-done">
          <div className="sf-box-kicker">Act decisively</div>
          <div className="sf-done-badge">&#10003;</div>
        </div>
        <div className="sf-steps">
          <div className="sf-step sf-step-done">
            <div className="sf-step-icon">&#10003;</div>
            <span className="sf-step-desc">IC pack · comps &amp; range stamped</span>
          </div>
          <div className="sf-step sf-step-done">
            <div className="sf-step-icon">&#10003;</div>
            <span className="sf-step-desc">Indicative bid submitted</span>
          </div>
          <div className="sf-step sf-step-done">
            <div className="sf-step-icon">&#10003;</div>
            <span className="sf-step-desc">Data room on your terms</span>
          </div>
          <div className="sf-step sf-step-active">
            <div className="sf-step-icon sf-step-icon-spin">&#8635;</div>
            <span className="sf-step-desc">Final terms · ready to sign</span>
          </div>
        </div>
      </div>
    </div>
  );
}
