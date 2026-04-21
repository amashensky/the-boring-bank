/** Illustrative secondary LP-stake comps for the public market-comps tool (not transactional data). */

export type SecondaryStrategy = "Buyout" | "Growth" | "Venture" | "Infra" | "Credit" | "Secondaries";
export type CompRegion = "NA" | "EU" | "APAC";

export type SecondaryMarketComp = {
  id: string;
  strategy: SecondaryStrategy;
  vintageYear: number;
  region: CompRegion;
  /** Reported pricing as % of latest reported NAV */
  navPct: number;
  sizeBand: string;
  quarter: string;
  /** Generic sector tag */
  sleeve: string;
};

export const SECONDARY_MARKET_COMPS: SecondaryMarketComp[] = [
  { id: "1", strategy: "Buyout", vintageYear: 2018, region: "NA", navPct: 97.2, sizeBand: "$4–12M", quarter: "Q4 '25", sleeve: "North America diversified" },
  { id: "2", strategy: "Buyout", vintageYear: 2016, region: "NA", navPct: 101.4, sizeBand: "$8–22M", quarter: "Q4 '25", sleeve: "Industrials tilt" },
  { id: "3", strategy: "Growth", vintageYear: 2019, region: "NA", navPct: 93.8, sizeBand: "$2–6M", quarter: "Q3 '25", sleeve: "Software & services" },
  { id: "4", strategy: "Venture", vintageYear: 2020, region: "NA", navPct: 88.5, sizeBand: "$1–4M", quarter: "Q3 '25", sleeve: "Cross-stage venture" },
  { id: "5", strategy: "Buyout", vintageYear: 2017, region: "EU", navPct: 99.1, sizeBand: "€6–15M", quarter: "Q3 '25", sleeve: "Western Europe" },
  { id: "6", strategy: "Infra", vintageYear: 2019, region: "NA", navPct: 102.6, sizeBand: "$10–28M", quarter: "Q2 '25", sleeve: "Core / core-plus" },
  { id: "7", strategy: "Growth", vintageYear: 2021, region: "NA", navPct: 91.2, sizeBand: "$3–9M", quarter: "Q2 '25", sleeve: "Consumer & healthcare" },
  { id: "8", strategy: "Buyout", vintageYear: 2015, region: "NA", navPct: 103.8, sizeBand: "$12–35M", quarter: "Q2 '25", sleeve: "Large-cap buyout" },
  { id: "9", strategy: "Credit", vintageYear: 2018, region: "NA", navPct: 98.9, sizeBand: "$5–14M", quarter: "Q1 '25", sleeve: "Direct lending sleeve" },
  { id: "10", strategy: "Venture", vintageYear: 2019, region: "EU", navPct: 86.7, sizeBand: "€2–7M", quarter: "Q1 '25", sleeve: "Early / growth" },
  { id: "11", strategy: "Buyout", vintageYear: 2020, region: "APAC", navPct: 95.4, sizeBand: "$6–18M", quarter: "Q1 '25", sleeve: "Asia-Pacific regional" },
  { id: "12", strategy: "Secondaries", vintageYear: 2017, region: "NA", navPct: 100.2, sizeBand: "$15–40M", quarter: "Q4 '24", sleeve: "Fund-of-funds strip" },
  { id: "13", strategy: "Growth", vintageYear: 2018, region: "NA", navPct: 94.5, sizeBand: "$4–11M", quarter: "Q4 '24", sleeve: "B2B SaaS" },
  { id: "14", strategy: "Buyout", vintageYear: 2019, region: "NA", navPct: 96.1, sizeBand: "$7–20M", quarter: "Q4 '24", sleeve: "Healthcare services" },
  { id: "15", strategy: "Infra", vintageYear: 2016, region: "EU", navPct: 101.9, sizeBand: "€9–24M", quarter: "Q3 '24", sleeve: "Renewables-heavy" },
  { id: "16", strategy: "Venture", vintageYear: 2021, region: "NA", navPct: 84.2, sizeBand: "$1–3M", quarter: "Q3 '24", sleeve: "Late-stage marks" },
  { id: "17", strategy: "Buyout", vintageYear: 2014, region: "NA", navPct: 104.5, sizeBand: "$20–55M", quarter: "Q3 '24", sleeve: "Mega-cap legacy" },
  { id: "18", strategy: "Growth", vintageYear: 2020, region: "APAC", navPct: 92.9, sizeBand: "$5–12M", quarter: "Q2 '24", sleeve: "Regional growth" },
  { id: "19", strategy: "Credit", vintageYear: 2019, region: "EU", navPct: 97.6, sizeBand: "€4–10M", quarter: "Q2 '24", sleeve: "CLO / private credit" },
  { id: "20", strategy: "Buyout", vintageYear: 2018, region: "NA", navPct: 98.3, sizeBand: "$5–16M", quarter: "Q2 '24", sleeve: "Middle market" },
  { id: "21", strategy: "Secondaries", vintageYear: 2018, region: "NA", navPct: 99.4, sizeBand: "$9–25M", quarter: "Q1 '24", sleeve: "Single-asset continuation" },
  { id: "22", strategy: "Buyout", vintageYear: 2017, region: "NA", navPct: 100.8, sizeBand: "$11–30M", quarter: "Q1 '24", sleeve: "Consumer retail" },
  { id: "23", strategy: "Venture", vintageYear: 2018, region: "NA", navPct: 89.1, sizeBand: "$2–5M", quarter: "Q1 '24", sleeve: "Enterprise software" },
  { id: "24", strategy: "Growth", vintageYear: 2019, region: "EU", navPct: 93.4, sizeBand: "€3–8M", quarter: "Q4 '23", sleeve: "Fintech & payments" },
  { id: "25", strategy: "Infra", vintageYear: 2017, region: "NA", navPct: 103.1, sizeBand: "$14–32M", quarter: "Q4 '23", sleeve: "Midstream / utilities" },
  { id: "26", strategy: "Buyout", vintageYear: 2020, region: "NA", navPct: 95.7, sizeBand: "$4–13M", quarter: "Q4 '23", sleeve: "Technology services" },
  { id: "27", strategy: "Credit", vintageYear: 2020, region: "NA", navPct: 96.8, sizeBand: "$3–9M", quarter: "Q3 '23", sleeve: "Asset-based" },
  { id: "28", strategy: "Buyout", vintageYear: 2016, region: "EU", navPct: 102.2, sizeBand: "€7–19M", quarter: "Q3 '23", sleeve: "Business services" },
];

export const STRATEGY_OPTIONS: { value: "" | SecondaryStrategy; label: string }[] = [
  { value: "", label: "All strategies" },
  { value: "Buyout", label: "Buyout" },
  { value: "Growth", label: "Growth equity" },
  { value: "Venture", label: "Venture" },
  { value: "Infra", label: "Infrastructure" },
  { value: "Credit", label: "Private credit" },
  { value: "Secondaries", label: "Secondaries / FoF" },
];

export const REGION_OPTIONS: { value: "" | CompRegion; label: string }[] = [
  { value: "", label: "All regions" },
  { value: "NA", label: "North America" },
  { value: "EU", label: "Europe" },
  { value: "APAC", label: "Asia-Pacific" },
];
