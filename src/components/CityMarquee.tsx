"use client";

import { MARQUEE_CITIES } from "@/lib/constants";

export default function CityMarquee() {
  const cities = [...MARQUEE_CITIES, ...MARQUEE_CITIES];

  return (
    <div className="relative py-4 overflow-hidden border-y border-border bg-background/50">
      <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
        {cities.map((city, index) => (
          <span
            key={`${city}-${index}`}
            className="text-sm text-foreground-secondary flex items-center gap-2"
          >
            <span>🇨🇳 {city} 🇮🇳</span>
            <span className="text-orange-primary">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
