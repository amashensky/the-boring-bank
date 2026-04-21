"use client";

import { useEffect, useState } from "react";
import { lpQuotePool, type LpQuoteEntry } from "@/lib/lpQuotes";

/**
 * Renders one pull-quote from the slot's pool. A fresh random entry is
 * chosen on each page visit (via useEffect after hydration) and stays on
 * the page for the duration of the session — no mid-view rotation.
 */
export default function LpQuote({ slot = 0 }: { slot?: number }) {
  const pool = lpQuotePool[slot] ?? lpQuotePool[0];
  const [entry, setEntry] = useState<LpQuoteEntry | null>(null);

  useEffect(() => {
    if (!pool.length) return;
    const pick = pool[Math.floor(Math.random() * pool.length)];
    setEntry(pick);
  }, [pool]);

  return (
    <figure className="lp-pull-quote sr sr-right">
      {entry && (
        <>
          <blockquote className="lp-pull-quote-text">{entry.quote}</blockquote>
          <figcaption className="lp-pull-quote-source">{entry.source}</figcaption>
        </>
      )}
    </figure>
  );
}
