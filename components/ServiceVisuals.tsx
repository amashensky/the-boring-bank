export function TimelineCard() {
  return (
    <div className="pv-card">
      <div className="pv-head">
        <div className="pv-title">LP&#8209;Led Timeline</div>
        <span className="pv-badge">Illustrative</span>
      </div>
      <div style={{ padding: "10px 4px 4px" }}>
        <div className="tl-track">
          <div className="tl-fill" style={{ width: "58%" }} />
          <div className="tl-dot" style={{ left: "0%" }} />
          <div className="tl-dot" style={{ left: "40%" }} />
          <div className="tl-dot active" style={{ left: "58%" }} />
          <div className="tl-dot" style={{ left: "100%" }} />
        </div>
        <div className="tl-labels">
          <div><div className="tl-day">Step 01</div><div className="tl-title">Intake</div></div>
          <div style={{ textAlign: "center" }}><div className="tl-day">Step 02</div><div className="tl-title">Package Live</div></div>
          <div style={{ textAlign: "center" }}><div className="tl-day">Step 03</div><div className="tl-title">Bids In</div></div>
          <div style={{ textAlign: "right" }}><div className="tl-day">Step 04</div><div className="tl-title">Wire</div></div>
        </div>
      </div>
      <div className="pv-field" style={{ marginTop: 18 }}>
        <span className="pv-label">Buyers Engaged</span>
        <span className="pv-value">11 of 58 matched</span>
      </div>
      <div className="pv-field">
        <span className="pv-label">Indicative Clear</span>
        <span className="pv-value big">96 to 99 NAV</span>
      </div>
    </div>
  );
}

export function CapitalStackCard() {
  const tranches = [
    { name: "Senior NAV Facility", size: "40%", rate: "SOFR + 375", color: "#1A1816" },
    { name: "Preferred Equity", size: "25%", rate: "12% PIK", color: "#3A3631" },
    { name: "LP Co&#8209;Invest", size: "20%", rate: "Common", color: "#78716B" },
    { name: "GP Commitment", size: "15%", rate: "Promote", color: "#B9A98A" },
  ];
  return (
    <div className="pv-card">
      <div className="pv-head">
        <div className="pv-title">Capital Stack</div>
        <span className="pv-badge">$82M Position</span>
      </div>
      <div style={{ padding: "6px 0 4px" }}>
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
      <div className="pv-field" style={{ marginTop: 12 }}>
        <span className="pv-label">Blended Cost</span>
        <span className="pv-value big">9.4%</span>
      </div>
    </div>
  );
}

export function CVStructureCard() {
  return (
    <div className="pv-card">
      <div className="pv-head">
        <div className="pv-title">Continuation Vehicle</div>
        <span className="pv-badge">Single Asset</span>
      </div>
      <div className="cv-diagram">
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

export function BuyerNetworkCard() {
  const tiers = [
    { key: "sf", name: "Secondary Funds", count: 210, sample: "Ardian, Lexington, HarbourVest" },
    { key: "fo", name: "Family Offices", count: 140, sample: "Pritzker, Walton, Bertarelli" },
    { key: "en", name: "Endowments", count: 62, sample: "Yale, Notre Dame, Duke" },
    { key: "pn", name: "Pensions", count: 48, sample: "CalPERS, Ontario Teachers, APG" },
    { key: "sv", name: "Sovereigns", count: 22, sample: "GIC, ADIA, Mubadala" },
  ];
  const total = tiers.reduce((a, b) => a + b.count, 0);
  // 60 dots, each represents ~8 mandates
  const dots: string[] = [];
  tiers.forEach((t) => {
    const n = Math.round((t.count / total) * 60);
    for (let i = 0; i < n; i++) dots.push(t.key);
  });
  while (dots.length < 60) dots.push(tiers[0].key);
  dots.length = 60;

  return (
    <div className="pv-card">
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
