"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import {
  Palette,
  Scissors,
  FileText,
  Video,
  Camera,
  MapPin,
  Clapperboard,
  Film,
  Mic,
  Sparkles,
  LayoutGrid,
  PenTool,
  PenLine,
  Languages,
  Megaphone,
  Target,
} from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.06 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const categories = [
  {
    titleAr: "خدمات الهوية والتصميم",
    titleEn: "Brand Identity & Design",
    items: [
      { slug: "designs", titleAr: "ديزاينات", titleEn: "Designs", icon: Palette },
      { slug: "editing", titleAr: "إيديتينج", titleEn: "Editing", icon: Scissors },
      { slug: "company-profile-layout", titleAr: "بروفايل + لاي أوت", titleEn: "Profile + Layout", icon: FileText },
    ],
  },
  {
    titleAr: "الإنتاج المرئي والمسموع",
    titleEn: "Media Production",
    items: [
      { slug: "video-shooting", titleAr: "تصوير فيديو", titleEn: "Video", icon: Video },
      { slug: "photography", titleAr: "تصوير فوتو", titleEn: "Photo", icon: Camera },
      { slug: "exterior-coverage", titleAr: "تغطيات خارجية", titleEn: "Coverage", icon: MapPin },
      { slug: "reels-shooting", titleAr: "تصوير ريلز", titleEn: "Reels", icon: Clapperboard },
      { slug: "montage", titleAr: "مونتاج", titleEn: "Post-Production", icon: Film },
      { slug: "voice-recording", titleAr: "تسجيل صوتي", titleEn: "Voice", icon: Mic },
      { slug: "ai-production", titleAr: "إنتاج AI", titleEn: "AI Production", icon: Sparkles },
    ],
  },
  {
    titleAr: "إدارة وصناعة المحتوى",
    titleEn: "Content Creation & Management",
    items: [
      { slug: "social-media-management", titleAr: "إدارة صفحات", titleEn: "Management", icon: LayoutGrid },
      { slug: "content-writing", titleAr: "كتابة كونتنت", titleEn: "Content", icon: PenTool },
      { slug: "script-writing", titleAr: "كتابة اسكربتات", titleEn: "Scripts", icon: PenLine },
      { slug: "dialect-correction", titleAr: "تصحيح لهجة", titleEn: "Dialect", icon: Languages },
    ],
  },
  {
    titleAr: "التسويق والنمو",
    titleEn: "Marketing & Growth",
    items: [
      { slug: "marketing", titleAr: "التسويق عموماً", titleEn: "Marketing", icon: Megaphone },
      { slug: "media-buying", titleAr: "ميديا باينج", titleEn: "Media Buying", icon: Target },
    ],
  },
];

export function Services() {
  return (
    <section className="py-32 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* عنوان القسم الرئيسي */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 flex flex-col items-center"
        >
          <div className="flex flex-col items-center mb-4">
            <span className="text-sm font-arabic-stylized font-medium tracking-wide text-secondary mb-1">
              ماذا نقدم
            </span>
            <span className="ltr text-[10px] font-['Acumin'] tracking-[0.2em] uppercase text-secondary/70">
              What We Do
            </span>
          </div>

          <h2 className="flex flex-col items-center gap-2 font-bold text-foreground">
            <span className="font-arabic-stylized text-4xl md:text-5xl">خدماتنــا</span>
            <span className="ltr font-['Acumin'] text-xl md:text-2xl text-muted-foreground/60 uppercase tracking-tight">
              Our Services
            </span>
          </h2>
        </motion.div>

        {/* الأقسام الأربعة */}
        <div className="space-y-16">
          {categories.map((cat) => (
            <section key={cat.titleEn}>
              {/* عنوان القسم الفرعي */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-10 flex flex-col items-center"
              >
                <span className="font-arabic-stylized text-2xl md:text-3xl font-bold text-foreground">
                  {cat.titleAr}
                </span>
                <span className="ltr font-['Acumin'] text-[10px] md:text-xs uppercase tracking-[0.2em] text-muted-foreground/70 mt-2">
                  {cat.titleEn}
                </span>
                <div className="mt-6 h-px w-40 bg-border" />
              </motion.div>

              {/* ✅ Flex + max-width = 3 في الموبايل / 4 في الديسكتوب + توسيط كل الصفوف */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mx-auto flex flex-wrap justify-center gap-4 md:gap-6 max-w-[520px] md:max-w-[800px]"
              >
                {cat.items.map((s) => {
                  const Icon = s.icon;

                  return (
                    <motion.div key={s.slug} variants={itemVariants}>
                      <Link
                        href={`/services/${s.slug}`}
                        className="group block w-[160px] md:w-[180px] rounded-2xl border border-border bg-card hover:border-primary/30 transition-all duration-500 p-4 md:p-5 text-center"
                      >
                        <div className="mx-auto mb-3 w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                          <Icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                        </div>

                        <div className="space-y-1">
                          <p className="font-arabic-stylized text-sm md:text-base font-bold text-foreground leading-snug">
                            {s.titleAr}
                          </p>
                          <p className="ltr font-['Acumin'] text-[9px] md:text-[10px] uppercase tracking-wider text-muted-foreground/70">
                            {s.titleEn}
                          </p>
                        </div>

                        <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span className="font-arabic-stylized text-[11px] text-secondary">اعرف المزيد</span>
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </motion.div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}