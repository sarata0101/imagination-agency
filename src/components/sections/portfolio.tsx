"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

// 1. بيانات المشاريع (عربي + إنجليزي)
const projects = [
  {
    titleAr: "هوية تجارية فاخرة",
    titleEn: "Luxe Brand Identity",
    categoryAr: "هوية بصرية",
    categoryEn: "Branding",
    image: "/portfolio/project-1.jpg",
    size: "large",
  },
  {
    titleAr: "حملة الموجات الصوتية",
    titleEn: "Sonic Waves Campaign",
    categoryAr: "إنتاج صوتي",
    categoryEn: "Audio Production",
    image: "/portfolio/project-2.jpg",
    size: "small",
  },
  {
    titleAr: "تصوير عمراني",
    titleEn: "Urban Photography",
    categoryAr: "إنتاج مرئي",
    categoryEn: "Visual Production",
    image: "/portfolio/project-3.jpg",
    size: "small",
  },
  {
    titleAr: "تجربة رقمية",
    titleEn: "Digital Experience",
    categoryAr: "هوية بصرية",
    categoryEn: "Branding",
    image: "/portfolio/project-4.jpg",
    size: "medium",
  },
  {
    titleAr: "موشن جرافيك",
    titleEn: "Motion Graphics Reel",
    categoryAr: "إنتاج مرئي",
    categoryEn: "Visual Production",
    image: "/portfolio/project-5.jpg",
    size: "medium",
  },
  {
    titleAr: "قهوة أرتيزان",
    titleEn: "Artisan Coffee Co.",
    categoryAr: "هوية بصرية",
    categoryEn: "Branding",
    image: "/portfolio/project-6.jpg",
    size: "large",
  },
];

// 2. تعريف الحركات (Strict Typing)
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
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
            {/* العربي: تعديل الخط */}
            <span className="text-sm font-arabic-stylized font-medium tracking-wide text-secondary mb-1">
              أعمالنــا
            </span>
            {/* الإنجليزي: تعديل الخط */}
            <span className="text-[10px] font-['Acumin'] tracking-[0.2em] uppercase text-secondary/70">
              Our Portfolio
            </span>
          </div>
          
          <h2 className="flex flex-col items-center gap-2 font-bold text-foreground">
            {/* العربي: تعديل الخط */}
            <span className="font-arabic-stylized text-4xl md:text-5xl">
              مختارات من أعمالنا
            </span>
            {/* الإنجليزي: تعديل الخط */}
            <span className="font-['Acumin'] text-xl md:text-2xl text-muted-foreground/60 uppercase tracking-tight">
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
            <motion.div
              key={project.titleEn}
              variants={itemVariants}
              className="group relative break-inside-avoid overflow-hidden rounded-2xl cursor-pointer"
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
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.titleEn}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                {/* الطبقة الشفافة (بنفسجي غامق) */}
                <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                
                {/* المحتوى عند الهوفر */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end items-start text-right opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                  
                  {/* التصنيف (عربي + إنجليزي) */}
                  <div className="flex flex-col items-start mb-2">
                    {/* العربي: تعديل الخط */}
                    <span className="font-arabic-stylized text-secondary text-sm font-bold tracking-wide">
                      {project.categoryAr}
                    </span>
                    {/* الإنجليزي: تعديل الخط */}
                    <span className="font-['Acumin'] text-secondary/80 text-[10px] uppercase tracking-wider">
                      {project.categoryEn}
                    </span>
                  </div>

                  {/* اسم المشروع (عربي + إنجليزي) */}
                  <h3 className="flex flex-col gap-1 font-semibold text-white">
                    {/* العربي: تعديل الخط */}
                    <span className="font-arabic-stylized text-xl md:text-2xl">
                      {project.titleAr}
                    </span>
                    {/* الإنجليزي: تعديل الخط */}
                    <span className="font-['Acumin'] text-sm opacity-80 uppercase tracking-wide">
                      {project.titleEn}
                    </span>
                  </h3>
                </div>

                {/* الزاوية الديكورية (أخضر) */}
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
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
            {/* العربي: تعديل الخط */}
            <span className="font-arabic-stylized text-lg font-bold">شاهد كل الأعمال</span>
            {/* الإنجليزي: تعديل الخط */}
            <span className="font-['Acumin'] text-xs uppercase tracking-widest opacity-80 group-hover:opacity-100">View All Projects</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
