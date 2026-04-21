/** Illustrative buyer profiles for the public find-buyers matcher (demo only). */

export type PoolStrategy = "Buyout" | "Growth" | "Venture" | "Infra" | "Credit" | "Secondaries";
export type PoolRegion = "NA" | "EU" | "APAC";

export type BuyerPoolProfile = {
  id: string;
  desk: string;
  allocatorType: string;
  strategies: PoolStrategy[];
  vintageMin: number;
  vintageMax: number;
  ticketMinM: number;
  ticketMaxM: number;
  gpLedOk: boolean;
  regions: PoolRegion[];
  velocity: "Fast" | "Standard";
  diligenceStyle: string;
};

export const BUYER_POOL: BuyerPoolProfile[] = [
  {
    id: "b1",
    desk: "Summit Harbor Secondary Program",
    allocatorType: "Public pension",
    strategies: ["Buyout", "Secondaries", "Growth"],
    vintageMin: 2014,
    vintageMax: 2021,
    ticketMinM: 5,
    ticketMaxM: 75,
    gpLedOk: true,
    regions: ["NA"],
    velocity: "Standard",
    diligenceStyle: "IC memos + quarterly board packs",
  },
  {
    id: "b2",
    desk: "Granite Row Family Capital",
    allocatorType: "Single-family office",
    strategies: ["Buyout", "Growth", "Venture"],
    vintageMin: 2016,
    vintageMax: 2022,
    ticketMinM: 2,
    ticketMaxM: 25,
    gpLedOk: false,
    regions: ["NA"],
    velocity: "Fast",
    diligenceStyle: "Principal-led, tight timeline",
  },
  {
    id: "b3",
    desk: "Beacon Atlantic Allocator",
    allocatorType: "Endowment",
    strategies: ["Buyout", "Infra", "Secondaries"],
    vintageMin: 2013,
    vintageMax: 2020,
    ticketMinM: 10,
    ticketMaxM: 120,
    gpLedOk: true,
    regions: ["NA", "EU"],
    velocity: "Standard",
    diligenceStyle: "Full IC package, prefers stapled diligence",
  },
  {
    id: "b4",
    desk: "Riverside Sleeve II",
    allocatorType: "Asset manager (secondaries sleeve)",
    strategies: ["Buyout", "Growth", "Credit", "Secondaries"],
    vintageMin: 2015,
    vintageMax: 2023,
    ticketMinM: 3,
    ticketMaxM: 40,
    gpLedOk: true,
    regions: ["NA", "EU", "APAC"],
    velocity: "Fast",
    diligenceStyle: "Underwrites 8–12 LP positions / quarter",
  },
  {
    id: "b5",
    desk: "Sterling OCIO Secondaries",
    allocatorType: "OCIO / wealth platform",
    strategies: ["Buyout", "Growth"],
    vintageMin: 2016,
    vintageMax: 2022,
    ticketMinM: 1,
    ticketMaxM: 15,
    gpLedOk: false,
    regions: ["NA"],
    velocity: "Standard",
    diligenceStyle: "Client-specific disclosure windows",
  },
  {
    id: "b6",
    desk: "Cascade Infra & Real Assets",
    allocatorType: "Insurance balance sheet",
    strategies: ["Infra", "Credit", "Buyout"],
    vintageMin: 2012,
    vintageMax: 2019,
    ticketMinM: 15,
    ticketMaxM: 200,
    gpLedOk: true,
    regions: ["NA", "EU"],
    velocity: "Standard",
    diligenceStyle: "Heavy legal register + ratings context",
  },
  {
    id: "b7",
    desk: "Harbor Point Venture Secondaries",
    allocatorType: "Dedicated venture secondaries fund",
    strategies: ["Venture", "Growth"],
    vintageMin: 2017,
    vintageMax: 2023,
    ticketMinM: 1,
    ticketMaxM: 12,
    gpLedOk: true,
    regions: ["NA", "EU"],
    velocity: "Fast",
    diligenceStyle: "Marks + runway sensitivity tables",
  },
  {
    id: "b8",
    desk: "Meridian APAC Secondaries",
    allocatorType: "Regional allocator",
    strategies: ["Buyout", "Growth", "Secondaries"],
    vintageMin: 2015,
    vintageMax: 2022,
    ticketMinM: 4,
    ticketMaxM: 35,
    gpLedOk: true,
    regions: ["APAC", "NA"],
    velocity: "Fast",
    diligenceStyle: "Local counsel + FX-hedged bids",
  },
];

export type UserMandateInput = {
  strategy: PoolStrategy;
  vintageMin: number;
  vintageMax: number;
  ticketMinM: number;
  ticketMaxM: number;
  wantGpLed: boolean;
  region: PoolRegion;
};

function overlapLen(a0: number, a1: number, b0: number, b1: number): number {
  const lo = Math.max(a0, b0);
  const hi = Math.min(a1, b1);
  return Math.max(0, hi - lo);
}

export function scoreBuyerForMandate(b: BuyerPoolProfile, u: UserMandateInput): number {
  let raw = 0;
  if (b.strategies.includes(u.strategy)) raw += 38;
  else if (b.strategies.some((s) => s === "Secondaries" && u.strategy !== "Secondaries")) raw += 18;
  else raw += 6;

  const vUser = u.vintageMax - u.vintageMin || 1;
  const vB = b.vintageMax - b.vintageMin || 1;
  const vOverlap = overlapLen(u.vintageMin, u.vintageMax, b.vintageMin, b.vintageMax);
  raw += (vOverlap / Math.max(vUser, vB)) * 28;

  const tUser = u.ticketMaxM - u.ticketMinM || 1;
  const tB = b.ticketMaxM - b.ticketMinM || 1;
  const tOverlap = overlapLen(u.ticketMinM, u.ticketMaxM, b.ticketMinM, b.ticketMaxM);
  raw += (tOverlap / Math.max(tUser, tB)) * 22;

  if (u.wantGpLed) {
    raw += b.gpLedOk ? 12 : 3;
  } else {
    raw += 10;
  }

  raw += b.regions.includes(u.region) ? 12 : 4;

  const idHash = b.id.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0);
  const jitter = (idHash % 5) - 2;
  return Math.min(98, Math.max(71, Math.round(raw + jitter)));
}

export function rankBuyersForMandate(u: UserMandateInput): { profile: BuyerPoolProfile; fitPct: number }[] {
  return BUYER_POOL.map((profile) => ({ profile, fitPct: scoreBuyerForMandate(profile, u) }))
    .sort((a, b) => b.fitPct - a.fitPct);
}
