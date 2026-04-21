"use client";

import { useState } from "react";
import {
  AdvisoryGPMock,
  AdvisoryPortfolioMock,
  AdvisoryTransactionMock,
  AdvisoryValuationMock,
} from "./AdvisoryVisuals";

const ITEMS = [
  {
    title: "Portfolio Advisory",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
        <rect x="3" y="4" width="16" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
        <path d="M7 14l3-3 3 2 4-5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
    body: "Screen your full LP book. Identify the best exits. Sequence dispositions for maximum proceeds.",
    visual: <AdvisoryPortfolioMock />,
  },
  {
    title: "GP Advisory",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
        <circle cx="11" cy="8" r="3" stroke="currentColor" strokeWidth="1.3" />
        <path d="M5 18c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
    body: "Structure continuation vehicles and tender offers. Pricing, investor comms, and process design.",
    visual: <AdvisoryGPMock />,
  },
  {
    title: "Valuation Advisory",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
        <path d="M4 16V6M9 16v-7M14 16V9M19 16V4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
    body: "Independent NAV analysis and pricing opinions. Built from comps, not models. IC and board ready.",
    visual: <AdvisoryValuationMock />,
  },
  {
    title: "Transaction Advisory",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
        <path d="M5 11h12M11 5v12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        <rect x="3" y="3" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.3" />
      </svg>
    ),
    body: "Complex secondaries that fall outside a standard sale. Strip transactions, syndicated buyers, bespoke structures.",
    visual: <AdvisoryTransactionMock />,
  },
];

export default function AdvisoryAccordion() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="adv-advisory-stack">
      <div className="adv-accord adv-accord--advisory">
        {ITEMS.map((item, i) => (
          <div key={item.title} className={`aa-item${active === i ? " aa-open" : ""}`}>
            <button type="button" className="aa-q" onClick={() => setActive(active === i ? null : i)}>
              <span className={`aa-icon-bare${active === i ? " aa-icon-bare-on" : ""}`}>{item.icon}</span>
              <span className="aa-title">{item.title}</span>
              <span className="aa-toggle">{active === i ? "−" : "+"}</span>
            </button>
            <div className="aa-panel-grid" aria-hidden={active !== i}>
              <div className="aa-panel-inner">
                <p className="aa-body aa-body--solo">{item.body}</p>
                <div className="adv-advisory-visual-under" aria-hidden>
                  {item.visual}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
