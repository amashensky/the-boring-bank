"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Downward-flowing NAV lending process tree.
 *
 *        Your inquiry
 *              |
 *       Senior advisor
 *          /  |  |  \
 *      L1   L2  L3  L4     (lender branches)
 *          \  |  |  /
 *       Term sheet
 *              |
 *        Close & fund
 *
 * Each stage reveals sequentially once the tree scrolls into view. The
 * lender branch row wiggles with a subtle idle shimmer so the network
 * feels alive on the static marketing page.
 */
export default function NavLendingFlowTree() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [lit, setLit] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setLit(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.25 }
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`nav-flow-tree ${lit ? "is-lit" : ""}`}
      aria-label="NAV lending process flow"
    >
      {/* Background video — same night loop as the home hero for continuity */}
      <video
        className="nav-flow-tree__video"
        src="/night-loop.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden
      />
      <div className="nav-flow-tree__veil" aria-hidden />

      {/* Stage 1 — Inquiry */}
      <div className="nav-flow-node nav-flow-node--start nav-flow-stage-1">
        <div className="nav-flow-node__eyebrow">Step 1</div>
        <div className="nav-flow-node__title">Your inquiry</div>
        <div className="nav-flow-node__sub">
          NAV, facility size, and timing.
        </div>
      </div>

      <div className="nav-flow-conn nav-flow-conn-1" aria-hidden>
        <span className="nav-flow-conn__arrow" />
      </div>

      {/* Stage 2 — Advisor review */}
      <div className="nav-flow-node nav-flow-node--advisor nav-flow-stage-2">
        <div className="nav-flow-node__eyebrow">Step 2</div>
        <div className="nav-flow-node__title">Senior advisor review</div>
        <div className="nav-flow-node__sub">
          Structured facility. Shortlisted lenders.
        </div>
      </div>

      {/* Branch splitter */}
      <svg
        className="nav-flow-branch"
        viewBox="0 0 400 60"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path d="M200 0 V18 M200 18 C200 28, 60 30, 60 60" />
        <path d="M200 0 V18 M200 18 C200 28, 146 30, 146 60" />
        <path d="M200 0 V18 M200 18 C200 28, 254 30, 254 60" />
        <path d="M200 0 V18 M200 18 C200 28, 340 30, 340 60" />
      </svg>

      {/* Stage 3 — Lender network row */}
      <div className="nav-flow-lenders nav-flow-stage-3" role="list">
        <div className="nav-flow-lender" role="listitem">
          <div className="nav-flow-lender__badge">L1</div>
          <div className="nav-flow-lender__name">Insurance Cap.</div>
        </div>
        <div className="nav-flow-lender" role="listitem">
          <div className="nav-flow-lender__badge">L2</div>
          <div className="nav-flow-lender__name">Private Credit</div>
        </div>
        <div className="nav-flow-lender" role="listitem">
          <div className="nav-flow-lender__badge">L3</div>
          <div className="nav-flow-lender__name">Bank Facility</div>
        </div>
        <div className="nav-flow-lender" role="listitem">
          <div className="nav-flow-lender__badge">L4</div>
          <div className="nav-flow-lender__name">Alt. Lender</div>
        </div>
      </div>

      {/* Converge splitter */}
      <svg
        className="nav-flow-branch nav-flow-branch--converge"
        viewBox="0 0 400 60"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path d="M60 0 C60 30, 200 32, 200 60" />
        <path d="M146 0 C146 30, 200 32, 200 60" />
        <path d="M254 0 C254 30, 200 32, 200 60" />
        <path d="M340 0 C340 30, 200 32, 200 60" />
      </svg>

      {/* Stage 4 — Term sheet */}
      <div className="nav-flow-node nav-flow-node--term nav-flow-stage-4">
        <div className="nav-flow-node__eyebrow">Step 3</div>
        <div className="nav-flow-node__title">Term sheet</div>
        <div className="nav-flow-node__sub">
          Transparent covenants and pricing.
        </div>
      </div>

      <div className="nav-flow-conn nav-flow-conn-2" aria-hidden>
        <span className="nav-flow-conn__arrow" />
      </div>

      {/* Stage 5 — Close */}
      <div className="nav-flow-node nav-flow-node--close nav-flow-stage-5">
        <div className="nav-flow-node__eyebrow">Step 4</div>
        <div className="nav-flow-node__title">Close &amp; fund</div>
        <div className="nav-flow-node__sub">
          6&ndash;8 weeks from term sheet to wire.
        </div>
      </div>
    </div>
  );
}
