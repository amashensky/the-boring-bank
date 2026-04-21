import CtaBand from "@/components/CtaBand";
import ScrollRevealInit from "@/components/ScrollRevealInit";
import { SITE_ADVISORY_INQUIRY } from "@/lib/appUrls";
import SplitWithMatchedVisual from "@/components/SplitWithMatchedVisual";
import {
  NavLendingCollateralCard,
  NavLendingFacilityCard,
  NavLendingServicingCard,
} from "@/components/NavLendingVisuals";
import NavLendingIntro from "@/components/NavLendingIntro";
import NavLendingInquiryForm from "@/components/NavLendingInquiryForm";
import NavLendingFlowTree from "@/components/NavLendingFlowTree";
import NavFacilitySticker from "@/components/NavFacilitySticker";
import NavLendingLogoWall from "@/components/NavLendingLogoWall";

// Preserve the legacy 3-service-card block temporarily hidden via a render
// flag. Set this to `true` to bring them back on the page without needing
// to re-import or re-wire any data.
const SHOW_LEGACY_SERVICE_CARDS = false;

export const metadata = {
  title: "NAV Lending. The Boring Bank.",
  description:
    "Receive tailored NAV financing, monitor each loan clearly, and work with an experienced advisory team.",
};

export default function NavLendingPage() {
  return (
    <>
      <ScrollRevealInit />

      <NavLendingIntro />

      {/* Inquiry form (left) + flow tree visualization (right) */}
      <section className="nav-inquiry-section">
        <div className="container">
          <div className="nav-inquiry-split">
            <div className="nav-inquiry-split__left sr sr-left sr-1">
              <div className="section-label">Request a Facility</div>
              <h2 className="nav-inquiry-title">
                Tell us about the facility you&rsquo;re looking for.
              </h2>
              <p className="nav-inquiry-lede">
                Share a few details; a senior advisor replies within one
                business day.
              </p>
              <NavLendingInquiryForm />
            </div>
            <div className="nav-inquiry-split__right sr sr-right sr-2">
              <div className="section-label">How It Works</div>
              <NavLendingFlowTree />
            </div>
          </div>
        </div>
      </section>

      {/* Legacy three-card section — hidden for now, kept in the tree so it
          can be flipped back on via SHOW_LEGACY_SERVICE_CARDS. */}
      {SHOW_LEGACY_SERVICE_CARDS && (
        <section>
          <div className="container">
            <div className="split-stack split-stack--nav-lending-mock">
              <SplitWithMatchedVisual
                splitClassName="sr sr-1"
                copy={
                  <>
                    <div className="section-label">Customized financing</div>
                    <h3>Receive customized financing solutions.</h3>
                    <p>
                      We tailor each NAV lending structure to your portfolio,
                      liquidity goals, and timeline so financing fits your
                      strategy rather than forcing a standard template.
                    </p>
                    <ul className="feature-list">
                      <li><span>Deal structures aligned to your fund profile</span></li>
                      <li><span>Clear pricing and covenant framework up front</span></li>
                      <li><span>Flexible terms designed around your use of proceeds</span></li>
                    </ul>
                  </>
                }
                visual={<NavLendingFacilityCard />}
              />

              <SplitWithMatchedVisual
                flip
                splitClassName="sr sr-2"
                copy={
                  <>
                    <div className="section-label">Transparent monitoring</div>
                    <h3>Monitor loans transparently.</h3>
                    <p>
                      Stay informed through straightforward reporting on
                      balances, utilization, and key facility dates so you
                      always know where the loan stands.
                    </p>
                    <ul className="feature-list">
                      <li><span>Live visibility into outstanding and available capacity</span></li>
                      <li><span>Consistent updates on reporting and covenant milestones</span></li>
                      <li><span>Simple summaries built for fast decisions</span></li>
                    </ul>
                  </>
                }
                visual={<NavLendingCollateralCard />}
              />

              <SplitWithMatchedVisual
                splitClassName="sr sr-3"
                copy={
                  <>
                    <div className="section-label">Experienced advisors</div>
                    <h3>Access an experienced advisory team.</h3>
                    <p>
                      Work directly with senior professionals who understand
                      private markets and stay involved from structuring
                      through servicing.
                    </p>
                    <ul className="feature-list">
                      <li><span>Direct access to a dedicated relationship team</span></li>
                      <li><span>Practical guidance through documentation and closing</span></li>
                      <li><span>Ongoing support as market conditions evolve</span></li>
                    </ul>
                  </>
                }
                visual={<NavLendingServicingCard />}
              />
            </div>
          </div>
        </section>
      )}

      <section
        className="nav-lend-snapshot sr"
        style={{
          background: "var(--off)",
          borderTop: "1px solid var(--line-soft)",
          borderBottom: "1px solid var(--line-soft)",
          padding: "72px 0 72px",
        }}
      >
        <div className="container">
          <div className="nav-lend-snapshot__head">
            <div className="section-label">Lending Partners</div>
            <h2 className="with-accent">Our Trusted Lenders.</h2>
            <NavLendingLogoWall />
            <NavFacilitySticker />
          </div>
        </div>
      </section>

      <CtaBand
        wide
        tone="lp-led"
        title="Build a simpler NAV lending plan."
        primaryLabel="Talk to a Banker"
        primaryHref={SITE_ADVISORY_INQUIRY}
        ghostLabel="See Full Process"
        ghostHref="/how-it-works"
      />
    </>
  );
}
