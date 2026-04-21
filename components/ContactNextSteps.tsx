"use client";

import { useEffect, useState } from "react";

const STEPS = [
  {
    kicker: "Step 1",
    title: "Intake",
    body: "Your details reach a banker directly — not a bot or a queue.",
  },
  {
    kicker: "Step 2",
    title: "Review",
    body: "We pull comps, mandate matches, and initial pricing to discuss.",
  },
  {
    kicker: "Step 3",
    title: "Call",
    body: "A 30&#8209;minute intro. Fully confidential, no commitment.",
  },
  {
    kicker: "Step 4",
    title: "Path",
    body: "You walk away with comps, a buyer list, and a clear next move.",
  },
];

const ROTATE_MS = 1800;

export default function ContactNextSteps() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setTick((t) => (t + 1) % (STEPS.length + 2));
    }, ROTATE_MS);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="ctc-next">
      <div className="ctc-next-head">
        <span className="ctc-next-kicker">After you submit</span>
        <span className="ctc-next-pulse" aria-hidden>
          <span className="ctc-next-pulse-dot" />
          <span className="ctc-next-pulse-ring" />
        </span>
      </div>
      <h3 className="ctc-next-title">What happens next.</h3>

      <ol className="ctc-steps">
        {STEPS.map((s, i) => {
          const shown = tick >= i;
          const active = tick === i;
          return (
            <li
              key={s.title}
              className={`ctc-step ${shown ? "is-on" : ""} ${active ? "is-active" : ""}`}
            >
              <div className="ctc-step-rail" aria-hidden>
                <span className="ctc-step-node">
                  <span className="ctc-step-node-inner" />
                </span>
                {i < STEPS.length - 1 ? <span className="ctc-step-line" /> : null}
              </div>
              <div className="ctc-step-body">
                <div className="ctc-step-meta">
                  <span className="ctc-step-kicker">{s.kicker}</span>
                </div>
                <div className="ctc-step-title">{s.title}</div>
                <p
                  className="ctc-step-desc"
                  dangerouslySetInnerHTML={{ __html: s.body }}
                />
              </div>
            </li>
          );
        })}
      </ol>

      <div className="ctc-next-foot">
        <div className="ctc-next-foot-row">
          <span className="ctc-next-foot-label">Response</span>
          <span className="ctc-next-foot-val">Within 1 business day</span>
        </div>
        <div className="ctc-next-foot-row">
          <span className="ctc-next-foot-label">Privacy</span>
          <span className="ctc-next-foot-val">Encrypted &middot; NDA on request</span>
        </div>
        <div className="ctc-next-foot-row">
          <span className="ctc-next-foot-label">Paid on</span>
          <span className="ctc-next-foot-val">Settlement only</span>
        </div>
      </div>
    </div>
  );
}
