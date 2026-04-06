export function TransactionFlow() {
  const stages = [
    {
      stage: "Stage 1 · Draft",
      seller: "Upload documents and position details",
      platform: "Rebuild NAV, validate LPA, flag restrictions",
      buyer: "Review blind profile and preliminary terms",
    },
    {
      stage: "Stage 2 · Bids",
      seller: "Evaluate incoming bids ranked by price and terms",
      platform: "Match to qualified buyers, run competitive auction",
      buyer: "Submit bid with pricing, structure, and close timeline",
    },
    {
      stage: "Stage 3 · Close",
      seller: "Approve winner, execute docs, receive wire",
      platform: "Facilitate consent, coordinate legal, confirm close",
      buyer: "Complete due diligence, transfer funds, onboard position",
    },
  ];

  return (
    <div className="txn-flow">
      <div className="txn-grid">
        {stages.map((s, i) => (
          <div key={i} className="txn-stage">
            <div className="stage-label">{s.stage}</div>

            <div className="flow-column">
              <div className="flow-role">Seller</div>
              <div className="flow-text">{s.seller}</div>
            </div>

            <div className="flow-divider" />

            <div className="flow-column">
              <div className="flow-role">Platform</div>
              <div className="flow-text">{s.platform}</div>
            </div>

            <div className="flow-divider" />

            <div className="flow-column">
              <div className="flow-role">Buyer</div>
              <div className="flow-text">{s.buyer}</div>
            </div>

            {i < stages.length - 1 && <div className="stage-arrow">↓</div>}
          </div>
        ))}
      </div>
    </div>
  );
}
