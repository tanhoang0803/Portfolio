interface THMonogramProps {
  size?: number;
  uid?: string;
}

export default function THMonogram({ size = 32, uid = "a" }: THMonogramProps) {
  const bg    = `th-bg-${uid}`;
  const metal = `th-m-${uid}`;
  const hpL   = `th-hpL-${uid}`;
  const hpR   = `th-hpR-${uid}`;
  const wv    = `th-wv-${uid}`;
  const glow  = `th-gl-${uid}`;
  const shine = `th-sh-${uid}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        {/* Background — dark navy, slightly lighter in upper-left */}
        <radialGradient id={bg} cx="35%" cy="35%" r="75%">
          <stop offset="0%"   stopColor="#0e2244" />
          <stop offset="100%" stopColor="#040d1c" />
        </radialGradient>

        {/* Metallic gradient — diagonal, top-left bright → bottom-right dark */}
        <linearGradient id={metal} x1="0" y1="0" x2="0.55" y2="1">
          <stop offset="0%"   stopColor="#cce0f5" />
          <stop offset="15%"  stopColor="#88b4d4" />
          <stop offset="42%"  stopColor="#3a6888" />
          <stop offset="72%"  stopColor="#183658" />
          <stop offset="100%" stopColor="#0a1e32" />
        </linearGradient>

        {/* Horizontal metallic gradient for H left pillar (cylindrical look) */}
        <linearGradient id={hpL} gradientUnits="userSpaceOnUse" x1="51" y1="0" x2="64" y2="0">
          <stop offset="0%"   stopColor="#6898b8" />
          <stop offset="30%"  stopColor="#c0daf0" />
          <stop offset="60%"  stopColor="#2a5878" />
          <stop offset="100%" stopColor="#608aaa" />
        </linearGradient>

        {/* Horizontal metallic gradient for H right pillar */}
        <linearGradient id={hpR} gradientUnits="userSpaceOnUse" x1="80" y1="0" x2="93" y2="0">
          <stop offset="0%"   stopColor="#6898b8" />
          <stop offset="30%"  stopColor="#c0daf0" />
          <stop offset="60%"  stopColor="#2a5878" />
          <stop offset="100%" stopColor="#608aaa" />
        </linearGradient>

        {/* S-wave ribbon — cyan/silver flowing ribbon */}
        <linearGradient id={wv} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%"   stopColor="#60d8f8" />
          <stop offset="40%"  stopColor="#b8ecfc" />
          <stop offset="100%" stopColor="#1890c8" />
        </linearGradient>

        {/* Glow filter for bottom dot */}
        <filter id={glow} x="-80%" y="-80%" width="360%" height="360%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Shine overlay gradient — top-lit arch highlight */}
        <linearGradient id={shine} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#e8f4ff" stopOpacity="0.55" />
          <stop offset="60%"  stopColor="#a0c8e8" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#a0c8e8" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* ── Background ── */}
      <rect width="100" height="100" rx="20" fill={`url(#${bg})`} />

      {/* ── Sparkle / star particles ── */}
      <circle cx="83" cy="10" r="1.2" fill="#80d8f8" opacity="0.75" />
      <circle cx="90" cy="72" r="0.9" fill="#60c8e8" opacity="0.55" />
      <circle cx="11" cy="24" r="0.8" fill="#b0d8f0" opacity="0.6"  />
      <circle cx="17" cy="84" r="1.0" fill="#50c0e0" opacity="0.4"  />
      <circle cx="75" cy="6"  r="0.6" fill="#ffffff"  opacity="0.5"  />
      <circle cx="7"  cy="58" r="0.5" fill="#70c8e8" opacity="0.35" />
      <circle cx="92" cy="40" r="0.7" fill="#90d0f0" opacity="0.3"  />

      {/* ══════════════════════════════════
          T  — portal / arch (Π shape)
          Outer arch: C 3,0 46,0 → peak ≈ y 8
          Inner arch: C 33,22 16,22 → peak ≈ y 25
          Arch thickness at crown ≈ 17 units
      ══════════════════════════════════ */}
      <path
        d="M 3,88
           L 3,33
           C 3,0 46,0 46,33
           L 46,88
           L 33,88
           L 33,37
           C 33,22 16,22 16,37
           L 16,88
           Z"
        fill={`url(#${metal})`}
      />

      {/* Arch crown shine — thin bright crescent at the very top */}
      <path
        d="M 7,34
           C 7,9 42,9 42,34
           L 36,35
           C 36,20 20,20 20,35
           Z"
        fill={`url(#${shine})`}
      />

      {/* Left pillar inner-left edge highlight (cylindrical depth) */}
      <rect x="3"  y="40" width="3.5" height="44" rx="1.5"
            fill="#d4ecff" opacity="0.2" />

      {/* Right pillar inner-right edge highlight */}
      <rect x="41" y="40" width="3.5" height="44" rx="1.5"
            fill="#d4ecff" opacity="0.15" />

      {/* ══════════════════════════════════
          H  — two tall pillars + S-wave ribbon
      ══════════════════════════════════ */}

      {/* H left pillar — horizontal gradient gives cylindrical sheen */}
      <rect x="51" y="10" width="13" height="78" rx="3"
            fill={`url(#${hpL})`} />

      {/* H right pillar */}
      <rect x="80" y="10" width="13" height="78" rx="3"
            fill={`url(#${hpR})`} />

      {/* H S-wave ribbon — filled path for 3D depth
          Top edge:    x=64,y=34  →  x=80,y=56
          Bottom edge: x=80,y=64  →  x=64,y=42   (ribbon ~8 wide) */}
      <path
        d="M 64,34
           C 77,34 76,56 80,56
           L 80,64
           C 76,64 77,42 64,42
           Z"
        fill={`url(#${wv})`}
      />

      {/* H pillar left-edge highlights */}
      <rect x="51" y="18" width="3" height="58" rx="1.5"
            fill="#d4ecff" opacity="0.2" />
      <rect x="80" y="18" width="3" height="58" rx="1.5"
            fill="#d4ecff" opacity="0.2" />

      {/* ── Bottom cyan glow dot ── */}
      <circle cx="50" cy="95" r="2.5" fill="#10d8f8"
              filter={`url(#${glow})`} />
    </svg>
  );
}
