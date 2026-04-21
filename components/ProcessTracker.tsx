"use client";

import { useEffect, useState } from "react";
import type { CSSProperties } from "react";

type Phase = {
  key: string;
  week: string;
  label: string;
  title: string;
  desc: string;
};

const PHASES: Phase[] = [
  {
    key: "intake",
    week: "Week 0",
    label: "Intake",
    title: "Package your position.",
    desc: "Upload four documents. We rebuild NAV, flag restrictions, and stamp the package for distribution.",
  },
  {
    key: "pricing",
    week: "Week 1",
    label: "Pricing",
    title: "Set a defensible range.",
    desc: "Comp-anchored indicative range with confidence band — what a board or IC would sign off on.",
  },
  {
    key: "match",
    week: "Week 2",
    label: "Match",
    title: "Score the right buyers.",
    desc: "Blind profile released only to mandate-matched buyers — scored on strategy, vintage, and ticket.",
  },
  {
    key: "bids",
    week: "Week 4",
    label: "Bids",
    title: "Run a competitive round.",
    desc: "Live leaderboard of indications by price, structure, and speed to close — no surprise winners.",
  },
  {
    key: "close",
    week: "Week 6",
    label: "Close",
    title: "Sign and wire.",
    desc: "SPA drafted, GP consent coordinated, transfer mechanics handled. Success fee only when the wire clears.",
  },
];

const CYCLE_MS = 5400;

/* ---------- Phase widgets ---------- */

function IntakeWidget() {
  const docs = [
    { name: "K-1 / Tax Statement.pdf", state: "done" },
    { name: "Limited_Partnership_Agreement.pdf", state: "done" },
    { name: "Capital_Account.pdf", state: "done" },
    { name: "Q4_Fund_Report.pdf", state: "active" },
  ];
  return (
    <div className="proc-widget proc-widget--intake">
      <div className="proc-widget__head">
        <div>
          <div className="proc-widget__eyebrow">Document Intake</div>
          <div className="proc-widget__title">4 of 4 received</div>
        </div>
        <div className="proc-widget__stamp proc-widget__stamp--pill">
          NAV rebuild · in progress
        </div>
      </div>
      <div className="proc-intake-list">
        {docs.map((d, idx) => (
          <div
            key={d.name}
            className={`proc-intake-row ${d.state ? `is-${d.state}` : ""}`}
            style={{ ["--i"]: idx } as CSSProperties}
          >
            <span className="proc-intake-check">
              {d.state === "done" ? (
                <svg viewBox="0 0 12 12" width="10" height="10" aria-hidden>
                  <path
                    d="M2.5 6.2l2.3 2.3 4.7-4.7"
                    stroke="#ffffff"
                    strokeWidth="1.6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <span className="proc-intake-spin" />
              )}
            </span>
            <span className="proc-intake-name">{d.name}</span>
            <span className="proc-intake-status">
              {d.state === "done" ? "Verified" : "Scanning…"}
            </span>
          </div>
        ))}
      </div>
      <div className="proc-intake-footer">
        <span>NAV reconstructed</span>
        <strong>$38.4M</strong>
      </div>
    </div>
  );
}

function PricingWidget() {
  return (
    <div className="proc-widget proc-widget--pricing">
      <div className="proc-widget__head">
        <div>
          <div className="proc-widget__eyebrow">Pricing Opinion</div>
          <div className="proc-widget__title">Indicative Range</div>
        </div>
        <div className="proc-widget__stamp">IC-Ready</div>
      </div>
      <div className="proc-pricing-stats">
        <div className="proc-pricing-stat">
          <span>Reported NAV</span>
          <strong>$38.4M</strong>
        </div>
        <div className="proc-pricing-stat proc-pricing-stat--highlight">
          <span>Indicative Bid</span>
          <strong>76.3%</strong>
        </div>
        <div className="proc-pricing-stat">
          <span>Range</span>
          <strong>74.5 – 78.2%</strong>
        </div>
      </div>
      <div className="proc-pricing-band">
        <div className="proc-pricing-band-label">Confidence Band</div>
        <div className="proc-pricing-band-track">
          <div
            className="proc-pricing-band-range"
            style={{ left: "45%", width: "22%" }}
          />
          <div className="proc-pricing-band-marker" style={{ left: "55%" }} />
        </div>
        <div className="proc-pricing-band-scale">
          <span>60%</span>
          <span>70%</span>
          <span>80%</span>
          <span>90%</span>
        </div>
      </div>
    </div>
  );
}

