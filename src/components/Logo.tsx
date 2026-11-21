"use client";

interface LogoProps {
  className?: string;
  size?: "sm" | "md";
}

export default function Logo({ className = "", size = "md" }: LogoProps) {
  const textClass = size === "sm" ? "text-lg" : "text-xl md:text-2xl";

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#DE2910] via-[#FF9933] to-[#138808] p-[1.5px]">
        <span className="flex h-full w-full items-center justify-center rounded-[10px] bg-[#07131C]">
          <svg viewBox="0 0 32 32" className="h-5 w-5" aria-hidden="true">
            <path d="M4 20h24l-3 6H7z" fill="#1B3A4B" />
            <path d="M6 20h20v2H6z" fill="#E8C56B" />
            <rect x="10" y="11" width="5" height="4" rx="0.4" fill="#DE2910" />
            <rect x="16" y="11" width="5" height="4" rx="0.4" fill="#138808" />
            <rect x="10" y="16" width="5" height="4" rx="0.4" fill="#FF9933" />
            <rect x="16" y="16" width="5" height="4" rx="0.4" fill="#0B5CAB" />
            <path d="M8 11h2v9H8z" fill="#F4F1E8" />
          </svg>
        </span>
      </span>
      <span className={`font-sora font-bold tracking-tight leading-none ${textClass}`}>
        <span className="text-[#FFCF7A]">Let&apos;s</span>{" "}
        <span className="text-white">ImportNow</span>
      </span>
    </span>
  );
}
