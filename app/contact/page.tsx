import ContactForm from "./ContactForm";

export const metadata = {
  title: "Contact. The Boring Bank.",
  description: "Request a valuation or schedule an introduction.",
};

export default function ContactPage() {
  return (
    <>
      <header className="page-intro">
        <div className="container inner">
          <div className="eyebrow reveal">Get Started</div>
          <h1 className="reveal reveal-1">Tell us about your position.</h1>
        </div>
      </header>

      <section>
        <div className="container-narrow">
          <ContactForm />
        </div>
      </section>

      <section style={{ background: "var(--off)", borderTop: "1px solid var(--line-soft)", padding: "64px 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 48 }} className="contact-grid">
            <div>
              <div className="section-label" style={{ marginBottom: 14 }}>Direct</div>
              <a style={{ display: "block", fontSize: 14, color: "var(--ink)", marginBottom: 6 }} href="mailto:hello@theboringbank.com">hello@theboringbank.com</a>
              <a style={{ display: "block", fontSize: 14, color: "var(--ink-2)" }} href="tel:+12125551234">+1 (212) 555&#8209;1234</a>
            </div>
            <div>
              <div className="section-label" style={{ marginBottom: 14 }}>New York</div>
              <p style={{ fontSize: 14, lineHeight: 1.7, color: "var(--ink-2)" }}>One Madison Avenue<br />New York, NY 10010</p>
            </div>
            <div>
              <div className="section-label" style={{ marginBottom: 14 }}>For Sellers</div>
              <a style={{ display: "block", fontSize: 14, color: "var(--ink)" }} href="mailto:sellers@theboringbank.com">sellers@theboringbank.com</a>
            </div>
            <div>
              <div className="section-label" style={{ marginBottom: 14 }}>For Buyers</div>
              <a style={{ display: "block", fontSize: 14, color: "var(--ink)" }} href="mailto:buyers@theboringbank.com">buyers@theboringbank.com</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
