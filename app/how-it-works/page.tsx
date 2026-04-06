import CtaBand from "@/components/CtaBand";
import { JourneyFlow, OpportunityCard, BidsCard, ClosingCard } from "@/components/ProductVisuals";

export const metadata = {
  title: "How It Works. The Boring Bank.",
  description: "From document intake to closed wire in weeks, not quarters.",
};

export default function HowItWorksPage() {
  return (
    <>
      <header className="page-intro">
        <div className="container inner">
          <div className="eyebrow reveal">The Process</div>
          <h1 className="reveal reveal-1">Upload to wire in weeks, not quarters.</h1>
        </div>
      </header>

      <section>
        <div className="container">
          <div className="section-label">Transaction Journey</div>
          <h2 className="with-accent">One track. Six milestones.</h2>
          <p className="section-lede" style={{ marginTop: 18 }}>Every transaction is bespoke. The steps below outline how we run a typical process.</p>
          <div style={{ marginTop: 56 }}>
            <JourneyFlow />
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-label">What You See</div>
          <h2 className="with-accent">Product, at every stage.</h2>
          <p className="section-lede" style={{ marginTop: 18 }}>A single dashboard follows the deal from draft to wire. Three snapshots:</p>

          <div className="product-grid" style={{ marginTop: 56 }}>
            <div className="product-cell">
              <div className="product-cell-label">Stage 1 &middot; Draft</div>
              <OpportunityCard />
            </div>
            <div className="product-cell">
              <div className="product-cell-label">Stage 2 &middot; Bids</div>
              <BidsCard />
            </div>
            <div className="product-cell">
              <div className="product-cell-label">Stage 3 &middot; Close</div>
              <ClosingCard />
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Ready to see what your position is worth?"
        primaryLabel="List Your Asset"
        ghostLabel="Speak with a Banker"
      />
    </>
  );
}
