"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    // (تعديل) الخلفية بنفسجي عشان تخطف العين وتفصل بين الأقسام
    <section className="relative py-40 px-6 bg-primary overflow-hidden">
      {/* Arabic calligraphy inspired decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Flowing curved lines inspired by Arabic script */}
        <svg
          className="absolute top-0 left-0 w-full h-full opacity-10"
          viewBox="0 0 1200 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Flowing calligraphic curves */}
          <path
            d="M0,300 Q200,100 400,300 T800,300 T1200,300"
            stroke="white"
            strokeWidth="3"
            fill="none"
          />
          <path
            d="M0,350 Q300,150 600,350 T1200,350"
            stroke="white"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M-100,400 Q200,200 500,400 T1100,400"
            stroke="white"
            strokeWidth="2"
            fill="none"
          />
          {/* Decorative dots like Arabic diacritics */}
          <circle cx="400" cy="250" r="8" fill="white" />
          <circle cx="800" cy="280" r="6" fill="white" />
          <circle cx="600" cy="200" r="4" fill="white" />
          <circle cx="200" cy="320" r="5" fill="white" />
          <circle cx="1000" cy="240" r="7" fill="white" />
        </svg>
        
        {/* Large decorative swoosh */}
        <motion.div
          initial={{ opacity: 0, pathLength: 0 }}
          whileInView={{ opacity: 0.1, pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute -left-20 top-1/2 -translate-y-1/2"
        >
          <svg width="400" height="300" viewBox="0 0 400 300" fill="none">
            <path
              d="M10,150 Q100,50 200,150 Q300,250 390,150"
              // (تعديل) الخطوط الزخرفية بالأخضر
              stroke="#4fb27d" 
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </motion.div>

        {/* Right side decorative element */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute -right-20 top-1/4"
        >
          <svg width="300" height="400" viewBox="0 0 300 400" fill="none">
            <path
              d="M290,10 Q150,100 290,200 Q150,300 290,390"
              // (تعديل) الخطوط الزخرفية بالأخضر
              stroke="#4fb27d"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </motion.div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Arabic calligraphy style heading */}
          <div className="mb-8">
            {/* (تعديل) الكلمة العربي بالأخضر */}
            <span className="text-secondary text-lg md:text-xl font-medium tracking-wider">
              لنتخيل معاً
            </span>
          </div>
          
          {/* (تعديل) العنوان الأساسي أبيض (عشان الخلفية بنفسجي) */}
          <h2 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-[1.1] tracking-tight">
            {"Let's Imagine"}
            <br />
            {/* (تعديل) كلمة Together بالأخضر */}
            <span className="text-secondary">Together</span>
          </h2>

          <p className="mt-8 text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Ready to bring your vision to life? We're here to transform your ideas
            into captivating realities that leave lasting impressions.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12"
          >
            <Button
              size="lg"
              // (تعديل) الزرار أخضر والكلام أبيض
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-10 py-7 text-lg font-medium rounded-full shadow-lg"
            >
              Start a Project
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom decorative border */}
      {/* (تعديل) الخط اللي تحت خالص تدرج أخضر */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent opacity-50" />
    </section>
  );
}
