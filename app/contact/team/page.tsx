import TeamContactForm from "./TeamContactForm";

export const metadata = {
  title: "Contact the Team. The Boring Bank.",
  description: "Reach the team with a general question or introduction.",
};

export default function ContactTeamPage() {
  return (
    <>
      <header className="page-intro">
        <div className="container inner">
          <div className="eyebrow reveal">Contact</div>
          <h1 className="reveal reveal-1">Reach the team.</h1>
        </div>
      </header>

      <section>
        <div className="container-narrow">
          <TeamContactForm />
        </div>
      </section>
    </>
  );
}
