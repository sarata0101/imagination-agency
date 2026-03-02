"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Contact } from "@/components/sections/contact";
import type { ServiceData } from "@/components/sections/services-data";
import { useMemo, useState } from "react";
import { Play } from "lucide-react";

/* Animations (نفس ستايل أقسامك) */
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

/* =========================
   Drive thumbnail helpers
   ========================= */
function extractDriveFileId(url?: string | null): string | null {
  if (!url) return null;

  // /file/d/FILE_ID/view
  const m1 = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (m1?.[1]) return m1[1];

  // open?id=FILE_ID أو uc?id=FILE_ID
  try {
    const u = new URL(url);
    const id = u.searchParams.get("id");
    if (id) return id;
  } catch {
    /* ignore */
  }

  return null;
}

/**
 * Google Drive sometimes blocks hotlinking thumbnails.
 * These 3 URLs are tried in order:
 * 1) drive.google.com thumbnail with authuser
 * 2) googleusercontent u/0
 * 3) googleusercontent default
 */
function driveThumbPrimary(fileId: string, width = 1200) {
  return `https://drive.google.com/thumbnail?authuser=0&id=${fileId}&sz=w${width}`;
}

function driveThumbFallback(fileId: string, width = 1200) {
  return `https://lh3.googleusercontent.com/u/0/d/${fileId}=w${width}`;
}

function driveThumbFallback2(fileId: string, width = 1200) {
  return `https://lh3.googleusercontent.com/d/${fileId}=w${width}`;
}

function isDriveThumbUrl(src: string) {
  return (
    src.includes("drive.google.com/thumbnail") ||
    src.includes("lh3.googleusercontent.com/")
  );
}

/* صورة ذكية:
   - thumbUrl (من Supabase) لو موجود
   - وإلا thumbnail من Drive لو الرابط file
   - وإلا placeholder
*/
function SmartThumb({
  thumbUrl,
  driveUrl,
  alt,
  className,
  sizes,
}: {
  thumbUrl?: string | null;
  driveUrl?: string | null;
  alt: string;
  className?: string;
  sizes?: string;
}) {
  const fileId = useMemo(() => extractDriveFileId(driveUrl), [driveUrl]);

  const sources = useMemo(() => {
    const arr: string[] = [];
    if (thumbUrl) arr.push(thumbUrl);

    // لو الرابط drive file نجرّب 3 مصادر thumbnail
    if (fileId) {
      arr.push(driveThumbPrimary(fileId, 1200));
      arr.push(driveThumbFallback(fileId, 1200));
      arr.push(driveThumbFallback2(fileId, 1200));
    }

    // fallback الأخير
    arr.push("/placeholder.svg");
    return arr;
  }, [thumbUrl, fileId]);

  const [idx, setIdx] = useState(0);
  const src = sources[idx];

  // Drive thumbnails ساعات Next optimizer يتعب معها
  const unoptimized = isDriveThumbUrl(src);

  return (
    <Image
      src={src}
      alt={alt}
      fill
      className={className}
      sizes={sizes}
      unoptimized={unoptimized}
      // مهم جدًا مع Drive thumbnails
      referrerPolicy="no-referrer"
      onError={() => setIdx((v) => Math.min(v + 1, sources.length - 1))}
    />
  );
}

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
              <span className="block text-primary mt-4">
                {service.heroTitleArAccent}
              </span>
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
          WHAT YOU GET
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
                <div className="mb-7 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <span className="font-['Acumin'] text-sm text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
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
          BEST WORK (Thumbnail تلقائي من Drive + يفتح Drive عند الضغط)
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
              {service.bestWork.map((w) => {
                const driveUrl = (w as any).driveUrl || null;
                const thumbUrl =
                  (w as any).thumbUrl || (w as any).image || null;

                return (
                  <a
                    key={`${w.titleEn}-${driveUrl || ""}`}
                    href={driveUrl || "#"}
                    target={driveUrl ? "_blank" : undefined}
                    rel={driveUrl ? "noopener noreferrer" : undefined}
                    className="group relative break-inside-avoid overflow-hidden rounded-2xl cursor-pointer block"
                  >
                    <div className="relative w-full aspect-[4/3]">
                      <SmartThumb
                        thumbUrl={thumbUrl}
                        driveUrl={driveUrl}
                        alt={w.titleEn || w.titleAr}
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />

                      {/* طبقة هوفر */}
                      <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-all duration-500" />

                      {/* زر تشغيل */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="w-16 h-16 rounded-full bg-secondary/90 flex items-center justify-center">
                          <Play className="w-7 h-7 text-background" />
                        </div>
                      </div>

                      {/* محتوى عند الهوفر */}
                      <div className="absolute inset-0 p-6 flex flex-col justify-end items-start text-right opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                        <div className="flex flex-col items-start mb-2 w-full">
                          <span className="font-arabic-stylized text-secondary text-sm font-bold tracking-wide">
                            {(w as any).categoryAr || ""}
                          </span>
                          <span className="ltr font-['Acumin'] text-secondary/80 text-[10px] uppercase tracking-wider w-full text-right">
                            {(w as any).categoryEn || ""}
                          </span>
                        </div>

                        <h3 className="flex flex-col gap-1 font-semibold text-white w-full">
                          <span className="font-arabic-stylized text-xl">
                            {w.titleAr}
                          </span>
                          <span className="ltr font-['Acumin'] text-sm opacity-80 uppercase tracking-wide w-full text-right">
                            {w.titleEn}
                          </span>
                        </h3>
                      </div>

                      <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </a>
                );
              })}
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
            {(service.tags ?? []).map((t, i) => (
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
          CONTACT الحقيقي بتاعك
         ========================= */}
      <Contact />
    </main>
  );
}