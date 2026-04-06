import CtaBand from "@/components/CtaBand";
import { CapitalStackCard } from "@/components/ServiceVisuals";
import { ValuationCard } from "@/components/ProductVisuals";

export const metadata = {
  title: "Structured Solutions. The Boring Bank.",
  description: "NAV financing, preferred equity, and bespoke capital structures.",
};

export default function StructuredPage() {
  return (
    <>
      <header className="page-intro">
        <div className="container inner">
          <div className="eyebrow reveal">Services</div>
          <h1 className="reveal reveal-1">Structured Solutions.</h1>
        </div>
      </header>

      <section>
        <div className="container">
          <div className="split-stack">
            <div className="split">
              <div className="split-copy">
                <div className="section-label">Capital Structure</div>
                <h3>When a straight sale does not fit.</h3>
                <p>We build the capital stack around the position. Senior NAV facilities, preferred equity, and common co&#8209;invest layered to hit the right cost, the right duration, and the right risk transfer.</p>
                <ul className="feature-list">
                  <li><span>Blended cost targets of 8 to 12%</span></li>
                  <li><span>3 to 7 year tenors, bullet or amortizing</span></li>
                  <li><span>Covenants aligned to the underlying portfolio</span></li>
                </ul>
              </div>
              <div className="split-visual"><CapitalStackCard /></div>
            </div>

            <div className="split flip">
              <div className="split-copy">
                <div className="section-label">Pricing Discipline</div>
                <h3>Every tranche benchmarked.</h3>
                <p>We price each layer against recent private market comps, public credit spreads, and the underlying NAV confidence band. You see the math, not just a number.</p>
                <ul className="feature-list">
                  <li><span>Holding&#8209;level NAV reconstruction with confidence interval</span></li>
                  <li><span>Spread benchmarking against 38+ comparable transactions</span></li>
                  <li><span>Sensitivity on duration, default, and early&#8209;pay scenarios</span></li>
                </ul>
              </div>
              <div className="split-visual"><ValuationCard /></div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--stone)", borderTop: "1px solid var(--line-soft)", borderBottom: "1px solid var(--line-soft)" }}>
        <div className="container">
          <div className="section-label">Instruments</div>
          <h2 className="with-accent">Capital structured to the position.</h2>
          <div className="pillars" style={{ marginTop: 56 }}>
            <div className="pillar">
              <div className="pillar-kicker">NAV Financing</div>
              <h4>Debt against the book.</h4>
            </div>
            <div className="pillar">
              <div className="pillar-kicker">Preferred Equity</div>
              <h4>Junior capital, senior economics.</h4>
            </div>
            <div className="pillar">
              <div className="pillar-kicker">Collars and Forwards</div>
              <h4>Hedge exposure, defer tax.</h4>
            </div>
            <div className="pillar">
              <div className="pillar-kicker">Bespoke Structures</div>
              <h4>Built to the transaction.</h4>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Structured Capital"
        title="Need a non&#8209;standard solution?"
        lede="Let us scope the options."
        primaryLabel="Talk to a Banker"
        primaryHref="/contact"
        ghostLabel="See Related Services"
        ghostHref="/services/lp-led"
      />
    </>
  );
}
