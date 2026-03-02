"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { useMemo, useState } from "react";

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

    // لو الرابط Drive File نجرّب 3 مصادر Thumbnail
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
  const unoptimized = isDriveThumbUrl(src);

  return (
    <Image
      src={src}
      alt={alt}
      fill
      className={className}
      sizes={sizes}
      unoptimized={unoptimized}
      referrerPolicy="no-referrer"
      onError={() => setIdx((v) => Math.min(v + 1, sources.length - 1))}
    />
  );
}

/* =========================
   Portfolio data (International/Strong)
   ========================= */
type PortfolioProject = {
  titleAr: string;
  titleEn: string;
  categoryAr: string;
  categoryEn: string;
  // ملاحظة: image تقدر تسيبيها فاضية
  // thumbUrl: لو كان Folder/Facebook الأفضل تحطي Screenshot من Supabase Storage هنا
  image?: string;
  thumbUrl?: string;
  driveUrl?: string;
  size: "large" | "medium" | "small";
};

const projects: PortfolioProject[] = [
  {
    titleAr: "وزارة العدل القطرية",
    titleEn: "Qatar Ministry of Justice",
    categoryAr: "تصوير فيديو",
    categoryEn: "Video Production",
    driveUrl:
      "https://drive.google.com/file/d/1xKKB63XHxgH0oOA_osjkunmKVC5zDTQB/view?usp=drivesdk",
    size: "large",
  },
  {
    titleAr: "اللجنة الدائمة للقانون الدولي الإنساني – السعودية",
    titleEn: "Saudi IHL Standing Committee",
    categoryAr: "تصوير فيديو",
    categoryEn: "Video Production",
    driveUrl:
      "https://drive.google.com/file/d/1nduAkBZotwpLt0GErJBJIs8chgKIL3Uh/view?usp=drivesdk",
    size: "medium",
  },
  {
    titleAr: "تغطية الاحتفال السنوي لشركة دايكن العالمية",
    titleEn: "Daikin Annual Celebration",
    categoryAr: "تغطيات خارجية",
    categoryEn: "Event Coverage",
    driveUrl:
      "https://drive.google.com/file/d/1rsp63X5U7oDvCv0ua4q7o4nM9AHdy1O8/view?usp=drivesdk",
    size: "medium",
  },
  {
    titleAr: "تغطية إيفنت أصوات عربية",
    titleEn: "Arab Voices Event",
    categoryAr: "تغطيات خارجية",
    categoryEn: "Event Coverage",
    driveUrl:
      "https://drive.google.com/file/d/1icDjzUK6hOWnJBEzDimFZHQzgBNnHglY/view?usp=drivesdk",
    size: "small",
  },
  {
    titleAr: "برومو شو ما وراء المايك (٣ كاميرات)",
    titleEn: "Beyond The Mic Promo (3 Cameras)",
    categoryAr: "مونتاج",
    categoryEn: "Post-Production",
    driveUrl:
      "https://drive.google.com/file/d/1QnlW3PQHMqXtCq9Gu4U5jzATKiR3uwGH/view?usp=drivesdk",
    size: "small",
  },
  {
    titleAr: "ميكنج تسجيل فيلم كويتي (أنميشن)",
    titleEn: "Kuwaiti Animation Making-of",
    categoryAr: "تصوير فيديو",
    categoryEn: "Video Production",
    driveUrl:
      "https://drive.google.com/file/d/1tTifwE9zmMxJO3S5gO2_YUPhqA9GuJZU/view?usp=drivesdk",
    size: "medium",
  },

  // عناصر Folder قوية — ستفتح عادي، لكن thumbnail التلقائي غالبًا لن يظهر
  // الأفضل لاحقًا تحطي thumbUrl (Screenshot من Supabase Storage) بدل ما يفضل placeholder.
  {
    titleAr: "إعلانات شركة كوفتي العالمية (٩ دول)",
    titleEn: "Kofty Global Ads (9+ Countries)",
    categoryAr: "إعلانات عالمية",
    categoryEn: "Global Ads",
    driveUrl:
      "https://drive.google.com/drive/folders/1H2VRhUOnzPcAYqFy5rJln7Sq4AHUpLqU",
    // thumbUrl: "PUT_SUPABASE_PUBLIC_URL_HERE",
    size: "large",
  },
  {
    titleAr: "إنتاج بالذكاء الاصطناعي (سلسلة 50+)",
    titleEn: "AI Production Series (50+)",
    categoryAr: "إنتاج AI",
    categoryEn: "AI Production",
    driveUrl:
      "https://drive.google.com/file/d/1jy0DCoMquuFnZoCi0Y8xsV-PM76LyjnR/view?usp=drive_link",
    // thumbUrl: "PUT_SUPABASE_PUBLIC_URL_HERE",
    size: "small",
  },
];

