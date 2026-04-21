"use client";

import { useEffect, useState } from "react";
import type { CSSProperties } from "react";

/* ----------------------------------------------------------------
 * DealFlow — an animated horizontal flow:
 *   You upload 4 docs  →  they flow into The Boring Bank  →
 *   pipeline stages light up  →  wire clears + settles.
 *
 * Replaces the static "Four documents" grid on /how-it-works.
 * -------------------------------------------------------------- */

const DOCS = [
  { code: "K1", name: "K-1" },
  { code: "LPA", name: "LPA" },
  { code: "CAP", name: "Capital Account" },
  { code: "Q4", name: "Q4 Report" },
];

/* Live deal metrics replace the 5-stage pipeline so this section
   reads differently from the scattered agent canvas above it. */
type Metric = {
  label: string;
  start: string;
  end: string;
  tone?: "plain" | "accent";
};
const METRICS: Metric[] = [
  { label: "Fair value range", start: "—", end: "$28.5M – $30.8M", tone: "plain" },
  { label: "Buyers evaluated", start: "0", end: "142", tone: "plain" },
  { label: "Bids received", start: "0", end: "6", tone: "plain" },
  { label: "Top offer", start: "—", end: "$30.1M · 97% NAV", tone: "accent" },
];

const TICK_MS = 900;

/*
 * Timeline (each tick = TICK_MS):
 *   0-3  — docs drop into upload tray (one per tick)
 *   4-7  — docs fly into the bank (one per tick)
 *   8-11 — metrics reveal one by one
 *   12   — completion ring fills to 100%
 *   13   — wire cleared
 *   14   — settle pause
 *   then loop
 */
const TOTAL_TICKS = 15;

export default function DealFlow() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setTick((t) => (t + 1) % TOTAL_TICKS);
    }, TICK_MS);
    return () => window.clearInterval(id);
  }, []);

  // Visibility helpers
  const docUploaded = (i: number) => tick >= i; // 0..3 drop in at ticks 0..3
  const docFlying = (i: number) => tick === 4 + i; // individual flight
  const docLanded = (i: number) => tick > 4 + i;
  const metricOn = (i: number) => tick >= 8 + i; // 4 metrics, ticks 8..11
  const ringPct = Math.min(Math.max(((tick - 7) / 5) * 100, 0), 100);
  const wired = tick >= 13;

  return (
    <section className="df-section">
      <div className="container">
        <div className="df-head">
          <div className="section-label">The Flow</div>
          <h2 className="df-heading">Four documents in. One wire out.</h2>
        </div>

        <div className="df-stage sr sr-up sr-1">
          {/* LEFT: upload tray */}
          <div className="df-zone df-zone--upload">
            <div className="df-zone-label">
              <span className="df-zone-num">1</span>
              You upload
              <span className="df-zone-arrow" aria-hidden>
                <svg viewBox="0 0 32 10" width="32" height="10">
                  <path d="M0 5 H28 M22 1 L28 5 L22 9" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </div>
            <div className="df-tray">
              {DOCS.map((d, i) => (
                <div
                  key={d.code}
                  className={`df-doc ${docUploaded(i) ? "is-in" : ""} ${
                    docFlying(i) ? "is-flying" : ""
                  } ${docLanded(i) ? "is-gone" : ""}`}
                  style={{ ["--i"]: i } as CSSProperties}
                >
                  <span className="df-doc-ext">{d.code}</span>
                  <span className="df-doc-name">{d.name}</span>
                </div>
              ))}
              <div
                className={`df-tray-stamp ${tick >= 4 ? "is-on" : ""}`}
              >
                <svg viewBox="0 0 12 12" width="10" height="10" aria-hidden>
                  <path
                    d="M2.5 6.2l2.3 2.3 4.7-4.7"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Verified
              </div>
            </div>
          </div>

          {/* MIDDLE: conveyor + bank */}
          <div className="df-zone df-zone--bank">
            <div className="df-zone-label">
              <span className="df-zone-num">2</span>
              Boring Bank handles everything
              <span className="df-zone-arrow" aria-hidden>
                <svg viewBox="0 0 32 10" width="32" height="10">
                  <path d="M0 5 H28 M22 1 L28 5 L22 9" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </div>

            <div className="df-bank">
              <div className="df-bank-chrome">
                <span className="df-bank-brand">The Boring Bank</span>
                <span
                  className={`df-bank-live ${tick >= 4 ? "is-on" : ""}`}
                >
                  <span className="df-bank-dot" />
                  Working
                </span>
              </div>

              <div className="df-metrics">
                <div
                  className="df-ring"
                  style={{ ["--pct"]: ringPct } as CSSProperties}
                  aria-hidden
                >
                  <svg viewBox="0 0 44 44" width="56" height="56">
                    <circle cx="22" cy="22" r="18" className="df-ring-track" />
                    <circle
                      cx="22"
                      cy="22"
                      r="18"
                      className="df-ring-fill"
                      style={{
                        strokeDashoffset: `${113 - (113 * ringPct) / 100}`,
                      }}
                    />
                  </svg>
                  <span className="df-ring-pct">{Math.round(ringPct)}%</span>
                </div>
                <div className="df-metric-rows">
                  {METRICS.map((m, i) => (
                    <div
                      key={m.label}
                      className={`df-metric ${metricOn(i) ? "is-on" : ""} ${
                        m.tone === "accent" ? "df-metric--accent" : ""
                      }`}
                    >
                      <span className="df-metric-dot" aria-hidden />
                      <span className="df-metric-label">{m.label}</span>
                      <span className="df-metric-val">
                        {metricOn(i) ? m.end : m.start}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Incoming docs animate on top of the bank */}
              <div className="df-bank-incoming">
                {DOCS.map((d, i) => (
                  <span
                    key={d.code}
                    className={`df-incoming-doc ${
                      docFlying(i) ? "is-flying" : ""
                    }`}
                  >
                    {d.code}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: wire cleared */}
          <div className="df-zone df-zone--out">
            <div className="df-zone-label">
              <span className="df-zone-num">3</span>
              Wire clears
            </div>
            <div className={`df-wire ${wired ? "is-on" : ""}`}>
              <div className="df-wire-ring">
                <svg viewBox="0 0 48 48" width="28" height="28" aria-hidden>
                  <path
                    d="M14 24l7 7 14-14"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="df-wire-label">Cleared T+1</div>
              <div className="df-wire-amount">$30,100,000</div>
              <div className="df-wire-sub">
                Success fee only on settlement
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
