import { SITE_ADVISORY_INQUIRY } from "@/lib/appUrls";

export const metadata = {
  title: "Valuation Calculator. The Boring Bank.",
  description: "Estimate indicative fair value from comps and NAV.",
};

export default function ValuationCalculatorToolPage() {
  return (
    <>
      <header className="page-intro">
        <div className="container inner">
          <div className="eyebrow reveal">Tools</div>
          <h1 className="reveal reveal-1">Valuation calculator</h1>
        </div>
      </header>
      <section>
        <div className="container-narrow">
          <p style={{ fontSize: 15, color: "var(--ink-2)", lineHeight: 1.7 }}>
            The calculator is coming soon. For an indicative range now,{" "}
            <a href={SITE_ADVISORY_INQUIRY}>request a valuation</a>.
          </p>
        </div>
      </section>
    </>
  );
}
