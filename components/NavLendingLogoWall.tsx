"use client";

import { useEffect, useState } from "react";

/**
 * Transparent floating logo wall — real partner-firm logos streaming
 * leftward on an infinite marquee. Logos are pulled from Clearbit's
 * free logo service (`logo.clearbit.com/<domain>`). Failed loads are
 * hidden gracefully so any gap doesn't break the rhythm.
 */

type Partner = { name: string; domain: string };

// Well-known NAV lending, private credit, and institutional partner firms.
const PARTNERS: Partner[] = [
  { name: "JPMorgan", domain: "jpmorgan.com" },
  { name: "Goldman Sachs", domain: "goldmansachs.com" },
  { name: "Morgan Stanley", domain: "morganstanley.com" },
  { name: "Blackstone", domain: "blackstone.com" },
  { name: "Apollo Global", domain: "apolloglobal.com" },
  { name: "KKR", domain: "kkr.com" },
  { name: "Carlyle", domain: "carlyle.com" },
  { name: "Ares Management", domain: "aresmgmt.com" },
  { name: "Oaktree", domain: "oaktreecapital.com" },
  { name: "Bain Capital", domain: "baincapital.com" },
  { name: "TPG", domain: "tpg.com" },
  { name: "HPS Investment Partners", domain: "hpspartners.com" },
  { name: "Golub Capital", domain: "golubcapital.com" },
  { name: "17Capital", domain: "17capital.com" },
  { name: "Pemberton", domain: "pembertonam.com" },
  { name: "Sixth Street", domain: "sixthstreet.com" },
  { name: "Blue Owl", domain: "blueowl.com" },
  { name: "Barings", domain: "barings.com" },
  { name: "Monroe Capital", domain: "monroecap.com" },
  { name: "Cerberus", domain: "cerberus.com" },
  { name: "Fortress", domain: "fortress.com" },
  { name: "BlackRock", domain: "blackrock.com" },
  { name: "Nuveen", domain: "nuveen.com" },
  { name: "Brookfield", domain: "brookfield.com" },
  { name: "Permira", domain: "permira.com" },
  { name: "CVC", domain: "cvc.com" },
  { name: "EQT", domain: "eqtgroup.com" },
  { name: "Hamilton Lane", domain: "hamiltonlane.com" },
  { name: "Antares Capital", domain: "antares.com" },
  { name: "StepStone", domain: "stepstonegroup.com" },
  { name: "Neuberger Berman", domain: "nb.com" },
  { name: "Partners Group", domain: "partnersgroup.com" },
  { name: "PGIM", domain: "pgim.com" },
  { name: "MetLife Investment", domain: "metlife.com" },
  { name: "Prudential", domain: "prudential.com" },
  { name: "Bank of America", domain: "bankofamerica.com" },
  { name: "Citi", domain: "citi.com" },
  { name: "Wells Fargo", domain: "wellsfargo.com" },
  { name: "UBS", domain: "ubs.com" },
  { name: "Barclays", domain: "barclays.com" },
  { name: "Deutsche Bank", domain: "db.com" },
  { name: "BNP Paribas", domain: "bnpparibas.com" },
  { name: "HSBC", domain: "hsbc.com" },
  { name: "Societe Generale", domain: "societegenerale.com" },
  { name: "RBC", domain: "rbc.com" },
  { name: "BMO", domain: "bmo.com" },
  { name: "Scotiabank", domain: "scotiabank.com" },
  { name: "Mizuho", domain: "mizuho.com" },
  { name: "MUFG", domain: "mufg.jp" },
  { name: "Standard Chartered", domain: "sc.com" },
  { name: "Jefferies", domain: "jefferies.com" },
  { name: "Lazard", domain: "lazard.com" },
  { name: "Stifel", domain: "stifel.com" },
  { name: "Houlihan Lokey", domain: "hl.com" },
  { name: "Centerbridge", domain: "centerbridge.com" },
  { name: "Clearlake", domain: "clearlake.com" },
  { name: "H.I.G. Capital", domain: "higcapital.com" },
  { name: "Churchill Asset Management", domain: "churchillam.com" },
  { name: "Silver Point", domain: "silverpointcapital.com" },
  { name: "Marathon", domain: "marathonfund.com" },
  { name: "Angelo Gordon", domain: "angelogordon.com" },
  { name: "AllianceBernstein", domain: "alliancebernstein.com" },
  { name: "Loomis Sayles", domain: "loomissayles.com" },
  { name: "Lord Abbett", domain: "lordabbett.com" },
  { name: "Man Group", domain: "man.com" },
  { name: "Invesco", domain: "invesco.com" },
  { name: "Franklin Templeton", domain: "franklintempleton.com" },
  { name: "Voya", domain: "voya.com" },
  { name: "TCW", domain: "tcw.com" },
  { name: "Pantheon", domain: "pantheon.com" },
  { name: "Hayfin", domain: "hayfin.com" },
  { name: "Audax", domain: "audaxgroup.com" },
  { name: "Sound Point Capital", domain: "soundpointcap.com" },
  { name: "New Mountain Capital", domain: "newmountaincapital.com" },
  { name: "Crescent Capital", domain: "crescentcap.com" },
  { name: "MFS", domain: "mfs.com" },
  { name: "Fifth Third", domain: "53.com" },
  { name: "First Eagle", domain: "firsteagle.com" },
  { name: "Varagon Capital", domain: "varagon.com" },
  { name: "Beach Point Capital", domain: "beachpointcapital.com" },
  { name: "Madison Capital", domain: "madisoncf.com" },
  { name: "Bain Capital Credit", domain: "baincapitalcredit.com" },
  { name: "BlackRock Private Debt", domain: "blackrock.com" },
  { name: "Churchill Capital", domain: "churchillam.com" },
  { name: "Crayhill Capital", domain: "crayhill.com" },
  { name: "Dyal Capital", domain: "dyalcapital.com" },
  { name: "Hark Capital", domain: "harkcap.com" },
  { name: "Hollyport Capital", domain: "hollyport.co.uk" },
  { name: "Investcorp", domain: "investcorp.com" },
  { name: "Kennedy Lewis", domain: "klimllc.com" },
  { name: "Monarch Alternative", domain: "monarchlp.com" },
  { name: "Owl Rock", domain: "blueowl.com" },
  { name: "PennantPark", domain: "pennantpark.com" },
  { name: "Prospect Capital", domain: "prospectstreet.com" },
  { name: "Summit Partners", domain: "summitpartners.com" },
  { name: "Adams Street Partners", domain: "adamsstreetpartners.com" },
  { name: "Warburg Pincus", domain: "warburgpincus.com" },
];

