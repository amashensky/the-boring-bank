export default function DealCertificate() {
  return (
    <div className="cert-wrap">
      <div className="cert-caption">What you receive in 72 hours</div>
      <aside className="cert" aria-label="Deal Certificate preview">
        <div className="cert-head">
          <div>
            <div className="cert-fund">Meridian Growth Fund IV, L.P.</div>
            <div className="cert-sub">LP Interest · $4.2M Commitment</div>
          </div>
          <div className="cert-seal">VERIFIED<br />72 HR</div>
        </div>
        <div className="cert-row"><span className="k">Current NAV</span><span className="v">$3.84M</span></div>
        <div className="cert-row"><span className="k">Unfunded</span><span className="v">$0.38M</span></div>
        <div className="cert-row"><span className="k">DPI / TVPI</span><span className="v">0.42x / 1.62x</span></div>
        <div className="cert-row"><span className="k">Indicative Bid Range</span><span className="v">92–96% of NAV</span></div>
        <div className="cert-row"><span className="k">Matched Buyers</span><span className="v">11 institutional</span></div>
        <div className="cert-flags">
          <span className="flag flag-green">K-1 Reconciled</span>
          <span className="flag flag-green">Track Record Validated</span>
          <span className="flag flag-green">ODD Clean</span>
          <span className="flag flag-amber">GP Concentration Note</span>
        </div>
      </aside>
      <div className="cert-sublabel">Illustrative. Real certificates reflect your position and verified diligence outputs.</div>
    </div>
  );
}
