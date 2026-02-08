"use client";

import { Video, Headphones, Palette } from "lucide-react";
import { motion, Variants } from "framer-motion";

// 1. القائمة الجديدة (فيها العربي والإنجليزي)
const services = [
  {
    icon: Video,
    titleAr: "الإنتاج المرئي",
    titleEn: "Visual Production",
    descAr: "من الفكرة إلى الشاشة، نصنع محتوى بصرياً مذهلاً يروي قصتك ببراعة سينمائية تخطف الأنظار.",
    descEn: "From concept to screen, we create stunning visual content that captures attention and tells your story with cinematic excellence.",
  },
  {
    icon: Headphones,
    titleAr: "الإنتاج الصوتي",
    titleEn: "Audio Production",
    descAr: "تجارب صوتية غامرة وهندسة دقيقة ترفع من صوت علامتك التجارية وتخلق أثراً لا يُنسى.",
    descEn: "Immersive soundscapes and crystal-clear audio that elevate your brand's voice and create memorable auditory experiences.",
  },
  {
    icon: Palette,
    titleAr: "صياغة الهوية",
    titleEn: "Brand Crafting",
    descAr: "تطوير استراتيجي يبلور جوهرك في هوية بصرية متماسكة، لتضعك في مكانة متميزة ودائمة.",
    descEn: "Strategic brand development that distills your essence into a cohesive visual identity, positioning you for lasting impact.",
  },
];

// 2. تعريف الحركات (مع تحديد النوع Variants عشان الخطأ يختفي)
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
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
              ماذا نقدم
            </span>
            {/* الإنجليزي: تعديل الخط */}
            <span className="text-[10px] font-['Acumin'] tracking-[0.2em] uppercase text-secondary/70">
              What We Do
            </span>
          </div>
          
          <h2 className="flex flex-col items-center gap-2 font-bold text-foreground">
            {/* العربي: تعديل الخط */}
            <span className="font-arabic-stylized text-4xl md:text-5xl">
              خدماتنــا
            </span>
            {/* الإنجليزي: تعديل الخط */}
            <span className="font-['Acumin'] text-xl md:text-2xl text-muted-foreground/60 uppercase tracking-tight">
              Our Services
            </span>
          </h2>
        </motion.div>

        {/* كروت الخدمات */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {services.map((service) => {
            // تحويل الأيقونة لمكون عشان نقدر نستخدمها
            const IconComponent = service.icon;
            
            return (
              <motion.div
                key={service.titleEn}
                variants={cardVariants}
                className="group relative p-10 bg-card border border-border rounded-2xl hover:border-primary/30 transition-all duration-500"
              >
                {/* الإضاءة الخلفية */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                
                <div className="relative flex flex-col items-start text-right"> 
                  {/* الأيقونة */}
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                    <IconComponent className="w-7 h-7 text-primary" />
                  </div>
                  
                  {/* العنوان */}
                  <div className="mb-4 w-full">
                    {/* العربي: تعديل الخط */}
                    <h3 className="font-arabic-stylized text-2xl font-bold text-foreground mb-1">
                      {service.titleAr}
                    </h3>
                    {/* الإنجليزي: تعديل الخط */}
                    <p className="font-['Acumin'] text-sm font-medium text-muted-foreground/60 uppercase tracking-wide">
                      {service.titleEn}
                    </p>
                  </div>
                  
                  {/* الوصف */}
                  <div className="mb-6">
                    {/* العربي: تعديل الخط */}
                    <p className="font-arabic-stylized text-muted-foreground leading-relaxed text-lg mb-2">
                      {service.descAr}
                    </p>
                    {/* الإنجليزي: تعديل الخط */}
                    <p className="font-['Acumin'] text-sm text-muted-foreground/60 leading-relaxed dir-ltr text-left">
                      {service.descEn}
                    </p>
                  </div>

                  {/* رابط اقرأ المزيد */}
                  <div className="mt-auto flex items-center text-secondary font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 gap-2">
                    {/* العربي: تعديل الخط */}
                    <span className="font-arabic-stylized text-sm">اقرأ المزيد</span>
                    <svg
                      className="w-4 h-4 group-hover:-translate-x-1 transition-transform rotate-180"
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
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}