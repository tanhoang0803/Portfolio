interface THMonogramProps {
  size?: number;
  uid?: string;
}

export default function THMonogram({ size = 32, uid = "a" }: THMonogramProps) {
  const bg = `th-bg-${uid}`;
  const metal = `th-metal-${uid}`;
  const wave = `th-wave-${uid}`;
  const glow = `th-glow-${uid}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={bg} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#060e1c" />
          <stop offset="100%" stopColor="#0c1e38" />
        </linearGradient>
        <linearGradient id={metal} x1="0.1" y1="0" x2="0.2" y2="1">
          <stop offset="0%" stopColor="#d8eaf8" />
          <stop offset="22%" stopColor="#a0c4dc" />
          <stop offset="55%" stopColor="#4a7898" />
          <stop offset="100%" stopColor="#182840" />
        </linearGradient>
        <linearGradient id={wave} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#22d4f0" />
          <stop offset="100%" stopColor="#0888c0" />
        </linearGradient>
        <filter id={glow} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Background */}
      <rect width="100" height="100" rx="22" fill={`url(#${bg})`} />

      {/* Sparkle dots */}
      <circle cx="82" cy="11" r="1.2" fill="#60c8e8" opacity="0.7" />
      <circle cx="89" cy="73" r="0.9" fill="#60c8e8" opacity="0.5" />
      <circle cx="13" cy="27" r="0.8" fill="#a0d8f0" opacity="0.6" />
      <circle cx="17" cy="83" r="1" fill="#60c8e8" opacity="0.45" />
      <circle cx="74" cy="7" r="0.7" fill="#ffffff" opacity="0.5" />

      {/* T — portal / arch shape (two pillars + outer arch - inner arch cutout) */}
      <path
        d="M 4,88 L 4,39 C 4,7 46,7 46,39 L 46,88 L 34,88 L 34,43 C 34,19 16,19 16,43 L 16,88 Z"
        fill={`url(#${metal})`}
      />

      {/* H — left pillar */}
      <rect x="52" y="12" width="13" height="76" rx="3" fill={`url(#${metal})`} />
      {/* H — right pillar */}
      <rect x="79" y="12" width="13" height="76" rx="3" fill={`url(#${metal})`} />
      {/* H — S-wave connector */}
      <path
        d="M 65,40 C 73,40 72,60 79,60"
        fill="none"
        stroke={`url(#${wave})`}
        strokeWidth="7"
        strokeLinecap="round"
      />

      {/* Bottom cyan glow dot */}
      <circle cx="50" cy="95" r="2.5" fill="#06c8e8" filter={`url(#${glow})`} />
    </svg>
  );
}
