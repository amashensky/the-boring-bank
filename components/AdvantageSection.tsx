"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  AIValuationMockup,
  OnboardTrackMockup,
  AutoBuyerMatchingMockup,
  MarketReportMockup,
} from "./ProductVisuals";

export type AdvantageItem = {
  title: string;
  icon: ReactNode;
  body: string;
  bodyClass?: string;
  visual: React.ReactNode;
};

const ITEMS: AdvantageItem[] = [
  {
    title: "AI Valuation & Matching",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 2.5l2 4 4.5.65-3.25 3.17.77 4.48L11 12.7l-4.02 2.1.77-4.48L4.5 7.15 9 6.5l2-4z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
      </svg>
    ),
    body: "We rebuild NAV from K\u20111s, layer dozens of comps, and produce a confidence band. Then we score every buyer mandate against your listing for a ranked shortlist.",
    visual: <AIValuationMockup />,
  },
  {
    title: "Seamless onboard & track",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M5 12l4 4 8-8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 15l5-5 4 3.5 5-7 4 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    body: "Upload K\u20111s and the LPA, verify identity, and connect custody in minutes. Then follow every stage from listing to wire in one live workspace with no email chains.",
    visual: <OnboardTrackMockup />,
  },
  {
    title: "Auto Buyer Matching",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 3v4M11 15v4M3 11h4M15 11h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        <circle cx="11" cy="11" r="3.5" stroke="currentColor" strokeWidth="1.3"/>
      </svg>
    ),
    body: "We continuously run your package against our curated buyer universe. Only the strongest matches are recommended, so outreach stays tight, explainable, and on your terms.",
    visual: <AutoBuyerMatchingMockup />,
  },
  {
    title: "Understand market value",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="3" y="13" width="4" height="6" rx="0.8" stroke="currentColor" strokeWidth="1.3"/>
        <rect x="9" y="9" width="4" height="10" rx="0.8" stroke="currentColor" strokeWidth="1.3"/>
        <rect x="15" y="4" width="4" height="15" rx="0.8" stroke="currentColor" strokeWidth="1.3"/>
      </svg>
    ),
    body: "Access a live database of 50+ comparable transactions so you know exactly where your position prices before any buyer makes an offer.",
    visual: <MarketReportMockup />,
  },
];

export default function AdvantageSection({ items }: { items?: AdvantageItem[] } = {}) {
  const list = items ?? ITEMS;
  const [active, setActive] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);

  // Scroll-triggered entrance: fades header, slides mockup in from left, stagger-slides accordion from right.
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
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={rootRef} className={`adv-split adv-reveal${revealed ? " adv-reveal--on" : ""}`}>
      <div className="adv-visual">
        {/* Crossfade wrapper: every item renders, only the active one is visible */}
        <div className="adv-visual-stack">
          {list.map((item, i) => (
            <div
              key={i}
              className={`adv-visual-layer${active === i ? " adv-visual-layer--on" : ""}`}
              aria-hidden={active !== i}
            >
              {item.visual}
            </div>
          ))}
        </div>
      </div>
      <div className="adv-accord">
        {list.map((item, i) => (
          <div
            key={i}
            className={`aa-item aa-reveal${active === i ? " aa-open" : ""}`}
            style={{ ["--aa-reveal-delay" as string]: `${i * 90}ms` }}
          >
            <button type="button" className="aa-q" onClick={() => setActive(i)}>
              <span className={`aa-icon-bare${active === i ? " aa-icon-bare-on" : ""}`}>{item.icon}</span>
              <span className="aa-title">{item.title}</span>
              <span className="aa-toggle">{active === i ? "−" : "+"}</span>
            </button>
            <div className="aa-panel-grid" aria-hidden={active !== i}>
              <div className="aa-panel-inner">
                <p className={["aa-body", item.bodyClass].filter(Boolean).join(" ")}>{item.body}</p>
                <div className="aa-inline-visual">{item.visual}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
