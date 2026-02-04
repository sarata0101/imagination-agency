"use client";

import { motion } from "framer-motion";
import { Instagram, Twitter, Linkedin, Youtube } from "lucide-react";

const socialLinks = [
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "YouTube", icon: Youtube, href: "#" },
];

const footerLinks = {
  Services: ["Visual Production", "Audio Production", "Brand Crafting", "Consulting"],
  Company: ["About Us", "Our Team", "Careers", "Blog"],
  Support: ["Contact", "FAQ", "Privacy Policy", "Terms of Service"],
};

export function Footer() {
  return (
    // الخلفية سوداء (foreground) والكلام أبيض (background)
    <footer className="bg-foreground text-background py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="flex items-center gap-2 mb-6">
              {/* (تعديل) خلفية اللوجو بنفسجي */}
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">I</span>
              </div>
              <span className="font-[family-name:var(--font-heading)] font-bold text-xl">
                Imagination
              </span>
            </div>
            <p className="text-background/60 leading-relaxed mb-6">
              Turning passion into reality through bold creativity and
              exceptional craftsmanship.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  // (تعديل) لما الماوس يقف على الأيقونة تبقى بنفسجي
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
            >
              <h4 className="font-[family-name:var(--font-heading)] font-semibold text-lg mb-6">
                {title}
              </h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      // (تعديل) الروابط لما تقفي عليها تبقى أخضر
                      className="text-background/60 hover:text-secondary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-background/40 text-sm">
              &copy; {new Date().getFullYear()} Imagination Agency. All rights reserved.
            </p>
            <p className="text-background/40 text-sm">
              {/* (تعديل) غيرنا المكان للسعودية حسب الملف */}
              Crafted with passion in Saudi Arabia
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}