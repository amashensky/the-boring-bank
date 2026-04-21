import ScrollRevealInit from "@/components/ScrollRevealInit";

export const metadata = {
  title: "News. The Boring Bank.",
  description: "Press, announcements, and media contact for The Boring Bank.",
};

export default function MediaPage() {
  return (
    <>
      <ScrollRevealInit />
      <header className="page-intro">
        <div className="container inner">
          <div className="eyebrow reveal">Media</div>
          <h1 className="reveal reveal-1">News</h1>
        </div>
      </header>

      <section className="media-coverage sr">
        <div className="container">
          <div className="section-label">Coverage</div>
          <h2 className="with-accent">Coverage, coming soon.</h2>
          <p className="section-lede" style={{ marginBottom: 32, maxWidth: 640 }}>
            As we mark our first closings and platform milestones, coverage will appear here.
          </p>
          <div className="coverage-grid">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="coverage-card"
                style={{ animationDelay: `${i * 0.12}s` }}
              >
                <div className="coverage-skeleton-tag" />
                <div className="coverage-skeleton-line coverage-skeleton-line--title" />
                <div className="coverage-skeleton-line coverage-skeleton-line--title coverage-skeleton-line--short" />
                <div className="coverage-skeleton-meta">
                  <div className="coverage-skeleton-dot" />
                  <div className="coverage-skeleton-line coverage-skeleton-line--meta" />
                </div>
                <div className="coverage-skeleton-line coverage-skeleton-line--body" />
                <div className="coverage-skeleton-line coverage-skeleton-line--body" />
                <div className="coverage-skeleton-line coverage-skeleton-line--body coverage-skeleton-line--short" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="media-contact sr sr-1">
        <div className="container">
          <div className="media-contact-panel">
            <div className="media-contact-left">
              <div className="section-label">Media Contact</div>
              <h2 className="with-accent">Press inquiries.</h2>
              <p style={{ color: "var(--ink-2)", lineHeight: 1.65, maxWidth: 520, fontSize: 16 }}>
                For press, research, or speaking requests, reach the communications desk directly. We respond within one business day.
              </p>
            </div>
            <div className="media-contact-right">
              <div className="media-contact-row">
                <div className="media-contact-label">Email</div>
                <div className="media-contact-value">press@theboringbank.com</div>
              </div>
              <div className="media-contact-row">
                <div className="media-contact-label">Office</div>
                <div className="media-contact-value">New York, NY</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
