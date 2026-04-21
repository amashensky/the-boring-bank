import type { ReactNode } from "react";

export default function SplitWithMatchedVisual({
  flip,
  splitClassName = "",
  copy,
  visual,
}: {
  flip?: boolean;
  splitClassName?: string;
  copy: ReactNode;
  visual: ReactNode;
}) {
  const splitClass = ["split", flip ? "flip" : "", splitClassName]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={splitClass}>
      <div className="split-copy">
        {copy}
      </div>
      <div className="split-visual split-visual--match-copy-height">
        <div className="split-visual-inner">{visual}</div>
      </div>
    </div>
  );
}
