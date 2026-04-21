import { BuyerCoverageLpCard } from "./BuyerCoverageLpCard";

export { TimelineCard } from "./LPTimelineCard";

export function CapitalStackCard() {
  const tranches = [
    { name: "Senior NAV Facility", size: "40%", rate: "SOFR + 375", color: "#1A1816" },
    { name: "Preferred Equity", size: "25%", rate: "12% PIK", color: "#3A3631" },
    { name: "LP Co&#8209;Invest", size: "20%", rate: "Common", color: "#78716B" },
    { name: "GP Commitment", size: "15%", rate: "Promote", color: "#B9A98A" },
  ];
  return (
    <div className="pv-card pv-card--split-height-match pv-card--mock-live">
      <div className="pv-head">
        <div className="pv-title">Capital Stack</div>
        <span className="pv-badge">$82M Position</span>
      </div>
      <div className="pv-card-grow" style={{ padding: "6px 0 4px" }}>
        {tranches.map((t, i) => (
          <div key={i} className="stack-row">
            <div className="stack-bar" style={{ background: t.color, width: t.size }} />
            <div className="stack-meta">
              <div className="stack-name" dangerouslySetInnerHTML={{ __html: t.name }} />
              <div className="stack-rate">{t.rate}</div>
            </div>
            <div className="stack-size">{t.size}</div>
          </div>
        ))}
      </div>
      <div className="pv-card-footer pv-field" style={{ marginTop: 12 }}>
        <span className="pv-label">Blended Cost</span>
        <span className="pv-value big">9.4%</span>
      </div>
    </div>
  );
}

export function CVStructureCard() {
  return (
    <div className="pv-card pv-card--mock-live">
      <div className="pv-head">
        <div className="pv-title">Continuation Vehicle</div>
        <span className="pv-badge">Single Asset</span>
      </div>
      <div className="cv-diagram cv-diagram--live">
        <div className="cv-box source">
          <div className="cv-box-label">Existing Fund</div>
          <div className="cv-box-name">Fund IV &middot; 2017 Vintage</div>
          <div className="cv-box-meta">End of life &middot; 1 trophy asset</div>
        </div>
        <div className="cv-arrow">
          <span>Rollover + New Capital</span>
          <svg width="28" height="10" viewBox="0 0 28 10" fill="none">
            <path d="M0 5h26m-5-4l5 4-5 4" stroke="currentColor" strokeWidth="1.2" fill="none"/>
          </svg>
        </div>
        <div className="cv-box dest">
          <div className="cv-box-label">Continuation Vehicle</div>
          <div className="cv-box-name">CV I &middot; 2026 Close</div>
          <div className="cv-box-meta">Extended hold &middot; 5 year term</div>
        </div>
      </div>
      <div className="pv-field">
        <span className="pv-label">Rollover LPs</span>
        <span className="pv-value">62%</span>
      </div>
      <div className="pv-field">
        <span className="pv-label">New Capital</span>
        <span className="pv-value big">$340M</span>
      </div>
    </div>
  );
}

type BuyerNetworkCardProps = { variant?: "full" | "lp" };

const BUYER_TIERS = [
  { key: "sf", abbr: "SF", name: "Secondary Funds", count: 210, sample: "Northbridge, Clearwater, Penrose" },
  { key: "fo", abbr: "FO", name: "Family Offices", count: 140, sample: "Ashford Grove, Sterling Hold, Redbrick" },
  { key: "en", abbr: "EN", name: "Endowments", count: 62, sample: "Midwest State, Coastal Research, River Valley" },
  { key: "pn", abbr: "PN", name: "Pensions", count: 48, sample: "Western State Teachers, Great Lakes, NorthSea" },
  { key: "sv", abbr: "SV", name: "Sovereigns", count: 22, sample: "Gulf Development, Nordic Reserve, Pacific Crown" },
] as const;

export function BuyerNetworkCard({ variant = "full" }: BuyerNetworkCardProps) {
  if (variant === "lp") {
    return <BuyerCoverageLpCard />;
  }

  const tiers = BUYER_TIERS;
  const total = tiers.reduce((a, b) => a + b.count, 0);
  const dots: string[] = [];
  tiers.forEach((t) => {
    const n = Math.round((t.count / total) * 60);
    for (let i = 0; i < n; i++) dots.push(t.key);
  });
  while (dots.length < 60) dots.push(tiers[0].key);
  dots.length = 60;

  return (
    <div className="pv-card pv-card--mock-live">
      <div className="pv-head">
        <div className="pv-title">Buyer Coverage</div>
        <span className="pv-badge live">
          <span className="live-dot" /> Live Mandates
        </span>
      </div>

      <div className="net-stat">
        <div>
          <div className="net-stat-num">{total}</div>
          <div className="net-stat-label">Active Mandates</div>
        </div>
        <div className="net-stat-meta">
          <div className="net-stat-row"><span>New this week</span><strong>+14</strong></div>
          <div className="net-stat-row"><span>Avg time to bid</span><strong>8 days</strong></div>
        </div>
      </div>

      <div className="net-grid" aria-label="Mandate distribution">
        {dots.map((k, i) => (
          <span key={i} className={`net-dot tier-${k}`} style={{ animationDelay: `${(i % 10) * 40}ms` }} />
        ))}
      </div>

      <div className="net-legend-line">
        {tiers.map((t, i) => (
          <span key={t.key}>
            <span className={`net-swatch tier-${t.key}`} />
            <span className="net-line-name">{t.name}</span>
            <span className="net-line-count">{t.count}</span>
            {i < tiers.length - 1 && <span className="net-line-sep">&ndash;</span>}
          </span>
        ))}
      </div>
    </div>
  );
}
