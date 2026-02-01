"use client";

import { Video, Headphones, Palette } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Video,
    title: "Visual Production",
    description:
      "From concept to screen, we create stunning visual content that captures attention and tells your story with cinematic excellence.",
  },
  {
    icon: Headphones,
    title: "Audio Production",
    description:
      "Immersive soundscapes and crystal-clear audio that elevate your brand's voice and create memorable auditory experiences.",
  },
  {
    icon: Palette,
    title: "Brand Crafting",
    description:
      "Strategic brand development that distills your essence into a cohesive visual identity, positioning you for lasting impact.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export function Services() {
  return (
    <section className="py-32 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-sm font-medium tracking-widest uppercase text-[#FF5722]">
            What We Do
          </span>
          <h2 className="mt-4 font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold text-foreground">
            Our Services
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="group relative p-10 bg-card border border-border rounded-2xl hover:border-[#FF5722]/30 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF5722]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-[#FF5722]/10 flex items-center justify-center mb-6 group-hover:bg-[#FF5722]/20 transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-[#FF5722]" />
                </div>
                
                <h3 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-foreground mb-4">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                <div className="mt-6 flex items-center text-[#FF5722] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm">Learn more</span>
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
