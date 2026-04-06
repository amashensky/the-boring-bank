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
                <h3>A single track from intake to wire.</h3>
                <p>Every transaction is bespoke. Our process runs intake, diligence package, competitive bidding, and close on one parallel track so each phase feeds directly into the next without idle time.</p>
                <p style={{ marginTop: 14 }}>You upload what you have. We rebuild NAV holding by holding, flag every transfer restriction in the LPA, and produce a pricing memo with comps. From there, a blind profile goes to matched buyers and bids come in on a live leaderboard.</p>
                <ul className="feature-list">
                  <li><span>Prepare: K&#8209;1s and LPA ingested, NAV reconstructed, pricing memo with confidence band</span></li>
                  <li><span>Match: blind profile to scored buyers, live bid leaderboard ranked by price and structure</span></li>
                  <li><span>Close: SPA drafted, GP consent coordinated, transfer mechanics handled, success fee on wire</span></li>
                </ul>
              </div>
              <div className="split-visual"><TimelineCard /></div>
            </div>

            <div className="split flip">
              <div className="split-copy">
                <div className="section-label">Buyer Coverage</div>
                <h3>Hundreds of live mandates across five buyer classes.</h3>
                <p>We maintain active relationships with secondary funds, family offices, endowments, pensions, and sovereign wealth funds. Each buyer on our network has a stated mandate with defined parameters: strategy, vintage, geography, ticket size, and structure preference.</p>
                <p style={{ marginTop: 14 }}>When your listing goes live, we do not mass&#8209;blast. We score every active mandate against your position and surface the deal only to the buyers with genuine fit. That means fewer, higher&#8209;conviction bids and a faster path to a competitive clear price.</p>
                <ul className="feature-list">
                  <li><span>Five buyer classes: secondary funds, family offices, endowments, pensions, sovereign wealth funds</span></li>
                  <li><span>Mandate&#8209;level scoring on strategy, vintage, geography, and ticket size</span></li>
                  <li><span>Blind profile until you explicitly authorize full disclosure to a specific buyer</span></li>
                  <li><span>Live bid leaderboard ranked by price, structure, and expected time to close</span></li>
                  <li><span>No cold outreach, no broad distribution, no information leakage</span></li>
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
