import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="foot-grid">
          <div className="foot-col">
            <Link href="/" className="logo" style={{ marginBottom: 4, color: "#fff" }}>
              <Logo size={24} />
              <div className="logo-text" style={{ marginLeft: 10 }}>The Boring Bank</div>
            </Link>
            <p className="foot-about">
              The investment bank for secondaries. Sub&#8209;$100M specialist serving LPs and GPs.
            </p>
          </div>
          <div className="foot-col">
            <h4>Services</h4>
            <Link href="/for-sellers">For Sellers</Link>
            <Link href="/for-buyers">For Buyers</Link>
            <Link href="/how-it-works">How It Works</Link>
            <Link href="/contact">Get Started</Link>
          </div>
          <div className="foot-col">
            <h4>Company</h4>
            <Link href="/team">Team</Link>
            <Link href="/careers">Careers</Link>
            <Link href="/contact">Contact</Link>
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
