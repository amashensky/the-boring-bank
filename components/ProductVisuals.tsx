export function PackagePreviewCard() {
  const items = [
    { kicker: "NAV", title: "Holding\u2011by\u2011holding rebuild", detail: "Confidence band, 38 comps", status: "Verified" },
    { kicker: "Legal", title: "LPA + flag register", detail: "ROFRs, transfer restrictions", status: "Flagged" },
    { kicker: "Pricing", title: "Indicative range", detail: "With comps + scenarios", status: "Stamped" },
    { kicker: "Track Record", title: "Fund family + benchmarks", detail: "Vintage\u2011year comparables", status: "Loaded" },
  ];
  return (
    <div className="pv-card">
      <div className="pv-head">
        <div className="pv-title">IC\u2011Ready Package</div>
        <span className="pv-badge">Preview</span>
      </div>
      {items.map((it, i) => (
        <div key={i} className="pkg-row">
          <div className="pkg-check">&#10003;</div>
          <div className="pkg-meta">
            <div className="pkg-kicker">{it.kicker}</div>
            <div className="pkg-title">{it.title}</div>
            <div className="pkg-detail">{it.detail}</div>
          </div>
          <div className="pkg-status">{it.status}</div>
        </div>
      ))}
      <div className="pv-field" style={{ marginTop: 14 }}>
        <span className="pv-label">Ready for IC</span>
        <span className="pv-value big">4 of 4</span>
      </div>
    </div>
  );
}

export function DealFlowCard() {
  const deals = [
    { vintage: "2019", strategy: "Growth Equity", size: "$14M", fit: 97, status: "New" },
    { vintage: "2017", strategy: "Buyout", size: "$42M", fit: 91, status: "Open" },
    { vintage: "2021", strategy: "Venture", size: "$6M", fit: 84, status: "Open" },
    { vintage: "2018", strategy: "Infra", size: "$28M", fit: 78, status: "Open" },
  ];
  return (
    <div className="pv-card">
      <div className="pv-head">
        <div className="pv-title">Your Mandate Inbox</div>
        <span className="pv-badge">This Week</span>
      </div>
      <div className="pv-field">
        <span className="pv-label">Mandate</span>
        <span className="pv-value">NA Buyout, 2016\u20112020, $5\u201150M</span>
      </div>
      <div style={{ marginTop: 12, paddingTop: 10, borderTop: "1px solid var(--line-soft)" }}>
        <div style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--muted)", fontWeight: 600, marginBottom: 10 }}>Matched Deal Flow</div>
        {deals.map((d, i) => (
          <div key={i} className="deal-row">
            <div className="deal-score">{d.fit}</div>
            <div className="deal-meta">
              <div className="deal-title">{d.strategy} &middot; {d.vintage}</div>
              <div className="deal-sub">{d.size} position</div>
            </div>
            <span className={`deal-status ${d.status === "New" ? "new" : ""}`}>{d.status}</span>
          </div>
        ))}
      </div>
      <div className="pv-field" style={{ marginTop: 12 }}>
        <span className="pv-label">Accept rate</span>
        <span className="pv-value big">68%</span>
      </div>
    </div>
  );
}

export function FeeModelCard() {
  return (
    <div className="pv-card">
      <div className="pv-head">
        <div className="pv-title">Fee Model</div>
        <span className="pv-badge">Success Only</span>
      </div>
      <div className="fee-compare">
        <div className="fee-col fee-trad">
          <div className="fee-label">Traditional Broker</div>
          <div className="fee-bar" style={{ height: 100 }}>
            <div className="fee-seg fee-retainer" style={{ flex: 1 }}>Retainer</div>
            <div className="fee-seg fee-work" style={{ flex: 1.2 }}>Work Fee</div>
            <div className="fee-seg fee-success-trad" style={{ flex: 3 }}>Success</div>
          </div>
          <div className="fee-total">3 to 5% total spread</div>
        </div>
        <div className="fee-col fee-boring">
          <div className="fee-label">The Boring Bank</div>
          <div className="fee-bar" style={{ height: 100 }}>
            <div className="fee-seg fee-zero" style={{ flex: 1 }}>No retainer</div>
            <div className="fee-seg fee-zero" style={{ flex: 0.6 }}>No work fee</div>
            <div className="fee-seg fee-success" style={{ flex: 2.2 }}>Success only</div>
          </div>
          <div className="fee-total">Paid on wire clear</div>
        </div>
      </div>
      <div className="pv-field">
        <span className="pv-label">Upfront cost</span>
        <span className="pv-value big">$0</span>
      </div>
    </div>
  );
}

