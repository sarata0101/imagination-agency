"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Contact } from "@/components/sections/contact";
import type { ServiceData } from "@/components/sections/services-data";

/* Animations (نفس ستايل أقسامك) */
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export function ServiceDetail({ service }: { service: ServiceData }) {
  return (
    <main className="bg-background">
      {/* =========================
          HERO (نفس ستايلكم + زر واحد يروح للـ Contact الحقيقي)
         ========================= */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-48">
        {/* الخلفية الديكورية (زي ما هي بالظبط) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.04, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full border-2 border-foreground"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.06, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
            className="absolute -bottom-16 -left-16 w-[300px] h-[300px] rounded-full bg-secondary/10"
          />
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 0.05, scaleX: 1 }}
            transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
            className="absolute top-1/3 left-0 w-full h-[1px] bg-foreground origin-left rotate-12"
          />
          <motion.div
            initial={{ opacity: 0, rotate: 0 }}
            animate={{ opacity: 0.08, rotate: 45 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="absolute top-1/4 left-1/4 w-16 h-16 border border-secondary"
          />
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

        {/* المحتوى */}
        <div className="relative py-32 z-10 max-w-6xl mx-auto px-6 text-center">
          {/* البادج */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center mb-10"
          >
            <span className="inline-block px-4 py-2 text-sm font-arabic-stylized font-medium text-secondary border border-secondary/30 rounded-full mb-2">
              {service.badgeAr}
            </span>
            <span className="ltr text-[10px] font-['Acumin'] tracking-[0.2em] text-secondary/80 uppercase">
              {service.badgeEn}
            </span>
          </motion.div>

          {/* العنوان */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center gap-8 font-bold text-foreground"
          >
            <span className="font-arabic-stylized text-5xl sm:text-7xl md:text-8xl leading-[1.08]">
              <span className="block">{service.heroTitleArTop}</span>
              <span className="block text-primary mt-4">{service.heroTitleArAccent}</span>
            </span>

            <span className="ltr font-['Acumin'] text-2xl sm:text-3xl md:text-4xl text-muted-foreground uppercase tracking-tight opacity-80 leading-tight">
              {service.heroTitleEnTop}{" "}
              <span className="text-primary">{service.heroTitleEnAccent}</span>
            </span>
          </motion.h1>

          {/* الوصف */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 max-w-3xl mx-auto text-center"
          >
            <span className="block font-arabic-stylized text-xl md:text-2xl text-muted-foreground mb-4 leading-relaxed">
              {service.heroDescAr}
            </span>
            <span className="ltr block font-['Acumin'] text-sm md:text-base text-muted-foreground/70 uppercase tracking-wide leading-relaxed">
              {service.heroDescEn}
            </span>
          </motion.p>

          {/* زر واحد فقط - ويروح للـ Contact الحقيقي */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-14 flex items-center justify-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-8 rounded-full flex flex-col gap-1 min-w-[240px] h-auto"
            >
              <a href="#contact">
                <span className="font-arabic-stylized text-lg">تواصل معنا</span>
                <span className="ltr font-['Acumin'] text-xs uppercase tracking-wider opacity-80">
                  Contact Us
                </span>
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* =========================
          WHAT YOU GET (متناسق + آخر صف بيبقى centered بروفيشنال)
         ========================= */}
      <section className="py-32 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 flex flex-col items-center">
            <span className="text-sm font-arabic-stylized font-medium tracking-wide text-secondary mb-2">
              ما الذي ستحصل عليه؟
            </span>
            <span className="ltr text-[10px] font-['Acumin'] tracking-[0.2em] uppercase text-secondary/70">
              WHAT YOU GET
            </span>
          </div>

          {/* Flex wrap عشان لو عدد العناصر فردي يطلع متوازن */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6"
          >
            {service.whatYouGet.map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="group w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] max-w-[420px] p-10 bg-card border border-border rounded-2xl hover:border-primary/30 transition-all duration-500"
              >
                {/* رقم/ديكور بسيط يدي “اكتمال” للكارت */}
                <div className="mb-7 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <span className="font-['Acumin'] text-sm text-primary">{String(i + 1).padStart(2, "0")}</span>
                </div>

                <p className="font-arabic-stylized text-xl text-foreground leading-relaxed text-right">
                  {item.ar}
                </p>

                <p className="ltr mt-4 font-['Acumin'] text-[11px] uppercase tracking-wider text-muted-foreground/70 leading-relaxed text-left">
                  {item.en}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =========================
          PROCESS
         ========================= */}
      <section className="py-32 px-6 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 flex flex-col items-center">
            <span className="text-sm font-arabic-stylized font-medium tracking-wide text-secondary mb-2">
              آلية عملنا
            </span>
            <span className="ltr text-[10px] font-['Acumin'] tracking-[0.2em] uppercase text-secondary/70">
              OUR PROCESS
            </span>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {service.process.map((step, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="p-10 bg-card border border-border rounded-2xl hover:border-primary/30 transition-all duration-500"
              >
                <div className="mb-7 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <span className="font-['Acumin'] text-sm text-primary">{i + 1}</span>
                </div>

                <h3 className="font-arabic-stylized text-2xl font-bold text-foreground text-right">
                  {step.arTitle}
                </h3>
                <p className="mt-3 font-arabic-stylized text-muted-foreground leading-relaxed text-right">
                  {step.arDesc}
                </p>

                <p className="ltr mt-6 font-['Acumin'] text-[10px] uppercase tracking-[0.2em] text-muted-foreground/70 text-left">
                  {step.enTitle}
                </p>
                <p className="ltr mt-2 font-['Acumin'] text-xs text-muted-foreground/70 leading-relaxed text-left">
                  {step.enDesc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =========================
          BEST WORK (مكان الصور)
         ========================= */}
      <section id="service-work" className="py-32 px-6 bg-background scroll-mt-28">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 flex flex-col items-center">
            <span className="text-sm font-arabic-stylized font-medium tracking-wide text-secondary mb-2">
              مختارات من أعمالنا
            </span>
            <span className="ltr text-[10px] font-['Acumin'] tracking-[0.2em] uppercase text-secondary/70">
              SELECTED WORKS
            </span>
          </div>

          {service.bestWork.length === 0 ? (
            <div className="max-w-3xl mx-auto p-10 bg-card border border-border rounded-2xl text-center">
              <p className="font-arabic-stylized text-xl text-foreground mb-3">
                ستُضاف الأعمال الخاصة بهذه الخدمة قريباً.
              </p>
              <p className="ltr font-['Acumin'] text-xs uppercase tracking-wider text-muted-foreground/70">
                Works for this service will be added soon.
              </p>
            </div>
          ) : (
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
              {service.bestWork.map((w) => (
                <div
                  key={w.titleEn}
                  className="group relative break-inside-avoid overflow-hidden rounded-2xl cursor-pointer"
                >
                  <div className="relative w-full aspect-[4/3]">
                    <Image
                      src={w.image || "/placeholder.svg"}
                      alt={w.titleEn}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />

                    <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-all duration-500" />

                    <div className="absolute inset-0 p-6 flex flex-col justify-end items-start text-right opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                      <div className="flex flex-col items-start mb-2 w-full">
                        <span className="font-arabic-stylized text-secondary text-sm font-bold tracking-wide">
                          {w.categoryAr}
                        </span>
                        <span className="ltr font-['Acumin'] text-secondary/80 text-[10px] uppercase tracking-wider w-full text-right">
                          {w.categoryEn}
                        </span>
                      </div>

                      <h3 className="flex flex-col gap-1 font-semibold text-white w-full">
                        <span className="font-arabic-stylized text-xl">{w.titleAr}</span>
                        <span className="ltr font-['Acumin'] text-sm opacity-80 uppercase tracking-wide w-full text-right">
                          {w.titleEn}
                        </span>
                      </h3>
                    </div>

                    <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* =========================
          FAQ
         ========================= */}
      <section className="py-32 px-6 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 flex flex-col items-center">
            <span className="text-sm font-arabic-stylized font-medium tracking-wide text-secondary mb-2">
              أسئلة شائعة
            </span>
            <span className="ltr text-[10px] font-['Acumin'] tracking-[0.2em] uppercase text-secondary/70">
              FAQ
            </span>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-6"
          >
            {service.faqs.map((f, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="p-10 bg-card border border-border rounded-2xl"
              >
                <p className="font-arabic-stylized text-xl font-bold text-foreground text-right">
                  {f.qAr}
                </p>
                <p className="mt-4 font-arabic-stylized text-muted-foreground leading-relaxed text-right">
                  {f.aAr}
                </p>

                <p className="ltr mt-8 font-['Acumin'] text-[10px] uppercase tracking-[0.2em] text-muted-foreground/70 text-left">
                  {f.qEn}
                </p>
                <p className="ltr mt-2 font-['Acumin'] text-xs text-muted-foreground/70 leading-relaxed text-left">
                  {f.aEn}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =========================
          CONTACT الحقيقي بتاعك (بنفس كودك اللي بعتتيه)
          والزرار فوق بيروح له بـ href="#contact"
         ========================= */}
      <Contact />
    </main>
  );
}