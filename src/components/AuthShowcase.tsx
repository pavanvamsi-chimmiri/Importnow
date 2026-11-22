"use client";

import RouteShips from "@/components/RouteShips";

const points = [
  "Verified factories across Yiwu, Guangzhou, Shenzhen and Foshan",
  "Own registered company in Shanghai for contracts and payments",
  "Customs, GST and doorstep delivery handled in India",
];

export default function AuthShowcase({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={`relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-border ${
        compact ? "p-6" : "p-8 lg:p-10"
      }`}
    >
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 700px 400px at 80% 20%, rgba(37, 72, 140, 0.35), transparent 60%),
            radial-gradient(ellipse 500px 360px at 10% 90%, rgba(222, 41, 16, 0.16), transparent 55%),
            #07131C
          `,
        }}
      />
      <div className="relative z-10">
        <p className="section-label mb-4">China to India · End to end</p>
        <h1
          className={`mb-4 max-w-xl font-bold leading-tight ${
            compact ? "text-2xl" : "text-3xl md:text-4xl"
          }`}
        >
          Import directly from China.{" "}
          <span className="gradient-text italic">Without the guesswork.</span>
        </h1>
        <p className={`max-w-lg text-foreground-muted ${compact ? "mb-4 text-sm" : "mb-6"}`}>
          Sourcing, factory inspection, shipping and customs — handled by a team
          with its own company in Shanghai. You choose the product. We bring it
          to your door.
        </p>
        <ul className={`space-y-3 ${compact ? "hidden sm:block" : ""}`}>
          {points.map((point) => (
            <li key={point} className="flex items-start gap-3 text-sm text-foreground-muted">
              <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-orange-primary" />
              {point}
            </li>
          ))}
        </ul>
      </div>
      <div className={`relative z-10 overflow-hidden rounded-2xl border border-border ${compact ? "mt-5" : "mt-8"}`}>
        <RouteShips id={compact ? "auth-compact" : "auth"} origin="Shanghai" destination="Chennai" />
      </div>
      <div className={`relative z-10 grid grid-cols-3 gap-4 text-sm ${compact ? "mt-4" : "mt-6"}`}>
        <div>
          <p className="font-sora text-xl font-bold">500+</p>
          <p className="text-foreground-secondary">Businesses served</p>
        </div>
        <div>
          <p className="font-sora text-xl font-bold">1 pc</p>
          <p className="text-foreground-secondary">MOQ on many products</p>
        </div>
        <div>
          <p className="font-sora text-xl font-bold">Shanghai</p>
          <p className="text-foreground-secondary">Own company</p>
        </div>
      </div>
    </div>
  );
}
