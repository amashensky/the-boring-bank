"use client";

import { useMemo, useState } from "react";
import {
  REGION_OPTIONS,
  SECONDARY_MARKET_COMPS,
  STRATEGY_OPTIONS,
  type CompRegion,
  type SecondaryMarketComp,
  type SecondaryStrategy,
} from "@/lib/secondaryMarketComps";

function medianNav(values: number[]): number {
  if (values.length === 0) return 0;
  const s = [...values].sort((a, b) => a - b);
  const m = Math.floor(s.length / 2);
  return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2;
}

function pctRange(values: number[]): { lo: number; hi: number } {
  if (values.length === 0) return { lo: 0, hi: 0 };
  const s = [...values].sort((a, b) => a - b);
  const i = Math.floor(0.25 * (s.length - 1));
  const j = Math.floor(0.75 * (s.length - 1));
  return { lo: s[i], hi: s[j] };
}

export default function MarketCompsTool() {
  const [strategy, setStrategy] = useState<"" | SecondaryStrategy>("");
  const [region, setRegion] = useState<"" | CompRegion>("");
  const [vintageMin, setVintageMin] = useState(2014);
  const [vintageMax, setVintageMax] = useState(2022);

  const filtered = useMemo(() => {
    const v0 = Math.min(vintageMin, vintageMax);
    const v1 = Math.max(vintageMin, vintageMax);
    return SECONDARY_MARKET_COMPS.filter((c) => {
      if (strategy && c.strategy !== strategy) return false;
      if (region && c.region !== region) return false;
      if (c.vintageYear < v0 || c.vintageYear > v1) return false;
      return true;
    });
  }, [strategy, region, vintageMin, vintageMax]);

  const navs = useMemo(() => filtered.map((c) => c.navPct), [filtered]);
  const med = useMemo(() => medianNav(navs), [navs]);
  const band = useMemo(() => pctRange(navs), [navs]);

  const vintageYears = useMemo(() => {
    const ys = [...new Set(SECONDARY_MARKET_COMPS.map((c) => c.vintageYear))].sort((a, b) => a - b);
    return ys;
  }, []);

  return (
    <div className="tool-page-panel">
      <div className="hiw-label" style={{ marginBottom: 12 }}>
        Filters
      </div>
      <p className="section-lede" style={{ marginTop: 0, marginBottom: 20, maxWidth: 640, textAlign: "left" }}>
        Slice illustrative LP secondary prints by strategy, geography, and fund vintage. Use it to sanity-check where
        the market has been trading before you run a formal process.
      </p>

      <div className="tool-toolbar">
        <div className="field">
          <label htmlFor="mc-strategy">Strategy</label>
          <select
            id="mc-strategy"
            value={strategy}
            onChange={(e) => setStrategy(e.target.value as "" | SecondaryStrategy)}
          >
            {STRATEGY_OPTIONS.map((o) => (
              <option key={o.label} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="mc-region">Region</label>
          <select id="mc-region" value={region} onChange={(e) => setRegion(e.target.value as "" | CompRegion)}>
            {REGION_OPTIONS.map((o) => (
              <option key={o.label} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="mc-vmin">Vintage from</label>
          <select id="mc-vmin" value={vintageMin} onChange={(e) => setVintageMin(Number(e.target.value))}>
            {vintageYears.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="mc-vmax">Vintage to</label>
          <select id="mc-vmax" value={vintageMax} onChange={(e) => setVintageMax(Number(e.target.value))}>
            {vintageYears.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
        </div>
      </div>

      <dl className="tool-stat-grid">
        <div className="tool-stat">
          <dt>Observations</dt>
          <dd>{filtered.length}</dd>
        </div>
        <div className="tool-stat">
          <dt>Median (% NAV)</dt>
          <dd>{filtered.length ? `${med.toFixed(1)}%` : "—"}</dd>
        </div>
        <div className="tool-stat">
          <dt>IQR band (% NAV)</dt>
          <dd>{filtered.length ? `${band.lo.toFixed(1)} – ${band.hi.toFixed(1)}%` : "—"}</dd>
        </div>
      </dl>

      <div className="tool-comps-wrap">
        <table className="tool-comps-table">
          <thead>
            <tr>
              <th>Strategy</th>
              <th>Vintage</th>
              <th>Region</th>
              <th>Print (% NAV)</th>
              <th>Size</th>
              <th>Quarter</th>
              <th>Sleeve</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={7} style={{ color: "var(--muted)", fontStyle: "italic" }}>
                  No rows match these filters. Widen vintage or clear strategy/region.
                </td>
              </tr>
            ) : (
              filtered.map((c: SecondaryMarketComp) => (
                <tr key={c.id}>
                  <td>{c.strategy}</td>
                  <td>{c.vintageYear}</td>
                  <td>{c.region}</td>
                  <td style={{ fontFamily: "var(--font-serif), serif", fontWeight: 600 }}>{c.navPct.toFixed(1)}%</td>
                  <td>{c.sizeBand}</td>
                  <td>{c.quarter}</td>
                  <td style={{ color: "var(--ink-2)", maxWidth: 220 }}>{c.sleeve}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <p className="tool-disclaimer">
        Composite only: anonymized, rounded marks for education and internal framing. Not a quote, fairness opinion, or
        solicitation. Live comps depend on your specific LP position, transfer restrictions, and NAV reconstruction—
        <a href="/services/advisory#advisory-inquiry">talk to a banker</a> for a bespoke strip.
      </p>
    </div>
  );
}
