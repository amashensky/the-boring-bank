import CtaBand from "@/components/CtaBand";
import { TransactionFlow } from "@/components/TransactionFlow";
import { MethodologyCard } from "@/components/MethodologyCard";

export const metadata = {
  title: "How It Works. The Boring Bank.",
  description: "From document intake to closed wire in weeks, not quarters.",
};

export default function HowItWorksPage() {
  return (
    <>
      <header className="page-intro">
        <div className="container inner">
          <div className="eyebrow reveal">The Process</div>
          <h1 className="reveal reveal-1">Upload to wire in weeks, not quarters.</h1>
        </div>
      </header>

      <section>
        <div className="container">
          <div className="section-label">Transaction Journey</div>
          <h2 className="with-accent">Who does what, at every stage.</h2>
          <p className="section-lede" style={{ marginTop: 18 }}>Every transaction involves parallel workflows. Here's what each party handles at each step.</p>
          <div style={{ marginTop: 56 }}>
            <TransactionFlow />
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-label">Methodology</div>
          <h2 className="with-accent">What we evaluate at each stage.</h2>
          <p className="section-lede" style={{ marginTop: 18 }}>Institutional&#8209;grade diligence. Every deal gets the same rigor.</p>

          <div style={{ marginTop: 56 }}>
            <MethodologyCard />
          </div>
        </div>
      </section>

      <CtaBand
        title="Ready to see what your position is worth?"
        primaryLabel="List Your Asset"
        ghostLabel="Speak with a Banker"
      />
    </>
  );
}
