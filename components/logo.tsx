export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Table icon */}
      <rect x="5" y="20" width="30" height="3" rx="1" fill="currentColor" />
      <rect x="8" y="23" width="3" height="15" fill="currentColor" />
      <rect x="29" y="23" width="3" height="15" fill="currentColor" />
      
      {/* Text: Table Match */}
      <text x="45" y="32" fill="currentColor" fontFamily="inherit" fontSize="18" fontWeight="700" letterSpacing="-0.5">
        Table Match
      </text>
    </svg>
  )
}
