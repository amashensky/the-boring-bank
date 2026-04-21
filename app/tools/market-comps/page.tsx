import MarketCompsTool from "@/components/tools/MarketCompsTool";
import ScrollRevealInit from "@/components/ScrollRevealInit";
import Link from "next/link";
import Arrow from "@/components/Arrow";
import { SITE_ADVISORY_INQUIRY } from "@/lib/appUrls";

export const metadata = {
  title: "Market Comps. The Boring Bank.",
  description:
    "Filter illustrative LP secondary prints by strategy, region, and vintage. Median and IQR for internal framing—not a quote.",
};

export default function MarketCompsToolPage() {
  return (
    <>
      <ScrollRevealInit />
      <header className="page-intro">
        <div className="container inner">
          <div className="eyebrow reveal">Tools</div>
          <h1 className="reveal reveal-1">Secondary Market comps</h1>
          <p className="section-lede reveal reveal-2" style={{ marginTop: 16, textAlign: "left", maxWidth: 720 }}>
            Benchmark anonymized LP stake and strip pricing as a % of last reported NAV—before you run a formal
            process or committee dry run.
          </p>
        </div>
      </header>

      <section className="section-how-it-works">
        <div className="container-narrow tool-page-shell">
          <MarketCompsTool />
          <div className="tool-page-foot">
            <p className="section-lede" style={{ marginTop: 0, marginBottom: 20, textAlign: "left" }}>
              Need a comp book tied to your schedule of investments and restrictions?
            </p>
            <Link href={SITE_ADVISORY_INQUIRY} className="btn btn-primary">
              Request banker-led comps <Arrow />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
