import CtaBand from "@/components/CtaBand";

export const metadata = {
  title: "Advisory. The Boring Bank.",
  description: "Portfolio, GP, valuation, and transaction advisory for the secondary market.",
};

export default function AdvisoryPage() {
  const services = [
    {
      kicker: "01",
      title: "Portfolio Advisory",
      description: "Evaluate your full LP book for potential exits. We identify which positions have the best secondary market dynamics and help you sequence dispositions to maximize total proceeds.",
      details: [
        "Full portfolio screening by strategy, vintage, and liquidity profile",
        "Exit sequencing to optimize timing and pricing",
        "Market color on current bid levels by fund type",
      ],
    },
    {
      kicker: "02",
      title: "GP Advisory",
      description: "Structure continuation vehicles, tender offers, and LP liquidity solutions. We advise GPs on pricing, investor communications, and process design.",
      details: [
        "Continuation vehicle structuring and pricing",
        "Tender offer design and investor communication",
        "LP consent and regulatory navigation",
      ],
    },
    {
      kicker: "03",
      title: "Valuation Advisory",
      description: "Independent NAV analysis and pricing opinions for internal committees, auditors, or transaction counterparties. Built from comps, not models.",
      details: [
        "Holding&#8209;level NAV reconstruction with confidence bands",
        "Comparable transaction analysis across 38+ data points",
        "Defensible pricing memos for IC or board review",
      ],
    },
    {
      kicker: "04",
      title: "Transaction Advisory",
      description: "End&#8209;to&#8209;end deal execution for complex or bespoke secondary transactions that fall outside a standard LP sale or GP&#8209;led process.",
      details: [
        "Cross&#8209;fund portfolio sales and strip transactions",
        "Stapled secondary and co&#8209;investment structures",
        "Multi&#8209;party negotiations and syndicated buyer groups",
      ],
    },
  ];

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
          <div className="section-label">What We Cover</div>
          <h2 className="with-accent">Four practices. One focus.</h2>
          <p className="section-lede" style={{ marginTop: 18 }}>
            Every engagement is scoped to your situation. No retainers. No templated decks. Bespoke advice backed by live market data.
          </p>

          <div className="advisory-grid" style={{ marginTop: 64 }}>
            {services.map((s, i) => (
              <div key={i} className="advisory-card">
                <div className="advisory-kicker">{s.kicker}</div>
                <h3 className="advisory-title">{s.title}</h3>
                <p className="advisory-desc">{s.description}</p>
                <ul className="advisory-list">
                  {s.details.map((d, j) => (
                    <li key={j} dangerouslySetInnerHTML={{ __html: d }} />
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "var(--stone)", borderTop: "1px solid var(--line-soft)", borderBottom: "1px solid var(--line-soft)" }}>
        <div className="container">
          <div className="section-label">How It Works</div>
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
