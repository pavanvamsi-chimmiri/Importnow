"use client";

import { motion } from "framer-motion";
import { PROJECTS } from "@/lib/constants";
import RouteShips from "@/components/RouteShips";

export default function Projects() {
  return (
    <section id="work" className="py-20 md:py-32">
      <div className="container">
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-4"
          >
            <span className="w-8 h-0.5 bg-orange-primary" />
            <span className="section-label">RECENTLY DELIVERED</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold"
          >
            Another container unloaded,{" "}
            <span className="gradient-text">another happy client.</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROJECTS.map((project, index) => {
            const [origin, destination] = project.route.split("→").map((part) => part.trim());

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 1, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-3xl glass-card glass-card-hover transition-all duration-300"
              >
                <RouteShips id={project.id} origin={origin} destination={destination} />

                <div className="p-5">
                  <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-orange-light">
                    China ship → India ship
                  </p>
                  <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm text-foreground-muted mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border px-2.5 py-1 text-xs text-foreground-secondary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
