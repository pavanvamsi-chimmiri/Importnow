"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { LICENSE_FEATURES } from "@/lib/constants";

export default function License() {
  return (
    <section id="shanghai" className="py-20 md:py-32 bg-background-light">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-4"
            >
              <span className="w-8 h-0.5 bg-orange-primary" />
              <span className="section-label">OFFICIALLY IN CHINA</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            >
              Many claim an office in China.{" "}
              <span className="gradient-text">We have the licence.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-foreground-muted mb-8"
            >
              ImportNow operates through its own registered company in Shanghai,{" "}
              <strong className="text-white">
                Shanghai Shengqiao Chain Trading Co., Ltd.
              </strong>{" "}
              That means we can sign contracts with factories, pay suppliers
              locally and stand behind every order.
            </motion.p>

            {/* Features List */}
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-4"
            >
              {LICENSE_FEATURES.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-primary/20 flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 text-green-primary" />
                  </div>
                  <span className="text-foreground-muted">
                    <strong className="text-white">
                      {feature.split(",")[0]}
                    </strong>
                    {feature.includes(",") && "," + feature.split(",").slice(1).join(",")}
                  </span>
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Right - License Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* License Card */}
            <div
              className="relative p-8 rounded-3xl overflow-hidden"
              style={{
                background: "linear-gradient(160deg, #fbf6ea, #efe6d1)",
                boxShadow: `
                  0 40px 80px -20px rgba(0, 0, 0, 0.7),
                  0 0 0 10px #8b1d16,
                  0 0 0 12px #d4a94a
                `,
              }}
            >
              {/* Chinese Header */}
              <div className="text-center mb-6">
                <h3
                  className="text-3xl font-bold mb-2"
                  style={{ color: "#c41e1e", fontFamily: "serif" }}
                >
                  营业执照
                </h3>
                <p className="text-sm text-gray-600 tracking-wider">
                  BUSINESS LICENCE
                </p>
              </div>

              {/* Seal */}
              <div className="absolute top-8 right-8 w-16 h-16">
                <div
                  className="w-full h-full rounded-full border-2 flex items-center justify-center"
                  style={{ borderColor: "#c41e1e" }}
                >
                  <div
                    className="w-10 h-10 rounded-full border flex items-center justify-center text-xs font-bold"
                    style={{ borderColor: "#c41e1e", color: "#c41e1e" }}
                  >
                    章
                  </div>
                </div>
              </div>

              {/* License Details */}
              <div className="space-y-4 text-sm" style={{ color: "#4a3b22" }}>
                <div className="flex">
                  <span className="w-24 text-gray-500">Company</span>
                  <span className="font-medium">
                    Shanghai Shengqiao Chain Trading Co., Ltd.
                  </span>
                </div>
                <div className="flex">
                  <span className="w-24 text-gray-500">Location</span>
                  <span>Shanghai, People&apos;s Republic of China</span>
                </div>
                <div className="flex">
                  <span className="w-24 text-gray-500">Scope</span>
                  <span>Supply chain, sourcing & international trade</span>
                </div>
                <div className="flex">
                  <span className="w-24 text-gray-500">Serving</span>
                  <span>Importers across India</span>
                </div>
              </div>

              {/* Footer */}
              <div className="mt-8 pt-4 border-t border-amber-200/50">
                <p
                  className="text-xs text-center tracking-widest"
                  style={{ color: "#8b6a2e" }}
                >
                  SHANGHAI SHENGQIAO TRADING
                </p>
              </div>

              {/* Corner Decorations */}
              <div
                className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2"
                style={{ borderColor: "#d4a94a" }}
              />
              <div
                className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2"
                style={{ borderColor: "#d4a94a" }}
              />
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute -bottom-4 -left-4 px-4 py-2 rounded-xl bg-background border border-border shadow-xl"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">沪</span>
                </div>
                <div>
                  <p className="text-xs text-foreground-muted">Shanghai</p>
                  <p className="text-sm font-semibold text-orange-primary">
                    Registered
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
