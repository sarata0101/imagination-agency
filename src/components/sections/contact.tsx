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
            {/* العربي: تعديل الخط */}
            <span className="text-sm font-arabic-stylized font-medium tracking-wide text-secondary mb-1">
              تواصل معنا
            </span>
            {/* الإنجليزي: تعديل الخط + ltr */}
            <span className="ltr text-[10px] font-['Acumin'] tracking-[0.2em] uppercase text-secondary/70">
              Get in Touch
            </span>
          </div>
          
          <h2 className="flex flex-col items-center gap-2 font-bold text-foreground">
            {/* العربي: تعديل الخط */}
            <span className="font-arabic-stylized text-4xl md:text-5xl">
              ابدأ مشروعك الآن
            </span>
            {/* الإنجليزي: تعديل الخط + ltr */}
            <span className="ltr font-['Acumin'] text-xl md:text-2xl text-muted-foreground/60 uppercase tracking-tight">
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
                {/* العربي: تعديل الخط */}
                <span className="font-arabic-stylized text-2xl">
                  لنتحدث سوياً
                </span>
                {/* الإنجليزي: تعديل الخط + ltr */}
                <span className="ltr font-['Acumin'] text-sm opacity-60 uppercase tracking-wide w-full text-right">
                  Let's start a conversation
                </span>
              </h3>
              {/* العربي: تعديل الخط */}
              <p className="text-muted-foreground leading-relaxed font-arabic-stylized text-lg">
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
                  {/* الإنجليزي: ltr */}
                  <p className="ltr font-bold text-foreground font-['Acumin'] uppercase text-sm tracking-wider mb-1 w-full text-right">
                    Email
                  </p>
                  <a
                    href="mailto:hello@imagination.sa"
                    /* الإنجليزي: ltr عشان الرموز تتظبط */
                    className="ltr text-muted-foreground hover:text-secondary transition-colors font-['Acumin'] text-lg block text-right"
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
                   {/* الإنجليزي: ltr */}
                  <p className="ltr font-bold text-foreground font-['Acumin'] uppercase text-sm tracking-wider mb-1 w-full text-right">
                    Phone
                  </p>
                  <a
                    href="tel:+966500000000"
                    /* الإنجليزي: ltr مهم جداً هنا عشان الرقم يظهر صح */
                    className="ltr text-muted-foreground hover:text-secondary transition-colors font-['Acumin'] text-lg block text-right"
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
                   {/* الإنجليزي: ltr */}
                  <p className="ltr font-bold text-foreground font-['Acumin'] uppercase text-sm tracking-wider mb-1 w-full text-right">
                    Location
                  </p>
                  {/* العربي: تعديل الخط */}
                  <p className="text-muted-foreground font-arabic-stylized text-lg">
                    الرياض، المملكة العربية السعودية
                    <br />
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
                      {/* الإنجليزي: ltr */}
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
                  <label htmlFor="email" className="text-sm font-medium text-foreground flex gap-2 justify-end">
                    {/* الإنجليزي: ltr */}
                    <span className="ltr font-['Acumin'] opacity-50 uppercase text-[10px] tracking-widest pt-1">Email</span>
                    <span className="font-arabic-stylized">البريد الإلكتروني</span>
                  </label>
                  {/* الإيميل بيحتاج ltr عشان الكتابة تكون انجليزي صح */}
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
                <label htmlFor="subject" className="text-sm font-medium text-foreground flex gap-2 justify-end">
                  {/* الإنجليزي: ltr */}
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
                <label htmlFor="message" className="text-sm font-medium text-foreground flex gap-2 justify-end">
                  {/* الإنجليزي: ltr */}
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
                {/* الإنجليزي: ltr */}
                <span className="ltr font-['Acumin'] text-[10px] uppercase tracking-widest opacity-80">Send Message</span>
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}