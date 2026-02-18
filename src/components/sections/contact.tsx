"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-32 px-6 bg-background">
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
              تواصل معنا
            </span>
            <span className="ltr text-[10px] font-['Acumin'] tracking-[0.2em] uppercase text-secondary/70">
              Get in Touch
            </span>
          </div>
          
          <h2 className="flex flex-col items-center gap-2 font-bold text-foreground">
            <span className="font-arabic-stylized text-4xl md:text-5xl">
              ابدأ مشروعك الآن
            </span>
            <span className="ltr font-['Acumin'] text-xl md:text-2xl text-muted-foreground/60 uppercase tracking-tight">
              Contact Us
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* ========================================================
              الجزء اليمين: معلومات الاتصال (عدلنا الأرقام لليمين)
             ======================================================== */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-12 text-right"
          >
            {/* 1. عنوان "لنتحدث سوياً" والوصف */}
            <div className="flex flex-col items-start text-right">
              <h3 className="flex flex-col items-start gap-1 font-semibold text-foreground mb-4 w-full">
                <span className="font-arabic-stylized text-2xl">
                  لنتحدث سوياً
                </span>
                <span className="ltr font-['Acumin'] text-sm opacity-60 uppercase tracking-wide w-full text-right">
                  Let's start a conversation
                </span>
              </h3>
              <p className="text-muted-foreground leading-relaxed font-arabic-stylized text-lg text-right w-full">
                هل لديك مشروع في ذهنك؟ نود أن نسمع عنه. تواصل معنا عبر الواتساب أو البريد الإلكتروني وسنقوم بالرد فوراً.
              </p>
            </div>

            <div className="space-y-10">
              
              {/* 2. الإيميل */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="ltr font-bold text-foreground font-['Acumin'] uppercase text-sm tracking-wider mb-2 w-full text-right">
                    Email
                  </p>
                  <a
                    href="mailto:info.imagination.Agency@gmail.com"
                    className="ltr text-muted-foreground hover:text-secondary transition-colors font-['Acumin'] text-lg block text-right break-all leading-relaxed"
                  >
                    info.imagination.Agency@gmail.com
                  </a>
                </div>
              </div>

              {/* 3. الأرقام (التعديل: خليناها items-start و justify-start عشان تيجي يمين) */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>

                {/* items-start: عشان المحاذاة العمودية تبقى يمين */}
                <div className="flex-1 flex flex-col items-start gap-3"> 
                  <p className="ltr font-bold text-foreground font-['Acumin'] uppercase text-sm tracking-wider mb-1 w-full text-right">
                    Contact & WhatsApp
                  </p>
                  
                  {/* الرقم السعودي (واتساب) - justify-start: عشان يلزق يمين */}
                  <a
                    href="https://wa.me/966549486001"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-row items-center justify-start gap-3 text-muted-foreground hover:text-secondary transition-colors group whitespace-nowrap"
                  >
                     <span dir="ltr" className="font-['Acumin'] text-lg">+966 54 948 6001</span>
                     <MessageCircle className="w-5 h-5 text-secondary/80 group-hover:text-secondary" />
                  </a>

                  {/* الرقم المصري (اتصال) - justify-start: عشان يلزق يمين */}
                  <a
                    href="tel:01556022288"
                    className="flex flex-row items-center justify-start gap-3 text-muted-foreground hover:text-secondary transition-colors group whitespace-nowrap"
                  >
                    <span dir="ltr" className="font-['Acumin'] text-lg">+20 155 602 2288</span>
                    <Phone className="w-5 h-5 text-muted-foreground/60 group-hover:text-secondary" />
                  </a>
                </div>
              </div>

              {/* 4. الموقع */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="ltr font-bold text-foreground font-['Acumin'] uppercase text-sm tracking-wider mb-2 w-full text-right">
                    Location
                  </p>
                  <p className="text-muted-foreground font-arabic-stylized text-lg leading-relaxed text-right">
                    الرياض، المملكة العربية السعودية
                    <br />
                    القاهرة، جمهورية مصر العربية
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ========================================================
              الجزء الشمال: الفورم (سنترنا العناوين)
             ======================================================== */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form className="space-y-6 text-right">
              <div className="grid sm:grid-cols-2 gap-6">
                
                {/* الاسم */}
                <div className="space-y-2">
                  {/* التعديل: justify-center عشان ييجي في النص */}
                  <label htmlFor="name" className="text-sm font-medium text-foreground flex gap-2 justify-center">
                      <span className="ltr font-['Acumin'] opacity-50 uppercase text-[10px] tracking-widest pt-1">Name</span>
                      <span className="font-arabic-stylized">الاسم</span>
                  </label>
                  <Input
                    id="name"
                    placeholder="الاسم الكريم"
                    className="h-14 bg-muted/30 border-0 focus-visible:ring-primary placeholder:text-muted-foreground/50 text-right font-arabic-stylized"
                  />
                </div>

                {/* البريد */}
                <div className="space-y-2">
                  {/* التعديل: justify-center */}
                  <label htmlFor="email" className="text-sm font-medium text-foreground flex gap-2 justify-center">
                    <span className="ltr font-['Acumin'] opacity-50 uppercase text-[10px] tracking-widest pt-1">Email</span>
                    <span className="font-arabic-stylized">البريد الإلكتروني</span>
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="ltr h-14 bg-muted/30 border-0 focus-visible:ring-primary placeholder:text-muted-foreground/50 text-right font-['Acumin']"
                  />
                </div>
              </div>

              {/* الموضوع */}
              <div className="space-y-2">
                {/* التعديل: justify-center */}
                <label htmlFor="subject" className="text-sm font-medium text-foreground flex gap-2 justify-center">
                  <span className="ltr font-['Acumin'] opacity-50 uppercase text-[10px] tracking-widest pt-1">Subject</span>
                  <span className="font-arabic-stylized">الموضوع</span>
                </label>
                <Input
                  id="subject"
                  placeholder="استفسار عن مشروع..."
                  className="h-14 bg-muted/30 border-0 focus-visible:ring-primary placeholder:text-muted-foreground/50 text-right font-arabic-stylized"
                />
              </div>

              {/* الرسالة */}
              <div className="space-y-2">
                {/* التعديل: justify-center */}
                <label htmlFor="message" className="text-sm font-medium text-foreground flex gap-2 justify-center">
                  <span className="ltr font-['Acumin'] opacity-50 uppercase text-[10px] tracking-widest pt-1">Message</span>
                  <span className="font-arabic-stylized">الرسالة</span>
                </label>
                <Textarea
                  id="message"
                  placeholder="أخبرنا المزيد عن تفاصيل مشروعك..."
                  rows={6}
                  className="bg-muted/30 border-0 focus-visible:ring-primary placeholder:text-muted-foreground/50 resize-none text-right font-arabic-stylized"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full h-14 bg-primary text-primary-foreground hover:bg-primary/90 font-medium rounded-xl flex flex-col gap-0 items-center justify-center"
              >
                <span className="font-arabic-stylized text-lg font-bold">إرسال الرسالة</span>
                <span className="ltr font-['Acumin'] text-[10px] uppercase tracking-widest opacity-80">Send Message</span>
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}