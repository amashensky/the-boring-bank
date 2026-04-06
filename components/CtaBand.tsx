import Link from "next/link";
import Arrow from "./Arrow";

type Props = {
  eyebrow?: string;
  title?: React.ReactNode;
  lede?: string;
  primaryHref?: string;
  primaryLabel?: string;
  ghostHref?: string;
  ghostLabel?: string;
};

export default function CtaBand({
  eyebrow = "Start today",
  title = "Ready to maximize liquidity value?",
  lede = "Get in touch with our secondaries team and start your journey to a faster, better-priced outcome.",
  primaryHref = "/contact",
  primaryLabel = "List Your Asset",
  ghostHref = "/for-buyers",
  ghostLabel = "Join as a Buyer",
}: Props) {
  return (
    <section className="cta-band">
      <div className="container-narrow inner">
        <div className="eyebrow">{eyebrow}</div>
        <h2>{title}</h2>
        <p className="lede">{lede}</p>
        <div className="cta-row">
          <Link href={primaryHref} className="btn btn-primary">{primaryLabel} <Arrow /></Link>
          <Link href={ghostHref} className="btn btn-light-ghost">{ghostLabel}</Link>
        </div>
      </div>
    </section>
  );
}
