import Link from "next/link";
import Arrow from "./Arrow";
import { APP_SELLER_SIGNUP, SITE_ADVISORY_INQUIRY } from "@/lib/appUrls";

type Props = {
  eyebrow?: string;
  title?: React.ReactNode;
  lede?: string;
  primaryHref?: string;
  primaryLabel?: string;
  ghostHref?: string;
  ghostLabel?: string;
  /** Charcoal/ink accent strip for LP-led (matches `--lp-blue*` tokens in globals.css — now recolored to ink). */
  tone?: "default" | "lp-led";
  /** Let title and lede breathe on one line on desktop. */
  wide?: boolean;
};

export default function CtaBand({
  eyebrow,
  title = "Ready to maximize liquidity value?",
  lede,
  primaryHref = APP_SELLER_SIGNUP,
  primaryLabel = "List Your Asset",
  ghostHref = SITE_ADVISORY_INQUIRY,
  ghostLabel = "Speak with a Banker",
  tone = "default",
  wide = false,
}: Props) {
  const bandClass = ["cta-band", tone === "lp-led" ? "cta-band--lp-led" : "", wide ? "cta-band--wide" : ""].filter(Boolean).join(" ");
  return (
    <section className={bandClass}>
      <div className="container-narrow inner">
        {eyebrow ? <div className="cta-band__eyebrow">{eyebrow}</div> : null}
        <h2>{title}</h2>
        {lede ? <p className="lede">{lede}</p> : null}
        <div className="cta-row">
          <Link href={primaryHref} className="btn btn-primary">{primaryLabel} <Arrow /></Link>
          <Link href={ghostHref} className="btn btn-light-ghost">{ghostLabel}</Link>
        </div>
      </div>
    </section>
  );
}
