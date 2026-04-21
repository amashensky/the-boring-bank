import Link from "next/link";
import LogoText from "./LogoText";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="foot-grid">
          <div className="foot-col">
            <Link href="/" className="logo" style={{ marginBottom: 4, color: "#fff" }} aria-label="The Boring Bank home">
              <LogoText size={28} />
            </Link>
            <p className="foot-about">
              The Investment Bank for LP&#8209;Led Secondaries.
            </p>
          </div>
          <div className="foot-col">
            <h4>Services</h4>
            <Link href="/services/lp-led">LP&#8209;Led Secondary</Link>
            <Link href="/services/nav-lending">NAV Lending</Link>
            <Link href="/services/advisory">Advisory</Link>
          </div>
          <div className="foot-col">
            <h4>How It Works</h4>
            <Link href="/how-it-works">The Process</Link>
            <Link href="/for-buyers">For Buyers</Link>
            <Link href="/contact">Get Started</Link>
          </div>
          <div className="foot-col">
            <h4>Company</h4>
            <Link href="/team">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/careers">Careers</Link>
          </div>
          <div className="foot-col">
            <h4>Media</h4>
            <Link href="/media">News</Link>
            <Link href="/blog">Blog</Link>
          </div>
          <div className="foot-col">
            <h4>Social</h4>
            <a href="https://www.linkedin.com/company/theboringbank" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://x.com/theboringbank" target="_blank" rel="noopener noreferrer">X</a>
          </div>
        </div>
        <div className="foot-bottom">
          <div>© {new Date().getFullYear()} The Boring Bank, Inc. All rights reserved.</div>
        </div>
        <p className="disclaimer">
          The information on this website is for general informational purposes only and does not
          constitute investment, legal, tax, or other professional advice, an offer to sell or a
          solicitation of an offer to buy any security, or a recommendation regarding any transaction.
          Any services described are intended solely for institutional and accredited investors.
          Interests in private funds and secondary transactions involve substantial risk, illiquidity,
          and potential loss of capital. Past performance is not indicative of future results. Any
          timelines, figures, or outcomes referenced are illustrative and bespoke to each engagement;
          no specific result is guaranteed. For disclosures or further information, please contact us directly.
        </p>
      </div>
    </footer>
  );
}
