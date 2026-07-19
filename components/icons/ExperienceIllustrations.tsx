/* Hand-drawn neon illustrations for the experience timeline,
   ported from the vanilla site's inline SVGs. */

export function RobotIllustration() {
  return (
    <svg
      viewBox="0 0 56 56"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* antenna */}
      <line x1="28" y1="14" x2="28" y2="6" />
      <circle cx="28" cy="4.5" r="2.5" fill="currentColor" stroke="none" />
      {/* head */}
      <rect x="12" y="14" width="32" height="24" rx="5" />
      {/* eye screens */}
      <rect x="17" y="20" width="8" height="7" rx="2" />
      <rect x="31" y="20" width="8" height="7" rx="2" />
      {/* glowing pupils */}
      <circle cx="21" cy="23.5" r="2" fill="currentColor" stroke="none" />
      <circle cx="35" cy="23.5" r="2" fill="currentColor" stroke="none" />
      {/* pixel mouth */}
      <path d="M20 34 h4 v-2 h4 v2 h4 v-2 h4" />
      {/* ear ports */}
      <line x1="12" y1="27" x2="8" y2="27" />
      <line x1="44" y1="27" x2="48" y2="27" />
      {/* neck + base */}
      <line x1="22" y1="38" x2="22" y2="44" />
      <line x1="34" y1="38" x2="34" y2="44" />
      <path d="M16 44 h24" />
    </svg>
  );
}

export function ChalkboardIllustration() {
  return (
    <svg
      viewBox="0 0 56 56"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* board frame */}
      <rect x="6" y="8" width="44" height="30" rx="3" />
      {/* code: </ > on board */}
      <path d="M15 20 l-4 4 4 4" />
      <path d="M23 20 l4 4 -4 4" />
      <line x1="29" y1="24" x2="40" y2="24" />
      <line x1="29" y1="28" x2="36" y2="28" />
      {/* chalk tray line */}
      <line x1="6" y1="34" x2="50" y2="34" />
      {/* stand legs */}
      <line x1="18" y1="38" x2="14" y2="50" />
      <line x1="38" y1="38" x2="42" y2="50" />
      {/* eraser */}
      <rect x="7" y="34" width="8" height="4" rx="1" />
    </svg>
  );
}

export function LaptopIllustration() {
  return (
    <svg
      viewBox="0 0 56 56"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* screen */}
      <rect x="7" y="9" width="42" height="27" rx="3" />
      {/* </> symbol centered on screen */}
      <path d="M20 16 l-6 6.5 6 6.5" />
      <line x1="24" y1="30" x2="30" y2="15" />
      <path d="M32 16 l6 6.5 -6 6.5" />
      {/* laptop base */}
      <path d="M3 36 h50 l-3 6H6z" />
      {/* trackpad */}
      <rect x="22" y="38" width="12" height="2.5" rx="1" />
    </svg>
  );
}

export function ShieldIllustration() {
  return (
    <svg
      viewBox="0 0 56 56"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* shield */}
      <path d="M28 4 L48 13 v17 C48 42 28 54 28 54 S8 42 8 30 V13 Z" />
      {/* lock body */}
      <rect x="20" y="28" width="16" height="12" rx="2" />
      {/* lock shackle */}
      <path d="M22 28 v-4 a6 6 0 0 1 12 0 v4" />
      {/* keyhole */}
      <circle cx="28" cy="33" r="2" fill="currentColor" stroke="none" />
      <line x1="28" y1="35" x2="28" y2="38" />
    </svg>
  );
}
