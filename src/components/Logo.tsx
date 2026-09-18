type LogoProps = {
  size?: number;
  className?: string;
};

export default function Logo({ size = 36, className = '' }: LogoProps) {
  return (
    <span
      className={`inline-block shrink-0 ${className}`}
      style={{ width: size, height: size }}
      role="img"
      aria-label="Data analyst logo"
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="logo-grad-bg" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3a45e6" />
            <stop offset="0.5" stopColor="#4b5bff" />
            <stop offset="1" stopColor="#06b6d4" />
          </linearGradient>
          <linearGradient id="logo-grad-bar1" x1="0" y1="48" x2="0" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="#22d3ee" />
            <stop offset="1" stopColor="#5ef2ff" />
          </linearGradient>
          <linearGradient id="logo-grad-bar2" x1="0" y1="48" x2="0" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="#5ef2ff" />
            <stop offset="1" stopColor="#c4cbff" />
          </linearGradient>
          <linearGradient id="logo-grad-bar3" x1="0" y1="48" x2="0" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="#9aa6ff" />
            <stop offset="1" stopColor="#f472d4" />
          </linearGradient>
          <filter id="logo-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* rounded background */}
        <rect x="2" y="2" width="44" height="44" rx="13" fill="url(#logo-grad-bg)" />

        {/* subtle inner highlight */}
        <rect x="2" y="2" width="44" height="22" rx="13" fill="white" fillOpacity="0.07" />

        {/* grid lines suggesting a chart axis */}
        <line x1="12" y1="37" x2="38" y2="37" stroke="white" strokeOpacity="0.15" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="14" y1="13" x2="14" y2="37" stroke="white" strokeOpacity="0.15" strokeWidth="1.2" strokeLinecap="round" />

        {/* ascending bar chart — data analyst signature */}
        <rect x="16" y="28" width="5" height="9" rx="1.5" fill="url(#logo-grad-bar1)" filter="url(#logo-glow)" />
        <rect x="23" y="22" width="5" height="15" rx="1.5" fill="url(#logo-grad-bar2)" filter="url(#logo-glow)" />
        <rect x="30" y="16" width="5" height="21" rx="1.5" fill="url(#logo-grad-bar3)" filter="url(#logo-glow)" />

        {/* trend line — upward arrow */}
        <path
          d="M15 30 L22 24 L28 26 L34 17"
          stroke="white"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          opacity="0.9"
        />
        {/* arrowhead at end of trend line */}
        <path
          d="M31 16.5 L34.5 16.8 L33.5 20"
          stroke="white"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          opacity="0.9"
        />

        {/* dot markers on trend line */}
        <circle cx="15" cy="30" r="1.3" fill="white" opacity="0.7" />
        <circle cx="22" cy="24" r="1.3" fill="white" opacity="0.7" />
        <circle cx="28" cy="26" r="1.3" fill="white" opacity="0.7" />
      </svg>
    </span>
  );
}
