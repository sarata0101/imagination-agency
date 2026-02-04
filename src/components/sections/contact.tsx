"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

export function Contact() {
  return (
    <section className="py-32 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          {/* (تعديل) العنوان الصغير أخضر */}
          <span className="text-sm font-medium tracking-widest uppercase text-secondary">
            Get in Touch
          </span>
          <h2 className="mt-4 font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold text-foreground">
            Contact Us
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-foreground mb-4">
                {"Let's start a conversation"}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Have a project in mind? We'd love to hear about it. Send us a
                message and we'll respond as soon as possible.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                {/* (تعديل) خلفية الأيقونة بنفسجي فاتح */}
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  {/* (تعديل) الأيقونة بنفسجي */}
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <a
                    href="mailto:hello@imaginationagency.com"
                    // (تعديل) الهوفر أخضر
                    className="text-muted-foreground hover:text-secondary transition-colors"
                  >
                    hello@imaginationagency.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Phone</p>
                  <a
                    href="tel:+966500000000"
                    className="text-muted-foreground hover:text-secondary transition-colors"
                  >
                    {/* (تعديل) رقم سعودي افتراضي */}
                    +966 50 000 0000
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Location</p>
                  <p className="text-muted-foreground">
                    {/* (تعديل) العنوان سعودي */}
                    Riyadh, Saudi Arabia
                    <br />
                    Vision 2030 Hub
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-foreground"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    // (تعديل) الإطار لما تضغطي يبقى بنفسجي
                    className="h-14 bg-muted/30 border-0 focus-visible:ring-primary placeholder:text-muted-foreground/50"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-foreground"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="h-14 bg-muted/30 border-0 focus-visible:ring-primary placeholder:text-muted-foreground/50"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="text-sm font-medium text-foreground"
                >
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="Project inquiry"
                  className="h-14 bg-muted/30 border-0 focus-visible:ring-primary placeholder:text-muted-foreground/50"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-foreground"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project..."
                  rows={6}
                  className="bg-muted/30 border-0 focus-visible:ring-primary placeholder:text-muted-foreground/50 resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                // (تعديل) زرار الإرسال بنفسجي
                className="w-full h-14 bg-primary text-primary-foreground hover:bg-primary/90 font-medium rounded-xl"
              >
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
