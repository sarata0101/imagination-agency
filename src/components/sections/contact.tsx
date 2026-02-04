"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-32 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        
        {/* 1. عنوان القسم */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 flex flex-col items-center"
        >
          <div className="flex flex-col items-center mb-4">
            <span className="text-sm font-[family-name:var(--font-arabic)] font-medium tracking-wide text-secondary mb-1">
              تواصل معنا
            </span>
            <span className="text-[10px] font-[family-name:var(--font-english)] tracking-[0.2em] uppercase text-secondary/70">
              Get in Touch
            </span>
          </div>
          
          <h2 className="flex flex-col items-center gap-2 font-bold text-foreground">
            <span className="font-[family-name:var(--font-arabic)] text-4xl md:text-5xl">
              ابدأ مشروعك الآن
            </span>
            <span className="font-[family-name:var(--font-english)] text-xl md:text-2xl text-muted-foreground/60 uppercase tracking-tight">
              Contact Us
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* 2. معلومات الاتصال (Contact Info) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }} // (x: 30) عشان يجي من اليمين لأنه عربي
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8 text-right"
          >
            <div>
              <h3 className="flex flex-col gap-1 font-semibold text-foreground mb-4">
                <span className="font-[family-name:var(--font-arabic)] text-2xl">
                  لنتحدث سوياً
                </span>
                <span className="font-[family-name:var(--font-english)] text-sm opacity-60 uppercase tracking-wide">
                  Let's start a conversation
                </span>
              </h3>
              <p className="text-muted-foreground leading-relaxed font-[family-name:var(--font-arabic)] text-lg">
                هل لديك مشروع في ذهنك؟ نود أن نسمع عنه. أرسل لنا رسالة وسنقوم بالرد عليك في أقرب وقت ممكن.
              </p>
            </div>

            <div className="space-y-8">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-foreground font-[family-name:var(--font-english)] uppercase text-sm tracking-wider mb-1">Email</p>
                  <a
                    href="mailto:hello@imagination.sa"
                    className="text-muted-foreground hover:text-secondary transition-colors font-[family-name:var(--font-english)] text-lg"
                  >
                    hello@imagination.sa
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-foreground font-[family-name:var(--font-english)] uppercase text-sm tracking-wider mb-1">Phone</p>
                  <a
                    href="tel:+966500000000"
                    className="text-muted-foreground hover:text-secondary transition-colors font-[family-name:var(--font-english)] text-lg dir-ltr"
                  >
                    +966 50 000 0000
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-foreground font-[family-name:var(--font-english)] uppercase text-sm tracking-wider mb-1">Location</p>
                  <p className="text-muted-foreground font-[family-name:var(--font-arabic)] text-lg">
                    الرياض، المملكة العربية السعودية
                    <br />
                    <span className="text-sm opacity-70">حي الملقا، طريق أنس بن مالك</span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 3. نموذج الاتصال (Form) */}
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
                  <label htmlFor="name" className="text-sm font-medium text-foreground flex gap-2 justify-end">
                     <span className="font-[family-name:var(--font-english)] opacity-50 uppercase text-[10px] tracking-widest pt-1">Name</span>
                     <span className="font-[family-name:var(--font-arabic)]">الاسم</span>
                  </label>
                  <Input
                    id="name"
                    placeholder="الاسم الكريم"
                    className="h-14 bg-muted/30 border-0 focus-visible:ring-primary placeholder:text-muted-foreground/50 text-right font-[family-name:var(--font-arabic)]"
                  />
                </div>

                {/* البريد */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground flex gap-2 justify-end">
                    <span className="font-[family-name:var(--font-english)] opacity-50 uppercase text-[10px] tracking-widest pt-1">Email</span>
                    <span className="font-[family-name:var(--font-arabic)]">البريد الإلكتروني</span>
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="h-14 bg-muted/30 border-0 focus-visible:ring-primary placeholder:text-muted-foreground/50 text-right font-[family-name:var(--font-english)]"
                  />
                </div>
              </div>

              {/* الموضوع */}
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-foreground flex gap-2 justify-end">
                  <span className="font-[family-name:var(--font-english)] opacity-50 uppercase text-[10px] tracking-widest pt-1">Subject</span>
                  <span className="font-[family-name:var(--font-arabic)]">الموضوع</span>
                </label>
                <Input
                  id="subject"
                  placeholder="استفسار عن مشروع..."
                  className="h-14 bg-muted/30 border-0 focus-visible:ring-primary placeholder:text-muted-foreground/50 text-right font-[family-name:var(--font-arabic)]"
                />
              </div>

              {/* الرسالة */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground flex gap-2 justify-end">
                  <span className="font-[family-name:var(--font-english)] opacity-50 uppercase text-[10px] tracking-widest pt-1">Message</span>
                  <span className="font-[family-name:var(--font-arabic)]">الرسالة</span>
                </label>
                <Textarea
                  id="message"
                  placeholder="أخبرنا المزيد عن تفاصيل مشروعك..."
                  rows={6}
                  className="bg-muted/30 border-0 focus-visible:ring-primary placeholder:text-muted-foreground/50 resize-none text-right font-[family-name:var(--font-arabic)]"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full h-14 bg-primary text-primary-foreground hover:bg-primary/90 font-medium rounded-xl flex flex-col gap-0 items-center justify-center"
              >
                <span className="font-[family-name:var(--font-arabic)] text-lg font-bold">إرسال الرسالة</span>
                <span className="font-[family-name:var(--font-english)] text-[10px] uppercase tracking-widest opacity-80">Send Message</span>
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
