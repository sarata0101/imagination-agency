"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

// 1. القائمة بقت تحتوي على العربي والإنجليزي مع بعض
const navLinks = [
  { nameAr: "خدماتنا", nameEn: "Services", href: "#services" },
  { nameAr: "أعمالنا", nameEn: "Portfolio", href: "#portfolio" },
  { nameAr: "من نحن", nameEn: "About", href: "#about" },
  { nameAr: "تواصل معنا", nameEn: "Contact", href: "#contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/90 backdrop-blur-md shadow-sm border-b border-border/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* 1. (تعديل هام) كبرنا ارتفاع الـ Nav لـ h-32 بدل h-24 عشان يستوعب اللوجو الكبير */}
          <nav className="flex items-center justify-between h-32 transition-all duration-300">
            
            {/* Logo */}
            <a href="/" className="flex items-center gap-3">
              {/* 2. (تعديل هام) كبرنا أبعاد اللوجو جداً */}
              {/* الموبايل: w-48 h-16 (كبير وواضح) */}
              {/* الديسكوتوب: w-80 h-28 (ضخم) */}
              <div className="relative w-48 h-16 md:w-80 md:h-28 transition-all duration-300">
                <Image 
                  src="/logo-full.svg" 
                  alt="Imagination Logo" 
                  fill 
                  className="object-contain" // دي بتخلي اللوجو يبان كامل جوه المربع
                  priority
                />
              </div>
            </a>

            {/* Desktop Nav (Bilingual) */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.nameEn}
                  href={link.href}
                  className="group flex flex-col items-center text-center transition-colors"
                >
                  {/* العربي: استخدمنا الكلاس الجديد font-arabic-stylized */}
                  <span className="font-arabic-stylized font-medium text-base text-foreground group-hover:text-secondary">
                    {link.nameAr}
                  </span>
                  {/* الإنجليزي: ضفنا ltr عشان يتظبط */}
                  <span className="ltr font-['Acumin'] text-[10px] font-medium tracking-wider text-muted-foreground uppercase group-hover:text-secondary/80">
                    {link.nameEn}
                  </span>
                </a>
              ))}
            </div>

            {/* CTA Button (Bilingual) */}
            <div className="hidden md:block">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6 py-6 h-auto flex flex-col items-center leading-none gap-1 shadow-md">
                <span className="font-arabic-stylized text-sm font-bold">ابدأ مشروعك</span>
                {/* الإنجليزي: ضفنا ltr */}
                <span className="ltr font-['Acumin'] text-[10px] tracking-wide opacity-90 uppercase">Start a Project</span>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-background pt-28 px-6 md:hidden"
          >
            <div className="flex flex-col gap-8 items-center">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.nameEn}
                  href={link.href}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex flex-col items-center gap-1 group"
                >
                  {/* العربي */}
                  <span className="font-arabic-stylized text-2xl font-bold text-foreground group-hover:text-secondary">
                    {link.nameAr}
                  </span>
                  {/* الإنجليزي: ضفنا ltr */}
                  <span className="ltr font-['Acumin'] text-sm font-medium tracking-widest text-muted-foreground uppercase">
                    {link.nameEn}
                  </span>
                </motion.a>
              ))}
              <div className="mt-4 w-full">
                <Button className="w-full bg-primary hover:bg-primary/90 rounded-full py-8 h-auto flex flex-col gap-2">
                    <span className="font-arabic-stylized text-lg font-bold">ابدأ مشروعك</span>
                    {/* الإنجليزي: ضفنا ltr */}
                    <span className="ltr font-['Acumin'] text-xs tracking-wide uppercase">Start a Project</span>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
