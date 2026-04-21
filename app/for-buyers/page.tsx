import Link from "next/link";
import Arrow from "@/components/Arrow";
import { APP_BUYER_SIGNUP } from "@/lib/appUrls";
import {
  BuyerFlowMockup,
  BuyerMandateInboxMockup,
  BuyerICPackageMockup,
  BuyerBlindProfileMockup,
  BuyerWorkspaceMockup,
  JourneyFlow,
} from "@/components/ProductVisuals";
import Faq, { type FaqItem } from "@/components/Faq";
import AnimatedCounter from "@/components/AnimatedCounter";
import TickerBar from "@/components/TickerBar";
import AdvantageSection, { type AdvantageItem } from "@/components/AdvantageSection";
import BuyerHeroVideo from "@/components/BuyerHeroVideo";
import { EcosystemCard, AdvantageChecklistCard } from "@/components/HeaderAccents";

const BUYER_ADVANTAGES: AdvantageItem[] = [
  {
    title: "Mandate-tuned deal flow",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 3v4M11 15v4M3 11h4M15 11h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        <circle cx="11" cy="11" r="3.5" stroke="currentColor" strokeWidth="1.3"/>
      </svg>
    ),
    body: "Every blind profile is scored against your strategy, vintage, and ticket rules. Only high-fit opportunities surface, each with explainable match context for your IC.",
    visual: <BuyerMandateInboxMockup />,
  },
  {
    title: "IC-ready packages",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="4" y="3" width="14" height="16" rx="1.4" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M7 8h8M7 11h8M7 14h5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
    body: "NAV reconstruction, legal register, indicative pricing range, and comps land in a uniform package. Decide quickly whether to go deeper without chasing documents.",
    visual: <BuyerICPackageMockup />,
  },
  {
    title: "Blind profiles, then names",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M3 11s3-6 8-6 8 6 8 6-3 6-8 6-8-6-8-6z" stroke="currentColor" strokeWidth="1.4"/>
        <circle cx="11" cy="11" r="2.5" stroke="currentColor" strokeWidth="1.3"/>
      </svg>
    ),
    body: "Identity and deeper data are disclosed only after you opt in. No cold blasts, no information leakage, no awkward GP notifications before you're ready.",
    visual: <BuyerBlindProfileMockup />,
  },
  {
    title: "One workspace to close",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M5 12l4 4 8-8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 15l5-5 4 3.5 5-7 4 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    body: "Status, documents, and milestones live in one live workspace. Banker coverage carries you through diligence and close when you choose to engage.",
    visual: <BuyerWorkspaceMockup />,
  },
];

export const metadata = {
  title: "For Buyers. The Boring Bank.",
  description:
    "Mandate-matched LP-led secondaries with IC-ready packages, blind profiles, and one workspace to close. No cost to join the network.",
};

const BUYER_FAQS: FaqItem[] = [
  {
    q: "Does it cost anything to join the buyer network?",
    a: "No. There is no retainer or subscription to receive curated deal flow. We are paid on the success of transactions we help close, so you can evaluate opportunities before committing resources.",
  },
  {
    q: "How are deals matched to my mandate?",
    a: "You set strategy, vintage, ticket size, and structure preferences. Our engine scores every blind profile against those rules and surfaces only high-fit opportunities, with explainable match context for your IC.",
  },
  {
    q: "What do I receive before I express interest?",
    a: "Each opportunity ships as a uniform package: rebuilt NAV context, legal flags, indicative pricing range, and comps, so you can decide quickly whether to go deeper.",
  },
  {
    q: "How do I stay in the loop without inbox noise?",
    a: "You get a concise weekly digest and in-product updates on status changes. No cold blasts: only profiles that clear your mandate thresholds.",
  },
  {
    q: "What happens when I want to move forward?",
    a: "You signal interest, we coordinate disclosure and data room access on your timeline, and you can bid with clear process milestones through close.",
  },
  {
    q: "Who is on the other side of the table?",
    a: "Sellers are institutional and family-office LPs in commingled private funds, screened by our intake team. You get a rebuilt fact base on every position before committing time.",
  },
];

export default function ForBuyersPage() {
  return (
    <>
      <BuyerHeroVideo />

      <TickerBar />

      <section className="stats-band">
        <div className="container">
          <div className="stats-grid">
            <div className="stat">
              <div className="stat-num">
                <AnimatedCounter to={1000} suffix="+" />
              </div>
              <div className="stat-desc">Funds in coverage</div>
            </div>
            <div className="stat">
              <div className="stat-num">$0</div>
              <div className="stat-desc">To join the network</div>
            </div>
            <div className="stat">
              <div className="stat-num">Blind</div>
              <div className="stat-desc">Profiles before names</div>
            </div>
            <div className="stat">
              <div className="stat-num">IC&#8209;ready</div>
              <div className="stat-desc">Packages on every look</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-process-white">
        <div className="container">
          <div className="hiw-label">The Buyer Path</div>
          <h2 className="with-accent adv-h2 adv-h2--oneline">
            The Better Way to <em>Source LP&#8209;Led Secondaries</em>
          </h2>
          <p className="section-lede section-process-white__lede">
            Define what you buy. Get only what fits. Move fast when conviction is there.
          </p>
          <div className="section-process-white__flow">
            <BuyerFlowMockup />
          </div>
        </div>
      </section>

      <section className="section-how-it-works section-journey-home">
        <div className="container">
          <div className="section-journey-home__head">
            <div className="hiw-label">Transaction Journey</div>
            <h2 className="with-accent adv-h2">From mandate to wire, one track.</h2>
            <p className="section-lede section-journey-home__lede section-lede--nowrap">
              Review, diligence, bid &mdash; one team carries every live opportunity from blind profile to close.
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
            <div className="hiw-label">What You Get</div>
            <h2 className="with-accent adv-h2">What You Get</h2>
            <p className="section-lede section-lede--nowrap" style={{ marginTop: 16 }}>
              All included: no retainer, no seat fee, no pay&#8209;to&#8209;play lists.
            </p>
            <AdvantageChecklistCard />
          </div>
          <AdvantageSection items={BUYER_ADVANTAGES} />
        </div>
      </section>

      <section className="section-faq">
        <div className="container">
          <div className="section-faq-head">
            <div className="hiw-label">FAQ</div>
            <h2 className="with-accent adv-h2">Common Questions</h2>
          </div>
          <Faq items={BUYER_FAQS} />
        </div>
      </section>

      <section className="cta-band cta-band--wide">
        <div className="container-narrow inner">
          <h2>Ready for mandate-matched deal flow?</h2>
          <div className="cta-row">
            <Link href={APP_BUYER_SIGNUP} className="btn btn-primary">
              Join our Buyer Network <Arrow />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
