const BUYERS = [
  { name: "Secondary Funds", tag: "210+ Mandates" },
  { name: "Family Offices", tag: "140+ Mandates" },
  { name: "Endowments", tag: "62 Mandates" },
  { name: "Pensions", tag: "48 Mandates" },
  { name: "Sovereigns", tag: "22 Mandates" },
  { name: "Insurers", tag: "36 Mandates" },
];

export default function TrustRow() {
  return (
    <section className="trust-row">
      <div className="container">
        <div className="trust-label">500+ Verified Institutional Buyers</div>
        <div className="trust-grid">
          {BUYERS.map((b) => (
            <div className="trust-cell" key={b.name}>
              <div className="name">{b.name}</div>
              <div className="tag">{b.tag}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
