"use client";

import { useEffect, useState } from "react";

const ADJECTIVES = [
  { label: "Boring" },
  { label: "Honest" },
  { label: "Guided" },
  { label: "Digital" },
  { label: "Tracked" },
];

const LONGEST = ADJECTIVES.reduce(
  (a, b) => (a.label.length > b.label.length ? a : b),
  ADJECTIVES[0]
).label;

const CYCLE_MS = 2400;
const SWAP_MS = 550;

export default function HowItWorksIntro() {
  const [i, setI] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);

  useEffect(() => {
    const id = window.setInterval(() => {
      setI((cur) => {
        setPrev(cur);
        return (cur + 1) % ADJECTIVES.length;
      });
    }, CYCLE_MS);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    if (prev === null) return;
    const id = window.setTimeout(() => setPrev(null), SWAP_MS + 60);
    return () => window.clearTimeout(id);
  }, [prev]);

  return (
    <header className="page-intro page-intro--lp-led">
      <div className="container inner">
        <div className="eyebrow reveal">The Process</div>
        <h1 className="reveal reveal-1 lp-intro-h1">
          A Transaction That&rsquo;s{" "}
          <span className="lp-wheel" aria-live="polite">
            <span className="lp-wheel__sizer" aria-hidden>
              {LONGEST}
            </span>
            {prev !== null && prev !== i && (
              <span
                key={`out-${prev}`}
                className="lp-wheel__slot lp-wheel__slot--out"
              >
                {ADJECTIVES[prev].label}
              </span>
            )}
            <span key={`in-${i}`} className="lp-wheel__slot lp-wheel__slot--in">
              {ADJECTIVES[i].label}
            </span>
          </span>
        </h1>
      </div>
    </header>
  );
}
