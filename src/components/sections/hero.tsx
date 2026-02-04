"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Subtle creative shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large circle - top right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.04, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full border-2 border-foreground"
        />
        {/* Small circle - bottom left */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.06, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          // (تعديل) هنا استخدمنا الأخضر الثانوي عشان الشكل يبقى مريح للعين
          className="absolute -bottom-16 -left-16 w-[300px] h-[300px] rounded-full bg-secondary/10"
        />
        {/* Diagonal line */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 0.05, scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
          className="absolute top-1/3 left-0 w-full h-[1px] bg-foreground origin-left rotate-12"
        />
        {/* Small accent square */}
        <motion.div
          initial={{ opacity: 0, rotate: 0 }}
          animate={{ opacity: 0.08, rotate: 45 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          // (تعديل) وده كمان أخضر
          className="absolute top-1/4 left-1/4 w-16 h-16 border border-secondary"
        />
        {/* Dots pattern */}
        <div className="absolute bottom-1/4 right-1/4 grid grid-cols-3 gap-4 opacity-10">
          {[...Array(9)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 + i * 0.05 }}
              className="w-2 h-2 rounded-full bg-foreground"
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* (تعديل) البادج خليته أخضر عشان يبان مميز */}
          <span className="inline-block mb-6 px-4 py-2 text-sm font-medium tracking-widest uppercase text-secondary border border-secondary/30 rounded-full">
            Creative Studio
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="font-[family-name:var(--font-heading)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-foreground tracking-tight leading-[1.1] text-balance"
        >
          Turning Passion
          <br />
          {/* (تعديل) هنا أهم كلمة خليتها بالبنفسجي الأساسي */}
          <span className="text-primary">into Reality</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          We craft bold brands and create unforgettable visual experiences that
          resonate with your audience and elevate your presence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            size="lg"
            className="bg-foreground text-background hover:bg-foreground/90 px-8 py-6 text-base font-medium rounded-full"
          >
            Our Work
          </Button>
          {/* (تعديل) زرار التواصل خليته بنفسجي ينور */}
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base font-medium rounded-full"
          >
            Contact Us
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-foreground/20 flex items-start justify-center p-2"
        >
          {/* (تعديل) النقطة الصغيرة اللي بتتحرك خليتها بنفسجي */}
          <motion.div className="w-1 h-2 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}