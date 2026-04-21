"use client";

import { useEffect, useState } from "react";
import type { CSSProperties } from "react";

/* ----------------------------------------------------------------
 * AgentConsole — a 2D agentic canvas.
 *
 * Five agent stations scattered across a design-canvas-style
 * workspace (dotted grid, curved SVG connector paths). Each agent
 * has its own cursor that idles near its station and jitters when
 * active. A gold Banker cursor orbits the canvas independently,
 * overseeing all five agents. A packet of four documents glides
 * from station to station as the workflow advances.
 *
 * Intentionally distinct from DealFlow's horizontal pipeline below:
 * this is a scattered 2D workspace, not a conveyor.
 * -------------------------------------------------------------- */

type Station = {
  key: string;
  name: string;
  role: string;
  color: string;
  x: number; // % across the stage
  y: number; // % down the stage
};

const STATIONS: Station[] = [
  { key: "intake",  name: "Intake",  role: "Docs · NAV",       color: "#5aa36a", x: 14, y: 26 },
  { key: "pricing", name: "Pricing", role: "Comps · Range",    color: "#b8841e", x: 82, y: 22 },
  { key: "match",   name: "Match",   role: "Mandate · Buyers", color: "#2b8c83", x: 48, y: 54 },
  { key: "bids",    name: "Bids",    role: "Round · Winner",   color: "#8a5a7e", x: 16, y: 80 },
  { key: "close",   name: "Close",   role: "SPA · Wire",       color: "#2f5f3a", x: 84, y: 78 },
];

const FILES = [
  { id: "k1",  label: "K-1" },
  { id: "lpa", label: "LPA" },
  { id: "cap", label: "Cap" },
  { id: "q4",  label: "Q4" },
];

const TICK_MS = 1250;
const TICKS_PER_STATION = 2;
const TOTAL_TICKS = STATIONS.length * TICKS_PER_STATION + 2;

const ROTATING_WORDS = [
  "boring work.",
  "tedious work.",
  "repetitive work.",
  "manual work.",
  "thankless work.",
];
const ROTATE_MS = 2200;

