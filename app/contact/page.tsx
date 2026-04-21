import ContactForm from "./ContactForm";
import ContactNextSteps from "@/components/ContactNextSteps";

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

      <section className="ctc-section">
        <div className="ctc-bg" aria-hidden>
          <div className="ctc-grain" />
          <div className="ctc-glow ctc-glow--sage" />
          <div className="ctc-glow ctc-glow--amber" />
        </div>
        <div className="container ctc-grid">
          <div className="ctc-form-col">
            <ContactForm />
          </div>

          <aside className="ctc-side-col">
            <ContactNextSteps />
          </aside>
        </div>
      </section>
    </>
  );
}
