import CtaBand from "@/components/CtaBand";
import ScrollRevealInit from "@/components/ScrollRevealInit";
import InteractiveCardTracker from "@/components/InteractiveCardTracker";
import LpQuote from "@/components/LpQuote";
import { APP_SELLER_SIGNUP } from "@/lib/appUrls";
import SplitWithMatchedVisual from "@/components/SplitWithMatchedVisual";
import { TimelineCard, BuyerNetworkCard } from "@/components/ServiceVisuals";
import { ValuationCard } from "@/components/ProductVisuals";
import LpLedIntro from "@/components/LpLedIntro";

export const metadata = {
  title: "LP-Led Secondary. The Boring Bank.",
  description: "Sell your LP stake to qualified institutional buyers.",
};

export default function LpLedPage() {
  return (
    <>
      <ScrollRevealInit />
      <InteractiveCardTracker />
      <LpLedIntro />

      <section>
        <div className="container">
          <div className="split-stack split-stack--lp-led-mock">
            <SplitWithMatchedVisual
              splitClassName="split--timeline-nolede"
              copy={
                <>
                  <div className="section-label">Timeline</div>
                  <h3>One track. Intake to wire.</h3>
                  <ul className="feature-list feature-list--roomy">
                    <li><span>NAV reconstruction anchored to audited financials and comps</span></li>
                    <li><span>Blind profile released only to mandate&#8209;matched buyers</span></li>
                    <li><span>Live leaderboard of indications through every round</span></li>
                    <li><span>One senior banker from intake to signed SPA</span></li>
                  </ul>
                </>
              }
              visual={<TimelineCard />}
            />

            <LpQuote slot={0} />

            <SplitWithMatchedVisual
              flip
              splitClassName="split--timeline-nolede"
              copy={
                <>
                  <div className="section-label">Buyer Coverage</div>
                  <h3>Scored mandates. No mass&#8209;blast.</h3>
                  <ul className="feature-list feature-list--roomy">
                    <li><span>Mandate&#8209;level scoring on strategy, vintage, and ticket size</span></li>
                    <li><span>Identity disclosed only when you explicitly authorize</span></li>
                    <li><span>No mass blast, no cold outreach, no broad broker sweep</span></li>
                    <li><span>Coverage across funds, family offices, and sovereigns</span></li>
                  </ul>
                </>
              }
              visual={<BuyerNetworkCard variant="lp" />}
            />

            <LpQuote slot={1} />

            <SplitWithMatchedVisual
              splitClassName="split--timeline-nolede"
              copy={
                <>
                  <div className="section-label">How We Work</div>
                  <h3>Fair value. Right buyer.</h3>
                  <ul className="feature-list feature-list--roomy">
                    <li><span>Indicative range anchored to NAV, GP marks, and comps</span></li>
                    <li><span>Scored mandates only, never a broad broker sweep</span></li>
                    <li><span>Same senior bankers from valuation memo to SPA</span></li>
                    <li><span>Fees and workstreams agreed upfront, no surprises</span></li>
                  </ul>
                </>
              }
              visual={<ValuationCard matchBidFootprint />}
            />
          </div>
        </div>
      </section>

      <CtaBand
        tone="lp-led"
        title="See where your stake would clear."
        primaryLabel="Get Started"
        primaryHref={APP_SELLER_SIGNUP}
        ghostLabel="See Full Process"
        ghostHref="/how-it-works"
      />
    </>
  );
}
