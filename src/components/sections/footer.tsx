"use client";

import { motion } from "framer-motion";
import { Instagram, Facebook, Mail, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link"; // Import Link for internal navigation

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
    titleAr: "خدماتنا",
    titleEn: "Services",
    links: [
      { ar: "الإنتاج المرئي", en: "Visual Production", href: "#" },
      { ar: "الإنتاج الصوتي", en: "Audio Production", href: "#" },
      { ar: "صياغة الهوية", en: "Brand Crafting", href: "#" },
      { ar: "الاستشارات", en: "Consulting", href: "#" },
    ],
  },
  {
    titleAr: "الشركة",
    titleEn: "Company",
    links: [
      { ar: "من نحن", en: "About Us", href: "#" },
      { ar: "فريق العمل", en: "Our Team", href: "#" },
      { ar: "الوظائف", en: "Careers", href: "#" },
      { ar: "المدونة", en: "Blog", href: "#" },
    ],
  },
  {
    titleAr: "الدعم",
    titleEn: "Support",
    links: [
      // Direct link to WhatsApp
      { ar: "تواصل معنا", en: "Contact", href: "https://wa.me/966549486001" }, 
      // Link to internal pages
      { ar: "سياسة الخصوصية", en: "Privacy Policy", href: "/privacy" },
      { ar: "الشروط والأحكام", en: "Terms of Service", href: "/terms" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 text-right">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
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

            <p className="text-background/60 leading-relaxed mb-6 flex flex-col gap-2">
              <span className="font-arabic-stylized text-lg">
                نحول الشغف إلى واقع من خلال إبداع جريء وحرفية استثنائية.
              </span>
              <span className="ltr font-['Acumin'] text-sm opacity-60 w-full text-right">
                Turning passion into reality through bold creativity and exceptional craftsmanship.
              </span>
            </p>

            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

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
                    {/* Use 'Link' for internal routes, 'a' for external WhatsApp */}
                    <Link
                      href={link.href}
                      target={link.href.startsWith('http') ? "_blank" : "_self"}
                      className="group flex flex-col gap-0.5 text-background/60 hover:text-secondary transition-colors duration-300"
                    >
                      <span className="font-arabic-stylized text-base group-hover:translate-x-[-4px] transition-transform">
                        {link.ar}
                      </span>
                      <span className="ltr font-['Acumin'] text-[10px] opacity-50 uppercase tracking-wide group-hover:opacity-80 w-full text-right">
                        {link.en}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* ... (Rest of your copyright code remains the same) */}
      </div>
    </footer>
  );
}