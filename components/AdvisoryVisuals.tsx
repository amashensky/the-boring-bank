/** Compact UI mockups for each advisory line on /services/advisory */

export function AdvisoryPortfolioMock() {
  const rows = [
    { fund: "Vantage Strand IV", strat: "Buyout", tag: "Exit 1", hi: true },
    { fund: "Cobalt Reach II", strat: "Growth", tag: "Hold", hi: false },
    { fund: "Ironwood Sleeve I", strat: "Infra", tag: "Exit 2", hi: true },
  ];
  return (
    <div className="adv-mock pv-card" aria-hidden>
      <div className="pv-head">
        <div className="pv-title">LP book screen</div>
        <span className="pv-badge">Screen</span>
      </div>
      <div style={{ fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted)", fontWeight: 600, marginBottom: 8 }}>
        Priority exits
      </div>
      {rows.map((r, i) => (
        <div key={i} className="adv-mock-row">
          <div>
            <div className="adv-mock-name">{r.fund}</div>
            <div className="adv-mock-sub">{r.strat}</div>
          </div>
          <span className={r.hi ? "adv-mock-pill adv-mock-pill--hi" : "adv-mock-pill"}>{r.tag}</span>
        </div>
      ))}
    </div>
  );
}

export function AdvisoryGPMock() {
  return (
    <div className="adv-mock pv-card" aria-hidden>
      <div className="pv-head">
        <div className="pv-title">GP&#8209;led structure</div>
        <span className="pv-badge">Design</span>
      </div>
      <div className="adv-mock-flow">
        <div className="adv-mock-node">
          <span className="adv-mock-node-label">Existing fund</span>
          <span className="adv-mock-node-sub">Roll / tender</span>
        </div>
        <div className="adv-mock-arrow" aria-hidden>
          &#8594;
        </div>
        <div className="adv-mock-node adv-mock-node--accent">
          <span className="adv-mock-node-label">Continuation</span>
          <span className="adv-mock-node-sub">CV terms</span>
        </div>
      </div>
      <div className="adv-mock-foot">Investor memo + timeline</div>
    </div>
  );
}

export function AdvisoryValuationMock() {
  return (
    <div className="adv-mock pv-card" aria-hidden>
      <div className="pv-head">
        <div className="pv-title">Pricing opinion</div>
        <span className="pv-badge">Comps</span>
      </div>
      <div style={{ fontSize: 10, color: "var(--muted)", marginBottom: 4 }}>LP stake &middot; blind comps</div>
      <div className="adv-mock-val-range">$42M &#8211; $48M</div>
      <div className="adv-mock-range-bar">
        <div className="adv-mock-range-fill" style={{ width: "52%" }} />
      </div>
      <div className="adv-mock-range-ticks">
        <span>Low</span>
        <span>Indicative</span>
        <span>High</span>
      </div>
      <div className="pv-field" style={{ marginTop: 8, paddingTop: 10 }}>
        <span className="pv-label">IC status</span>
        <span className="pv-value">Board ready</span>
      </div>
    </div>
  );
}

export function AdvisoryTransactionMock() {
  return (
    <div className="adv-mock pv-card" aria-hidden>
      <div className="pv-head">
        <div className="pv-title">Complex close</div>
        <span className="pv-badge">Bespoke</span>
      </div>
      <div className="adv-mock-txn">
        <div className="adv-mock-txn-col">
          <div className="adv-mock-txn-box">Strip</div>
          <div className="adv-mock-txn-cap">Slice A</div>
        </div>
        <div className="adv-mock-txn-plus">+</div>
        <div className="adv-mock-txn-col">
          <div className="adv-mock-txn-box">Syndicate</div>
          <div className="adv-mock-txn-cap">3 buyers</div>
        </div>
        <div className="adv-mock-txn-plus">&#8594;</div>
        <div className="adv-mock-txn-col">
          <div className="adv-mock-txn-box adv-mock-txn-box--dark">Close</div>
          <div className="adv-mock-txn-cap">One wire</div>
        </div>
      </div>
    </div>
  );
}
