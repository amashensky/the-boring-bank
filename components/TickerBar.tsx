const DEALS = [
  { fund: "Apollo Growth Fund VIII", meta: "2019 Vintage | Buyout", price: "97.2 NAV" },
  { fund: "Insight Venture Partners XI", meta: "2020 Vintage | Growth", price: "94.8 NAV" },
  { fund: "Blackstone Capital Partners VII", meta: "2018 Vintage | Buyout", price: "101.4 NAV" },
  { fund: "TA Associates XIV", meta: "2021 Vintage | Growth", price: "92.1 NAV" },
  { fund: "Vista Equity Partners VII", meta: "2019 Vintage | Buyout", price: "98.7 NAV" },
  { fund: "Accel-KKR Capital Partners VI", meta: "2020 Vintage | Tech", price: "95.3 NAV" },
  { fund: "Thoma Bravo Fund XIV", meta: "2020 Vintage | Buyout", price: "99.8 NAV" },
  { fund: "Sequoia Capital Global Growth III", meta: "2018 Vintage | Venture", price: "88.6 NAV" },
];

export default function TickerBar() {
  const items = [...DEALS, ...DEALS];
  return (
    <div className="ticker" aria-label="Recently priced transactions">
      <div className="ticker-label">Recently Priced</div>
      <div className="ticker-track">
        {items.map((d, i) => (
          <span key={i} className="ticker-item">
            <span className="fund">{d.fund}</span>
            <span className="meta">{d.meta}</span>
            <span className="price">{d.price}</span>
            <span className="sep">&#9679;</span>
          </span>
        ))}
      </div>
    </div>
  );
}
