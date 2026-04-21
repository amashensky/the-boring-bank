export function PackagePreviewCard() {
  const items = [
    { kicker: "NAV", title: "Full portfolio valuation", detail: "Dozens of comps, confidence band", status: "Verified" },
    { kicker: "Legal", title: "Transfer restriction review", detail: "ROFRs, consent requirements", status: "Flagged" },
    { kicker: "Pricing", title: "Indicative price range", detail: "Comps and scenario analysis", status: "Stamped" },
    { kicker: "Track Record", title: "Fund performance benchmarks", detail: "Returns vs. vintage peers", status: "Loaded" },
  ];
  return (
    <div className="pv-card pv-card--mock-live">
      <div className="pv-head">
        <div className="pv-title">IC&#8209;Ready Package</div>
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
    <div className="pv-card pv-card--mock-live">
      <div className="pv-head">
        <div className="pv-title">Your Mandate Inbox</div>
        <span className="pv-badge">This Week</span>
      </div>
      <div className="pv-field">
        <span className="pv-label">Mandate</span>
        <span className="pv-value">NA Buyout, 2016&#8209;2020, $5&#8209;50M</span>
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

type FeeModelCardProps = { matchBidFootprint?: boolean; variant?: "default" | "seller" };

/** Stacked fees for traditional broker (bottom → top in bar = first → last in DOM with column-reverse). */
function TraditionalFeeStack() {
  return (
    <>
      <div className="fee-seg fee-retainer" style={{ flex: 0.95 }}>Retainer</div>
      <div className="fee-seg fee-work" style={{ flex: 1 }}>Work fee</div>
      <div className="fee-seg fee-legal" style={{ flex: 0.9 }}>Legal</div>
      <div className="fee-seg fee-diligence" style={{ flex: 0.85 }}>Diligence</div>
      <div className="fee-seg fee-placement" style={{ flex: 0.9 }}>Placement</div>
      <div className="fee-seg fee-success-trad" style={{ flex: 2.6 }}>Success</div>
    </>
  );
}

export function FeeModelCard({ matchBidFootprint = false, variant = "default" }: FeeModelCardProps) {
  const seller = variant === "seller" && matchBidFootprint;
  /* Match-bids layout: bar height aligns with Select Winning Bid mockup (~same total card height in split). */
  const barH = matchBidFootprint ? 152 : 100;

  return (
    <div className={`pv-card pv-card--mock-live${matchBidFootprint ? " fee-model-card--match-bids" : ""}${seller ? " fee-model-card--seller" : ""}`}>
      <div className="pv-head">
        <div className="pv-title">Fee Model</div>
        <span className="pv-badge">{seller ? "At settlement" : "Success Only"}</span>
      </div>
      <div className="fee-compare">
        <div className="fee-col fee-trad">
          <div className="fee-label">Traditional Broker</div>
          <div className="fee-bar fee-bar--trad-stack" style={{ height: barH }}>
            <TraditionalFeeStack />
          </div>
          <div className="fee-total">{matchBidFootprint ? "3–5% all-in spread" : "3 to 5% total spread"}</div>
        </div>
        <div className="fee-col fee-boring">
          <div className="fee-label">The Boring Bank</div>
          <div className="fee-bar" style={{ height: barH }}>
            {seller ? (
              <>
                <div className="fee-seg fee-zero" style={{ flex: 1.1 }}>$0 upfront</div>
                <div className="fee-seg fee-success" style={{ flex: 2.4 }}>One fee · when funds settle</div>
              </>
            ) : (
              <>
                <div className="fee-seg fee-zero" style={{ flex: 1 }}>No retainer</div>
                <div className="fee-seg fee-zero" style={{ flex: 0.6 }}>No work fee</div>
                <div className="fee-seg fee-success" style={{ flex: 2.2 }}>Success fee only</div>
              </>
            )}
          </div>
          <div className="fee-total">{seller ? "No retainers or hourly grind" : "Paid on wire"}</div>
        </div>
      </div>
      <div className="pv-field">
        <span className="pv-label">Upfront cost</span>
        <span className="pv-value big">$0</span>
      </div>
    </div>
  );
}

export function OpportunityCard() {
  return (
    <div className="pv-card pv-card--mock-live">
      <div className="pv-head">
        <div className="pv-title">Create Secondary Opportunity</div>
        <div className="pv-badge">Draft</div>
      </div>
      <div className="pv-field">
        <span className="pv-label">Fund Name</span>
        <span className="pv-value">Summit Ridge Growth Fund III</span>
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
    <div className="pv-card pv-card--mock-live">
      <div className="pv-head">
        <div className="pv-title">Select Winning Bid</div>
        <div className="pv-badge">6 Bids</div>
      </div>
      <div className="bid-row">
        <div>
          <div className="bid-name">Crestline Capital Partners</div>
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
          <div className="bid-name">Granite Point Partners</div>
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
          <div className="bid-name">Harborstone Strategic</div>
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
    <div className="pv-card pv-card--mock-live">
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

// ─── Shared app shell for the 4 advantage mockups ───────────────────────────
function AppShell({ nav, title, sub, children, living = true }: {
  nav: 0 | 1 | 2;
  title: string;
  sub: React.ReactNode;
  children: React.ReactNode;
  living?: boolean;
}) {
  const icons = [
    <svg key="a" width="15" height="15" viewBox="0 0 15 15" fill="none"><rect x="1" y="1" width="5.5" height="5.5" rx="1" fill="currentColor"/><rect x="8.5" y="1" width="5.5" height="5.5" rx="1" fill="currentColor"/><rect x="1" y="8.5" width="5.5" height="5.5" rx="1" fill="currentColor"/><rect x="8.5" y="8.5" width="5.5" height="5.5" rx="1" fill="currentColor"/></svg>,
    <svg key="b" width="15" height="15" viewBox="0 0 15 15" fill="none"><path d="M1 11L4.5 7l3 2.5L11 5l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    <svg key="c" width="15" height="15" viewBox="0 0 15 15" fill="none"><rect x="1" y="8" width="3" height="6" rx="0.6" fill="currentColor"/><rect x="6" y="5" width="3" height="9" rx="0.6" fill="currentColor"/><rect x="11" y="2" width="3" height="12" rx="0.6" fill="currentColor"/></svg>,
  ];
  return (
    <div className={living ? "app-shell app-shell--living" : "app-shell"}>
      <div className="app-shell-nav">
        {icons.map((icon, i) => (
          <div key={i} className={`app-shell-icon${i === nav ? " app-shell-icon-on" : ""}`}>{icon}</div>
        ))}
      </div>
      <div className="app-shell-main">
        <div className="app-shell-hd">
          <div className="app-shell-title">{title}</div>
          <div className="app-shell-sub">{sub}</div>
        </div>
        <div className="app-shell-body">{children}</div>
      </div>
    </div>
  );
}

export function AIValuationMockup() {
  const bars = [38, 52, 68, 82, 100, 88, 94, 78, 64, 50, 42];
  return (
    <div className="adv-onboard-frame">
    <AppShell nav={0} title="AI valuation & matching" sub="Fair value from comps, ranked buyer intros.">
      <div className="asm-panel">
        <div className="asm-panel-label">Indicative fair value</div>
        <div className="asm-range">$2.4M &ndash; $2.7M</div>
        <div className="asm-conf">Confidence band from <strong>dozens</strong> of comps</div>
        <div className="asm-bars">
          {bars.map((h, i) => (
            <div key={i} className={`asm-bar${i >= 4 && i <= 6 ? " asm-bar-hi" : ""}`} style={{ height: `${h}%` }} />
          ))}
        </div>
        <div className="asm-pctile">75th percentile on price</div>
      </div>
      <div className="asm-matches-label">Top matches</div>
      {[
        { score: 97, name: "Institutional LP Pool", tag: "Strategic" },
        { score: 91, name: "Secondary desk · Tier‑1", tag: "Price" },
      ].map((m) => (
        <div key={m.score} className="asm-match-row">
          <span className="asm-score">{m.score}</span>
          <div className="asm-match-info">
            <div className="asm-match-name">{m.name}</div>
            <div className="asm-match-tag">{m.tag}</div>
          </div>
          <span className="asm-intro">Intro</span>
        </div>
      ))}
    </AppShell>
    </div>
  );
}

export function OnboardMockup() {
  return (
    <div className="adv-onboard-frame">
      <AppShell nav={0} title="Onboard in minutes" sub={<>Most users finish in under <strong>15 min</strong>.</>}>
        <div className="asm-steps">
          {[
            { label: "Account & entity", done: true },
            { label: "Verify identity", done: true },
            { label: "Connect custody", done: false, num: 3 },
          ].map((s, i) => (
            <div key={i} className="asm-step-col">
              <div className={`asm-step-dot${s.done ? " asm-step-dot-done" : " asm-step-dot-pend"}`}>
                {s.done ? "✓" : s.num}
              </div>
              <div className="asm-step-lbl">{s.label}</div>
            </div>
          ))}
        </div>
        <div className="asm-panel">
          <div className="asm-form-hd">
            <span className="asm-form-title">Profile</span>
            <span className="asm-in-progress">In progress</span>
          </div>
          <div className="asm-field">
            <div className="asm-field-label">Legal entity</div>
            <div className="asm-field-val">Evergreen Family Office LLC</div>
          </div>
          <div className="asm-field">
            <div className="asm-field-label">Accredited investor</div>
            <div className="asm-field-val asm-field-val-row">Verified <span className="asm-check">✓</span></div>
          </div>
          <div className="asm-field asm-field-last">
            <div className="asm-field-label">Custodian <span style={{ fontWeight: 400, color: "var(--muted)" }}>(optional)</span></div>
            <div className="asm-field-placeholder">Link account...</div>
          </div>
        </div>
      </AppShell>
    </div>
  );
}

/** Onboarding + pipeline in one shell (Our Advantage combined tab). */
export function OnboardTrackMockup() {
  const stages = ["Listed", "IOIs", "Close"];
  return (
    <div className="adv-onboard-frame">
      <AppShell
        nav={1}
        title="Onboard & track"
        sub={<>One seamless flow from upload to wire.</>}
      >
        <div className="asm-steps asm-steps--compact">
          {[
            { label: "Entity", done: true },
            { label: "Verify", done: true },
            { label: "Custody", done: false, num: 3 },
          ].map((s, i) => (
            <div key={i} className="asm-step-col">
              <div className={`asm-step-dot${s.done ? " asm-step-dot-done" : " asm-step-dot-pend"}`}>
                {s.done ? "✓" : s.num}
              </div>
              <div className="asm-step-lbl">{s.label}</div>
            </div>
          ))}
        </div>
        <div className="asm-panel asm-panel--tight">
          <div className="asm-deal-hd">
            <span className="asm-deal-name">LP stake &middot; Buyout IV</span>
            <span className="asm-deal-ago">Live</span>
          </div>
          <div className="asm-timeline asm-timeline--compact">
            {stages.map((s, i) => (
              <div key={i} className={`asm-tl-col${i < 1 ? " done" : ""}`}>
                <div className={`asm-tl-dot${i < 1 ? " done" : i === 1 ? " active" : " pend"}`}>
                  {i < 1 ? "✓" : i === 1 ? "" : "3"}
                </div>
                <div className="asm-tl-label">{s}</div>
                {i < stages.length - 1 && <div className={`asm-tl-line${i < 1 ? " done" : ""}`} />}
              </div>
            ))}
          </div>
        </div>
        <div className="asm-table asm-track-table asm-track-table--compact">
          <div className="asm-table-hd">
            <span>Milestone</span><span>Owner</span><span>Status</span>
          </div>
          {[
            { m: "Data room", o: "You", s: "Done", done: true },
            { m: "SPA draft", o: "Legal", s: "In review", done: false },
          ].map((r, i) => (
            <div key={i} className="asm-table-row">
              <span>{r.m}</span>
              <span>{r.o}</span>
              <span className={r.done ? "asm-status-done" : "asm-status-pend"}>{r.s}</span>
            </div>
          ))}
        </div>
      </AppShell>
    </div>
  );
}

export function AutoBuyerMatchingMockup() {
  return (
    <div className="adv-onboard-frame">
    <AppShell
      nav={0}
      title="Auto Buyer Matching"
      sub={<>AI-ranked against our full buyer universe.</>}
    >
      <div className="asm-panel asm-panel--tight">
        <div className="asm-form-hd">
          <span className="asm-form-title">Match engine</span>
          <span className="asm-in-progress">14 in range</span>
        </div>
        <div className="asm-auto-rules">
          Rules: vintage &plusmn;2y &middot; ticket $1&ndash;$5M &middot; buyout sleeve
        </div>
      </div>
      <div className="asm-matches-label">Auto-ranked</div>
      {[
        { fit: 97, name: "Endowment LP desk", tag: "Strategic" },
        { fit: 91, name: "Secondary fund IV", tag: "Price" },
        { fit: 88, name: "Family office pool", tag: "Size" },
      ].map((m) => (
        <div key={m.name} className="asm-match-row asm-match-row--auto">
          <span className="asm-score asm-score--fit">{m.fit}</span>
          <div className="asm-match-info">
            <div className="asm-match-name">{m.name}</div>
            <div className="asm-match-tag">{m.tag}</div>
          </div>
          <span className="asm-auto-pill">Auto</span>
        </div>
      ))}
    </AppShell>
    </div>
  );
}

export function TrackProgressMockup() {
  const stages = ["Listed", "IOIs", "Diligence", "Close"];
  return (
    <AppShell nav={1} title="Track deal progress" sub="Pipeline, docs & settlement in one place.">
      <div className="asm-panel">
        <div className="asm-deal-hd">
          <span className="asm-deal-name">LP stake &middot; Buyout IV</span>
          <span className="asm-deal-ago">2h ago</span>
        </div>
        <div className="asm-timeline">
          {stages.map((s, i) => (
            <div key={i} className="asm-tl-col">
              <div className={`asm-tl-dot${i < 2 ? " done" : i === 2 ? " active" : " pend"}`}>
                {i < 2 ? "✓" : i === 2 ? "" : "4"}
              </div>
              <div className="asm-tl-label">{s}</div>
              {i < stages.length - 1 && <div className={`asm-tl-line${i < 2 ? " done" : ""}`} />}
            </div>
          ))}
        </div>
        <div className="asm-stage-note">Stage 3 of 4 &middot; diligence in progress</div>
      </div>
      <div className="asm-table asm-track-table">
        <div className="asm-table-hd">
          <span>Milestone</span><span>Owner</span><span>Status</span>
        </div>
        {[
          { m: "Data room shared", o: "You", s: "Done", done: true },
          { m: "Buyer Q&A", o: "Banker", s: "Done", done: true },
          { m: "SPA draft", o: "Legal", s: "In review", done: false },
          { m: "Settlement", o: "Ops", s: "Scheduled", done: false },
        ].map((r, i) => (
          <div key={i} className="asm-table-row">
            <span>{r.m}</span><span>{r.o}</span>
            <span className={r.done ? "asm-status-done" : "asm-status-pend"}>{r.s}</span>
          </div>
        ))}
      </div>
    </AppShell>
  );
}

export function MarketReportMockup() {
  const rows = [
    { y: 2024, f: "Buyout Fund IV", p: "$2.7M" },
    { y: 2024, f: "Growth equity II", p: "$1.95M" },
    { y: 2023, f: "Real assets sleeve", p: "$1.1M" },
    { y: 2023, f: "Growth equity", p: "$1.9M" },
    { y: 2022, f: "VC secondary", p: "$750k" },
    { y: 2022, f: "LP stake", p: "$620k" },
  ];
  return (
    <div className="adv-onboard-frame">
    <AppShell nav={2} title="Market Report" sub="50 recent comparable transactions evaluated.">
      <div className="asm-table">
        <div className="asm-table-title-row">
          <span className="asm-table-section-title">Similar Transactions</span>
          <span className="asm-count-badge">50</span>
        </div>
        <div className="asm-table-hd">
          <span>Year</span><span style={{ flex: 2 }}>Fund / strategy</span><span style={{ textAlign: "right" }}>Price</span>
        </div>
        {rows.map((r, i) => (
          <div key={i} className="asm-table-row">
            <span style={{ color: "var(--muted)" }}>{r.y}</span>
            <span style={{ flex: 2 }}>{r.f}</span>
            <span style={{ textAlign: "right" }}>{r.p}</span>
          </div>
        ))}
      </div>
    </AppShell>
    </div>
  );
}

export function PlatformMockup() {
  return (
    <div className="platform-mock">
      <div className="pm-sidebar">
        <div className="pm-icon pm-icon-active">
          <svg width="15" height="15" viewBox="0 0 16 16" fill="none"><rect x="2" y="2" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.3"/><rect x="9" y="2" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.3"/><rect x="2" y="9" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.3"/><rect x="9" y="9" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.3"/></svg>
        </div>
        <div className="pm-icon">
          <svg width="15" height="15" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.3"/><path d="M3 14c0-2.761 2.239-4.5 5-4.5s5 1.739 5 4.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>
        </div>
        <div className="pm-icon">
          <svg width="15" height="15" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="5.5" stroke="currentColor" strokeWidth="1.3"/><path d="M8 5v3.5l2 1.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>
        </div>
      </div>
      <div className="pm-main">
        <div className="pm-topbar">
          <div>
            <div className="pm-heading">Active Transaction</div>
            <div className="pm-subhead">Summit Ridge Growth Fund III &middot; LP Secondary</div>
          </div>
          <span className="pm-live-badge"><span className="pm-live-dot" />Live</span>
        </div>

        <div className="pm-stages">
          <div className="pm-stage pm-stage-done">
            <div className="pm-stage-dot pm-stage-dot-done">&#10003;</div>
            <div className="pm-stage-label">Package</div>
          </div>
          <div className="pm-stage-line pm-stage-line-done" />
          <div className="pm-stage pm-stage-active">
            <div className="pm-stage-dot pm-stage-dot-active">2</div>
            <div className="pm-stage-label">Bidding</div>
          </div>
          <div className="pm-stage-line" />
          <div className="pm-stage">
            <div className="pm-stage-dot">3</div>
            <div className="pm-stage-label">Close</div>
          </div>
        </div>

        <div className="pm-rows">
          <div className="pm-row">
            <span className="pm-row-k">Best Offer</span>
            <span className="pm-row-v pm-row-v-hi">$2.84M &middot; 94% NAV</span>
          </div>
          <div className="pm-row">
            <span className="pm-row-k">Active Bids</span>
            <span className="pm-row-v">6 received</span>
          </div>
          <div className="pm-row">
            <span className="pm-row-k">NDA&rsquo;d Buyers</span>
            <span className="pm-row-v">14</span>
          </div>
          <div className="pm-row">
            <span className="pm-row-k">Bid Deadline</span>
            <span className="pm-row-v">48 hours</span>
          </div>
        </div>
      </div>
    </div>
  );
}

type ValuationCardProps = { matchBidFootprint?: boolean; variant?: "buyer" | "seller" };

export function ValuationCard({ matchBidFootprint = false, variant = "buyer" }: ValuationCardProps) {
  const seller = variant === "seller";
  const fundLabel = seller
    ? "Co\u2011invest sleeve · Industrial Growth II"
    : "LP stake · Buyout Fund IV";
  const rangeHeadline = seller ? "$3.1M to $3.6M" : "$2.4M to $2.7M";
  const bandLabel = seller ? "62ND PCTL" : "75TH PCTL";
  const compsLabel = "Dozens of comps";

  const buyerMatchesCompact = [
    { score: 97, label: "Institutional LP Pool", tag: "Strategic" },
    { score: 91, label: "Secondary Desk · Tier\u20111", tag: "Price" },
  ];
  const sellerMatchesCompact = [
    { score: 94, label: "Public pension sleeve", tag: "Mandate fit" },
    { score: 88, label: "Secondaries Fund XII", tag: "Vintage" },
  ];
  const buyerMatchesFull = [
    ...buyerMatchesCompact,
    { score: 86, label: "Family Office Network", tag: "Fit" },
  ];
  const sellerMatchesFull = [
    ...sellerMatchesCompact,
    { score: 82, label: "Regional endowment", tag: "Ticket" },
  ];
  const matchRowsCompact = seller ? sellerMatchesCompact : buyerMatchesCompact;
  const matchRowsFull = seller ? sellerMatchesFull : buyerMatchesFull;

  if (matchBidFootprint) {
    return (
      <div className={`pv-card valuation-card--compact valuation-card--match-bids valuation-card--motion${seller ? " valuation-card--seller-variant" : ""}`}>
        <div className="pv-head">
          <div className="pv-title">Indicative Fair Value</div>
          <span className="pv-badge">Live</span>
        </div>
        <div className="range-display">
          <div className="pv-label valuation-card-fund-label">{fundLabel}</div>
          <div className="valuation-range-headline">{rangeHeadline}</div>
          <div className="range-band" />
          <div className="range-labels">
            <span>LOW</span>
            <span>{bandLabel}</span>
            <span>HIGH</span>
          </div>
        </div>
        <div className={`valuation-matches-block${seller ? " valuation-matches-block--for-sellers" : ""}`}>
          <div className="valuation-matches-kicker">Top Matches</div>
          {matchRowsCompact.map((m) => (
            <div key={m.label} className="match-row">
              <span className="match-score">{m.score}</span>
              <div>
                <div className="match-label">{m.label}</div>
                <div className="match-tag">{m.tag}</div>
              </div>
              <span className="match-action">Intro</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={`pv-card valuation-card--compact pv-card--split-height-match valuation-card--motion${seller ? " valuation-card--seller-variant" : ""}`}>
      <div className="pv-head">
        <div className="pv-title">Indicative Fair Value</div>
        <span className="pv-badge">Live</span>
      </div>
      <div className="pv-card-grow">
        <div className="range-display">
          <div className="pv-label valuation-card-fund-label">{fundLabel}</div>
          <div className="valuation-range-headline">{rangeHeadline}</div>
          <div className="range-band" />
          <div className="range-labels">
            <span>LOW</span>
            <span>{bandLabel}</span>
            <span>HIGH</span>
          </div>
        </div>
        <div className="pv-field">
          <span className="pv-label">Confidence band</span>
          <span className="pv-value">{compsLabel}</span>
        </div>
        <div className="valuation-matches-block">
          <div className="valuation-matches-kicker">Top Matches</div>
          {matchRowsFull.map((m) => (
            <div key={m.label} className="match-row">
              <span className="match-score">{m.score}</span>
              <div>
                <div className="match-label">{m.label}</div>
                <div className="match-tag">{m.tag}</div>
              </div>
              <span className="match-action">Intro</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   Buyer-facing advantage mockups for /for-buyers "What You Get".
   All four use AppShell + adv-onboard-frame so sizing matches the
   homepage. living={false} disables internal row animations.
   ═══════════════════════════════════════════════════════════════════ */

export function BuyerMandateInboxMockup() {
  return (
    <div className="adv-onboard-frame">
      <AppShell
        nav={0}
        title="Mandate inbox"
        sub={<>Ranked deal flow matched to <strong>your strategy</strong>.</>}
        living={false}
      >
        <div className="asm-panel asm-panel--tight">
          <div className="asm-form-hd">
            <span className="asm-form-title">Your mandate</span>
            <span className="asm-in-progress">Active</span>
          </div>
          <div className="asm-auto-rules">
            NA Buyout &middot; 2016&ndash;2020 &middot; $5&ndash;50M ticket
          </div>
        </div>
        <div className="asm-matches-label">Matched this week</div>
        {[
          { fit: 97, name: "Growth Equity · 2019", tag: "$14M · New" },
          { fit: 91, name: "Buyout · 2017", tag: "$42M · Open" },
          { fit: 84, name: "Venture · 2021", tag: "$6M · Open" },
        ].map((m) => (
          <div key={m.name} className="asm-match-row asm-match-row--auto">
            <span className="asm-score asm-score--fit">{m.fit}</span>
            <div className="asm-match-info">
              <div className="asm-match-name">{m.name}</div>
              <div className="asm-match-tag">{m.tag}</div>
            </div>
            <span className="asm-auto-pill">Fit</span>
          </div>
        ))}
      </AppShell>
    </div>
  );
}

export function BuyerICPackageMockup() {
  return (
    <div className="adv-onboard-frame">
      <AppShell
        nav={0}
        title="IC-ready package"
        sub={<>NAV, legal, pricing, comps in <strong>one package</strong>.</>}
        living={false}
      >
        <div className="asm-steps">
          {[
            { label: "NAV rebuilt", done: true },
            { label: "Legal flags", done: true },
            { label: "Pricing range", done: true },
          ].map((s, i) => (
            <div key={i} className="asm-step-col">
              <div className="asm-step-dot asm-step-dot-done">✓</div>
              <div className="asm-step-lbl">{s.label}</div>
            </div>
          ))}
        </div>
        <div className="asm-panel">
          <div className="asm-form-hd">
            <span className="asm-form-title">Harbor PE VIII &middot; LP stake</span>
            <span className="asm-in-progress">4 of 4 ready</span>
          </div>
          <div className="asm-field">
            <div className="asm-field-label">Indicative price</div>
            <div className="asm-field-val">74.5 &ndash; 78.2% NAV</div>
          </div>
          <div className="asm-field">
            <div className="asm-field-label">Legal review</div>
            <div className="asm-field-val asm-field-val-row">
              Cleared <span className="asm-check">✓</span>
            </div>
          </div>
          <div className="asm-field asm-field-last">
            <div className="asm-field-label">Comps used</div>
            <div className="asm-field-val">32 comparable trades</div>
          </div>
        </div>
      </AppShell>
    </div>
  );
}

export function BuyerBlindProfileMockup() {
  return (
    <div className="adv-onboard-frame">
      <AppShell
        nav={0}
        title="Blind profile"
        sub={<>Name revealed <strong>after you opt in</strong>.</>}
        living={false}
      >
        <div className="asm-panel asm-panel--tight">
          <div className="asm-form-hd">
            <span className="asm-form-title">Opportunity #B2706</span>
            <span className="asm-in-progress">Blind</span>
          </div>
          <div className="asm-field">
            <div className="asm-field-label">Fund name</div>
            <div
              className="asm-field-val"
              style={{ letterSpacing: "0.32em", color: "rgba(30,42,34,0.42)" }}
            >
              ████████
            </div>
          </div>
          <div className="asm-field">
            <div className="asm-field-label">Strategy</div>
            <div className="asm-field-val">NA Buyout &middot; 2018 vintage</div>
          </div>
          <div className="asm-field asm-field-last">
            <div className="asm-field-label">Indicative range</div>
            <div className="asm-field-val">76 &ndash; 82% NAV</div>
          </div>
        </div>
        <div className="asm-match-row asm-match-row--auto">
          <span className="asm-score">IOI</span>
          <div className="asm-match-info">
            <div className="asm-match-name">Request identity disclosure</div>
            <div className="asm-match-tag">On your timeline</div>
          </div>
          <span className="asm-intro">Opt in</span>
        </div>
      </AppShell>
    </div>
  );
}

export function BuyerWorkspaceMockup() {
  const stages = ["IOI", "Diligence", "Close"];
  return (
    <div className="adv-onboard-frame">
      <AppShell
        nav={1}
        title="Live workspace"
        sub={<>Status, docs, and milestones <strong>in one track</strong>.</>}
        living={false}
      >
        <div className="asm-panel asm-panel--tight">
          <div className="asm-deal-hd">
            <span className="asm-deal-name">Harbor PE VIII &middot; LP stake</span>
            <span className="asm-deal-ago">Live</span>
          </div>
          <div className="asm-timeline asm-timeline--compact">
            {stages.map((s, i) => (
              <div key={i} className={`asm-tl-col${i < 1 ? " done" : ""}`}>
                <div
                  className={`asm-tl-dot${
                    i < 1 ? " done" : i === 1 ? " active" : " pend"
                  }`}
                >
                  {i < 1 ? "✓" : i === 1 ? "" : "3"}
                </div>
                <div className="asm-tl-label">{s}</div>
                {i < stages.length - 1 && (
                  <div className={`asm-tl-line${i < 1 ? " done" : ""}`} />
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="asm-table asm-track-table asm-track-table--compact">
          <div className="asm-table-hd">
            <span>Milestone</span>
            <span>Owner</span>
            <span>Status</span>
          </div>
          {[
            { m: "Data room", o: "Banker", s: "Shared", done: true },
            { m: "Q&A log", o: "You", s: "Open", done: false },
            { m: "SPA review", o: "Legal", s: "Pending", done: false },
          ].map((r, i) => (
            <div key={i} className="asm-table-row">
              <span>{r.m}</span>
              <span>{r.o}</span>
              <span
                className={r.done ? "asm-status-done" : "asm-status-pend"}
              >
                {r.s}
              </span>
            </div>
          ))}
        </div>
      </AppShell>
    </div>
  );
}

export { SellFlowMockup } from "./SellFlowMockup";
export { BuyerFlowMockup } from "./BuyerFlowMockup";
export { JourneyFlow } from "./JourneyFlow";
