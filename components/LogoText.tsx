export default function LogoText({ size = 30 }: { size?: number }) {
  return (
    <span className="logo-mark-text" data-text="TBB" style={{ fontSize: `${size}px` }}>
      TBB
    </span>
  );
}
