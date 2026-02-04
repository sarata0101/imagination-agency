"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Luxe Brand Identity",
    category: "Branding",
    image: "/portfolio/project-1.jpg",
    size: "large",
  },
  {
    title: "Sonic Waves Campaign",
    category: "Audio Production",
    image: "/portfolio/project-2.jpg",
    size: "small",
  },
  {
    title: "Urban Photography",
    category: "Visual Production",
    image: "/portfolio/project-3.jpg",
    size: "small",
  },
  {
    title: "Digital Experience",
    category: "Branding",
    image: "/portfolio/project-4.jpg",
    size: "medium",
  },
  {
    title: "Motion Graphics Reel",
    category: "Visual Production",
    image: "/portfolio/project-5.jpg",
    size: "medium",
  },
  {
    title: "Artisan Coffee Co.",
    category: "Branding",
    image: "/portfolio/project-6.jpg",
    size: "large",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export function Portfolio() {
  return (
    // (تعديل) الخلفية خليناها رمادي فاتح جداً بدل الأخضر الصريح
    <section className="py-32 px-6 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          {/* (تعديل) العنوان الصغير أخضر */}
          <span className="text-sm font-medium tracking-widest uppercase text-secondary">
            Our Portfolio
          </span>
          <h2 className="mt-4 font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold text-foreground">
            Selected Works
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="group relative break-inside-avoid overflow-hidden rounded-2xl cursor-pointer"
            >
              <div
                className={`relative w-full ${
                  project.size === "large"
                    ? "aspect-[4/5]"
                    : project.size === "medium"
                    ? "aspect-[4/3]"
                    : "aspect-square"
                }`}
              >
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                {/* (تعديل) الطبقة الشفافة بقت بنفسجي غامق عشان البراندنج */}
                <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                
                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                  {/* (تعديل) نوع المشروع أخضر فاتح ينور على الخلفية البنفسجي */}
                  <span className="text-secondary text-sm font-medium tracking-wide uppercase mb-2">
                    {project.category}
                  </span>
                  <h3 className="font-[family-name:var(--font-heading)] text-xl md:text-2xl font-semibold text-white">
                    {project.title}
                  </h3>
                </div>

                {/* (تعديل) الزاوية الديكورية بقت أخضر */}
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          {/* (تعديل) الزرار بقى بوردر بنفسجي وكتابة بنفسجي */}
          <button className="px-8 py-4 border-2 border-primary text-primary font-medium rounded-full hover:bg-primary hover:text-white transition-colors duration-300">
            View All Projects
          </button>
        </motion.div>
      </div>
    </section>
  );
}
