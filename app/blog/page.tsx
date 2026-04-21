export const metadata = {
  title: "Blog. The Boring Bank.",
  description: "Commentary and updates from The Boring Bank.",
};

export default function BlogPage() {
  return (
    <>
      <header className="page-intro">
        <div className="container inner">
          <div className="eyebrow reveal">Media</div>
          <h1 className="reveal reveal-1">Blog</h1>
        </div>
      </header>
      <section style={{ paddingBottom: 80 }}>
        <div className="container-narrow">
          <p style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.7 }}>No posts published yet.</p>
        </div>
      </section>
    </>
  );
}
