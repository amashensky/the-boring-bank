"use client";

import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

const ROTATE_MS = 2800;

export function SellFlowMockup() {
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
          <div className="sf-box-kicker">Your Position</div>
        </div>
        <div className="sf-fields">
          <div className="sf-field">
            <div className="sf-field-label">Fund Name</div>
            <div className="sf-field-value">Summit Ridge Growth Fund VIII</div>
          </div>
          <div className="sf-field">
            <div className="sf-field-label">Fund Strategy</div>
            <div className="sf-field-value">Buyout</div>
          </div>
          <div className="sf-field">
            <div className="sf-field-label">NAV</div>
            <div className="sf-field-value sf-field-value-big">$2.4M</div>
          </div>
          <div className="sf-field">
            <div className="sf-field-label">Vintage</div>
            <div className="sf-field-value">2019</div>
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
          <div className="sf-box-kicker sf-box-kicker-light">Boring Bank AI</div>
          <div className="sf-ai-dot" />
        </div>
        <div className="sf-steps">
          <div className="sf-step sf-step-done">
            <div className="sf-step-icon">&#10003;</div>
            <span className="sf-step-desc">200+ mandates matched</span>
          </div>
          <div className="sf-step sf-step-done">
            <div className="sf-step-icon">&#10003;</div>
            <span className="sf-step-desc">12 buyers NDA&rsquo;d</span>
          </div>
          <div className="sf-step sf-step-done">
            <div className="sf-step-icon">&#10003;</div>
            <span className="sf-step-desc">8 meetings scheduled</span>
          </div>
          <div className="sf-step sf-step-active">
            <div className="sf-step-icon sf-step-icon-spin">&#8635;</div>
            <span className="sf-step-desc">Offers coming in live</span>
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
          <div className="sf-box-kicker">Deal Done</div>
          <div className="sf-done-badge">&#10003;</div>
        </div>
        <div className="sf-steps">
          <div className="sf-step sf-step-done">
            <div className="sf-step-icon">&#10003;</div>
            <span className="sf-step-desc">Offer accepted &middot; $2.4M</span>
          </div>
          <div className="sf-step sf-step-done">
            <div className="sf-step-icon">&#10003;</div>
            <span className="sf-step-desc">SPA signed by all parties</span>
          </div>
          <div className="sf-step sf-step-done">
            <div className="sf-step-icon">&#10003;</div>
            <span className="sf-step-desc">GP consent approved</span>
          </div>
          <div className="sf-step sf-step-done">
            <div className="sf-step-icon">&#10003;</div>
            <span className="sf-step-desc">Escrow wired &middot; closed</span>
          </div>
        </div>
      </div>
    </div>
  );
}
