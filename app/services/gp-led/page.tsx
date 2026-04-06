import CtaBand from "@/components/CtaBand";
import { CVStructureCard } from "@/components/ServiceVisuals";
import { BidsCard } from "@/components/ProductVisuals";

export const metadata = {
  title: "GP-Led Liquidity. The Boring Bank.",
  description: "Continuation vehicles, fund restructurings, and tender offers.",
};

export default function GpLedPage() {
  return (
    <>
      <header className="page-intro">
        <div className="container inner">
          <div className="eyebrow reveal">Services</div>
          <h1 className="reveal reveal-1">GP&#8209;Led Liquidity.</h1>
        </div>
      </header>

      <section>
        <div className="container">
          <div className="split-stack">
            <div className="split">
              <div className="split-copy">
                <div className="section-label">Continuation Vehicles</div>
                <h3>Extend the hold. Reset the clock.</h3>
                <p>Move trophy assets out of an aging fund into a purpose&#8209;built vehicle with new capital, new terms, and aligned LP optionality. Single or multi&#8209;asset.</p>
                <ul className="feature-list">
                  <li><span>LPAC coordination and fairness opinion support</span></li>
                  <li><span>Rollover and cash&#8209;out mechanics, pari passu treatment</span></li>
                  <li><span>Pricing built off holding&#8209;level NAV, not fund marks</span></li>
                </ul>
              </div>
              <div className="split-visual"><CVStructureCard /></div>
            </div>

            <div className="split flip">
              <div className="split-copy">
                <div className="section-label">Tender Offers</div>
                <h3>Opt&#8209;in liquidity for existing LPs.</h3>
                <p>Run a tender backed by a lead buyer. LPs who need liquidity sell, LPs who want to stay roll forward. You manage the relationship, we manage the process.</p>
                <ul className="feature-list">
                  <li><span>Price discovery through a limited&#8209;auction lead</span></li>
                  <li><span>LP communication and participation tracking</span></li>
                  <li><span>Clean mechanics for both partial and full sellers</span></li>
                </ul>
              </div>
              <div className="split-visual"><BidsCard /></div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--stone)", borderTop: "1px solid var(--line-soft)", borderBottom: "1px solid var(--line-soft)" }}>
        <div className="container">
          <div className="section-label">Full Toolkit</div>
          <h2 className="with-accent">Every structure, honestly scoped.</h2>
          <div className="pillars" style={{ marginTop: 56 }}>
            <div className="pillar">
              <div className="pillar-kicker">Continuation Vehicles</div>
              <h4>Single or multi&#8209;asset CVs.</h4>
            </div>
            <div className="pillar">
              <div className="pillar-kicker">Tender Offers</div>
              <h4>LP liquidity at fund level.</h4>
            </div>
            <div className="pillar">
              <div className="pillar-kicker">Fund Restructurings</div>
              <h4>Reset terms, extend horizon.</h4>
            </div>
            <div className="pillar">
              <div className="pillar-kicker">Strip Sales</div>
              <h4>Partial stake monetization.</h4>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="For GPs"
        title="Exploring a liquidity event?"
        lede="Confidential conversations only."
        primaryLabel="Talk to a Banker"
        primaryHref="/contact"
        ghostLabel="See How It Works"
        ghostHref="/how-it-works"
      />
    </>
  );
}
