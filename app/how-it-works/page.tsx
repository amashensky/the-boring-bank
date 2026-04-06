import CtaBand from "@/components/CtaBand";
import { TransactionFlow } from "@/components/TransactionFlow";

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
          <p className="section-lede" style={{ marginTop: 18 }}>Three stages. Parallel workflows for seller, platform, and buyer.</p>
          <div style={{ marginTop: 56 }}>
            <TransactionFlow />
          </div>
        </div>
      </section>

      <section style={{ background: "var(--stone)", borderTop: "1px solid var(--line-soft)", borderBottom: "1px solid var(--line-soft)" }}>
        <div className="container">
          <div className="section-label">What You Need</div>
          <h2 className="with-accent">Four documents to get started.</h2>
          <p className="section-lede" style={{ marginTop: 18 }}>We handle everything else.</p>
          <div className="doc-grid" style={{ marginTop: 56 }}>
            <div className="doc-card">
              <div className="doc-num">01</div>
              <h4>K&#8209;1 / Tax Statements</h4>
              <p>Most recent year. We use these to verify capital account balances and distribution history.</p>
            </div>
            <div className="doc-card">
              <div className="doc-num">02</div>
              <h4>Limited Partnership Agreement</h4>
              <p>The LPA tells us about transfer restrictions, ROFR rights, and GP consent requirements.</p>
            </div>
            <div className="doc-card">
              <div className="doc-num">03</div>
              <h4>Capital Account Statement</h4>
              <p>Current unfunded commitment, distributions to date, and net asset value from the GP.</p>
            </div>
            <div className="doc-card">
              <div className="doc-num">04</div>
              <h4>Quarterly Report</h4>
              <p>Most recent GP letter with portfolio company updates and fund&#8209;level performance.</p>
            </div>
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
