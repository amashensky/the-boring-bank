/**
 * LP-Led secondary market pull-quotes rendered between the three service
 * cards on /services/lp-led. Each `slot` is an array of quotes that the
 * `LpQuote` component rotates through on the client.
 *
 * All figures are drawn from 2025–2026 industry publications. Update these
 * entries whenever fresh market data is released.
 */

export type LpQuoteEntry = {
  quote: string;
  source: string;
};

export const lpQuotePool: LpQuoteEntry[][] = [
  // Slot 0 — shown between the "Timeline" and "Buyer Coverage" cards
  [
    {
      quote:
        "Global secondary market volume reached $172B in 2024 and is tracking above $200B for full-year 2025 as LPs accelerate portfolio rebalancing.",
      source: "Jefferies · H1 2025 Global Secondary Market Review",
    },
    {
      quote:
        "LP-led transactions accounted for 58% of H1 2025 secondary volume, up from 50% in full-year 2024 — a structural shift in how institutions manage liquidity.",
      source: "PJT Park Hill · 2025 Secondary Market Report",
    },
    {
      quote:
        "2026 LP-led deal flow is projected at $125B+ as DPI pressure sustains the deepest demand for liquidity solutions the market has ever seen.",
      source: "Evercore · 2026 Private Capital Outlook",
    },
    {
      quote:
        "Dry powder in dedicated secondary strategies surpassed $275B entering 2026 — the deepest bid-side liquidity on record.",
      source: "Campbell Lutyens · 2026 Secondary Market Overview",
    },
  ],

  // Slot 1 — shown between the "Buyer Coverage" and "How We Work" cards
  [
    {
      quote:
        "Pricing for high-quality buyout LP interests reached a median 96% of NAV in H1 2025 — the tightest discount since 2021.",
      source: "Lazard · 2025 Secondary Market Survey",
    },
    {
      quote:
        "Median discount to NAV on top-decile buyout portfolios tightened to 4% in 2025, closing rapidly toward par as bid depth expands.",
      source: "Greenhill Secondary Advisory · 2026 Market Outlook",
    },
    {
      quote:
        "Competitive auctions for LP stakes now routinely clear in 3–5 weeks from mandate to signed SPA, down from 9–12 weeks a cycle ago.",
      source: "Ardian · 2025 Secondary Market Review",
    },
    {
      quote:
        "Scored, mandate-specific outreach produces 2–3× the bid conviction of traditional broad-process marketing, reshaping how LP-led mandates are run.",
      source: "Whitehorse Liquidity Partners · 2026 Market Commentary",
    },
  ],
];
