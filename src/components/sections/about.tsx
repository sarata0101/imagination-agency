"use client";

import { motion } from "framer-motion";

const stats = [
  { number: "+8", labelAr: "سنوات من الخبرة", labelEn: "Years of Experience" },
  { number: "+100", labelAr: "مشروع ناجح", labelEn: "Successful Projects" },
  { number: "+35", labelAr: "شريك نجاح", labelEn: "Happy Clients" },
  { number: "2", labelAr: "مقر رئيسي", labelEn: "Main Hubs (Riyadh & Cairo)" },
];

export function About() {
  return (
    // 1. التعديل هنا: overflow-visible عشان القوس يطلع بره، وشيلنا الفاصل الأبيض
    <section id="about" className="relative py-40 px-6 bg-[#483C32] text-white overflow-hidden">
      
              
      

      {/* ============================================================
          3. الخلفية والزخارف (زي ما هي بالظبط)
         ============================================================ */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg
          className="absolute top-0 left-0 w-full h-full opacity-10"
          viewBox="0 0 1200 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0,200 Q300,50 600,200 T1200,200"
            stroke="white"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M0,300 Q400,100 800,300 T1600,300"
            stroke="white"
            strokeWidth="1.5"
            fill="none"
            opacity="0.6"
          />
        </svg>
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
              stroke="#c06c5b"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </motion.div>

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
              stroke="#c06c5b"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </motion.div>
      </div>

      {/* ============================================================
          4. المحتوى (زي ما هو بالظبط مع الحفاظ على المسافات)
         ============================================================ */}
      <div className="relative z-10 max-w-6xl mx-auto text-center px-6">
        
        {/* العناوين */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 flex flex-col items-center"
        >
          <div className="flex flex-col items-center mb-6">
            <span className="text-sm font-arabic-stylized font-medium tracking-wide text-[#c06c5b] mb-1">
              قصتنا
            </span>
            <span className="ltr text-[10px] font-['Acumin'] tracking-[0.2em] uppercase text-white/60">
              Our Story
            </span>
          </div>

          <h2 className="flex flex-col gap-2 font-bold leading-tight">
            <span className="font-arabic-stylized text-4xl md:text-7xl text-white">
              أكثر من مجرد وكالة..
              <br />
              <span className="text-[#c06c5b]">نحن صناع أثر.</span>
            </span>
            
            <span className="ltr font-['Acumin'] text-xl md:text-3xl text-white/80 uppercase tracking-tight mt-4 opacity-80">
              More Than An Agency.. <span className="text-[#c06c5b]">Impact Makers.</span>
            </span>
          </h2>
        </motion.div>

        {/* النص */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-24 space-y-8"
        >
          <p className="font-arabic-stylized text-2xl md:text-3xl text-white/90 leading-[1.8]">
            منذ انطلاقتنا في <span className="text-[#c06c5b] font-bold">2018</span>، أخذنا على عاتقنا مهمة واحدة: خلق محتوى هادف يبني وعياً حقيقياً. 
            نحن لا ننتج مجرد محتوى؛ نحن نساعدك في نشر رسالة تترك بصمة في كل منصات التواصل، بكل أشكال المحتوى واختلافاته.
          </p>
          
          <p className="ltr font-['Acumin'] text-base md:text-lg text-white/60 uppercase tracking-wide leading-relaxed max-w-3xl mx-auto">
            Since 2018, we've been dedicated to creating meaningful content that builds real awareness. We don't just produce; we help you spread a message that leaves a mark across all platforms.
          </p>
        </motion.div>

        {/* الأرقام (Stats) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-white/10 pt-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
              className="flex flex-col items-center justify-start"
            >
              <span className="ltr font-['Acumin'] text-5xl md:text-7xl font-bold text-[#c06c5b] mb-4">
                {stat.number}
              </span>
              <span className="font-arabic-stylized text-xl text-white font-medium mb-1 whitespace-nowrap">
                {stat.labelAr}
              </span>
              <span className="ltr font-['Acumin'] text-[10px] md:text-xs text-white/50 uppercase tracking-widest whitespace-nowrap">
                {stat.labelEn}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}