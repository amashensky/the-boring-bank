import CtaBand from "@/components/CtaBand";
import { ValuationCard, FeeModelCard, BidsCard } from "@/components/ProductVisuals";

export const metadata = {
  title: "For Sellers. The Boring Bank.",
  description: "Institutional pricing for mid-market LP interests.",
};

export default function ForSellersPage() {
  return (
    <>
      <header className="page-intro">
        <div className="container inner">
          <div className="eyebrow reveal">For Sellers</div>
          <h1 className="reveal reveal-1">Institutional pricing for mid&#8209;market LP interests.</h1>
        </div>
      </header>

      <section>
        <div className="container">
          <div className="split-stack">
            <div className="split">
              <div className="split-copy">
                <div className="section-label">Fair Value</div>
                <h3>See where your stake should clear.</h3>
                <p>Before you list, we hand you an indicative range built from comps, vintage benchmarks, and the underlying holdings. If the number is wrong for you, nothing moves forward.</p>
                <ul className="feature-list">
                  <li><span>Reconstructed NAV, not a stale quarterly mark</span></li>
                  <li><span>Confidence band with the comps behind it</span></li>
                  <li><span>Match score against live buyer mandates</span></li>
                </ul>
              </div>
              <div className="split-visual"><ValuationCard /></div>
            </div>

            <div className="split flip">
              <div className="split-copy">
                <div className="section-label">Fee Alignment</div>
                <h3>No retainer. No work fee.</h3>
                <p>You pay a success fee when the wire clears. That is the only fee. No analyst grind billed back, no exclusivity charge, no break fee.</p>
                <ul className="feature-list">
                  <li><span>Zero upfront economics</span></li>
                  <li><span>Success fee only, paid on wire</span></li>
                  <li><span>Transparent schedule disclosed at engagement</span></li>
                </ul>
              </div>
              <div className="split-visual"><FeeModelCard /></div>
            </div>

            <div className="split">
              <div className="split-copy">
                <div className="section-label">Competitive Bids</div>
                <h3>A ranked leaderboard, not a single handshake.</h3>
                <p>Your position goes out as a blind profile to matched buyers. Bids come back ranked by price, structure, and speed to close. We advise you through selecting a winner.</p>
                <ul className="feature-list">
                  <li><span>Blind profile until you authorize disclosure</span></li>
                  <li><span>Live bid leaderboard, ranked transparently</span></li>
                  <li><span>Accept, counter, or pass with banker guidance</span></li>
                </ul>
              </div>
              <div className="split-visual"><BidsCard /></div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--stone)", borderTop: "1px solid var(--line-soft)", borderBottom: "1px solid var(--line-soft)" }}>
        <div className="container">
          <div className="section-label">vs. Traditional Brokers</div>
          <h2 className="with-accent">Less cost. More speed.</h2>
          <div className="compare">
            <div className="compare-col bad">
              <h4>Traditional Broker</h4>
              <div className="title">Quarters on the tape. 3 to 5% spread.</div>
              <ul>
                <li><span className="mark">&times;</span> Weeks of analyst grind</li>
                <li><span className="mark">&times;</span> 3 to 5% spread</li>
                <li><span className="mark">&times;</span> No standing buyer network</li>
                <li><span className="mark">&times;</span> $25M+ minimum ticket</li>
              </ul>
            </div>
            <div className="compare-col good">
              <h4>The Boring Bank</h4>
              <div className="title">Days to package. Success fee only.</div>
              <ul>
                <li><span className="mark">&#10003;</span> Verified package in days</li>
                <li><span className="mark">&#10003;</span> Success fee only</li>
                <li><span className="mark">&#10003;</span> 500+ pre&#8209;qualified buyers</li>
                <li><span className="mark">&#10003;</span> $1M+ ticket range</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Upload your position. No commitment."
        lede="Verified listing package, target turnaround in days."
        primaryLabel="List Your Asset"
        ghostLabel="Speak with a Banker"
      />
    </>
  );
}
