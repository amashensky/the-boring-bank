export default function Logo({ size = 28 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="The Boring Bank"
    >
      {/* Upper-left square */}
      <rect x="4" y="6" width="14" height="14" fill="currentColor" />
      {/* Upper-right tall rectangle */}
      <rect x="20" y="2" width="10" height="18" fill="currentColor" />
      {/* Lower-left small square */}
      <rect x="8" y="22" width="8" height="8" fill="currentColor" />
      {/* Lower-right tall rectangle */}
      <rect x="18" y="22" width="10" height="16" fill="currentColor" />
    </svg>
  );
}
