import FindBuyersTool from "@/components/tools/FindBuyersTool";
import ScrollRevealInit from "@/components/ScrollRevealInit";

export const metadata = {
  title: "Find Buyers. The Boring Bank.",
  description:
    "Match a secondary sleeve to illustrative buyer desks by strategy, vintage, ticket, structure, and region. Demo matcher for LP-led and GP-aware processes.",
};

export default function FindBuyersToolPage() {
  return (
    <>
      <ScrollRevealInit />
      <header className="page-intro">
        <div className="container inner">
          <div className="eyebrow reveal">Tools</div>
          <h1 className="reveal reveal-1">Find buyers for your secondary</h1>
          <p className="section-lede reveal reveal-2" style={{ marginTop: 16, textAlign: "left", maxWidth: 720 }}>
            Map your blind profile to allocator types we see in live processes: pensions, family offices, sleeves, and
            OCIO platforms. Run the demo matcher, then list the position to reach verified buyers.
          </p>
        </div>
      </header>

      <section className="section-how-it-works">
        <div className="container-narrow tool-page-shell">
          <FindBuyersTool />
        </div>
      </section>
    </>
  );
}
