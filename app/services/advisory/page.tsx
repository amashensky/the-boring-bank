import CtaBand from "@/components/CtaBand";

export const metadata = {
  title: "Advisory. The Boring Bank.",
  description: "Portfolio, GP, valuation, and transaction advisory for the secondary market.",
};

export default function AdvisoryPage() {
  return (
    <>
      <header className="page-intro">
        <div className="container inner">
          <div className="eyebrow reveal">Services</div>
          <h1 className="reveal reveal-1">Advisory.</h1>
        </div>
      </header>

      <section>
        <div className="container">
          <h2 className="with-accent">Bespoke counsel. No retainers.</h2>

          <div className="adv-stack" style={{ marginTop: 64 }}>

            <div className="adv-row">
              <div className="adv-num">01</div>
              <div className="adv-content">
                <h3>Portfolio Advisory</h3>
                <p>Screen your full LP book. Identify the best exits. Sequence dispositions for maximum proceeds.</p>
              </div>
            </div>

            <div className="adv-row">
              <div className="adv-num">02</div>
              <div className="adv-content">
                <h3>GP Advisory</h3>
                <p>Structure continuation vehicles and tender offers. Pricing, investor comms, and process design.</p>
              </div>
            </div>

            <div className="adv-row">
              <div className="adv-num">03</div>
              <div className="adv-content">
                <h3>Valuation Advisory</h3>
                <p>Independent NAV analysis and pricing opinions. Built from comps, not models. IC and board ready.</p>
              </div>
            </div>

            <div className="adv-row">
              <div className="adv-num">04</div>
              <div className="adv-content">
                <h3>Transaction Advisory</h3>
                <p>Complex secondaries that fall outside a standard sale. Strip transactions, syndicated buyers, bespoke structures.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section style={{ background: "var(--stone)", borderTop: "1px solid var(--line-soft)", borderBottom: "1px solid var(--line-soft)" }}>
        <div className="container">
          <h2 className="with-accent">Scoped. Priced. Delivered.</h2>
          <div className="pillars" style={{ marginTop: 56 }}>
            <div className="pillar">
              <div className="pillar-kicker">Scope</div>
              <h4>Define the question and deliverable.</h4>
            </div>
            <div className="pillar">
              <div className="pillar-kicker">Analyze</div>
              <h4>Market data, comps, and structuring.</h4>
            </div>
            <div className="pillar">
              <div className="pillar-kicker">Deliver</div>
              <h4>Memo, model, or recommendation.</h4>
            </div>
            <div className="pillar">
              <div className="pillar-kicker">Execute</div>
              <h4>Support through close if needed.</h4>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Talk to a Banker"
        title="Have a question about your portfolio?"
        lede="We scope advisory engagements in 24 hours."
        primaryLabel="Start a Conversation"
        primaryHref="/contact"
        ghostLabel="See Full Process"
        ghostHref="/how-it-works"
      />
    </>
  );
}