export default function AgentConsole() {
  const [tick, setTick] = useState(0);
  const [wordIdx, setWordIdx] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setTick((t) => (t + 1) % TOTAL_TICKS);
    }, TICK_MS);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    const id = window.setInterval(() => {
      setWordIdx((i) => (i + 1) % ROTATING_WORDS.length);
    }, ROTATE_MS);
    return () => window.clearInterval(id);
  }, []);

  const activeIdx = Math.min(
    Math.floor(tick / TICKS_PER_STATION),
    STATIONS.length - 1
  );
  const settled = tick >= STATIONS.length * TICKS_PER_STATION;
  const active = STATIONS[activeIdx];

  return (
    <section className="ag-section">
      <div className="container">
        <div className="ag-head">
          <div className="section-label">Deal Agents</div>
          <h2 className="ag-heading">
            Agents do the{" "}
            <span className="ag-heading-rotator" aria-live="polite">
              <span key={wordIdx} className="ag-heading-word">
                {ROTATING_WORDS[wordIdx]}
              </span>
            </span>
          </h2>
        </div>

        <div className="ag-canvas sr sr-up sr-1">
          <div className="ag-chrome">
            <div className="ag-chrome-dots">
              <span /><span /><span />
            </div>
            <div className="ag-chrome-title">canvas · project-meridian</div>
            <div className="ag-chrome-right">
              <div className="ag-chrome-progress">
                <span className="ag-progress-num">{Math.min(activeIdx + 1, STATIONS.length)}</span>
                <span className="ag-progress-sep">/</span>
                <span>{STATIONS.length}</span>
              </div>
              <div className="ag-chrome-stamp">
                <span className="ag-stamp-avatar" aria-hidden>
                  <svg viewBox="0 0 16 16" width="11" height="11">
                    <circle cx="8" cy="6" r="2.6" stroke="currentColor" strokeWidth="1.2" fill="none"/>
                    <path d="M3 14c1-2.4 3-3.8 5-3.8s4 1.4 5 3.8" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
                  </svg>
                </span>
                Banker watching
              </div>
            </div>
          </div>

          <div className="ag-stage">
            {/* dotted canvas grid */}
            <div className="ag-grid" aria-hidden />

            {/* curved connector paths between stations */}
            <svg
              className="ag-paths"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden
            >
              {STATIONS.slice(0, -1).map((st, i) => {
                const next = STATIONS[i + 1];
                const done = settled || i < activeIdx;
                const lit = !settled && i === activeIdx - 1;
                const mx = (st.x + next.x) / 2;
                const my = (st.y + next.y) / 2 + (i % 2 === 0 ? -10 : 10);
                return (
                  <path
                    key={i}
                    d={`M ${st.x} ${st.y} Q ${mx} ${my} ${next.x} ${next.y}`}
                    stroke={done ? "#5aa36a" : lit ? "#b8841e" : "rgba(30, 42, 34, 0.14)"}
                    strokeWidth={done || lit ? "0.35" : "0.28"}
                    strokeDasharray={done ? "0" : "1.2 1.2"}
                    fill="none"
                    className={lit ? "ag-path-lit" : ""}
                    vectorEffect="non-scaling-stroke"
                  />
                );
              })}
            </svg>

            {/* stations */}
            {STATIONS.map((st, idx) => {
              const state = settled
                ? "done"
                : idx < activeIdx
                ? "done"
                : idx === activeIdx
                ? "active"
                : "pending";
              return (
                <div
                  key={st.key}
                  className={`ag-station is-${state}`}
                  style={{
                    ["--x"]: `${st.x}%`,
                    ["--y"]: `${st.y}%`,
                    ["--c"]: st.color,
                  } as CSSProperties}
                >
                  <div className="ag-station-card">
                    <div className="ag-station-head">
                      <span className="ag-station-badge">
                        {state === "done" ? (
                          <svg viewBox="0 0 12 12" width="9" height="9" aria-hidden>
                            <path d="M2.5 6.2l2.3 2.3 4.7-4.7" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        ) : (
                          idx + 1
                        )}
                      </span>
                      <span className="ag-station-name">{st.name}</span>
                    </div>
                    <div className="ag-station-role">{st.role}</div>
                  </div>
                </div>
              );
            })}

            {/* travelling packet of files — glides from station to station */}
            <div
              className={`ag-packet ${settled ? "is-settled" : ""}`}
              style={{
                ["--x"]: `${active.x}%`,
                ["--y"]: `${active.y}%`,
              } as CSSProperties}
            >
              {FILES.map((f, i) => (
                <span
                  key={f.id}
                  className="ag-file"
                  style={{ ["--i"]: i } as CSSProperties}
                >
                  {f.label}
                </span>
              ))}
            </div>

            {/* agent cursors — idle at their station, jitter when active */}
            {STATIONS.map((st, idx) => {
              const isActive = idx === activeIdx && !settled;
              return (
                <div
                  key={`cur-${st.key}`}
                  className={`ag-cursor ${isActive ? "is-active" : ""}`}
                  style={{
                    ["--x"]: `${st.x}%`,
                    ["--y"]: `${st.y}%`,
                    ["--c"]: st.color,
                    ["--d"]: `${idx * 0.45}s`,
                  } as CSSProperties}
                >
                  <svg className="ag-cursor-arrow" viewBox="0 0 18 18" width="15" height="15" aria-hidden>
                    <path
                      d="M3 2.5 L3 14 L6.5 10.6 L9 16 L11 15 L8.5 9.8 L13.8 9.8 Z"
                      fill="currentColor"
                      stroke="white"
                      strokeWidth="1.2"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="ag-cursor-tag">{st.name}</span>
                </div>
              );
            })}

            {/* banker cursor — orbits the canvas on its own, overseeing */}
            <div className="ag-banker-cursor" aria-hidden>
              <svg className="ag-cursor-arrow" viewBox="0 0 18 18" width="18" height="18" aria-hidden>
                <path
                  d="M3 2.5 L3 14 L6.5 10.6 L9 16 L11 15 L8.5 9.8 L13.8 9.8 Z"
                  fill="#d4a24e"
                  stroke="white"
                  strokeWidth="1.3"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="ag-banker-tag">Banker</span>
            </div>
          </div>

          <div className="ag-foot">
            <div className="ag-foot-left">
              <span className="ag-foot-dot" />
              <span>
                {settled
                  ? "Deal settled · wire cleared · engagement closed"
                  : `${active.name} agent working`}
              </span>
            </div>
            <div className="ag-foot-right">
              Overseen by Senior Banker · Industry Expert
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
