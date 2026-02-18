import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { Portfolio } from "@/components/sections/portfolio";
import { CTA } from "@/components/sections/cta";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      
      {/* قسم من نحن */}
      <About />

      {/* قسم الخدمات */}
      <section id="services">
        <Services />
      </section>

      {/* قسم الأعمال */}
      <section id="portfolio">
        <Portfolio />
      </section>

      {/* دعوة لاتخاذ إجراء */}
      <CTA />

      {/* قسم التواصل */}
      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </main>
  );
}