function MatchWidget() {
  const buyers = [
    { name: "Lexington Secondary XI", score: 94, tag: "Mandate fit" },
    { name: "Ardian Secondary IX", score: 89, tag: "Sector fit" },
    { name: "HarbourVest Partners", score: 82, tag: "Ticket fit" },
    { name: "Coller International X", score: 78, tag: "Sector fit" },
    { name: "Strategic Partners IX", score: 74, tag: "Mandate fit" },
  ];
  return (
    <div className="proc-widget proc-widget--match">
      <div className="proc-widget__head">
        <div>
          <div className="proc-widget__eyebrow">Buyer Match</div>
          <div className="proc-widget__title">14 qualified · 5 invited</div>
        </div>
        <div className="proc-widget__stamp">Blind profile live</div>
      </div>
      <div className="proc-match-list">
        {buyers.map((b, idx) => (
          <div
            key={b.name}
            className="proc-match-row"
            style={{ ["--i"]: idx } as CSSProperties}
          >
            <span className="proc-match-rank">{idx + 1}</span>
            <span className="proc-match-name">{b.name}</span>
            <span className="proc-match-tag">{b.tag}</span>
            <span className="proc-match-score">
              <span
                className="proc-match-score-bar"
                style={{ width: `${b.score}%` }}
              />
              <span className="proc-match-score-val">{b.score}</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function BidsWidget() {
  const bids = [
    { buyer: "Lexington XI", bid: "78.4%", amt: "$30.1M", delta: "+0.3", lead: true },
    { buyer: "Ardian Sec. IX", bid: "78.1%", amt: "$30.0M", delta: "+0.1", lead: false },
    { buyer: "HarbourVest", bid: "77.6%", amt: "$29.8M", delta: "—", lead: false },
    { buyer: "Coller X", bid: "76.9%", amt: "$29.5M", delta: "+0.2", lead: false },
    { buyer: "Strategic IX", bid: "75.4%", amt: "$28.9M", delta: "—", lead: false },
  ];
  return (
    <div className="proc-widget proc-widget--bids">
      <div className="proc-widget__head">
        <div>
          <div className="proc-widget__eyebrow">Live Leaderboard · Round 2</div>
          <div className="proc-widget__title">5 binding bids</div>
        </div>
        <div className="proc-widget__stamp proc-widget__stamp--live">
          <span className="proc-live-dot" /> Live
        </div>
      </div>
      <div className="proc-bids-list">
        <div className="proc-bids-row proc-bids-row--head">
          <span>Buyer</span>
          <span>Bid</span>
          <span>Amount</span>
          <span>24h</span>
        </div>
        {bids.map((b, idx) => (
          <div
            key={b.buyer}
            className={`proc-bids-row ${b.lead ? "is-lead" : ""}`}
            style={{ ["--i"]: idx } as CSSProperties}
          >
            <span className="proc-bids-buyer">
              {b.lead && <span className="proc-bids-crown" aria-hidden>★</span>}
              {b.buyer}
            </span>
            <span className="val">{b.bid}</span>
            <span className="val">{b.amt}</span>
            <span
              className={`delta ${
                b.delta.startsWith("+") ? "up" : b.delta === "—" ? "flat" : "down"
              }`}
            >
              {b.delta}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function CloseWidget() {
  const checklist = [
    { name: "SPA executed", state: "done" },
    { name: "GP consent received", state: "done" },
    { name: "Transfer notice filed", state: "done" },
    { name: "Wire initiated", state: "active" },
  ];
  return (
    <div className="proc-widget proc-widget--close">
      <div className="proc-widget__head">
        <div>
          <div className="proc-widget__eyebrow">Closing</div>
          <div className="proc-widget__title">Wire in motion</div>
        </div>
        <div className="proc-widget__stamp proc-widget__stamp--success">
          Cleared T+1
        </div>
      </div>
      <div className="proc-close-amount">
        <div>
          <span>Cleared to seller</span>
          <strong>$30,100,000</strong>
        </div>
        <div className="proc-close-progress">
          <div className="proc-close-bar" style={{ width: "92%" }} />
        </div>
      </div>
      <div className="proc-close-list">
        {checklist.map((c) => (
          <div
            key={c.name}
            className={`proc-close-row ${c.state ? `is-${c.state}` : ""}`}
          >
            <span className="proc-close-check">
              {c.state === "done" ? (
                <svg viewBox="0 0 12 12" width="10" height="10" aria-hidden>
                  <path
                    d="M2.5 6.2l2.3 2.3 4.7-4.7"
                    stroke="#ffffff"
                    strokeWidth="1.6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <span className="proc-intake-spin" />
              )}
            </span>
            <span>{c.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const WIDGETS = [
  IntakeWidget,
  PricingWidget,
  MatchWidget,
  BidsWidget,
  CloseWidget,
];

/* ---------- Component ---------- */

export default function ProcessTracker() {
  const [active, setActive] = useState(0);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((p) => (p + 1) % PHASES.length);
      setTick((t) => t + 1);
    }, CYCLE_MS);
    return () => window.clearInterval(id);
  }, []);

  const phase = PHASES[active];

  const onJump = (idx: number) => {
    setActive(idx);
    setTick((t) => t + 1);
  };

  return (
    <section className="proc-tracker-section">
      <div className="container">
        <div className="proc-tracker-head">
          <div className="section-label">Deal Tracker</div>
          <h2 className="proc-tracker-heading">
            Watch a transaction unfold.
          </h2>
          <p className="proc-tracker-lede">
            Every seller gets the same view we do — a live tracker that shows
            exactly what&rsquo;s happening at every stage.
          </p>
        </div>

        <div className="proc-tracker-showcase sr sr-up sr-1">
          <div className="proc-tracker-frame">
            <div className="proc-tracker-chrome">
              <div className="proc-tracker-dots">
                <span />
                <span />
                <span />
              </div>
              <div className="proc-tracker-chrome-title">
                Deal Tracker · Project Meridian
              </div>
              <div className="proc-tracker-chrome-stamp">
                <span className="proc-live-dot" /> Live
              </div>
            </div>

            <div className="proc-tracker-body">
              <div className="proc-tracker-gantt">
                {PHASES.map((p, idx) => (
                  <button
                    key={p.key}
                    type="button"
                    onClick={() => onJump(idx)}
                    className={`proc-gantt-step ${
                      idx < active ? "is-done" : ""
                    } ${idx === active ? "is-active" : ""}`}
                    aria-label={`${p.week} — ${p.label}`}
                  >
                    <span className="proc-gantt-dot">
                      {idx < active ? (
                        <svg viewBox="0 0 12 12" width="9" height="9" aria-hidden>
                          <path
                            d="M2.5 6.2l2.3 2.3 4.7-4.7"
                            stroke="#ffffff"
                            strokeWidth="1.8"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      ) : (
                        idx + 1
                      )}
                    </span>
                    <span className="proc-gantt-week">{p.week}</span>
                    <span className="proc-gantt-label">{p.label}</span>
                  </button>
                ))}
              </div>

              <div className="proc-tracker-stage">
                {WIDGETS.map((Widget, idx) => (
                  <div
                    key={idx}
                    className={`proc-tracker-slide ${
                      idx === active ? "is-active" : ""
                    }`}
                    aria-hidden={idx !== active}
                  >
                    <Widget />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="proc-tracker-side" key={`side-${tick}`}>
            <span className="proc-tracker-kicker">
              {phase.week} · {phase.label}
            </span>
            <h3 className="proc-tracker-title">{phase.title}</h3>
            <p className="proc-tracker-desc">{phase.desc}</p>
            <div className="proc-tracker-pips" role="tablist">
              {PHASES.map((p, idx) => (
                <button
                  key={p.key}
                  type="button"
                  role="tab"
                  aria-selected={idx === active}
                  aria-label={p.label}
                  className={`proc-tracker-pip ${
                    idx === active ? "is-active" : ""
                  }`}
                  onClick={() => onJump(idx)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
