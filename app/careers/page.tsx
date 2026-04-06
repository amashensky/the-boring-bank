import CtaBand from "@/components/CtaBand";

export const metadata = {
  title: "Careers. The Boring Bank.",
  description: "Join the team building institutional infrastructure for the sub-$100M secondary market.",
};

export default function CareersPage() {
  return (
    <>
      <header className="page-intro">
        <div className="container inner">
          <div className="eyebrow reveal">Careers</div>
          <h1 className="reveal reveal-1">Build the market infrastructure private equity still lacks.</h1>
        </div>
      </header>

      <section>
        <div className="container">
          <div className="section-label">How We Work</div>
          <h2 className="with-accent">A small team moving with intention.</h2>
          <div className="pillars" style={{ marginTop: 56 }}>
            <div className="pillar">
              <div className="pillar-kicker">Ownership</div>
              <h4>Small team, real scope.</h4>
            </div>
            <div className="pillar">
              <div className="pillar-kicker">Rigor</div>
              <h4>Institutional standards.</h4>
            </div>
            <div className="pillar">
              <div className="pillar-kicker">Velocity</div>
              <h4>Ship, then iterate.</h4>
            </div>
            <div className="pillar">
              <div className="pillar-kicker">Compensation</div>
              <h4>Top of market, meaningful equity.</h4>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--off)", borderTop: "1px solid var(--line-soft)", borderBottom: "1px solid var(--line-soft)" }}>
        <div className="container">
          <div className="section-label">Open Roles</div>
          <h2 className="with-accent" style={{ marginBottom: 24 }}>Not hiring yet.</h2>
          <p className="section-lede" style={{ maxWidth: 640 }}>We are not actively hiring at this time. If you are interested in what we are building, reach out and we will keep you in mind as the team grows.</p>
        </div>
      </section>

      <CtaBand
        eyebrow="Join Us"
        title="Help us build this."
        lede="If the problem interests you, let us talk."
        primaryLabel="Contact the Team"
        ghostLabel="See How It Works"
        ghostHref="/how-it-works"
      />
    </>
  );
}
