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
      { slug: "designs", titleAr: "التصاميم الإبداعية", titleEn: "Designs", icon: Palette },
      { slug: "editing", titleAr: "المعالجة والتحرير البصري", titleEn: "Editing", icon: Scissors },
      { slug: "company-profile-layout", titleAr: "تصميم الملفات التعريفية والتنسيق الفني", titleEn: "Profile + Layout", icon: FileText },
    ],
  },
  {
    titleAr: "الإنتاج المرئي والمسموع",
    titleEn: "Media Production",
    items: [
      { slug: "video-shooting", titleAr: "الإنتاج المرئي السينمائي", titleEn: "Video", icon: Video },
      { slug: "photography", titleAr: "التصوير الفوتوغرافي الاحترافي", titleEn: "Photo", icon: Camera },
      { slug: "exterior-coverage", titleAr: "التغطيات الميدانية والفعاليات", titleEn: "Coverage", icon: MapPin },
      { slug: "reels-shooting", titleAr: "إنتاج المقاطع القصيرة", titleEn: "Reels", icon: Clapperboard },
      { slug: "montage", titleAr: "المونتاج وعمليات ما بعد الإنتاج", titleEn: "Post-Production", icon: Film },
      { slug: "voice-recording", titleAr: "الهندسة والتعليق الصوتي", titleEn: "Voice", icon: Mic },
      { slug: "ai-production", titleAr: "الإنتاج بالذكاء الاصطناعي", titleEn: "AI Production", icon: Sparkles },
    ],
  },
  {
    titleAr: "إدارة وصناعة المحتوى",
    titleEn: "Content Creation & Management",
    items: [
      { slug: "social-media-management", titleAr: "إدارة منصات التواصل الاجتماعي", titleEn: "Management", icon: LayoutGrid },
      { slug: "content-writing", titleAr: "صناعة وتحرير المحتوى الرقمي", titleEn: "Content", icon: PenTool },
      { slug: "script-writing", titleAr: "كتابة السيناريو والحوار", titleEn: "Scripts", icon: PenLine },
      { slug: "dialect-correction", titleAr: "التدقيق اللغوي وضبط اللهجات", titleEn: "Dialect", icon: Languages },
    ],
  },
  {
    titleAr: "التسويق والنمو",
    titleEn: "Marketing & Growth",
    items: [
      { slug: "marketing", titleAr: "التسويق الاستراتيجي المتكامل", titleEn: "Marketing", icon: Megaphone },
      { slug: "media-buying", titleAr: "إدارة الحملات الإعلانية الممولة", titleEn: "Media Buying", icon: Target },
    ],
  },
];

export function Services() {
  return (
    <section className="py-32 px-4 md:px-6 bg-background">
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
        <div className="space-y-24">
          {categories.map((cat) => (
            <section key={cat.titleEn}>
              {/* عنوان القسم الفرعي */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-12 flex flex-col items-center"
              >
                <span className="font-arabic-stylized text-2xl md:text-3xl font-bold text-foreground">
                  {cat.titleAr}
                </span>
                <span className="ltr font-['Acumin'] text-[10px] md:text-xs uppercase tracking-[0.2em] text-muted-foreground/70 mt-2">
                  {cat.titleEn}
                </span>
                <div className="mt-6 h-px w-40 bg-border" />
              </motion.div>

              {/* ✅ شبكة الخدمات: 2 في الجوال، 3 في التابلت، 4 في اللابتوب */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap justify-center gap-3 md:gap-6"              >
                {cat.items.map((s) => {
                  const Icon = s.icon;

                  return (
                    <motion.div key={s.slug} variants={itemVariants} className="w-[calc(50%-6px)] md:w-[220px] lg:w-[250px] h-auto">                      <Link
                        href={`/services/${s.slug}`}
                        className="group flex flex-col items-center justify-between h-full w-full rounded-2xl border border-border bg-card hover:border-primary/30 transition-all duration-500 p-5 md:p-6 text-center shadow-sm hover:shadow-md"
                      >
                        <div className="w-full flex flex-col items-center">
                          {/* الأيقونة */}
                          <div className="mx-auto mb-4 w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                            <Icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                          </div>

                          {/* النصوص - مع تحديد ارتفاع أدنى للعربي لتوحيد الشكل */}
                          <div className="space-y-2">
                            <p className="font-arabic-stylized text-sm md:text-base font-bold text-foreground leading-tight min-h-[42px] flex items-center justify-center">
                              {s.titleAr}
                            </p>
                            <p className="ltr font-['Acumin'] text-[9px] md:text-[10px] uppercase tracking-wider text-muted-foreground/70">
                              {s.titleEn}
                            </p>
                          </div>
                        </div>

                        {/* زر اعرف المزيد - دايماً في أسفل الكرت */}
                        <div className="mt-5 pt-3 border-t border-transparent group-hover:border-border/50 w-full transition-all duration-300">
                          <span className="font-arabic-stylized text-[11px] md:text-xs text-secondary font-medium">
                            اعرف المزيد
                          </span>
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