"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { JOURNEY_STEPS } from "@/lib/constants";

export default function Journey() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % JOURNEY_STEPS.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const progress = useMemo(() => {
    return (activeStep / (JOURNEY_STEPS.length - 1)) * 100;
  }, [activeStep]);

  const days = [2, 5, 7, 16, 26, 33];

  return (
    <section
      id="journey"
      className="relative min-h-screen py-20 md:py-32 overflow-hidden"
    >
      {/* Dynamic Background based on step */}
      <div
        className="absolute inset-0 transition-all duration-1000"
        style={{
          background: `linear-gradient(180deg, 
            #06080E 0%, 
            ${activeStep < 3 ? '#0a1628' : '#1a3a5c'} 25%,
            ${activeStep < 2 ? '#102a4c' : activeStep < 4 ? '#2d5a8c' : '#c47530'} 50%,
            ${activeStep < 3 ? '#1a4a7c' : '#d68540'} 75%,
            ${activeStep < 4 ? '#2a5a9c' : '#e8853a'} 100%
          )`,
        }}
      />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Content */}
          <div className="lg:sticky lg:top-32">
            {/* Section Header */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-0.5 bg-orange-primary" />
                <span className="section-label">HOW IT WORKS</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                Watch your order travel from China to India.
              </h2>
            </div>

            {/* Steps List */}
            <div className="space-y-1">
              {JOURNEY_STEPS.map((step, index) => (
                <motion.div
                  key={step.id}
                  className={`relative p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                    activeStep === index
                      ? "bg-background/70 backdrop-blur-sm shadow-lg"
                      : "hover:bg-background/30"
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  <div className="flex items-start gap-4">
                    {/* Step Number */}
                    <div
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 ${
                        activeStep === index
                          ? "bg-orange-primary text-white shadow-orange"
                          : activeStep > index
                          ? "bg-green-primary/90 text-white"
                          : "bg-background/60 text-foreground-muted border border-border"
                      }`}
                    >
                      {activeStep > index ? "✓" : step.id}
                    </div>

                    {/* Step Content */}
                    <div className="flex-1 min-w-0">
                      <h4
                        className={`font-semibold mb-1 transition-colors ${
                          activeStep === index
                            ? "text-white"
                            : "text-foreground-muted"
                        }`}
                      >
                        {step.title}
                      </h4>
                      <AnimatePresence mode="wait">
                        {activeStep === index && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="text-sm text-foreground-secondary leading-relaxed"
                          >
                            {step.description}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right - Ship Illustration */}
          <div className="relative min-h-[450px] lg:min-h-[550px]">
            {/* Live Shipment Badge */}
            <div className="absolute top-0 right-0 z-20">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-background/80 backdrop-blur-sm border border-border">
                <span className="w-2 h-2 rounded-full bg-green-primary animate-pulse" />
                <span className="text-sm text-white font-medium">Live shipment view</span>
              </div>
            </div>

            {/* Ship SVG Illustration */}
            <div className="absolute inset-0 flex items-center justify-center pt-12">
              <svg
                viewBox="0 0 500 350"
                className="w-full h-full max-w-[500px]"
              >
                <defs>
                  <linearGradient id="waterGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="rgba(10, 50, 100, 0.6)" />
                    <stop offset="100%" stopColor="rgba(5, 25, 50, 0.9)" />
                  </linearGradient>
                  <linearGradient id="sunReflection" x1="50%" y1="0%" x2="50%" y2="100%">
                    <stop offset="0%" stopColor="rgba(255, 200, 100, 0.4)" />
                    <stop offset="100%" stopColor="transparent" />
                  </linearGradient>
                </defs>
                
                {/* Sun reflection on water */}
                <ellipse cx="250" cy="290" rx="120" ry="25" fill="url(#sunReflection)" />
                
                {/* Crane Structure - Left */}
                <g transform="translate(80, 60)">
                  <rect x="0" y="0" width="6" height="180" fill="#8B0000" />
                  <rect x="50" y="0" width="6" height="180" fill="#8B0000" />
                  <rect x="-10" y="0" width="76" height="6" fill="#8B0000" />
                  <rect x="0" y="40" width="56" height="4" fill="#8B0000" />
                  <rect x="0" y="80" width="56" height="4" fill="#8B0000" />
                </g>
                
                {/* Crane Structure - Right */}
                <g transform="translate(350, 60)">
                  <rect x="0" y="0" width="6" height="180" fill="#8B0000" />
                  <rect x="50" y="0" width="6" height="180" fill="#8B0000" />
                  <rect x="-10" y="0" width="76" height="6" fill="#8B0000" />
                  <rect x="0" y="40" width="56" height="4" fill="#8B0000" />
                  <rect x="0" y="80" width="56" height="4" fill="#8B0000" />
                </g>
                
                {/* Ship Hull */}
                <path
                  d="M 100 240 L 120 280 L 380 280 L 400 240 L 380 240 L 365 260 L 135 260 L 120 240 Z"
                  fill="#1a3a5c"
                />
                
                {/* Ship Deck */}
                <rect x="130" y="210" width="240" height="30" fill="#0d2847" rx="2" />
                
                {/* Bridge/Cabin */}
                <rect x="140" y="165" width="70" height="45" fill="#f5f5f5" rx="2" />
                <rect x="148" y="175" width="18" height="15" fill="#87ceeb" opacity="0.7" rx="1" />
                <rect x="175" y="175" width="18" height="15" fill="#87ceeb" opacity="0.7" rx="1" />
                
                {/* Funnel */}
                <rect x="195" y="140" width="25" height="25" fill="#ff4500" rx="2" />
                <rect x="200" y="130" width="15" height="10" fill="#333" rx="1" />
                
                {/* Containers Row 1 */}
                <rect x="230" y="195" width="25" height="15" fill="#ff6347" rx="1" />
                <rect x="260" y="195" width="25" height="15" fill="#4169e1" rx="1" />
                <rect x="290" y="195" width="25" height="15" fill="#228b22" rx="1" />
                <rect x="320" y="195" width="25" height="15" fill="#ffd700" rx="1" />
                
                {/* Containers Row 2 */}
                <rect x="230" y="212" width="25" height="15" fill="#4169e1" rx="1" />
                <rect x="260" y="212" width="25" height="15" fill="#ff4500" rx="1" />
                <rect x="290" y="212" width="25" height="15" fill="#ffd700" rx="1" />
                <rect x="320" y="212" width="25" height="15" fill="#ff6347" rx="1" />
                
                {/* Containers Row 3 */}
                <rect x="230" y="229" width="25" height="15" fill="#228b22" rx="1" />
                <rect x="260" y="229" width="25" height="15" fill="#ff6347" rx="1" />
                <rect x="290" y="229" width="25" height="15" fill="#4169e1" rx="1" />
                <rect x="320" y="229" width="25" height="15" fill="#228b22" rx="1" />
                
                {/* Flag Pole */}
                <rect x="355" y="150" width="2" height="60" fill="#333" />
                
                {/* Flag - China/India based on progress */}
                {activeStep < 4 ? (
                  <g transform="translate(357, 150)">
                    <rect width="28" height="18" fill="#de2910" rx="1" />
                    <circle cx="8" cy="6" r="3" fill="#ffde00" />
                    <circle cx="15" cy="4" r="1.2" fill="#ffde00" />
                    <circle cx="18" cy="7" r="1.2" fill="#ffde00" />
                    <circle cx="17" cy="11" r="1.2" fill="#ffde00" />
                    <circle cx="14" cy="13" r="1.2" fill="#ffde00" />
                  </g>
                ) : (
                  <g transform="translate(357, 150)">
                    <rect width="28" height="6" fill="#FF9933" rx="1" />
                    <rect y="6" width="28" height="6" fill="#FFFFFF" />
                    <rect y="12" width="28" height="6" fill="#138808" rx="1" />
                    <circle cx="14" cy="9" r="2.5" fill="#000080" />
                  </g>
                )}
                
                {/* IMPORTNOW text */}
                <text x="250" y="255" fill="white" fontSize="10" fontFamily="Inter, sans-serif" fontWeight="bold" textAnchor="middle">
                  IMPORTNOW
                </text>
                
                {/* Water */}
                <path
                  d="M 0 290 Q 40 280, 80 290 T 160 290 T 240 290 T 320 290 T 400 290 T 480 290 T 500 290 L 500 350 L 0 350 Z"
                  fill="url(#waterGrad)"
                />
                
                {/* Dock lights */}
                <circle cx="105" cy="230" r="3" fill="#FFD700" opacity="0.8">
                  <animate attributeName="opacity" values="0.8;0.4;0.8" dur="2s" repeatCount="indefinite" />
                </circle>
                <circle cx="395" cy="230" r="3" fill="#FFD700" opacity="0.8">
                  <animate attributeName="opacity" values="0.4;0.8;0.4" dur="2s" repeatCount="indefinite" />
                </circle>
              </svg>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 p-5 rounded-2xl bg-background/70 backdrop-blur-sm border border-border"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🇨🇳</span>
              <div>
                <div className="text-sm font-semibold text-white">Shanghai</div>
                <div className="text-xs text-foreground-secondary">Origin port</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="text-right">
                <div className="text-sm font-semibold text-white">Chennai</div>
                <div className="text-xs text-foreground-secondary">Destination</div>
              </div>
              <span className="text-2xl">🇮🇳</span>
            </div>
          </div>
          
          <div className="relative h-2 bg-background/60 rounded-full overflow-hidden">
            <motion.div
              className="absolute h-full gradient-orange rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 w-7 h-7 rounded-full gradient-orange border-2 border-white shadow-lg flex items-center justify-center"
              initial={{ left: 0 }}
              animate={{ left: `calc(${progress}% - 14px)` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <span className="text-[10px]">🚢</span>
            </motion.div>
          </div>
          
          <div className="mt-3 flex justify-end">
            <span className="px-3 py-1 rounded-full bg-orange-primary/10 text-orange-primary text-sm font-semibold">
              Day {days[activeStep]}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
