export function MethodologyCard() {
  const stages = [
    {
      stage: "Stage 1 · Draft",
      title: "Package & Validate",
      items: [
        "NAV rebuild from cap table",
        "LPA restrictions & ROFR",
        "Vintage, strategy, size",
        "Flag deal&#8209;breakers early",
      ],
    },
    {
      stage: "Stage 2 · Bids",
      title: "Market & Compete",
      items: [
        "Blind buyer profile live",
        "Matched institutional network",
        "Price discovery via auction",
        "Rank by price + close speed",
      ],
    },
    {
      stage: "Stage 3 · Close",
      title: "Finalize & Wire",
      items: [
        "GP consent & transfer docs",
        "Post&#8209;close cap table",
        "Buyer onboarding complete",
        "Success fee on wire clear",
      ],
    },
  ];

  return (
    <div className="methodology-grid">
      {stages.map((s, i) => (
        <div key={i} className="methodology-cell">
          <div className="method-label">{s.stage}</div>
          <h4 className="method-title">{s.title}</h4>
          <ul className="method-list">
            {s.items.map((item, j) => (
              <li key={j}>
                <span className="method-dot" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
