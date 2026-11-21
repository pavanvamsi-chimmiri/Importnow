"use client";

interface RouteShipsProps {
  origin: string;
  destination: string;
  id: string;
}

function ChinaFlag({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect width="18" height="12" rx="1" fill="#DE2910" />
      <polygon points="5,2.4 5.7,4.4 7.8,4.4 6.1,5.6 6.8,7.6 5,6.4 3.2,7.6 3.9,5.6 2.2,4.4 4.3,4.4" fill="#FFDE00" />
    </g>
  );
}

function IndiaFlag({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect width="18" height="12" rx="1" fill="#FF9933" />
      <rect y="4" width="18" height="4" fill="#FFFFFF" />
      <rect y="8" width="18" height="4" rx="1" fill="#138808" />
      <circle cx="9" cy="6" r="1.7" fill="none" stroke="#000080" strokeWidth="0.6" />
    </g>
  );
}

function ChinaShip({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <ellipse cx="46" cy="36" rx="38" ry="5" fill="#041018" opacity="0.35" />
      <path d="M8 28 L18 38 H78 L86 28 Z" fill="#7A1212" />
      <path d="M12 28 H82 L78 36 H18 Z" fill="#C41E1E" />
      <path d="M14 26 H78" stroke="#E8C56B" strokeWidth="1.6" />
      <rect x="22" y="14" width="10" height="8" rx="1" fill="#F4E8C8" />
      <rect x="24" y="16" width="3" height="3" fill="#7EC8E3" />
      <rect x="28" y="16" width="3" height="3" fill="#7EC8E3" />
      <rect x="36" y="10" width="10" height="8" rx="0.6" fill="#DE2910" />
      <rect x="47" y="10" width="10" height="8" rx="0.6" fill="#1D4E89" />
      <rect x="58" y="10" width="10" height="8" rx="0.6" fill="#C9A227" />
      <rect x="36" y="18" width="10" height="8" rx="0.6" fill="#1D4E89" />
      <rect x="47" y="18" width="10" height="8" rx="0.6" fill="#C9A227" />
      <rect x="58" y="18" width="10" height="8" rx="0.6" fill="#DE2910" />
      <rect x="72" y="8" width="1.4" height="18" fill="#E8D5A3" />
      <ChinaFlag x={73.4} y={6} />
      <text x="48" y="34" textAnchor="middle" fill="#FFE7A3" fontSize="5" fontFamily="Sora, Inter, sans-serif" fontWeight="700">
        CHINA
      </text>
    </g>
  );
}

function IndiaShip({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <ellipse cx="46" cy="36" rx="38" ry="5" fill="#041018" opacity="0.35" />
      <path d="M8 28 L18 38 H78 L86 28 Z" fill="#0B3D2E" />
      <path d="M12 28 H82 L78 36 H18 Z" fill="#125C3A" />
      <path d="M18 30 H76" stroke="#FF9933" strokeWidth="1.4" />
      <path d="M18 32 H76" stroke="#FFFFFF" strokeWidth="0.8" />
      <path d="M18 33.4 H76" stroke="#138808" strokeWidth="1.2" />
      <rect x="22" y="14" width="10" height="8" rx="1" fill="#EEF3F8" />
      <rect x="24" y="16" width="3" height="3" fill="#7EC8E3" />
      <rect x="28" y="16" width="3" height="3" fill="#7EC8E3" />
      <rect x="36" y="10" width="10" height="8" rx="0.6" fill="#FF9933" />
      <rect x="47" y="10" width="10" height="8" rx="0.6" fill="#FFFFFF" />
      <rect x="58" y="10" width="10" height="8" rx="0.6" fill="#138808" />
      <rect x="36" y="18" width="10" height="8" rx="0.6" fill="#0B5CAB" />
      <rect x="47" y="18" width="10" height="8" rx="0.6" fill="#FF9933" />
      <rect x="58" y="18" width="10" height="8" rx="0.6" fill="#0B5CAB" />
      <rect x="72" y="8" width="1.4" height="18" fill="#E8D5A3" />
      <IndiaFlag x={73.4} y={6} />
      <text x="48" y="34" textAnchor="middle" fill="#E8FFD8" fontSize="5" fontFamily="Sora, Inter, sans-serif" fontWeight="700">
        INDIA
      </text>
    </g>
  );
}

export default function RouteShips({ origin, destination, id }: RouteShipsProps) {
  const sky = `sky-${id}`;
  const sea = `sea-${id}`;
  const wake = `wake-${id}`;

  return (
    <div className="relative h-48 overflow-hidden">
      <svg viewBox="0 0 360 180" className="h-full w-full" aria-hidden="true">
        <defs>
          <linearGradient id={sky} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#123A5C" />
            <stop offset="45%" stopColor="#1B4F72" />
            <stop offset="100%" stopColor="#0E2A22" />
          </linearGradient>
          <linearGradient id={sea} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0B3A4A" />
            <stop offset="100%" stopColor="#041820" />
          </linearGradient>
          <linearGradient id={wake} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#DE2910" />
            <stop offset="50%" stopColor="#FF9933" />
            <stop offset="100%" stopColor="#138808" />
          </linearGradient>
        </defs>
        <rect width="360" height="180" fill={`url(#${sky})`} />
        <circle cx="290" cy="28" r="18" fill="#F4D27A" opacity="0.9" />
        <circle cx="290" cy="28" r="28" fill="#F4D27A" opacity="0.18" />
        <rect y="108" width="360" height="72" fill={`url(#${sea})`} />
        <path d="M0 118 Q 40 110 80 118 T 160 118 T 240 118 T 320 118 T 360 118 V180 H0 Z" fill="#0A3344" opacity="0.55" />
        <path d="M110 92 C 150 80, 210 80, 250 92" fill="none" stroke={`url(#${wake})`} strokeWidth="2" strokeDasharray="6 5" />
        <circle cx="180" cy="86" r="3.5" fill="#FFCF7A">
          <animate attributeName="cx" values="128;232;128" dur="5s" repeatCount="indefinite" />
        </circle>
        <g transform="translate(-6 48) scale(1.18)">
          <ChinaShip x={8} y={0} />
        </g>
        <g transform="translate(232 48) scale(1.18)">
          <IndiaShip x={8} y={0} />
        </g>
      </svg>
      <div className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-black/45 px-2.5 py-1 text-[10px] font-medium text-white backdrop-blur-sm">
        <span>🇨🇳</span>
        <span>{origin}</span>
      </div>
      <div className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-black/45 px-2.5 py-1 text-[10px] font-medium text-white backdrop-blur-sm">
        <span>{destination}</span>
        <span>🇮🇳</span>
      </div>
    </div>
  );
}
