/** UI mockups for /services/nav-lending */

export function NavLendingFacilityCard() {
  return (
    <div className="pv-card pv-card--mock-live pv-card--nav-lend-mock">
      <div className="pv-head">
        <div className="pv-title">Customized financing</div>
        <span className="pv-badge">Tailored</span>
      </div>
      <div className="pv-field pv-field--with-meter">
        <div className="pv-field-row">
          <span className="pv-label">Indicative facility</span>
          <span className="pv-value big">$10.5M</span>
        </div>
        <div className="progress-bar" aria-hidden>
          <div className="progress-fill" style={{ width: "52%" }} />
        </div>
      </div>
      <div className="pv-field">
        <span className="pv-label">Use case</span>
        <span className="pv-value">Liquidity + opportunistic allocations</span>
      </div>
      <div className="pv-field">
        <span className="pv-label">Pricing structure</span>
        <span className="pv-value">Custom margin by portfolio profile</span>
      </div>
      <div className="pv-field">
        <span className="pv-label">Term</span>
        <span className="pv-value">Designed around your timing needs</span>
      </div>
      <div className="pv-field">
        <span className="pv-label">Status</span>
        <span className="pv-value">Structure proposal ready</span>
      </div>
    </div>
  );
}

export function NavLendingCollateralCard() {
  return (
    <div className="pv-card pv-card--mock-live pv-card--nav-lend-mock">
      <div className="pv-head">
        <div className="pv-title">Transparent monitoring</div>
        <span className="pv-badge">Live view</span>
      </div>
      <div className="pv-field">
        <span className="pv-label">Outstanding balance</span>
        <span className="pv-value">$5.9M</span>
      </div>
      <div className="pv-field">
        <span className="pv-label">Available capacity</span>
        <span className="pv-value">$4.6M</span>
      </div>
      <div className="pv-field">
        <span className="pv-label">Last report delivered</span>
        <span className="pv-value">Mar 31, 2026</span>
      </div>
      <div className="pv-field">
        <span className="pv-label">Next reporting date</span>
        <span className="pv-value">Apr 30, 2026</span>
      </div>
      <div className="pv-field">
        <span className="pv-label">Covenant snapshot</span>
        <span className="pv-value">In compliance</span>
      </div>
    </div>
  );
}

export function NavLendingServicingCard() {
  return (
    <div className="pv-card pv-card--mock-live pv-card--nav-lend-mock">
      <div className="pv-head">
        <div className="pv-title">Experienced advisory team</div>
        <span className="pv-badge live">
          <span className="live-dot" /> Available
        </span>
      </div>
      <div className="pv-field pv-field--with-meter">
        <div className="pv-field-row">
          <span className="pv-label">Coverage</span>
          <span className="pv-value big">Full lifecycle</span>
        </div>
        <div className="progress-bar" aria-hidden>
          <div className="progress-fill" style={{ width: "100%" }} />
        </div>
      </div>
      <div className="pv-field">
        <span className="pv-label">Primary contact</span>
        <span className="pv-value">Senior advisory lead</span>
      </div>
      <div className="pv-field">
        <span className="pv-label">Execution support</span>
        <span className="pv-value">Structuring to close</span>
      </div>
      <div className="pv-field">
        <span className="pv-label">Post-close support</span>
        <span className="pv-value">Monitoring and ongoing guidance</span>
      </div>
      <div className="pv-field">
        <span className="pv-label">Response time</span>
        <span className="pv-value">Direct team access</span>
      </div>
    </div>
  );
}
