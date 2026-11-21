"use client";

import { motion } from "framer-motion";
import {
  Search,
  Factory,
  CheckCircle,
  Ship,
  FileText,
  Truck,
} from "lucide-react";
import { SERVICES } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  search: Search,
  factory: Factory,
  check: CheckCircle,
  ship: Ship,
  document: FileText,
  truck: Truck,
};

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32">
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
            <span className="section-label">END-TO-END IMPORTS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            One team from the{" "}
            <span className="gradient-text">factory floor</span> to your front
            door.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-foreground-muted"
          >
            Anyone can say they import from China. What you actually need is a
            smooth process, clear communication and a shipment that arrives
            safely.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon];

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-6 rounded-2xl glass-card glass-card-hover transition-all duration-300"
              >
                {/* Number Badge */}
                <span className="absolute top-6 right-6 text-sm text-foreground-secondary font-medium">
                  {service.number}
                </span>

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-orange-primary/10 flex items-center justify-center mb-5 group-hover:bg-orange-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-orange-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-foreground-muted text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
