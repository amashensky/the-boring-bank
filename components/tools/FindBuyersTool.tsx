"use client";

import { useMemo, useState } from "react";
import Arrow from "@/components/Arrow";
import { APP_BUYER_SIGNUP, APP_SELLER_SIGNUP } from "@/lib/appUrls";
import {
  BUYER_POOL,
  rankBuyersForMandate,
  type PoolRegion,
  type PoolStrategy,
  type UserMandateInput,
} from "@/lib/findBuyersPool";

const STRATEGIES: PoolStrategy[] = ["Buyout", "Growth", "Venture", "Infra", "Credit", "Secondaries"];

const REGIONS: { value: PoolRegion; label: string }[] = [
  { value: "NA", label: "North America" },
  { value: "EU", label: "Europe" },
  { value: "APAC", label: "Asia-Pacific" },
];

export default function FindBuyersTool() {
  const [strategy, setStrategy] = useState<PoolStrategy>("Buyout");
  const [vintageMin, setVintageMin] = useState(2016);
  const [vintageMax, setVintageMax] = useState(2020);
  const [ticketMinM, setTicketMinM] = useState(3);
  const [ticketMaxM, setTicketMaxM] = useState(20);
  const [wantGpLed, setWantGpLed] = useState(false);
  const [region, setRegion] = useState<PoolRegion>("NA");
  const [hasRun, setHasRun] = useState(false);

  const mandate: UserMandateInput = useMemo(
    () => ({
      strategy,
      vintageMin: Math.min(vintageMin, vintageMax),
      vintageMax: Math.max(vintageMin, vintageMax),
      ticketMinM: Math.min(ticketMinM, ticketMaxM),
      ticketMaxM: Math.max(ticketMinM, ticketMaxM),
      wantGpLed,
      region,
    }),
    [strategy, vintageMin, vintageMax, ticketMinM, ticketMaxM, wantGpLed, region]
  );

  const ranked = useMemo(() => rankBuyersForMandate(mandate), [mandate]);

  function runMatch() {
    setHasRun(true);
  }

  return (
    <div className="tool-page-panel">
      <div className="hiw-label" style={{ marginBottom: 12 }}>
        Your position
      </div>
      <p className="section-lede" style={{ marginTop: 0, marginBottom: 24, maxWidth: 640, textAlign: "left" }}>
        Describe a secondary interest the way you would in a blind profile. We score how our verified buyer network
        overlaps—demo logic only; a real process uses your full data room and transfer register.
      </p>

      <div className="form-grid tool-find-form">
        <div className="field">
          <label htmlFor="fb-strategy">Fund strategy</label>
          <select id="fb-strategy" value={strategy} onChange={(e) => setStrategy(e.target.value as PoolStrategy)}>
            {STRATEGIES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="fb-region">Where buyers should be active</label>
          <select id="fb-region" value={region} onChange={(e) => setRegion(e.target.value as PoolRegion)}>
            {REGIONS.map((r) => (
              <option key={r.value} value={r.value}>
                {r.label}
              </option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="fb-vmin">Vintage from</label>
          <select id="fb-vmin" value={vintageMin} onChange={(e) => setVintageMin(Number(e.target.value))}>
            {Array.from({ length: 14 }, (_, i) => 2012 + i).map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="fb-vmax">Vintage to</label>
          <select id="fb-vmax" value={vintageMax} onChange={(e) => setVintageMax(Number(e.target.value))}>
            {Array.from({ length: 14 }, (_, i) => 2012 + i).map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="fb-tmin">Ticket from ($M)</label>
          <select id="fb-tmin" value={ticketMinM} onChange={(e) => setTicketMinM(Number(e.target.value))}>
            {[1, 2, 3, 5, 8, 10, 15, 20, 25, 40].map((n) => (
              <option key={n} value={n}>
                ${n}M
              </option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="fb-tmax">Ticket to ($M)</label>
          <select id="fb-tmax" value={ticketMaxM} onChange={(e) => setTicketMaxM(Number(e.target.value))}>
            {[5, 8, 10, 15, 20, 25, 40, 75, 120, 200].map((n) => (
              <option key={n} value={n}>
                ${n}M
              </option>
            ))}
          </select>
        </div>
        <div className="field full tool-find-checkbox">
          <label className="tool-check-label">
            <input type="checkbox" checked={wantGpLed} onChange={(e) => setWantGpLed(e.target.checked)} />
            <span>Open to GP-led / continuation structures</span>
          </label>
        </div>
        <div className="full" style={{ marginTop: 4, display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center" }}>
          <button type="button" className="btn btn-primary" onClick={runMatch}>
            Run buyer match <Arrow />
          </button>
          <span style={{ fontSize: 13, color: "var(--muted)" }}>{BUYER_POOL.length} illustrative desks in pool</span>
        </div>
      </div>

      {!hasRun ? (
        <p className="tool-disclaimer" style={{ marginTop: 28 }}>
          Configure your sleeve and press <strong>Run buyer match</strong> to see ranked overlap with our demo buyer
          set. Listing a real position unlocks blind outreach to the live network.
        </p>
      ) : (
        <>
          <div className="hiw-label" style={{ marginTop: 40, marginBottom: 12 }}>
            Ranked overlap (demo)
          </div>
          <div className="tool-buyer-grid">
            {ranked.map(({ profile, fitPct }) => (
              <article key={profile.id} className="tool-buyer-card">
                <div className="tool-buyer-card-top">
                  <span className="tool-buyer-fit">{fitPct}% fit</span>
                  <span className={`tool-buyer-velocity tool-buyer-velocity--${profile.velocity === "Fast" ? "fast" : "std"}`}>
                    {profile.velocity} cycle
                  </span>
                </div>
                <h3 className="tool-buyer-desk">{profile.desk}</h3>
                <div className="tool-buyer-meta">{profile.allocatorType}</div>
                <ul className="tool-buyer-facts">
                  <li>
                    <span>Mandate</span> {profile.strategies.join(", ")}
                  </li>
                  <li>
                    <span>Vintage</span> {profile.vintageMin}–{profile.vintageMax}
                  </li>
                  <li>
                    <span>Ticket</span> ${profile.ticketMinM}M – ${profile.ticketMaxM}M
                  </li>
                  <li>
                    <span>GP-led</span> {profile.gpLedOk ? "Yes" : "LP stakes only"}
                  </li>
                  <li>
                    <span>Regions</span> {profile.regions.join(", ")}
                  </li>
                </ul>
                <p className="tool-buyer-note">{profile.diligenceStyle}</p>
              </article>
            ))}
          </div>
          <div className="tool-find-cta-row">
            <a href={APP_SELLER_SIGNUP} className="btn btn-primary" rel="noopener noreferrer" target="_blank">
              List a position for live matching <Arrow />
            </a>
            <a href={APP_BUYER_SIGNUP} className="btn btn-ghost" rel="noopener noreferrer" target="_blank">
              Join buyer network
            </a>
          </div>
          <p className="tool-disclaimer">
            Fit scores are synthetic: they weight strategy, vintage, ticket, structure, and region overlap against a
            static sample set. Production routing uses mandate objects, compliance flags, and banker judgment—not this
            page.
          </p>
        </>
      )}
    </div>
  );
}
