"use client";

import { motion } from "framer-motion";
import { Instagram, Facebook, Mail, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const socialLinks = [
  { 
    name: "WhatsApp", 
    icon: MessageCircle, 
    href: "https://wa.me/966549486001" 
  },
  { 
    name: "Email", 
    icon: Mail, 
    href: "mailto:info.imagination.Agency@gmail.com" 
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
    titleAr: "الهوية والتصميم",
    titleEn: "Brand & Design",
    links: [
      { ar: "التصاميم الإبداعية", en: "Designs", href: "/services/designs" },
      { ar: "المعالجة والتحرير", en: "Editing", href: "/services/editing" },
      { ar: "الملفات التعريفية", en: "Profiles", href: "/services/company-profile-layout" },
    ],
  },
  {
    titleAr: "الإنتاج المرئي",
    titleEn: "Media Production",
    links: [
      { ar: "الإنتاج السينمائي", en: "Video", href: "/services/video-shooting" },
      { ar: "التصوير الفوتوغرافي", en: "Photo", href: "/services/photography" },
      { ar: "المونتاج", en: "Post-Production", href: "/services/montage" },
      { ar: "الإنتاج بالذكاء الاصطناعي", en: "AI Production", href: "/services/ai-production" },
    ],
  },
  {
    titleAr: "صناعة المحتوى",
    titleEn: "Content Creation",
    links: [
      { ar: "إدارة المنصات", en: "Management", href: "/services/social-media-management" },
      { ar: "صناعة المحتوى", en: "Content", href: "/services/content-writing" },
      { ar: "كتابة السيناريو", en: "Scripts", href: "/services/script-writing" },
    ],
  },
  {
    titleAr: "التسويق والنمو",
    titleEn: "Marketing",
    links: [
      { ar: "التسويق الاستراتيجي", en: "Strategic", href: "/services/marketing" },
      { ar: "الحملات الإعلانية", en: "Media Buying", href: "/services/media-buying" },
    ],
  },
  {
    titleAr: "الدعم",
    titleEn: "Support",
    links: [
      { ar: "تواصل معنا", en: "Contact", href: "https://wa.me/966549486001" },
      { ar: "سياسة الخصوصية", en: "Privacy Policy", href: "/privacy" },
      { ar: "الشروط والأحكام", en: "Terms", href: "/terms" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Updated Grid for 6 columns (Logo + 5 Link columns) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 mb-16 text-right">
          
          {/* العمود الأول: اللوجو والوصف */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-2 md:col-span-3 lg:col-span-1"
          >
            <div className="flex items-center justify-start gap-4 mb-0">
              <div className="relative w-56 h-20 brightness-0 invert">
                <Image 
                  src="/logo-full.svg" 
                  alt="Imagination Logo" 
                  fill 
                  className="object-contain object-right"
                />
              </div>
            </div>

            <p className="text-background/60 leading-relaxed mb-6 flex flex-col gap-2">
              <span className="font-arabic-stylized text-base">
                نحول الشغف إلى واقع من خلال إبداع جريء وحرفية استثنائية.
              </span>
            </p>

            <div className="flex items-center justify-end lg:justify-start gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* أعمدة الروابط المتغيرة */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={section.titleEn}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
            >
              <h4 className="flex flex-col gap-1 mb-6 font-bold border-b border-background/10 pb-2">
                <span className="font-arabic-stylized text-base text-white whitespace-nowrap">
                  {section.titleAr}
                </span>
                <span className="ltr font-['Acumin'] text-[9px] text-background/50 uppercase tracking-widest w-full text-right">
                  {section.titleEn}
                </span>
              </h4>

              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.en}>
                    <Link
                      href={link.href}
                      target={link.href.startsWith('http') ? "_blank" : "_self"}
                      className="group flex flex-col gap-0.5 text-background/60 hover:text-secondary transition-colors duration-300"
                    >
                      <span className="font-arabic-stylized text-sm group-hover:translate-x-[-4px] transition-transform">
                        {link.ar}
                      </span>
                      <span className="ltr font-['Acumin'] text-[9px] opacity-50 uppercase tracking-wide group-hover:opacity-80 w-full text-right">
                        {link.en}
                      </span>
                    </Link>
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