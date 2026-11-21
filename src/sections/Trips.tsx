"use client";

import { motion } from "framer-motion";
import {
  FileText,
  Building,
  UtensilsCrossed,
  Users,
  Factory,
  Compass,
  ArrowRight,
} from "lucide-react";
import { TRIP_LOCATIONS, TRIP_INCLUSIONS } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  fileText: FileText,
  building: Building,
  utensils: UtensilsCrossed,
  users: Users,
  factory: Factory,
  compass: Compass,
};

export default function Trips() {
  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="trips" className="py-20 md:py-32">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-4"
          >
            <span className="w-8 h-0.5 bg-orange-primary" />
            <span className="section-label">BUSINESS TRIPS TO CHINA</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            Your business trip doesn&apos;t have to{" "}
            <span className="gradient-text">feel like work.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-foreground-muted"
          >
            Guided trips to the Canton Fair, wholesale markets and factories you
            choose. Our clients often tell us it felt like a personal trip, not
            a business tour.
          </motion.p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left - Canton Fair Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative p-8 rounded-3xl overflow-hidden"
            style={{
              background: `
                linear-gradient(135deg, rgba(239, 59, 45, 0.22), rgba(255, 153, 51, 0.12)),
                linear-gradient(to bottom, #0a0d18, #0a0d18)
              `,
            }}
          >
            {/* City Silhouette Background */}
            <div className="absolute bottom-0 left-0 right-0 h-32 opacity-20">
              <svg
                viewBox="0 0 400 100"
                preserveAspectRatio="xMidYMax slice"
                className="w-full h-full"
              >
                <rect x="20" y="40" width="30" height="60" fill="currentColor" />
                <rect x="60" y="20" width="25" height="80" fill="currentColor" />
                <rect x="95" y="50" width="20" height="50" fill="currentColor" />
                <rect x="125" y="10" width="35" height="90" fill="currentColor" />
                <rect x="170" y="30" width="28" height="70" fill="currentColor" />
                <rect x="210" y="45" width="22" height="55" fill="currentColor" />
                <rect x="245" y="25" width="30" height="75" fill="currentColor" />
                <rect x="290" y="55" width="25" height="45" fill="currentColor" />
                <rect x="330" y="35" width="35" height="65" fill="currentColor" />
              </svg>
            </div>

            <div className="relative z-10">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-primary/20 text-orange-primary text-xs font-medium mb-4">
                🇨🇳 CANTON FAIR · GUANGZHOU
              </div>

              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Meet factories face to face. We handle everything else.
              </h3>

              <p className="text-foreground-muted mb-6">
                Walk the world&apos;s biggest trade fair with a guide who speaks
                the language, then visit the factories you shortlist.
              </p>

              {/* Location Tags */}
              <div className="flex flex-wrap gap-2">
                {TRIP_LOCATIONS.map((location) => (
                  <span
                    key={location}
                    className="px-3 py-1 rounded-full text-sm bg-background/50 border border-border text-foreground-muted"
                  >
                    {location}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - Info Cards */}
          <div className="space-y-6">
            {/* What's Included */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="p-6 rounded-2xl glass-card"
            >
              <h4 className="text-lg font-semibold mb-4">What&apos;s included</h4>
              <div className="grid grid-cols-2 gap-4">
                {TRIP_INCLUSIONS.map((item, index) => {
                  const Icon = iconMap[item.icon];
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-3 text-sm text-foreground-muted"
                    >
                      <Icon className="w-4 h-4 text-orange-primary flex-shrink-0" />
                      <span>{item.text}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Next Departures */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="p-6 rounded-2xl glass-card"
            >
              <h4 className="text-lg font-semibold mb-4">Next departures</h4>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-background/50 border border-border">
                  <p className="font-semibold">Spring</p>
                  <p className="text-sm text-foreground-muted">
                    Canton Fair · April–May
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-background/50 border border-border">
                  <p className="font-semibold">Autumn</p>
                  <p className="text-sm text-foreground-muted">
                    Canton Fair · October–November
                  </p>
                </div>
              </div>

              <button
                onClick={() => handleScroll("#contact")}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-medium text-white rounded-full gradient-orange hover:opacity-90 transition-all group"
              >
                Join the next trip
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