export function JourneyFlow() {
  const milestones = [
    { day: "Step 01", label: "Intake", sub: "K\u20111s + LPA", pos: 0 },
    { day: "Step 02", label: "NAV Rebuilt", sub: "Comps layered", pos: 16 },
    { day: "Step 03", label: "Package Live", sub: "Blind to buyers", pos: 40 },
    { day: "Step 04", label: "First Bids", sub: "Live leaderboard", pos: 52 },
    { day: "Step 05", label: "Bids Closed", sub: "Winner selected", pos: 64 },
    { day: "Step 06", label: "GP Consent", sub: "Transfer signed", pos: 84 },
    { day: "Step 07", label: "Wire", sub: "Success fee only", pos: 100 },
  ];
  return (
    <div className="journey">
      <div className="journey-header">
        <div>
          <div className="journey-eyebrow">Transaction Journey</div>
          <div className="journey-title">Intake to wire, one track.</div>
          <div className="journey-disclaimer">Illustrative steps. Every transaction is bespoke.</div>
        </div>
        <div className="journey-phases">
          <div className="journey-phase"><span className="jp-dot" style={{ background: "var(--ink)" }} /> Prepare</div>
          <div className="journey-phase"><span className="jp-dot" style={{ background: "var(--ink-2)" }} /> Match</div>
          <div className="journey-phase"><span className="jp-dot" style={{ background: "var(--taupe)" }} /> Close</div>
        </div>
      </div>
      <div className="journey-track-wrap">
        <div className="journey-bands">
          <div className="jb jb-prep" style={{ left: "0%", width: "40%" }}>Prepare</div>
          <div className="jb jb-match" style={{ left: "40%", width: "24%" }}>Match</div>
          <div className="jb jb-close" style={{ left: "64%", width: "36%" }}>Close</div>
        </div>
        <div className="journey-track">
          <div className="journey-fill" />
          {milestones.map((m, i) => (
            <div
              key={i}
              className={`journey-node ${i === 0 ? "first" : ""} ${i === milestones.length - 1 ? "last" : ""}`}
              style={{ left: `${m.pos}%` }}
            >
              <div className="jn-dot" />
              <div className="jn-label">
                <div className="jn-day">{m.day}</div>
                <div className="jn-name">{m.label}</div>
                <div className="jn-sub">{m.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function OpportunityCard() {
  return (
    <div className="pv-card">
      <div className="pv-head">
        <div className="pv-title">Create Secondary Opportunity</div>
        <div className="pv-badge">Draft</div>
      </div>
      <div className="pv-field">
        <span className="pv-label">Fund Name</span>
        <span className="pv-value">Apollo Growth Fund III</span>
      </div>
      <div className="pv-field">
        <span className="pv-label">Portfolio Value</span>
        <span className="pv-value big">$1,800,000</span>
      </div>
      <div className="pv-field">
        <span className="pv-label">Deal Type</span>
        <span className="pv-value">GP&#8209;led Secondary</span>
      </div>
      <div className="pv-field">
        <span className="pv-label">Vintage</span>
        <span className="pv-value">2019</span>
      </div>
      <div className="pv-field">
        <span className="pv-label">Target Close</span>
        <span className="pv-value">Bespoke</span>
      </div>
    </div>
  );
}

export function BidsCard() {
  return (
    <div className="pv-card">
      <div className="pv-head">
        <div className="pv-title">Select Winning Bid</div>
        <div className="pv-badge">6 Bids</div>
      </div>
      <div className="bid-row">
        <div>
          <div className="bid-name">KKR Capital</div>
          <div className="bid-meta">2 days &middot; All Cash</div>
        </div>
        <div style={{ textAlign: "right" }}>
          <div className="bid-price">$1.42B</div>
          <div className="bid-premium">+5.2%</div>
        </div>
        <button className="bid-accept">Accept</button>
      </div>
      <div className="bid-row">
        <div>
          <div className="bid-name">Blackstone</div>
          <div className="bid-meta">3 days &middot; Financed</div>
        </div>
        <div style={{ textAlign: "right" }}>
          <div className="bid-price">$1.38B</div>
          <div className="bid-premium">+2.1%</div>
        </div>
        <button className="bid-accept">Accept</button>
      </div>
      <div className="bid-row">
        <div>
          <div className="bid-name">TPG Secondaries</div>
          <div className="bid-meta">1 day &middot; Mixed</div>
        </div>
        <div style={{ textAlign: "right" }}>
          <div className="bid-price">$1.31B</div>
          <div className="bid-premium" style={{ color: "var(--muted)" }}>+0.8%</div>
        </div>
        <button className="bid-accept">Accept</button>
      </div>
    </div>
  );
}

export function ClosingCard() {
  return (
    <div className="pv-card">
      <div className="pv-head">
        <div className="pv-title">Deal Closing</div>
        <div className="pv-badge">In Progress</div>
      </div>
      <div className="pv-field" style={{ alignItems: "flex-start", flexDirection: "column", gap: 8 }}>
        <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
          <span className="pv-label">Closing Progress</span>
          <span className="pv-value" style={{ fontSize: 12 }}>72%</span>
        </div>
        <div className="progress-bar" style={{ width: "100%" }}>
          <div className="progress-fill" style={{ width: "72%" }} />
        </div>
      </div>
      <div className="doc-row">
        <div className="doc-icon">PDF</div>
        <div>
          <div className="doc-name">Purchase Agreement</div>
          <div className="doc-size">2.4 MB</div>
        </div>
        <div className="doc-size">Signed</div>
        <div className="doc-check">&#10003;</div>
      </div>
      <div className="doc-row">
        <div className="doc-icon">PDF</div>
        <div>
          <div className="doc-name">Transfer Agreement</div>
          <div className="doc-size">1.1 MB</div>
        </div>
        <div className="doc-size">Signed</div>
        <div className="doc-check">&#10003;</div>
      </div>
      <div className="doc-row">
        <div className="doc-icon">PDF</div>
        <div>
          <div className="doc-name">GP Consent Letter</div>
          <div className="doc-size">0.8 MB</div>
        </div>
        <div className="doc-size">Pending</div>
        <div className="doc-check" style={{ background: "var(--muted)" }}>&middot;</div>
      </div>
    </div>
  );
}

export function ValuationCard() {
  return (
    <div className="pv-card">
      <div className="pv-head">
        <div className="pv-title">Indicative Fair Value</div>
        <div className="pv-badge">Live</div>
      </div>
      <div className="range-display">
        <div className="pv-label" style={{ marginBottom: 4 }}>LP stake &middot; Buyout Fund IV</div>
        <div style={{ fontFamily: "var(--font-serif), serif", fontSize: 28, color: "var(--ink)", fontWeight: 500, margin: "4px 0 10px" }}>
          $2.4M to $2.7M
        </div>
        <div className="range-band" />
        <div className="range-labels">
          <span>LOW</span>
          <span>75TH PCTL</span>
          <span>HIGH</span>
        </div>
      </div>
      <div className="pv-field">
        <span className="pv-label">Confidence band</span>
        <span className="pv-value">38 comps</span>
      </div>
      <div style={{ marginTop: 16, paddingTop: 14, borderTop: "1px solid var(--line-soft)" }}>
        <div style={{ fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted)", fontWeight: 600, marginBottom: 10 }}>
          Top Matches
        </div>
        <div className="match-row">
          <span className="match-score">97</span>
          <div>
            <div className="match-label">Institutional LP Pool</div>
            <div className="match-tag">Strategic</div>
          </div>
          <span className="match-action">Intro</span>
        </div>
        <div className="match-row">
          <span className="match-score">91</span>
          <div>
            <div className="match-label">Secondary Desk &middot; Tier&#8209;1</div>
            <div className="match-tag">Price</div>
          </div>
          <span className="match-action">Intro</span>
        </div>
        <div className="match-row">
          <span className="match-score">86</span>
          <div>
            <div className="match-label">Family Office Network</div>
            <div className="match-tag">Fit</div>
          </div>
          <span className="match-action">Intro</span>
        </div>
      </div>
    </div>
  );
}
