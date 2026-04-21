"use client";

import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

const STEP_MS = 2800;

const MILESTONES = [
  {
    day: "Step 01",
    label: "Intake",
    sub: "K\u20111s + LPA",
    pos: 0,
    phase: "prep",
    detail: "K\u20111s and LPA queued for intake review.",
    mockup: (
      <svg viewBox="0 0 80 80" fill="none" className="jn-mockup-svg">
        <rect width="80" height="80" rx="6" fill="var(--off)" />
        <rect x="18" y="14" width="44" height="52" rx="3" fill="#fff" stroke="var(--line)" strokeWidth="1" />
        <path d="M30 36h20M30 42h14" stroke="var(--muted)" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M40 22v8m0 0l3-3m-3 3l-3-3" stroke="var(--ink)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    day: "Step 02",
    label: "NAV Rebuilt",
    sub: "Comps layered",
    pos: 16,
    phase: "prep",
    detail: "NAV reconstruction running against live comps.",
    mockup: (
      <svg viewBox="0 0 80 80" fill="none" className="jn-mockup-svg">
        <rect width="80" height="80" rx="6" fill="var(--off)" />
        <rect x="12" y="48" width="12" height="18" rx="2" fill="var(--ink)" opacity=".25" />
        <rect x="28" y="36" width="12" height="30" rx="2" fill="var(--ink)" opacity=".5" />
        <rect x="44" y="28" width="12" height="38" rx="2" fill="var(--ink)" opacity=".75" />
        <rect x="60" y="22" width="12" height="44" rx="2" fill="var(--ink)" />
        <line x1="8" y1="68" x2="74" y2="68" stroke="var(--line)" strokeWidth=".6" />
      </svg>
    ),
  },
  {
    day: "Step 03",
    label: "Package Live",
    sub: "Blind to buyers",
    pos: 40,
    phase: "prep",
    detail: "Blind profile is live to scored buyers only.",
    mockup: (
      <svg viewBox="0 0 80 80" fill="none" className="jn-mockup-svg">
        <rect width="80" height="80" rx="6" fill="var(--off)" />
        <rect x="16" y="22" width="48" height="36" rx="3" fill="#fff" stroke="var(--line)" strokeWidth="1" />
        <path d="M16 32h48" stroke="var(--line)" strokeWidth="1" />
        <circle cx="40" cy="44" r="6" stroke="var(--ink)" strokeWidth="1.3" />
        <path d="M38 44l1.5 1.5L43 42" stroke="var(--ink)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    day: "Step 04",
    label: "First Bids",
    sub: "Live leaderboard",
    pos: 52,
    phase: "match",
    detail: "Competitive bids ranking on the live board.",
    mockup: (
      <svg viewBox="0 0 80 80" fill="none" className="jn-mockup-svg">
        <rect width="80" height="80" rx="6" fill="var(--off)" />
        <rect x="12" y="20" width="24" height="18" rx="2" fill="#fff" stroke="var(--line)" strokeWidth="1" />
        <rect x="44" y="20" width="24" height="18" rx="2" fill="#fff" stroke="var(--line)" strokeWidth="1" />
        <rect x="28" y="44" width="24" height="18" rx="2" fill="#fff" stroke="var(--ink)" strokeWidth="1.3" />
        <path d="M34 52h12" stroke="var(--muted)" strokeWidth="1" strokeLinecap="round" />
        <path d="M34 56h8" stroke="var(--muted)" strokeWidth="1" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    day: "Step 05",
    label: "Bids Closed",
    sub: "Winner selected",
    pos: 64,
    phase: "match",
    detail: "Seller and banker locking the winning bid.",
    mockup: (
      <svg viewBox="0 0 80 80" fill="none" className="jn-mockup-svg">
        <rect width="80" height="80" rx="6" fill="var(--off)" />
        <rect x="14" y="22" width="52" height="36" rx="3" fill="#fff" stroke="var(--ink)" strokeWidth="1" />
        <circle cx="30" cy="40" r="6" fill="var(--ink)" />
        <text x="27" y="43" fontSize="7" fontWeight="700" fill="#fff">A</text>
        <path d="M42 36h18" stroke="var(--muted)" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M42 42h12" stroke="var(--muted)" strokeWidth="1" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    day: "Step 06",
    label: "GP Consent",
    sub: "Transfer signed",
    pos: 84,
    phase: "close",
    detail: "GP consent and transfer docs in signature.",
    mockup: (
      <svg viewBox="0 0 80 80" fill="none" className="jn-mockup-svg">
        <rect width="80" height="80" rx="6" fill="var(--off)" />
        <rect x="16" y="14" width="48" height="52" rx="3" fill="#fff" stroke="var(--line)" strokeWidth="1" />
        <path d="M26 30h28M26 36h20M26 42h24" stroke="var(--muted)" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="26" y1="52" x2="54" y2="52" stroke="var(--muted)" strokeWidth=".6" strokeDasharray="2 2" />
        <path d="M28 50c4-3 8 0 12-2s8 1 12-1" stroke="var(--ink)" strokeWidth="1" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    day: "Step 07",
    label: "Wire",
    sub: "Success fee only",
    pos: 100,
    phase: "close",
    detail: "Wire out and success fee on clearance.",
    mockup: (
      <svg viewBox="0 0 80 80" fill="none" className="jn-mockup-svg">
        <rect width="80" height="80" rx="6" fill="var(--off)" />
        <rect x="14" y="28" width="52" height="24" rx="3" fill="#fff" stroke="var(--line)" strokeWidth="1" />
        <path d="M24 40h20" stroke="var(--ink)" strokeWidth="1.3" strokeLinecap="round" />
        <path d="M40 36l4 4-4 4" stroke="var(--ink)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="54" cy="40" r="4" stroke="var(--ink)" strokeWidth="1.2" />
        <path d="M53.2 39v2.4h1.6" stroke="var(--ink)" strokeWidth="0.9" strokeLinecap="round" />
      </svg>
    ),
  },
] as const;

const FOOTER_COMPLETE =
  "Wire out cleared. Deal closed. Your secondary is sold.";

const phaseColor: Record<string, string> = {
  prep: "var(--ink)",
  match: "var(--ink-2)",
  close: "var(--taupe)",
};

function fillWidthPct(pos: number, isFirst: boolean) {
  if (isFirst && pos === 0) return 4;
  return pos;
}

export type JourneyFlowProps = {
  /** Card chrome (border, shadow). Use "inline" on the home page. */
  variant?: "card" | "inline";
  /** Show eyebrow + title inside the component (hide when the page provides the section header). */
  showEmbeddedHeader?: boolean;
  /** Status line (spinner + detail) below the timeline. */
  showStatusFooter?: boolean;
  /** SVG previews under each milestone (desktop track + mobile list). */
  showStepMockups?: boolean;
};

export function JourneyFlow({
  variant = "card",
  showEmbeddedHeader = true,
  showStatusFooter = true,
  showStepMockups = true,
}: JourneyFlowProps) {
  const reducedMotion = usePrefersReducedMotion();
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (reducedMotion) return;
    const id = window.setInterval(() => {
      setTick((t) => (t + 1) % MILESTONES.length);
    }, STEP_MS);
    return () => window.clearInterval(id);
  }, [reducedMotion]);

  const activeIdx = reducedMotion ? MILESTONES.length - 1 : tick;
  const m = MILESTONES[activeIdx];
  const progress = fillWidthPct(m.pos, activeIdx === 0);
  const journeyComplete = activeIdx === MILESTONES.length - 1;

  const rootClass = [
    "journey",
    "journey--live",
    variant === "inline" ? "journey--inline" : "",
    !showStepMockups ? "journey--no-step-mocks" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={rootClass}>
      <div
        className={
          showEmbeddedHeader ? "journey-header" : "journey-header journey-header--phases-only"
        }
      >
        {showEmbeddedHeader && (
          <div className="journey-header-copy">
            <div className="journey-eyebrow">Transaction Journey</div>
            <div className="journey-title journey-title--living">Intake to wire, one track.</div>
          </div>
        )}
      </div>

      <div className="journey-track-wrap">
        <div className="journey-bands">
          <div className="jb jb-prep" style={{ left: "0%", width: "40%" }}>
            Prepare
          </div>
          <div className="jb jb-match" style={{ left: "40%", width: "24%" }}>
            Match
          </div>
          <div className="jb jb-close" style={{ left: "64%", width: "36%" }}>
            Close
          </div>
        </div>
        <div className="journey-track">
          <div className="journey-fill journey-fill--progress" style={{ width: `${progress}%` }} />
          {MILESTONES.map((ms, i) => (
            <div
              key={i}
              className={`journey-node ${i === 0 ? "first" : ""} ${i === MILESTONES.length - 1 ? "last" : ""}${
                i === activeIdx ? " is-active" : ""
              }`}
              style={{ left: `${ms.pos}%` }}
            >
              <div className="jn-dot" />
              <div className="jn-label">
                <div className="jn-day">{ms.day}</div>
                <div className="jn-name">{ms.label}</div>
                <div className="jn-sub">{ms.sub}</div>
                {showStepMockups && (
                  <div className={`jn-mockup${i === activeIdx ? " jn-mockup--active" : ""}`}>{ms.mockup}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="journey-vertical">
        {MILESTONES.map((ms, i) => (
          <div key={i} className={`jv-step${i === activeIdx ? " jv-step--active" : ""}`}>
            <div
              className="jv-mockup-slot"
              aria-hidden={showStepMockups && i === activeIdx ? undefined : true}
            >
              {showStepMockups && i === activeIdx && (
                <div className="jn-mockup jn-mockup--active jn-mockup--vertical">{ms.mockup}</div>
              )}
            </div>
            <div className="jv-left">
              <div
                className="jv-dot"
                style={{ background: phaseColor[ms.phase], borderColor: phaseColor[ms.phase] }}
              />
              {i < MILESTONES.length - 1 && (
                <div
                  className={`jv-line${i <= activeIdx ? " jv-line--progress" : ""}`}
                  aria-hidden
                />
              )}
            </div>
            <div className="jv-content">
              <div className="jv-text">
                <div className="jn-day">{ms.day}</div>
                <div className="jn-name">{ms.label}</div>
                <div className="jn-sub">{ms.sub}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showStatusFooter && (
        <div className="journey-footer-status" aria-live="polite">
          <div className="journey-status-row">
            {journeyComplete ? (
              <span className="journey-status-check" aria-hidden>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M2.5 6l2.25 2.25L9.5 3.5"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            ) : (
              <span
                className={`journey-spinner${reducedMotion ? " journey-spinner--paused" : ""}`}
                aria-hidden
              />
            )}
            <p key={journeyComplete ? "complete" : activeIdx} className="journey-active-text">
              {journeyComplete ? FOOTER_COMPLETE : m.detail}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
