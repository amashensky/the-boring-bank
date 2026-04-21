"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import LogoText from "./LogoText";
import { APP_BUYER_SIGNUP, APP_SELLER_SIGNUP, APP_SIGN_IN } from "@/lib/appUrls";

function Chevron() {
  return (
    <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BurgerIcon({ open }: { open: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
      {open ? (
        <path
          d="M5 5l12 12M17 5L5 17"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      ) : (
        <>
          <path d="M4 7h14M4 11h14M4 15h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </>
      )}
    </svg>
  );
}

export default function Nav({ solid = false }: { solid?: boolean }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const showSolid = solid || menuOpen;

  useEffect(() => { setMounted(true); }, []);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    closeMenu();
  }, [pathname, closeMenu]);

  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen, closeMenu]);

  const navClass = ["nav", showSolid ? "nav-solid" : "", menuOpen ? "nav--menu-open" : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <nav className={navClass}>
      <div className="container nav-wrap">
        <div className="nav-brand">
          <Link href="/" className="logo" aria-label="The Boring Bank home">
            <LogoText size={30} />
          </Link>
        </div>
        <div className="nav-links nav-desktop-only nav-links--center">
            <div className="nav-group">
              <button type="button">Services <Chevron /></button>
              <div className="nav-dropdown">
                <Link href="/services/lp-led">LP&#8209;Led Secondary<span className="sub">Sell your LP stake to qualified buyers</span></Link>
                <Link href="/services/nav-lending">NAV Lending<span className="sub">Borrow against fund interests at NAV</span></Link>
                <Link href="/services/advisory">Advisory<span className="sub">Portfolio and transaction counsel</span></Link>
              </div>
            </div>
            <div className="nav-group">
              <button type="button">How It Works <Chevron /></button>
              <div className="nav-dropdown">
                <Link href="/how-it-works">The Process<span className="sub">See each step from intake to close</span></Link>
                <Link href="/for-buyers">For Buyers<span className="sub">Mandate-matched deal flow</span></Link>
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
            <div className="nav-group">
              <button type="button">Media <Chevron /></button>
              <div className="nav-dropdown">
                <Link href="/media">News<span className="sub">Press and announcements</span></Link>
                <Link href="/blog">Blog<span className="sub">Commentary and longer updates</span></Link>
              </div>
            </div>
          </div>
        <div className="nav-right nav-desktop-only">
          <Link href={APP_SIGN_IN} className="nav-signin">
            Sign In
          </Link>
          <div className="nav-group nav-cta-group">
            <button type="button" className="nav-cta">Get Started <Chevron /></button>
            <div className="nav-dropdown nav-dropdown-right">
              <Link href={APP_SELLER_SIGNUP}>I&rsquo;m Selling<span className="sub">Sell your LP or GP stake</span></Link>
              <Link href={APP_BUYER_SIGNUP}>I&rsquo;m Buying<span className="sub">Join our verified buyer network</span></Link>
            </div>
          </div>
        </div>
        <button
          type="button"
          className="nav-burger"
          aria-expanded={menuOpen}
          aria-controls="nav-mobile-panel"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <BurgerIcon open={menuOpen} />
        </button>
      </div>

      {mounted && menuOpen && createPortal(
        <>
          <button type="button" className="nav-mobile-backdrop" aria-label="Close menu" onClick={closeMenu} />
          <div id="nav-mobile-panel" className="nav-mobile-panel" role="dialog" aria-modal="true" aria-label="Site navigation">
            <button type="button" className="nav-mobile-close" aria-label="Close menu" onClick={closeMenu}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
                <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
            </button>
            <div className="nav-mobile-panel-inner">
              <div className="nav-mobile-section">
                <div className="nav-mobile-heading">Services</div>
                <Link href="/services/lp-led" className="nav-mobile-link">LP&#8209;Led Secondary</Link>
                <Link href="/services/nav-lending" className="nav-mobile-link">NAV Lending</Link>
                <Link href="/services/advisory" className="nav-mobile-link">Advisory</Link>
              </div>
              <div className="nav-mobile-section">
                <div className="nav-mobile-heading">How it works</div>
                <Link href="/how-it-works" className="nav-mobile-link">The Process</Link>
                <Link href="/for-buyers" className="nav-mobile-link">For Buyers</Link>
              </div>
              <div className="nav-mobile-section">
                <div className="nav-mobile-heading">Company</div>
                <Link href="/team" className="nav-mobile-link">About</Link>
                <Link href="/contact" className="nav-mobile-link">Contact</Link>
                <Link href="/careers" className="nav-mobile-link">Careers</Link>
              </div>
              <div className="nav-mobile-section">
                <div className="nav-mobile-heading">Media</div>
                <Link href="/media" className="nav-mobile-link">News</Link>
                <Link href="/blog" className="nav-mobile-link">Blog</Link>
              </div>
              <div className="nav-mobile-actions">
                <Link href={APP_SIGN_IN} className="nav-mobile-signin">
                  Sign In
                </Link>
                <Link href={APP_SELLER_SIGNUP} className="nav-mobile-cta nav-mobile-cta--primary">
                  I&rsquo;m Selling
                </Link>
                <Link href={APP_BUYER_SIGNUP} className="nav-mobile-cta">
                  I&rsquo;m Buying
                </Link>
              </div>
            </div>
          </div>
        </>,
        document.body
      )}
    </nav>
  );
}
