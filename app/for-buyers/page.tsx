import CtaBand from "@/components/CtaBand";
import { PackagePreviewCard, ValuationCard, DealFlowCard } from "@/components/ProductVisuals";

export const metadata = {
  title: "For Buyers. The Boring Bank.",
  description: "Pre-diligenced LP interests, ready for IC.",
};

export default function ForBuyersPage() {
  return (
    <>
      <header className="page-intro">
        <div className="container inner">
          <div className="eyebrow reveal">For Buyers</div>
          <h1 className="reveal reveal-1">Pre&#8209;diligenced deal flow, ready for IC.</h1>
        </div>
      </header>

      <section>
        <div className="container">
          <div className="split-stack">
            <div className="split">
              <div className="split-copy">
                <div className="section-label">The Package</div>
                <h3>Everything your IC asks for, stamped.</h3>
                <p>Each opportunity arrives as a uniform, rebuilt package. NAV, legal flags, pricing range, and benchmarks are prepared before the blind profile goes out.</p>
                <ul className="feature-list">
                  <li><span>Holding&#8209;by&#8209;holding NAV with confidence interval</span></li>
                  <li><span>LPA and side&#8209;letter register with ROFRs flagged</span></li>
                  <li><span>Pricing memo with comps and downside scenarios</span></li>
                </ul>
              </div>
              <div className="split-visual"><PackagePreviewCard /></div>
            </div>

            <div className="split flip">
              <div className="split-copy">
                <div className="section-label">Indicative Pricing</div>
                <h3>Know the range before you commit an analyst.</h3>
                <p>Every package ships with an indicative fair value range and the comps behind it. You decide if it is worth running through your own model.</p>
                <ul className="feature-list">
                  <li><span>Fair&#8209;value range with confidence band</span></li>
                  <li><span>Comparable transactions and vintage benchmarks</span></li>
                  <li><span>Match score based on your stated mandate</span></li>
                </ul>
              </div>
              <div className="split-visual"><ValuationCard /></div>
            </div>

            <div className="split">
              <div className="split-copy">
                <div className="section-label">Your Seat</div>
                <h3>Sized, vintage&#8209;fit, and mandate&#8209;matched.</h3>
                <p>We do not cold&#8209;blast. You are shown inside an active cohort of buyers whose ticket size and appetite align with the deal. Fewer emails, higher conviction.</p>
                <ul className="feature-list">
                  <li><span>Blind profile first, disclosure on your approval</span></li>
                  <li><span>Curated weekly deal flow, no inbox spam</span></li>
                  <li><span>Transparent ranking by price, structure, speed</span></li>
                </ul>
              </div>
              <div className="split-visual"><DealFlowCard /></div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--stone)", borderTop: "1px solid var(--line-soft)", borderBottom: "1px solid var(--line-soft)" }}>
        <div className="container">
          <div className="section-label">The Offer</div>
          <h2 className="with-accent">Tighter bids. Cleaner process.</h2>
          <div className="pillars" style={{ marginTop: 56 }}>
            <div className="pillar">
              <div className="pillar-kicker">01</div>
              <h4>Stamped packages.</h4>
            </div>
            <div className="pillar">
              <div className="pillar-kicker">02</div>
              <h4>Curated match.</h4>
            </div>
            <div className="pillar">
              <div className="pillar-kicker">03</div>
              <h4>Weekly deal flow.</h4>
            </div>
            <div className="pillar">
              <div className="pillar-kicker">04</div>
              <h4>Tight close.</h4>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Join the Network"
        title="Request access to deal flow."
        lede="Tell us your mandate."
        primaryLabel="Request Buyer Access"
        ghostLabel="Speak with a Banker"
      />
    </>
  );
}
