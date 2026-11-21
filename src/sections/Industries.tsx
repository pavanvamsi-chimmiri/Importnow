"use client";

import { motion } from "framer-motion";
import {
  Armchair,
  Monitor,
  Car,
  Lightbulb,
  ShoppingCart,
  Cog,
} from "lucide-react";
import { INDUSTRIES } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  armchair: Armchair,
  monitor: Monitor,
  car: Car,
  lightbulb: Lightbulb,
  shoppingCart: ShoppingCart,
  cog: Cog,
};

export default function Industries() {
  return (
    <section id="products" className="py-20 md:py-32">
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
            <span className="section-label">WHAT WE IMPORT</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            China has a market for every industry.{" "}
            <span className="gradient-text">We know each one.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-foreground-muted"
          >
            Each industry has its own manufacturing hub. We take you straight to
            the source.
          </motion.p>
        </div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES.map((industry, index) => {
            const Icon = iconMap[industry.icon || "cog"];

            return (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-6 rounded-2xl glass-card glass-card-hover transition-all duration-300 overflow-hidden"
              >
                {/* Background Icon */}
                <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Icon className="w-32 h-32" />
                </div>

                {/* Hub Badge */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-lg">🇨🇳</span>
                  <span className="text-xs font-medium text-orange-primary tracking-wider">
                    {industry.hub}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-4">{industry.title}</h3>

                {/* Items List */}
                <ul className="space-y-2 mb-6">
                  {industry.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-foreground-muted"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-primary mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Badge */}
                <div className="inline-flex px-3 py-1.5 rounded-full text-xs font-medium bg-orange-primary/10 text-orange-primary border border-orange-primary/20">
                  {industry.badge}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