/* Animations (Strict Typing) */
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function Portfolio() {
  return (
    <section className="py-32 px-6 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        {/* عنوان القسم (عربي + إنجليزي) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 flex flex-col items-center"
        >
          <div className="flex flex-col items-center mb-4">
            <span className="text-sm font-arabic-stylized font-medium tracking-wide text-secondary mb-1">
              أعمالنــا
            </span>
            <span className="ltr text-[10px] font-['Acumin'] tracking-[0.2em] uppercase text-secondary/70">
              Our Portfolio
            </span>
          </div>

          <h2 className="flex flex-col items-center gap-2 font-bold text-foreground">
            <span className="font-arabic-stylized text-4xl md:text-5xl">
              مختارات من أعمالنا
            </span>
            <span className="ltr font-['Acumin'] text-xl md:text-2xl text-muted-foreground/60 uppercase tracking-tight">
              Selected Works
            </span>
          </h2>
        </motion.div>

        {/* شبكة المشاريع */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          {projects.map((project) => (
            <motion.a
              key={`${project.titleEn}-${project.driveUrl ?? ""}`}
              variants={itemVariants}
              href={project.driveUrl || "#"}
              target={project.driveUrl ? "_blank" : undefined}
              rel={project.driveUrl ? "noopener noreferrer" : undefined}
              className="group relative break-inside-avoid overflow-hidden rounded-2xl cursor-pointer block"
            >
              <div
                className={`relative w-full ${
                  project.size === "large"
                    ? "aspect-[4/5]"
                    : project.size === "medium"
                    ? "aspect-[4/3]"
                    : "aspect-square"
                }`}
              >
                <SmartThumb
                  thumbUrl={project.thumbUrl || project.image || null}
                  driveUrl={project.driveUrl || null}
                  alt={project.titleEn}
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* الطبقة الشفافة */}
                <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-all duration-500" />

                {/* المحتوى عند الهوفر */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end items-start text-right opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                  {/* التصنيف (عربي + إنجليزي) */}
                  <div className="flex flex-col items-start mb-2 w-full">
                    <span className="font-arabic-stylized text-secondary text-sm font-bold tracking-wide">
                      {project.categoryAr}
                    </span>
                    <span className="ltr font-['Acumin'] text-secondary/80 text-[10px] uppercase tracking-wider w-full text-right">
                      {project.categoryEn}
                    </span>
                  </div>

                  {/* اسم المشروع (عربي + إنجليزي) */}
                  <h3 className="flex flex-col gap-1 font-semibold text-white w-full">
                    <span className="font-arabic-stylized text-xl md:text-2xl">
                      {project.titleAr}
                    </span>
                    <span className="ltr font-['Acumin'] text-sm opacity-80 uppercase tracking-wide w-full text-right">
                      {project.titleEn}
                    </span>
                  </h3>
                </div>

                {/* الزاوية الديكورية */}
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* زرار مشاهدة الكل */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16 flex justify-center"
        >
          <button className="px-10 py-4 border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-300 rounded-full flex flex-col items-center gap-1 group">
            <span className="font-arabic-stylized text-lg font-bold">شاهد كل الأعمال</span>
            <span className="ltr font-['Acumin'] text-xs uppercase tracking-widest opacity-80 group-hover:opacity-100">
              View All Projects
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}