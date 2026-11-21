"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, Send } from "lucide-react";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}
import { CONTACT_INFO } from "@/lib/constants";

const categories = [
  "Furniture & interiors",
  "Electronics & tech",
  "EV & automotive",
  "Lighting",
  "Supermarket & general goods",
  "Machinery & automation",
  "Other",
];

const budgetRanges = [
  "Under ₹1 lakh",
  "₹1-5 lakh",
  "₹5-25 lakh",
  "₹25 lakh - 1 crore",
  "Above ₹1 crore",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    category: "",
    quantity: "",
    budget: "",
    details: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `Hi, I'm ${formData.name} from ${formData.city}. I want to import ${formData.category}. Quantity: ${formData.quantity}. Budget: ${formData.budget}. Details: ${formData.details}`;
    const whatsappUrl = `https://wa.me/919989724320?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-background-light">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Content */}
          <div>
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Tell us what you want to import.{" "}
                <span className="gradient-text">We&apos;ll take it from there.</span>
              </h2>

              <p className="text-lg text-foreground-muted">
                Share the product and quantity. You&apos;ll get supplier options,
                landed cost and timelines, free of charge.
              </p>
            </motion.div>

            {/* Contact Cards */}
            <motion.div
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-4"
            >
              {/* Phone */}
              <a
                href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-4 p-4 rounded-xl glass-card glass-card-hover transition-all group"
              >
                <div className="w-10 h-10 rounded-full bg-orange-primary/10 flex items-center justify-center group-hover:bg-orange-primary/20 transition-colors">
                  <Phone className="w-5 h-5 text-orange-primary" />
                </div>
                <div>
                  <p className="text-sm text-foreground-muted">Call or WhatsApp</p>
                  <p className="font-semibold">{CONTACT_INFO.phone}</p>
                </div>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/importnow.in"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl glass-card glass-card-hover transition-all group"
              >
                <div className="w-10 h-10 rounded-full bg-orange-primary/10 flex items-center justify-center group-hover:bg-orange-primary/20 transition-colors">
                  <InstagramIcon className="w-5 h-5 text-orange-primary" />
                </div>
                <div>
                  <p className="text-sm text-foreground-muted">Instagram</p>
                  <p className="font-semibold">{CONTACT_INFO.instagram}</p>
                </div>
              </a>

              {/* Offices */}
              <div className="flex items-center gap-4 p-4 rounded-xl glass-card">
                <div className="w-10 h-10 rounded-full bg-orange-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-orange-primary" />
                </div>
                <div>
                  <p className="text-sm text-foreground-muted">Offices</p>
                  <p className="font-semibold">{CONTACT_INFO.offices}</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name & City */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm text-foreground-muted mb-2"
                  >
                    Your name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Full name"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-white placeholder:text-foreground-secondary focus:outline-none focus:border-orange-primary transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="city"
                    className="block text-sm text-foreground-muted mb-2"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="e.g. Hyderabad"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-white placeholder:text-foreground-secondary focus:outline-none focus:border-orange-primary transition-colors"
                  />
                </div>
              </div>

              {/* Category */}
              <div>
                <label
                  htmlFor="category"
                  className="block text-sm text-foreground-muted mb-2"
                >
                  What do you want to import?
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-white focus:outline-none focus:border-orange-primary transition-colors appearance-none cursor-pointer"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23677284'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 1rem center",
                    backgroundSize: "1.5rem",
                  }}
                >
                  <option value="" disabled>
                    Select category
                  </option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              {/* Quantity & Budget */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="quantity"
                    className="block text-sm text-foreground-muted mb-2"
                  >
                    Approx. quantity
                  </label>
                  <input
                    type="text"
                    id="quantity"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleInputChange}
                    placeholder="e.g. 1 container"
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-white placeholder:text-foreground-secondary focus:outline-none focus:border-orange-primary transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="budget"
                    className="block text-sm text-foreground-muted mb-2"
                  >
                    Budget
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-white focus:outline-none focus:border-orange-primary transition-colors appearance-none cursor-pointer"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23677284'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 1rem center",
                      backgroundSize: "1.5rem",
                    }}
                  >
                    <option value="" disabled>
                      Select budget
                    </option>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range}>
                        {range}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Details */}
              <div>
                <label
                  htmlFor="details"
                  className="block text-sm text-foreground-muted mb-2"
                >
                  Details
                </label>
                <textarea
                  id="details"
                  name="details"
                  value={formData.details}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Product, specs, reference photos or links..."
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-white placeholder:text-foreground-secondary focus:outline-none focus:border-orange-primary transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 text-base font-medium text-white rounded-full gradient-orange hover:opacity-90 transition-all shadow-orange group"
              >
                Send on WhatsApp
                <Send
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>

              <p className="text-sm text-foreground-secondary text-center">
                Opens WhatsApp with your details filled in. We usually reply
                within a few hours.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
