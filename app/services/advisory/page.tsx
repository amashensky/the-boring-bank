import CtaBand from "@/components/CtaBand";
import AdvisoryTypesGrid from "@/components/AdvisoryTypesGrid";
import AdvisoryForm from "@/components/AdvisoryForm";
import AdvisoryDeliverables from "@/components/AdvisoryDeliverables";
import ScrollRevealInit from "@/components/ScrollRevealInit";
import AdvisoryIntro from "@/components/AdvisoryIntro";

export const metadata = {
  title: "Advisory. The Boring Bank.",
  description:
    "Portfolio, GP, valuation, and transaction advisory for the Secondary Market.",
};

export default function AdvisoryPage() {
  return (
    <>
      <ScrollRevealInit />

      <AdvisoryIntro />

      <section className="adv-main-section">
        <div className="container">
          <div className="adv-page-split">
            <div
              className="adv-page-form-col sr sr-left sr-1"
              id="advisory-inquiry"
            >
              <div className="section-label">Start the Conversation</div>
              <h2 className="adv-form-heading">
                Tell us about your situation.
              </h2>
              <p className="adv-form-lede">
                Share a few details; We reply within one business day.
              </p>
              <AdvisoryForm />
            </div>

            <aside className="adv-page-types-col adv-page-types-col--dark sr sr-right sr-2">
              <div className="section-label">Types of Advisory</div>
              <AdvisoryTypesGrid />
            </aside>
          </div>
        </div>
      </section>

      <AdvisoryDeliverables />

      <CtaBand
        title="Have a question about your portfolio?"
        primaryLabel="Start a Conversation"
        primaryHref="#advisory-inquiry"
        ghostLabel="See Full Process"
        ghostHref="/how-it-works"
      />
    </>
  );
}
