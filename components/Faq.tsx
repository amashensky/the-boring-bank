"use client";

import { useEffect, useRef, useState } from "react";

export type FaqItem = { q: string; a: string };

const DEFAULT_FAQS: FaqItem[] = [
  {
    q: "What is The Boring Bank?",
    a: "The Boring Bank is an LP-led secondary investment bank and marketplace for private market fund interests. We help LPs sell fund positions to qualified institutional buyers with transparent pricing, AI-driven matching, and streamlined execution.",
  },
  {
    q: "How does The Boring Bank find buyers and sellers?",
    a: "Our platform uses AI to match your mandate or listing with verified counterparties. You get access to a broad network of LPs, GPs, and institutional investors actively transacting in secondaries.",
  },
  {
    q: "What types of interests can I buy or sell?",
    a: "We support private equity, venture capital, real estate, and infrastructure fund interests, both LP stakes and GP-led secondaries. Listings are vetted and include key fund and pricing information.",
  },
  {
    q: "How do fees work?",
    a: "We operate on a success-based model. There are no upfront retainers or hidden fees, and we only win when your transaction closes. Once a deal is underway, we disclose our fee structure clearly to you and your advisor, so there are no surprises.",
  },
  {
    q: "How fast is the process?",
    a: "Most clients receive initial interest and offers within 45 days, compared to many months in a traditional secondary process. Our platform automates matching, diligence, and documentation to speed up every step.",
  },
  {
    q: "How do I get started?",
    a: "Create an account as a seller or buyer in a few minutes. From there, our team helps you upload the relevant fund documents, verify your status, and prepare your listing or mandate — no upfront commitment required.",
  },
];

type FaqProps = {
  items?: FaqItem[];
};

export default function Faq({ items = DEFAULT_FAQS }: FaqProps) {
  const [open, setOpen] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setRevealed(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setRevealed(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -8% 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={rootRef}
      className={`faq faq-reveal${revealed ? " faq-reveal--on" : ""}`}
      style={{ marginTop: 56 }}
    >
      {items.map((item, i) => (
        <div
          key={i}
          className={`faq-item faq-stagger${open === i ? " faq-open" : ""}`}
          style={{ ["--faq-stagger-delay" as string]: `${i * 90}ms` }}
        >
          <button
            className="faq-q"
            type="button"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span className="faq-q-text">{item.q}</span>
            <span className="faq-toggle">{open === i ? "\u2212" : "+"}</span>
          </button>
          <div className="faq-panel-grid" aria-hidden={open !== i}>
            <div className="faq-panel-inner">
              <p className="faq-a">{item.a}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
