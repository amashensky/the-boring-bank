import Link from "next/link";
import LogoText from "./LogoText";

function Chevron() {
  return (
    <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Nav({ solid = false }: { solid?: boolean }) {
  return (
    <nav className={solid ? "nav nav-solid" : "nav"}>
      <div className="container nav-wrap">
        <div className="nav-left">
          <Link href="/" className="logo">
            <LogoText size={26} />
          </Link>
          <div className="nav-links">
            <div className="nav-group">
              <button type="button">Services <Chevron /></button>
              <div className="nav-dropdown">
                <Link href="/services/lp-led">LP&#8209;Led Secondary<span className="sub">Sell your LP stake to qualified buyers</span></Link>
                <Link href="/services/gp-led">GP&#8209;Led Liquidity<span className="sub">Continuation vehicles and restructurings</span></Link>
                <Link href="/for-buyers">Buyer Network<span className="sub">Join our curated institutional network</span></Link>
                <Link href="/services/structured">Structured Solutions<span className="sub">NAV financing and preferred equity</span></Link>
              </div>
            </div>
            <div className="nav-group">
              <button type="button">How It Works <Chevron /></button>
              <div className="nav-dropdown">
                <Link href="/how-it-works">The Process<span className="sub">See each step from intake to close</span></Link>
                <Link href="/for-sellers">For Sellers<span className="sub">What LPs can expect</span></Link>
                <Link href="/for-buyers">For Buyers<span className="sub">How buyers access the network</span></Link>
              </div>
            </div>
            <div className="nav-group">
              <button type="button">Company <Chevron /></button>
              <div className="nav-dropdown">
                <Link href="/team">About<span className="sub">Who we are and how we operate</span></Link>
                <Link href="/contact">Contact<span className="sub">Talk to our team about your transaction</span></Link>
                <Link href="/careers">Careers<span className="sub">Join our team and culture</span></Link>
              </div>
            </div>
          </div>
        </div>
        <div className="nav-right">
          <Link href="/contact" className="nav-signin">Sign In</Link>
          <Link href="/contact" className="nav-cta">Get Started</Link>
        </div>
      </div>
    </nav>
  );
}
