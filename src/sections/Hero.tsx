"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import RouteShips from "@/components/RouteShips";

const stats = [
  { value: "500+", label: "Businesses served" },
  { value: "83K+", label: "Community on Instagram" },
  { value: "1 pc", label: "MOQ on many products" },
  { value: "Shanghai", label: "Own registered company" },
];

export default function Hero() {
  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 1200px 700px at 75% 45%, rgba(37, 72, 140, 0.28), transparent 60%),
              radial-gradient(ellipse 800px 500px at 10% 90%, rgba(239, 59, 45, 0.12), transparent 60%),
              #06080E
            `,
          }}
        />
      </div>

      {/* Globe Illustration */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[60%] h-[80%] hidden lg:flex items-center justify-center">
        <div className="relative w-full h-full max-w-[650px]">
          <svg
            viewBox="0 0 700 700"
            className="w-full h-full"
          >
            <defs>
              {/* Globe gradient */}
              <radialGradient id="globeGradient" cx="30%" cy="30%" r="70%" fx="30%" fy="30%">
                <stop offset="0%" stopColor="#1e4976" />
                <stop offset="40%" stopColor="#0d3155" />
                <stop offset="100%" stopColor="#051428" />
              </radialGradient>
              
              {/* Outer glow */}
              <radialGradient id="outerGlow" cx="50%" cy="50%" r="50%">
                <stop offset="80%" stopColor="transparent" />
                <stop offset="95%" stopColor="rgba(59, 130, 246, 0.3)" />
                <stop offset="100%" stopColor="rgba(59, 130, 246, 0.1)" />
              </radialGradient>
              
              {/* Route gradient */}
              <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#f97316" />
              </linearGradient>
              
              {/* Land mass pattern */}
              <pattern id="landPattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <rect width="100" height="100" fill="transparent" />
              </pattern>
            </defs>
            
            {/* Outer glow ring */}
            <circle cx="350" cy="350" r="290" fill="url(#outerGlow)" />
            
            {/* Main globe */}
            <circle 
              cx="350" 
              cy="350" 
              r="250" 
              fill="url(#globeGradient)"
              style={{ filter: "drop-shadow(0 0 40px rgba(59, 130, 246, 0.2))" }}
            />
            
            {/* Grid lines - Latitude */}
            {[-0.4, -0.2, 0, 0.2, 0.4].map((offset, i) => (
              <ellipse
                key={`lat-${i}`}
                cx="350"
                cy={350 + offset * 400}
                rx={240 * Math.sqrt(1 - offset * offset)}
                ry={25}
                fill="none"
                stroke="rgba(255,255,255,0.08)"
                strokeWidth="0.5"
              />
            ))}
            
            {/* Grid lines - Longitude */}
            {[0, 30, 60, 90, 120, 150].map((angle, i) => (
              <ellipse
                key={`long-${i}`}
                cx="350"
                cy="350"
                rx={240 * Math.cos((angle * Math.PI) / 180)}
                ry="240"
                fill="none"
                stroke="rgba(255,255,255,0.08)"
                strokeWidth="0.5"
                transform={`rotate(${angle} 350 350)`}
              />
            ))}
            
            {/* Simplified land masses */}
            {/* Asia - China region */}
            <path
              d="M 420 260 Q 480 280, 500 320 Q 520 360, 490 400 Q 460 420, 420 400 Q 380 380, 400 340 Q 420 300, 420 260"
              fill="rgba(34, 197, 94, 0.15)"
              stroke="rgba(34, 197, 94, 0.3)"
              strokeWidth="1"
            />
            
            {/* India region */}
            <path
              d="M 320 380 Q 350 400, 340 450 Q 330 480, 300 470 Q 270 460, 280 420 Q 290 380, 320 380"
              fill="rgba(34, 197, 94, 0.15)"
              stroke="rgba(34, 197, 94, 0.3)"
              strokeWidth="1"
            />
            
            {/* Trade Route - Main curved path */}
            <motion.path
              d="M 460 310 Q 420 360, 380 400 Q 340 440, 300 450"
              fill="none"
              stroke="url(#routeGradient)"
              strokeWidth="2.5"
              strokeDasharray="8 4"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            
            {/* Animated ship on route */}
            <motion.g
              initial={{ offsetDistance: "0%" }}
              animate={{ offsetDistance: "100%" }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              style={{ offsetPath: "path('M 460 310 Q 420 360, 380 400 Q 340 440, 300 450')" }}
            >
              <circle r="6" fill="#f97316" />
              <circle r="10" fill="none" stroke="#f97316" strokeWidth="1" opacity="0.5">
                <animate attributeName="r" from="8" to="16" dur="1.5s" repeatCount="indefinite" />
                <animate attributeName="opacity" from="0.5" to="0" dur="1.5s" repeatCount="indefinite" />
              </circle>
            </motion.g>
            
            {/* City Markers */}
            {/* Shanghai */}
            <g>
              <circle cx="470" cy="300" r="8" fill="#f97316" />
              <circle cx="470" cy="300" r="12" fill="none" stroke="#f97316" strokeWidth="2" opacity="0.4">
                <animate attributeName="r" from="12" to="20" dur="2s" repeatCount="indefinite" />
                <animate attributeName="opacity" from="0.4" to="0" dur="2s" repeatCount="indefinite" />
              </circle>
              <text x="485" y="295" fill="white" fontSize="11" fontFamily="Inter, sans-serif" fontWeight="500">Shanghai</text>
            </g>
            
            {/* Guangzhou */}
            <g>
              <circle cx="450" cy="350" r="5" fill="#f97316" />
              <text x="460" y="348" fill="rgba(255,255,255,0.8)" fontSize="10" fontFamily="Inter, sans-serif">Guangzhou</text>
            </g>
            
            {/* Yiwu */}
            <g>
              <circle cx="480" cy="320" r="4" fill="#f97316" />
              <text x="490" y="318" fill="rgba(255,255,255,0.7)" fontSize="9" fontFamily="Inter, sans-serif">Yiwu</text>
            </g>
            
            {/* Chennai */}
            <g>
              <circle cx="300" cy="455" r="8" fill="#06b6d4" />
              <circle cx="300" cy="455" r="12" fill="none" stroke="#06b6d4" strokeWidth="2" opacity="0.4">
                <animate attributeName="r" from="12" to="20" dur="2s" repeatCount="indefinite" />
                <animate attributeName="opacity" from="0.4" to="0" dur="2s" repeatCount="indefinite" />
              </circle>
              <text x="250" y="450" fill="white" fontSize="11" fontFamily="Inter, sans-serif" fontWeight="500">Chennai</text>
            </g>
            
            {/* Hyderabad */}
            <g>
              <circle cx="310" cy="420" r="4" fill="#06b6d4" />
              <text x="250" y="418" fill="rgba(255,255,255,0.7)" fontSize="9" fontFamily="Inter, sans-serif">Hyderabad</text>
            </g>
            
            {/* Nhava Sheva */}
            <g>
              <circle cx="280" cy="400" r="4" fill="#06b6d4" />
              <text x="200" y="398" fill="rgba(255,255,255,0.7)" fontSize="9" fontFamily="Inter, sans-serif">Nhava Sheva</text>
            </g>
          </svg>
        </div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-2xl">
          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass-card mb-8"
          >
            <span className="text-xl">🇨🇳</span>
            <span className="text-foreground-muted">→</span>
            <span className="text-xl">🇮🇳</span>
            <span className="text-sm text-foreground-muted">
              Trusted by 500+ Indian businesses
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6"
          >
            Let&apos;s import directly from China.{" "}
            <span className="gradient-text italic">Without the guesswork.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-foreground-muted mb-8 max-w-xl leading-relaxed"
          >
            Sourcing, factory inspection, shipping and customs, handled end to
            end by a team with its own company in Shanghai. You choose the
            product. We bring it to your door.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <button
              onClick={() => handleScroll("#contact")}
              className="inline-flex items-center gap-2 px-6 py-3.5 text-base font-medium text-white rounded-full gradient-orange hover:opacity-90 transition-all shadow-orange group"
            >
              Get a free sourcing quote
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
            <button
              onClick={() => handleScroll("#journey")}
              className="inline-flex items-center gap-2 px-6 py-3.5 text-base font-medium text-white rounded-full border border-border-light hover:bg-white/5 transition-colors"
            >
              See how it works
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-left">
                <div className="text-2xl md:text-3xl font-bold text-white mb-1 font-sora">
                  {stat.value}
                </div>
                <div className="text-sm text-foreground-secondary">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-10 max-w-xl overflow-hidden rounded-3xl border border-border"
          >
            <RouteShips id="hero" origin="Shanghai" destination="Chennai" />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <div className="flex flex-col items-center gap-2 text-foreground-secondary">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-5 h-8 rounded-full border border-foreground-secondary/30 flex items-start justify-center p-1"
          >
            <div className="w-1 h-2 bg-foreground-secondary rounded-full" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
