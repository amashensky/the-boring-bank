import Link from "next/link";
import Arrow from "@/components/Arrow";
import { APP_BUYER_SIGNUP, APP_SELLER_SIGNUP } from "@/lib/appUrls";
import { JourneyFlow, SellFlowMockup } from "@/components/ProductVisuals";
import AdvantageSection from "@/components/AdvantageSection";
import Faq from "@/components/Faq";
import AnimatedCounter from "@/components/AnimatedCounter";
import TickerBar from "@/components/TickerBar";
import HeroVideo from "@/components/HeroVideo";
import { EcosystemCard, AdvantageChecklistCard } from "@/components/HeaderAccents";

export default function HomePage() {
  return (
    <>
      <HeroVideo />

      <TickerBar />

      <section className="stats-band">
        <div className="container">
          <div className="stats-grid">
            <div className="stat">
              <div className="stat-num">
                <AnimatedCounter to={1000} suffix="+" />
              </div>
              <div className="stat-desc">Funds covered</div>
            </div>
            <div className="stat">
              <div className="stat-num">Zero</div>
              <div className="stat-desc">Minimum transaction size</div>
            </div>
            <div className="stat">
              <div className="stat-num">Weeks</div>
              <div className="stat-desc">To first bids</div>
            </div>
            <div className="stat">
              <div className="stat-num">
                <AnimatedCounter to={0} prefix="$" />
              </div>
              <div className="stat-desc">Upfront fees</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-process-white">
        <div className="container">
          <div className="hiw-label">The Process</div>
          <h2 className="with-accent adv-h2 adv-h2--oneline">
            The Better Way to <em>Sell Your LP&#8209;Led Secondary</em>
          </h2>
          <p className="section-lede section-process-white__lede">
            From fund details to done deal. One streamlined track with no upfront fees.
          </p>
          <div className="section-process-white__flow">
            <SellFlowMockup />
          </div>
        </div>
      </section>

      <section className="section-how-it-works section-journey-home">
        <div className="container">
          <div className="section-journey-home__head">
            <div className="hiw-label">Transaction Journey</div>
            <h2 className="with-accent adv-h2">Intake to wire, one track.</h2>
            <p className="section-lede section-journey-home__lede">
              Package, compete, close &mdash; one team carries every deal from documents to wire.
            </p>
            <EcosystemCard />
          </div>
          <div className="section-journey-home__visual">
            <JourneyFlow variant="inline" showEmbeddedHeader={false} showStatusFooter showStepMockups />
          </div>
        </div>
      </section>

      <section className="section-advantage section-advantage--with-sticker">
        <div className="container">
          <div className="section-advantage__head">
            <div className="hiw-label">Our Advantage</div>
            <h2 className="with-accent adv-h2">Our Advantage</h2>
            <p className="section-lede" style={{ marginTop: 16 }}>Powerful capabilities that streamline your LP&#8209;led secondary and maximize value.</p>
            <AdvantageChecklistCard />
          </div>
          <AdvantageSection />
        </div>
      </section>

      <section className="section-faq">
        <div className="container">
          <div className="section-faq-head">
            <div className="hiw-label">FAQ</div>
            <h2 className="with-accent adv-h2">Common Questions</h2>
          </div>
          <Faq />
        </div>
      </section>

      <section className="cta-band">
        <div className="container-narrow inner">
          <h2>Ready to maximize liquidity value?</h2>
          <div className="cta-row">
            <Link href={APP_SELLER_SIGNUP} className="btn btn-primary">
              Get Started <Arrow />
            </Link>
            <Link href={APP_BUYER_SIGNUP} className="btn btn-light-ghost">
              Join our Buyer Network
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
