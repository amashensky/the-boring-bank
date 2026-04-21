"use client";

import { useEffect, useState } from "react";
import type { CSSProperties } from "react";

type Deliverable = {
  service: string;
  ext: string;
  filename: string;
  title: string;
  desc: string;
  stamp: string;
};

const DELIVERABLES: Deliverable[] = [
  {
    service: "Valuation Advisory",
    ext: "PDF",
    filename: "Pricing_opinion_LP.pdf",
    title: "Pricing Opinion",
    desc: "Comp-anchored indicative range with confidence band, defensible to board or IC.",
    stamp: "IC-Ready",
  },
  {
    service: "Portfolio Advisory",
    ext: "XLSX",
    filename: "Clearing_screen.xlsx",
    title: "Clearing Screen",
    desc: "Scored LP positions mapped to likely clearing levels and mandate-matched buyers.",
    stamp: "Live",
  },
  {
    service: "GP Advisory",
    ext: "PDF",
    filename: "CV_structure_memo.pdf",
    title: "CV Structure Memo",
    desc: "Continuation vehicle design — tender vs. roll, waterfall mechanics, consent path.",
    stamp: "Scoped",
  },
  {
    service: "Transaction Advisory",
    ext: "PDF",
    filename: "Transaction_playbook.pdf",
    title: "Transaction Playbook",
    desc: "Bespoke structure and syndicate plan — lead buyer, tail, process calendar.",
    stamp: "Staffed",
  },
];

const CYCLE_MS = 5200;

/* ---------- Cursor icon ---------- */

