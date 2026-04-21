import CtaBand from "@/components/CtaBand";
import ScrollRevealInit from "@/components/ScrollRevealInit";
import BoringDino from "@/components/BoringDino";

export const metadata = {
  title: "Careers. The Boring Bank.",
  description: "Join the team building institutional infrastructure for the LP-Led Secondary Market.",
};

export default function CareersPage() {
  return (
    <>
      <ScrollRevealInit />
      <header className="page-intro">
        <div className="container inner">
          <div className="eyebrow reveal">Careers</div>
          <h1 className="reveal reveal-1">Careers</h1>
        </div>
      </header>

      <section>
        <div className="container">
          <div className="section-label">Open Roles</div>
          <h2 className="with-accent" style={{ marginBottom: 24 }}>Not hiring yet.</h2>
          <p className="section-lede section-lede--nowrap">
            While we&rsquo;re not hiring yet, here&rsquo;s a mini&#8209;game &mdash; jump the red flags, run the desk.
          </p>
          <BoringDino />
        </div>
      </section>

      <CtaBand
        title="Help us build this."
        primaryLabel="Contact the Team"
        primaryHref="/contact/team"
        ghostLabel="See How It Works"
        ghostHref="/how-it-works"
      />
    </>
  );
}
