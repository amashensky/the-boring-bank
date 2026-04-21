import CtaBand from "@/components/CtaBand";
import ScrollRevealInit from "@/components/ScrollRevealInit";
import AboutStory from "@/components/AboutStory";
import { SITE_ADVISORY_INQUIRY } from "@/lib/appUrls";

export const metadata = {
  title: "About. The Boring Bank.",
  description:
    "Our Story and Thesis — why we started, why software plus banker wins, and how we run the desk.",
};

export default function TeamPage() {
  return (
    <>
      <ScrollRevealInit />

      <header className="page-intro">
        <div className="container inner">
          <div className="eyebrow reveal">About</div>
          <h1 className="reveal reveal-1">Why we created The Boring Bank.</h1>
        </div>
      </header>

      <AboutStory />

      <CtaBand
        title="Talk to a founder directly."
        primaryLabel="Contact the Team"
        primaryHref="/contact/team"
        ghostLabel="Request a Valuation"
        ghostHref={SITE_ADVISORY_INQUIRY}
      />
    </>
  );
}
