"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    // الخلفية تحولت لـ Dark Taupe (#483C32) بدلاً من البنفسجي
    <section className="relative py-40 px-6 bg-[#483C32] overflow-hidden">
      
      {/* =========================================================
          1. الزخارف الخلفية
         ========================================================= */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* خطوط منحنية انسيابية */}
        <svg
          className="absolute top-0 left-0 w-full h-full opacity-10"
          viewBox="0 0 1200 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
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
          {/* نقاط زخرفية */}
          <circle cx="400" cy="250" r="8" fill="white" />
          <circle cx="800" cy="280" r="6" fill="white" />
          <circle cx="600" cy="200" r="4" fill="white" />
          <circle cx="200" cy="320" r="5" fill="white" />
          <circle cx="1000" cy="240" r="7" fill="white" />
        </svg>
        
        {/* زخرفة يمين - تم تغيير اللون لـ Terracotta */}
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
              stroke="#c06c5b" // Terracotta Color
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </motion.div>

        {/* زخرفة يسار - تم تغيير اللون لـ Terracotta */}
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
              stroke="#c06c5b" // Terracotta Color
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </motion.div>
      </div>

      {/* =========================================================
          2. المحتوى الرئيسي (عربي + إنجليزي)
         ========================================================= */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* العنوان الرئيسي */}
          <h2 className="flex flex-col gap-4 font-bold leading-none">
            {/* العربي الكبير - تعديل الخط */}
            <span className="font-arabic-stylized text-5xl sm:text-7xl md:text-8xl text-white">
              دعنـا نتخيـل <span className="text-[#c06c5b]">معـاً</span>
            </span>
            
            {/* الإنجليزي تحته - تعديل الخط + ltr */}
            <span className="ltr font-['Acumin'] text-3xl sm:text-5xl md:text-6xl text-white/80 uppercase tracking-tight">
              Let's Imagine <span className="text-[#c06c5b]">Together</span>
            </span>
          </h2>

          {/* الوصف */}
          <div className="mt-10 max-w-2xl mx-auto">
            {/* العربي - تعديل الخط */}
            <p className="font-arabic-stylized text-xl md:text-2xl text-white/90 mb-3 leading-relaxed">
              جاهز لتحويل رؤيتك إلى واقع؟ نحن هنا لنصنع تجارب تترك أثراً لا يُنسى.
            </p>
            {/* الإنجليزي - تعديل الخط + ltr */}
            <p className="ltr font-['Acumin'] text-base md:text-lg text-white/60 leading-relaxed">
              Ready to bring your vision to life? We're here to transform your ideas into captivating realities.
            </p>
          </div>

          {/* الزرار */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-14"
          >
            {/* تعديل ألوان الزرار لـ Terracotta */}
            <Button
              size="lg"
              className="bg-[#c06c5b] text-white hover:bg-[#c06c5b]/90 px-10 py-8 rounded-full shadow-2xl hover:shadow-[#c06c5b]/20 transition-all flex flex-col items-center gap-1 mx-auto h-auto"
            >
              {/* تعديل الخطوط داخل الزرار */}
              <span className="font-arabic-stylized text-xl font-bold">ابدأ مشروعك</span>
              {/* الإنجليزي: ltr */}
              <span className="ltr font-['Acumin'] text-xs uppercase tracking-widest opacity-90">Start a Project</span>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* الخط المتدرج في الأسفل - تعديل لونه لـ Terracotta */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#c06c5b] to-transparent opacity-50" />
    </section>
  );
}