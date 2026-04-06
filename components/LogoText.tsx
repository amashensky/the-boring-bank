export default function LogoText({ size = 28 }: { size?: number }) {
  const scale = size / 28;
  return (
    <div
      style={{
        fontSize: `${24 * scale}px`,
        fontFamily: 'var(--font-serif), serif',
        fontStyle: 'italic',
        fontWeight: 500,
        letterSpacing: '-0.02em',
        color: 'currentColor',
        lineHeight: 1,
        whiteSpace: 'nowrap',
      }}
      aria-label="The Boring Bank"
    >
      The Boring Bank
    </div>
  );
}
