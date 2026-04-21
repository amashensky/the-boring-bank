/**
 * Continuously scrolling ticker of NAV-lending partner firms.
 * List is duplicated inline so the CSS keyframe can translate -50%
 * for a seamless infinite loop.
 */

const PARTNERS = [
  "17Capital",
  "Hark Capital",
  "Pemberton",
  "Ares Management",
  "Apollo Credit",
  "Blackstone Credit",
  "Carlyle Global Credit",
  "HPS Partners",
  "Oaktree Specialty",
  "Churchill Asset Mgmt",
  "Antares Capital",
  "Whitehorse Capital",
];

export default function NavLendingPartnersTicker() {
  const items = [...PARTNERS, ...PARTNERS];
  return (
    <div className="nav-lend-ticker" aria-label="NAV lending partner firms">
      <div className="nav-lend-ticker__label">Lending Partners</div>
      <div className="nav-lend-ticker__track">
        {items.map((name, i) => (
          <span key={i} className="nav-lend-ticker__item">
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}
