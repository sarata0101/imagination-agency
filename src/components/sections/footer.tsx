"use client";

import { motion } from "framer-motion";
import { Instagram, Facebook, Mail, MessageCircle } from "lucide-react"; // استدعينا أيقونات الإيميل والواتس
import Image from "next/image";

// 1. روابط السوشيال ميديا (واتس وإيميل بدل يوتيوب ولينكد إن)
const socialLinks = [
  { 
    name: "WhatsApp", 
    icon: MessageCircle, 
    href: "https://wa.me/966549486001" // رابط الواتس المباشر
  },
  { 
    name: "Email", 
    icon: Mail, 
    href: "mailto:info.imagination.Agency@gmail.com" // رابط الإيميل المباشر
  },
  { 
    name: "Instagram", 
    icon: Instagram, 
    href: "https://www.instagram.com/imagination.agency7?igsh=andwYmdwcnY2ejd5" 
  },
  { 
    name: "Facebook", 
    icon: Facebook, 
    href: "https://www.facebook.com/share/1ECxfoe6tn/" 
  },
];

const footerLinks = [
  {
    titleAr: "خدماتنا",
    titleEn: "Services",
    links: [
      { ar: "الإنتاج المرئي", en: "Visual Production" },
      { ar: "الإنتاج الصوتي", en: "Audio Production" },
      { ar: "صياغة الهوية", en: "Brand Crafting" },
      { ar: "الاستشارات", en: "Consulting" },
    ],
  },
  {
    titleAr: "الشركة",
    titleEn: "Company",
    links: [
      { ar: "من نحن", en: "About Us" },
      { ar: "فريق العمل", en: "Our Team" },
      { ar: "الوظائف", en: "Careers" },
      { ar: "المدونة", en: "Blog" },
    ],
  },
  {
    titleAr: "الدعم",
    titleEn: "Support",
    links: [
      { ar: "تواصل معنا", en: "Contact" },
      { ar: "الأسئلة الشائعة", en: "FAQ" },
      { ar: "سياسة الخصوصية", en: "Privacy Policy" },
      { ar: "الشروط والأحكام", en: "Terms of Service" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 text-right">
          
          {/* العمود الأول */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            {/* اللوجو */}
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-32 h-10 brightness-0 invert">
                <Image 
                  src="/logo-full.svg" 
                  alt="Imagination Logo" 
                  fill 
                  className="object-contain"
                />
              </div>
            </div>

            {/* الوصف */}
            <p className="text-background/60 leading-relaxed mb-6 flex flex-col gap-2">
              <span className="font-arabic-stylized text-lg">
                نحول الشغف إلى واقع من خلال إبداع جريء وحرفية استثنائية.
              </span>
              <span className="ltr font-['Acumin'] text-sm opacity-60 w-full text-right">
                Turning passion into reality through bold creativity and exceptional craftsmanship.
              </span>
            </p>

            {/* أيقونات السوشيال */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* أعمدة الروابط */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={section.titleEn}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
            >
              <h4 className="flex flex-col gap-1 mb-6 font-bold border-b border-background/10 pb-2">
                <span className="font-arabic-stylized text-lg text-white">
                  {section.titleAr}
                </span>
                <span className="ltr font-['Acumin'] text-xs text-background/50 uppercase tracking-widest w-full text-right">
                  {section.titleEn}
                </span>
              </h4>

              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.en}>
                    <a
                      href="#"
                      className="group flex flex-col gap-0.5 text-background/60 hover:text-secondary transition-colors duration-300"
                    >
                      <span className="font-arabic-stylized text-base group-hover:translate-x-[-4px] transition-transform">
                        {link.ar}
                      </span>
                      <span className="ltr font-['Acumin'] text-[10px] opacity-50 uppercase tracking-wide group-hover:opacity-80 w-full text-right">
                        {link.en}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* الشريط السفلي */}
        <div className="pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-right">
            
            <p className="text-background/40 text-sm flex flex-col md:flex-row gap-1 items-center md:items-start">
              <span className="font-arabic-stylized">
                &copy; {new Date().getFullYear()} وكالة تخيُّل. جميع الحقوق محفوظة.
              </span>
              <span className="ltr font-['Acumin'] opacity-60">
                | All rights reserved.
              </span>
            </p>

            <p className="text-background/40 text-sm flex items-center gap-2">
              <span className="ltr font-['Acumin'] opacity-60 uppercase tracking-widest text-[10px]">
                Crafted with passion in
              </span>
              <span className="font-arabic-stylized text-secondary font-bold">
                السعودية 🇸🇦 & مصر 🇪🇬
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}