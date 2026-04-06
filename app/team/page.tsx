import CtaBand from "@/components/CtaBand";

export const metadata = {
  title: "Team. The Boring Bank.",
  description: "Operators from secondaries desks, quant finance, and applied AI.",
};

export default function TeamPage() {
  return (
    <>
      <header className="page-intro">
        <div className="container inner">
          <div className="eyebrow reveal">The Team</div>
          <h1 className="reveal reveal-1">Built by operators who lived the problem.</h1>
        </div>
      </header>

      <section>
        <div className="container">
          <div className="section-label">Founding Team</div>
          <h2 className="with-accent">The desk.</h2>
          <div className="team-grid" style={{ marginTop: 56 }}>
            <div className="team-member">
              <div className="avatar">A</div>
              <div className="member-name">Alan Mashensky</div>
              <div className="member-title">Founder and CEO</div>
              <div className="member-bio">Previously led LP secondaries execution. $1.2B+ closed across 60+ fund interests.</div>
            </div>
            <div className="team-member">
              <div className="avatar">J</div>
              <div className="member-name">Co&#8209;Founder</div>
              <div className="member-title">Co&#8209;Founder and CTO</div>
              <div className="member-bio">Former quant infrastructure lead. Architected the diligence engine.</div>
            </div>
            <div className="team-member">
              <div className="avatar">M</div>
              <div className="member-name">Senior Advisor</div>
              <div className="member-title">Diligence Standards</div>
              <div className="member-bio">30+ years in private markets. Former MD at a bulge&#8209;bracket secondaries desk.</div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--off)", borderTop: "1px solid var(--line-soft)", borderBottom: "1px solid var(--line-soft)" }}>
        <div className="container-narrow">
          <div className="section-label">Our Story</div>
          <h2 className="with-accent">Why we built this.</h2>
          <div className="prose" style={{ marginTop: 24 }}>
            <p>LP secondaries are priced for $500M tickets. Mid&#8209;market positions get ignored.</p>
            <p>We automate the diligence grind so a banker can focus on pricing, matching, and closing.</p>
            <p>Same rigor. A fraction of the spread. The name is the point.</p>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Get in Touch"
        title="Talk to a founder directly."
        lede="Every LP inbound gets a personal response within one business day."
        primaryLabel="Contact the Team"
        ghostLabel="Request a Valuation"
      />
    </>
  );
}
