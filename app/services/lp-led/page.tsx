import CtaBand from "@/components/CtaBand";
import { TimelineCard, BuyerNetworkCard } from "@/components/ServiceVisuals";

export const metadata = {
  title: "LP-Led Secondary. The Boring Bank.",
  description: "Sell your LP stake to qualified institutional buyers.",
};

export default function LpLedPage() {
  return (
    <>
      <header className="page-intro">
        <div className="container inner">
          <div className="eyebrow reveal">Services</div>
          <h1 className="reveal reveal-1">LP&#8209;Led Secondary.</h1>
        </div>
      </header>

      <section>
        <div className="container">
          <div className="split-stack">
            <div className="split">
              <div className="split-copy">
                <div className="section-label">Timeline</div>
                <h3>One track. Intake to wire.</h3>
                <p>Upload your docs. We rebuild NAV, flag restrictions, and produce a pricing memo. Blind profile goes to matched buyers. Bids rank on a live leaderboard.</p>
                <ul className="feature-list">
                  <li><span>Prepare: NAV rebuilt, LPA flagged, pricing memo stamped</span></li>
                  <li><span>Match: blind profile to scored buyers, live bid ranking</span></li>
                  <li><span>Close: SPA drafted, GP consent, success fee on wire</span></li>
                </ul>
              </div>
              <div className="split-visual"><TimelineCard /></div>
            </div>

            <div className="split flip">
              <div className="split-copy">
                <div className="section-label">Buyer Coverage</div>
                <h3>Scored mandates. No mass&#8209;blast.</h3>
                <p>We match your position to buyers with genuine fit across secondary funds, family offices, endowments, pensions, and sovereign wealth. Fewer bids, higher conviction, faster close.</p>
                <ul className="feature-list">
                  <li><span>Mandate&#8209;level scoring on strategy, vintage, and ticket size</span></li>
                  <li><span>Blind profile until you authorize disclosure</span></li>
                  <li><span>No cold outreach, no information leakage</span></li>
                </ul>
              </div>
              <div className="split-visual"><BuyerNetworkCard /></div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--stone)", borderTop: "1px solid var(--line-soft)", borderBottom: "1px solid var(--line-soft)" }}>
        <div className="container">
          <div className="section-label">What You Get</div>
          <h2 className="with-accent">Institutional execution for mid&#8209;market stakes.</h2>
          <div className="pillars" style={{ marginTop: 56 }}>
            <div className="pillar">
              <div className="pillar-kicker">Pricing</div>
              <h4>Competitive bid process.</h4>
            </div>
            <div className="pillar">
              <div className="pillar-kicker">Speed</div>
              <h4>Weeks to initial offers.</h4>
            </div>
            <div className="pillar">
              <div className="pillar-kicker">Coverage</div>
              <h4>500+ verified buyers.</h4>
            </div>
            <div className="pillar">
              <div className="pillar-kicker">Economics</div>
              <h4>Success fees only.</h4>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Request a Valuation"
        title="See where your stake would clear."
        lede="Indicative range within one business day."
        primaryLabel="Request Valuation"
        primaryHref="/contact"
        ghostLabel="See Full Process"
        ghostHref="/how-it-works"
      />
    </>
  );
}