function FirmLogo({ partner }: { partner: Partner }) {
  // Probe each source off-DOM before rendering. Only once we have a source
  // that (a) loaded successfully and (b) is large enough not to be a
  // fallback globe do we mount the <span>. If all sources fail, we never
  // render — so the flex chain closes up with no trace of the missing firm.
  const [validSrc, setValidSrc] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    const sources = [
      // Logo.dev serves actual brandmarks at retina resolution — its public
      // demo token is rate-limited per-IP but fine for marketing-site traffic.
      `https://img.logo.dev/${partner.domain}?token=pk_X-1ZO13GSgeOoUrIuJ6GMQ&size=200&format=png&retina=true`,
      // Favicon fallbacks for any firm Logo.dev doesn't recognize.
      `https://icons.duckduckgo.com/ip3/${partner.domain}.ico`,
      `https://www.google.com/s2/favicons?sz=128&domain=${partner.domain}`,
    ];
    let i = 0;
    const tryNext = () => {
      if (cancelled) return;
      if (i >= sources.length) {
        setValidSrc(null);
        return;
      }
      const url = sources[i++];
      const probe = new Image();
      probe.onload = () => {
        if (cancelled) return;
        // Real favicons at requested resolution return ≥24px wide;
        // the fallback globe is 16×16 — drop it and try the next source.
        if (probe.naturalWidth >= 24) setValidSrc(url);
        else tryNext();
      };
      probe.onerror = () => {
        if (!cancelled) tryNext();
      };
      probe.src = url;
    };
    tryNext();
    return () => {
      cancelled = true;
    };
  }, [partner.domain]);

  if (!validSrc) return null;

  return (
    <span className="nav-lend-logo" aria-label={partner.name} title={partner.name}>
      <img
        src={validSrc}
        alt={partner.name}
        className="nav-lend-logo__img"
        loading="lazy"
      />
    </span>
  );
}

export default function NavLendingLogoWall() {
  // Duplicate list back-to-back so the CSS translate -50% loop seamlessly.
  const doubled = [...PARTNERS, ...PARTNERS];
  return (
    <div className="nav-lend-logowall" aria-label="Potential NAV lending partners">
      <div className="nav-lend-logowall__track nav-lend-logowall__track--a">
        {doubled.map((p, i) => (
          <FirmLogo key={`a-${i}`} partner={p} />
        ))}
      </div>
    </div>
  );
}
