"use client";

import { motion } from "framer-motion";
import { PROJECTS } from "@/lib/constants";

export default function Projects() {
  return (
    <section id="work" className="py-20 md:py-32">
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
            <span className="section-label">RECENTLY DELIVERED</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold"
          >
            Another container unloaded,{" "}
            <span className="gradient-text">another happy client.</span>
          </motion.h2>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden glass-card glass-card-hover transition-all duration-300"
            >
              {/* Image Area */}
              <div className="relative h-48 overflow-hidden">
                <div
                  className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-purple-900/80 group-hover:scale-105 transition-transform duration-500"
                />
                {/* Decorative Elements */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {/* China Flag */}
                    <div className="absolute -left-16 top-0 flex items-center gap-2 bg-background/80 px-3 py-1.5 rounded-full text-xs">
                      <span>🇨🇳</span>
                      <span className="text-foreground-muted">
                        {project.route.split("→")[0].trim()}
                      </span>
                    </div>
                    {/* Route Arrow */}
                    <div className="w-20 h-0.5 bg-gradient-to-r from-orange-primary to-green-primary my-4" />
                    {/* India Flag */}
                    <div className="absolute -right-16 bottom-0 flex items-center gap-2 bg-background/80 px-3 py-1.5 rounded-full text-xs">
                      <span className="text-foreground-muted">
                        {project.route.split("→")[1].trim()}
                      </span>
                      <span>🇮🇳</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-foreground-muted mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 rounded text-xs bg-background/50 border border-border text-foreground-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
