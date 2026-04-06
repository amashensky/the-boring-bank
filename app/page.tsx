import Link from "next/link";
import Arrow from "@/components/Arrow";
import { OpportunityCard, BidsCard, ClosingCard, ValuationCard, JourneyFlow } from "@/components/ProductVisuals";
import AnimatedCounter from "@/components/AnimatedCounter";
import TickerBar from "@/components/TickerBar";
import TrustRow from "@/components/TrustRow";

export default function HomePage() {
  return (
    <>
      <header className="hero">
        <div className="container">
          <div className="hero-inner">
            <div className="eyebrow reveal">For LP and GP Stakes</div>
            <h1 className="reveal reveal-1">The Investment Bank <br /><span className="accent">for Secondaries.</span></h1>
            <p className="lede reveal reveal-2">
              Faster execution and deeper coverage for the sub&#8209;$100M market.
            </p>
          </div>
        </div>
        <Link href="/contact" className="hero-cta-box reveal reveal-3">
          <span className="label">Get Started</span>
          <span className="arrow-link">
            <span className="arrow-big">&rarr;</span>
          </span>
        </Link>
      </header>

      <TickerBar />

      <section className="stats-band">
        <div className="container">
          <div className="stats-grid">
            <div className="stat">
              <div className="stat-num"><AnimatedCounter to={15} suffix="x" /></div>
              <div className="stat-desc">More liquidity options</div>
            </div>
            <div className="stat">
              <div className="stat-num"><AnimatedCounter to={30} suffix="%" /></div>
              <div className="stat-desc">Better pricing</div>
            </div>
            <div className="stat">
              <div className="stat-num">Weeks</div>
              <div className="stat-desc">To initial offers, target path</div>
            </div>
            <div className="stat">
              <div className="stat-num"><AnimatedCounter to={0} prefix="$" /></div>
              <div className="stat-desc">Upfront fees</div>
            </div>
          </div>
        </div>
      </section>

      <TrustRow />

      <section>
        <div className="container">
          <div className="section-label">How It Works</div>
          <h2 className="with-accent">Three steps. Weeks, not quarters.</h2>
          <p className="section-lede" style={{ marginTop: 18 }}>Every deal runs one track: package, compete, close. Each transaction is bespoke.</p>

          <div style={{ marginTop: 56 }}>
            <JourneyFlow />
          </div>

          <div className="process-stack" style={{ marginTop: 96 }}>
            <div className="process-row">
              <div className="process-copy">
                <div className="kicker">Step 01 &middot; Prepare</div>
                <h3>Package your position.</h3>
                <p>Upload K&#8209;1s, capital account, and the LPA. We rebuild NAV, flag restrictions, and stamp the package.</p>
              </div>
              <div className="process-visual">
                <OpportunityCard />
              </div>
            </div>

            <div className="step-bridge">
              <div className="bridge-line" />
              <div className="bridge-node">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 8h8M9 5l3 3-3 3" stroke="var(--taupe)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div className="bridge-label">Package stamped. Blind profile goes to buyers.</div>
              <div className="bridge-node">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 8h8M9 5l3 3-3 3" stroke="var(--taupe)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div className="bridge-line" />
            </div>

            <div className="process-row flip">
              <div className="process-copy">
                <div className="kicker">Step 02 &middot; Match</div>
                <h3>Run a competitive bid.</h3>
                <p>Blind profile goes to matched buyers. You see live bids ranked by price, structure, and speed to close.</p>
              </div>
              <div className="process-visual">
                <BidsCard />
              </div>
            </div>

            <div className="step-bridge">
              <div className="bridge-line" />
              <div className="bridge-node">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 8h8M9 5l3 3-3 3" stroke="var(--taupe)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div className="bridge-label">Winner selected. SPA and GP consent in motion.</div>
              <div className="bridge-node">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 8h8M9 5l3 3-3 3" stroke="var(--taupe)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div className="bridge-line" />
            </div>

            <div className="process-row">
              <div className="process-copy">
                <div className="kicker">Step 03 &middot; Close</div>
                <h3>Sign and wire.</h3>
                <p>SPA drafted, GP consent coordinated, transfer mechanics handled. Success fee only when the wire clears.</p>
              </div>
              <div className="process-visual">
                <ClosingCard />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--stone)", borderTop: "1px solid var(--line-soft)", borderBottom: "1px solid var(--line-soft)" }}>
        <div className="container">
          <div className="section-label">Our Advantage</div>
          <h2 className="with-accent">Fair value. Ranked buyers.</h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "stretch", marginTop: 64 }} className="advantage-grid">
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <div className="pillar-kicker">Valuation + Matching</div>
              <h3 style={{ fontSize: 36, marginTop: 16, lineHeight: 1.15 }}>Fair value.<br />Right buyer.<br />One process.</h3>
              <p style={{ fontSize: 16, color: "var(--ink-2)", lineHeight: 1.75, marginTop: 24, maxWidth: 480 }}>
                Comps, NAV rebuild, confidence band. You see the range before any buyer does. On the other side, every mandate is scored against your listing. The result is a ranked shortlist, not a cold blast.
              </p>
              <ul className="feature-list" style={{ maxWidth: 480, marginTop: 28 }}>
                <li><span>Holding&#8209;level NAV with confidence band</span></li>
                <li><span>Buyer scoring on strategy, vintage, size, geography</span></li>
                <li><span>Ranked matches with fit score and intro path</span></li>
              </ul>
            </div>
            <div>
              <ValuationCard />
            </div>
          </div>

          <div className="pillars" style={{ marginTop: 96 }}>
            <div className="pillar">
              <div className="pillar-kicker">Onboard</div>
              <h4>Data in, package out.</h4>
            </div>
            <div className="pillar">
              <div className="pillar-kicker">Track</div>
              <h4>One live dashboard.</h4>
            </div>
            <div className="pillar">
              <div className="pillar-kicker">Reach</div>
              <h4>500+ verified buyers.</h4>
            </div>
            <div className="pillar">
              <div className="pillar-kicker">Align</div>
              <h4>Success fees only.</h4>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container-narrow inner">
          <div className="eyebrow">Get Started</div>
          <h2>Ready to maximize liquidity value?</h2>
          <div className="cta-row">
            <Link href="/contact" className="btn btn-primary">Get Started <Arrow /></Link>
            <Link href="/for-buyers" className="btn btn-light-ghost">Join our Buyer Network</Link>
          </div>
        </div>
      </section>
    </>
  );
}