function CursorIcon() {
  return (
    <svg viewBox="0 0 14 18" fill="none" aria-hidden>
      <path
        d="M1 1l11 7.5-5 1 3 6-2.5 1-3-6-3.5 3V1z"
        fill="#1e2a22"
        stroke="#ffffff"
        strokeWidth="1.1"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ---------- Document mocks ---------- */

function PricingOpinion() {
  return (
    <div className="doc-mock doc-mock--pricing">
      <div className="doc-mock__header">
        <div>
          <div className="doc-mock__eyebrow">Valuation Advisory</div>
          <div className="doc-mock__title">Pricing Opinion — Harbor PE VIII</div>
        </div>
        <div className="doc-mock__date">Q1 2026</div>
      </div>
      <div className="doc-mock__stat-row">
        <div className="doc-mock__stat">
          <span>Reported NAV</span>
          <strong>$42.4M</strong>
        </div>
        <div className="doc-mock__stat">
          <span>Indicative Bid</span>
          <strong>76.3%</strong>
        </div>
        <div className="doc-mock__stat">
          <span>Range</span>
          <strong>74.5 – 78.2%</strong>
        </div>
      </div>
      <div className="doc-mock__band">
        <div className="doc-mock__band-label">Confidence Band</div>
        <div className="doc-mock__band-track">
          <div
            className="doc-mock__band-range"
            style={{ left: "45%", width: "20%" }}
          />
          <div className="doc-mock__band-marker" style={{ left: "53%" }} />
        </div>
        <div className="doc-mock__band-scale">
          <span>60%</span>
          <span>70%</span>
          <span>80%</span>
          <span>90%</span>
        </div>
      </div>
      <div className="doc-mock__comp">
        <div className="doc-mock__comp-row doc-mock__comp-row--head">
          <span>Comparable</span>
          <span>Vintage</span>
          <span>Trade %</span>
        </div>
        <div className="doc-mock__comp-row">
          <span>KPE VII</span>
          <span>2018</span>
          <span className="val">72.1%</span>
        </div>
        <div className="doc-mock__comp-row">
          <span>BVP IX</span>
          <span>2019</span>
          <span className="val">78.4%</span>
        </div>
        <div className="doc-mock__comp-row">
          <span>AG X</span>
          <span>2019</span>
          <span className="val">76.9%</span>
        </div>
      </div>
    </div>
  );
}

function ClearingScreen() {
  const rows = [
    { fund: "KKR Asian IV", nav: "24.1", bid: "18.6", pct: "77.2%", score: "A" },
    { fund: "Blackstone VIII", nav: "38.5", bid: "32.3", pct: "83.9%", score: "A" },
    { fund: "Apollo Hybrid II", nav: "19.8", bid: "14.7", pct: "74.2%", score: "B" },
    { fund: "Bain Asia V", nav: "12.3", bid: "8.6", pct: "69.9%", score: "B" },
    { fund: "Carlyle Europe VI", nav: "29.4", bid: "22.1", pct: "75.2%", score: "A" },
    { fund: "Warburg XIV", nav: "16.7", bid: "11.4", pct: "68.3%", score: "C" },
  ];
  return (
    <div className="doc-mock doc-mock--xlsx">
      <div className="doc-mock__xlsx-tabs">
        <div className="doc-mock__xlsx-tab is-active">Clearing Screen</div>
        <div className="doc-mock__xlsx-tab">Assumptions</div>
        <div className="doc-mock__xlsx-tab">Buyer Map</div>
      </div>
      <div className="doc-mock__xlsx-grid">
        <div className="doc-mock__xlsx-row doc-mock__xlsx-row--head">
          <span>Position</span>
          <span>NAV $M</span>
          <span>Bid $M</span>
          <span>Bid %</span>
          <span>Score</span>
        </div>
        {rows.map((r, i) => (
          <div key={i} className="doc-mock__xlsx-row">
            <span>{r.fund}</span>
            <span className="val">{r.nav}</span>
            <span className="val">{r.bid}</span>
            <span className="val pct">{r.pct}</span>
            <span className={`score score-${r.score.toLowerCase()}`}>{r.score}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function CVMemo() {
  return (
    <div className="doc-mock doc-mock--cv">
      <div className="doc-mock__header">
        <div>
          <div className="doc-mock__eyebrow">GP Advisory</div>
          <div className="doc-mock__title">CV Structure — Project Ridge</div>
        </div>
        <div className="doc-mock__date">Draft v3</div>
      </div>
      <p className="doc-mock__para">
        Single-asset continuation vehicle for the remaining stake in Portfolio
        Co. A. Existing LPs offered a status election — tender, roll, or
        partial.
      </p>
      <div className="doc-mock__waterfall">
        <div className="doc-mock__wf-box doc-mock__wf-box--source">
          <strong>Existing LPs</strong>
          <span>$180M NAV</span>
        </div>
        <div className="doc-mock__wf-arrows">
          <div className="doc-mock__wf-arrow doc-mock__wf-arrow--out">
            <span className="lbl">Tender 55%</span>
          </div>
          <div className="doc-mock__wf-arrow doc-mock__wf-arrow--in">
            <span className="lbl">Roll 45%</span>
          </div>
        </div>
        <div className="doc-mock__wf-split">
          <div className="doc-mock__wf-box doc-mock__wf-box--cash">
            <strong>Liquidity</strong>
            <span>$99M cash</span>
          </div>
          <div className="doc-mock__wf-box doc-mock__wf-box--newco">
            <strong>CV NewCo</strong>
            <span>$81M roll + $120M new</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function TransactionPlaybook() {
  const steps = [
    { label: "Intake", state: "done" },
    { label: "Price", state: "done" },
    { label: "Tease", state: "done" },
    { label: "NDAs", state: "active" },
    { label: "Bids", state: "" },
    { label: "Close", state: "" },
  ];
  return (
    <div className="doc-mock doc-mock--tx">
      <div className="doc-mock__header">
        <div>
          <div className="doc-mock__eyebrow">Transaction Advisory</div>
          <div className="doc-mock__title">Playbook — Project Meridian</div>
        </div>
        <div className="doc-mock__date">9-Wk Close</div>
      </div>
      <div className="doc-mock__timeline">
        {steps.map((s, i) => (
          <div
            key={s.label}
            className={`doc-mock__step ${s.state ? `is-${s.state}` : ""}`}
          >
            <div className="doc-mock__step-dot">{i + 1}</div>
            <span>{s.label}</span>
          </div>
        ))}
      </div>
      <div className="doc-mock__buyers">
        <div className="doc-mock__buyer-row doc-mock__buyer-row--head">
          <span>Buyer</span>
          <span>Role</span>
          <span>Check</span>
        </div>
        <div className="doc-mock__buyer-row">
          <span>Lexington XI</span>
          <span>Lead</span>
          <span className="val">$65M</span>
        </div>
        <div className="doc-mock__buyer-row">
          <span>Ardian Sec. IX</span>
          <span>Co-Lead</span>
          <span className="val">$40M</span>
        </div>
        <div className="doc-mock__buyer-row">
          <span>HarbourVest</span>
          <span>Tail</span>
          <span className="val">$15M</span>
        </div>
      </div>
    </div>
  );
}

const MOCKS = [PricingOpinion, ClearingScreen, CVMemo, TransactionPlaybook];

const HEADING_PHRASES = ["walk away with.", "leave with.", "take home."];
const HEADING_ROTATE_MS = 2400;

export default function AdvisoryDeliverables() {
  const [i, setI] = useState(0);
  const [tick, setTick] = useState(0);
  const [phraseIdx, setPhraseIdx] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setI((p) => (p + 1) % DELIVERABLES.length);
      setTick((t) => t + 1);
    }, CYCLE_MS);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    const id = window.setInterval(() => {
      setPhraseIdx((p) => (p + 1) % HEADING_PHRASES.length);
    }, HEADING_ROTATE_MS);
    return () => window.clearInterval(id);
  }, []);

  const active = DELIVERABLES[i];

  const onJump = (idx: number) => {
    setI(idx);
    setTick((t) => t + 1);
  };

  return (
    <section className="adv-deliverables-section">
      <div className="container">
        <div className="adv-deliverables-head">
          <div className="section-label">Deliverables</div>
          <h2 className="adv-deliverables-heading">
            What you{" "}
            <span className="ag-heading-rotator" aria-live="polite">
              <span key={phraseIdx} className="ag-heading-word">
                {HEADING_PHRASES[phraseIdx]}
              </span>
            </span>
          </h2>
        </div>

        <div className="adv-deliverables-showcase sr sr-up sr-1">
          <div className="adv-deliverables-side">
            <span className="adv-deliverables-kicker">{active.service}</span>
            <h3 className="adv-deliverables-title">{active.title}</h3>
            <p className="adv-deliverables-desc">{active.desc}</p>
            <div className="adv-deliverables-dots" role="tablist">
              {DELIVERABLES.map((d, idx) => (
                <button
                  key={d.title}
                  type="button"
                  role="tab"
                  aria-selected={idx === i}
                  aria-label={d.title}
                  className={`adv-deliverables-dot ${
                    idx === i ? "is-active" : ""
                  }`}
                  onClick={() => onJump(idx)}
                />
              ))}
            </div>
          </div>
          <div className="adv-deliverables-frame">
            <div className="adv-deliverables-frame-chrome">
              <div className="adv-deliverables-frame-dots">
                <span />
                <span />
                <span />
              </div>
              <div className="adv-deliverables-frame-file">
                <span className="adv-deliverables-frame-ext">{active.ext}</span>
                <span className="adv-deliverables-frame-filename">
                  {active.filename}
                </span>
              </div>
              <div className="adv-deliverables-frame-stamp">{active.stamp}</div>
            </div>
            <div className="adv-deliverables-frame-body">
              <div className="adv-deliv-app">
                <aside className="adv-deliv-files">
                  <div className="adv-deliv-files-head">Deliverables</div>
                  <div className="adv-deliv-files-list">
                    {DELIVERABLES.map((d, idx) => (
                      <button
                        key={d.filename}
                        type="button"
                        onClick={() => onJump(idx)}
                        className={`adv-deliv-file ${
                          idx === i ? "is-active" : ""
                        }`}
                        style={
                          {
                            ["--i"]: idx,
                          } as CSSProperties
                        }
                      >
                        <span
                          className={`adv-deliv-file-ext ext-${d.ext.toLowerCase()}`}
                        >
                          {d.ext}
                        </span>
                        <span className="adv-deliv-file-name">{d.filename}</span>
                      </button>
                    ))}
                    <span
                      className="adv-deliv-cursor"
                      style={
                        {
                          ["--i"]: i,
                        } as CSSProperties
                      }
                    >
                      <span className="adv-deliv-cursor__float">
                        <span
                          className="adv-deliv-cursor__tap"
                          key={`tap-${tick}`}
                        >
                          <CursorIcon />
                        </span>
                      </span>
                    </span>
                  </div>
                </aside>
                <div className="adv-deliv-doc">
                  {MOCKS.map((Mock, idx) => (
                    <div
                      key={idx}
                      className={`adv-deliv-slide ${
                        idx === i ? "is-active" : ""
                      }`}
                      aria-hidden={idx !== i}
                    >
                      <Mock />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
