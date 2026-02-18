"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-48">
      
      {/* =========================================================
          1. الخلفية الديكورية (زي ما هي بالظبط ماتمسحش منها حاجة)
         ========================================================= */}
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

      {/* =========================================================
          2. المحتوى (تم تطبيق LTR على الإنجليزي وحذف الشكل الزيادة)
         ========================================================= */}
      <div className="relative py-32 z-10 max-w-6xl mx-auto px-6 text-center">
        
        {/* البادج الصغير */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center mb-8"
        >
          {/* العربي */}
          <span className="inline-block px-4 py-2 text-sm font-arabic-stylized font-medium text-secondary border border-secondary/30 rounded-full mb-1">
            استوديو إبداعي متكامل
          </span>
          {/* الإنجليزي: حطينا ltr عشان يتظبط */}
          <span className="ltr text-[10px] font-['Acumin'] tracking-[0.2em] text-secondary/80 uppercase">
            Full-Service Creative Studio
          </span>
        </motion.div>

        {/* العنوان الرئيسي */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col gap-4 font-bold text-foreground leading-tight"
        >
          {/* العربي الكبير */}
          <span className="font-arabic-stylized text-5xl sm:text-7xl md:text-8xl">
            نحـول الشغـف
            <br />
            <span className="text-primary">إلى واقــع</span>
          </span>
          
          {/* الإنجليزي تحته: حطينا ltr والنقطة في الآخر */}
          <span className="ltr font-['Acumin'] text-2xl sm:text-3xl md:text-4xl text-muted-foreground uppercase tracking-tight mt-2 opacity-80">
            Turning Passion <span className="text-primary"> Into Reality </span>
          </span>
        </motion.h1>

        {/* الوصف */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 max-w-2xl mx-auto text-center"
        >
          {/* العربي */}
          <span className="block font-arabic-stylized text-xl md:text-2xl text-muted-foreground mb-3 leading-relaxed">
            نصمم علامات تجارية جريئة ونخلق تجارب بصرية لا تُنسى، ليبقى أثرك راسخاً لدى جمهورك.
          </span>
          {/* الإنجليزي: حطينا ltr والنقطة في الآخر */}
          <span className="ltr block font-['Acumin'] text-sm md:text-base text-muted-foreground/70 uppercase tracking-wide leading-relaxed">
            We craft bold brands and create unforgettable visual experiences that resonate with your audience and elevate your presence.
          </span>
        </motion.p>

        {/* الأزرار */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          {/* زرار الأعمال */}
          <Button
            size="lg"
            className="bg-foreground text-background hover:bg-foreground/90 px-8 py-8 rounded-full flex flex-col gap-1 min-w-[200px] h-auto"
          >
            <span className="font-arabic-stylized text-lg">شاهد أعمالنا</span>
            <span className="ltr font-['Acumin'] text-xs uppercase tracking-wider opacity-80">Our Work</span>
          </Button>

          {/* زرار التواصل */}
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-8 rounded-full flex flex-col gap-1 min-w-[200px] h-auto"
          >
            <span className="font-arabic-stylized text-lg">تواصل معنا</span>
            <span className="ltr font-['Acumin'] text-xs uppercase tracking-wider opacity-80">Contact Us</span>
          </Button>
        </motion.div>
      </div>

      
    </section>
  );
}