"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "motion/react";
import Image from "next/image";
import TechIconWithTooltip from "@/components/ui/TechIconWithTooltip";
import { ExternalLink } from "lucide-react";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiReact,
  SiNetlify,
  SiHtml5,
  SiBootstrap,
  SiReactrouter,
} from "react-icons/si";

const projectData = [
  {
    title: "VedaMotion Care",
    image: "/Images/Projects/VedaMotion.png",
    link: "https://vedamotioncare.netlify.app/",
    desc: "Responsive website for a physiotherapy clinic, featuring services, testimonials, and contact details with modern design.",
    category: "Next.js",
    tech: [
      { icon: <SiNextdotjs className="text-gray-900 dark:text-gray-200" />, name: "Next.js" },
      { icon: <SiTailwindcss className="text-blue-500" />, name: "Tailwind CSS" },
      { icon: <SiFramer className="text-pink-400" />, name: "Framer Motion" },
      { icon: <SiNetlify className="text-green-500" />, name: "Netlify" },
    ],
  },
  {
    title: "Furniro",
    image: "/Images/Projects/Furniro.png",
    link: "https://front-end-furniture.netlify.app/",
    desc: "Modern furniture shop interface using React and Tailwind CSS with responsive grid layout.",
    category: "React",
    tech: [
      { icon: <SiReact className="text-cyan-400" />, name: "React" },
      { icon: <SiReactrouter className="text-red-500" />, name: "React Router" },
      { icon: <SiTailwindcss className="text-blue-500" />, name: "Tailwind CSS" },
      { icon: <SiNetlify className="text-green-500" />, name: "Netlify" },
    ],
  },
  {
    title: "Cabana Capitals",
    image: "/Images/Projects/CabanaCapital.png",
    link: "https://demo-trading-web.netlify.app/",
    desc: "Trading platform demo site built with HTML5 and Bootstrap, designed for investment company presentation.",
    category: "HTML",
    tech: [
      { icon: <SiHtml5 className="text-orange-500" />, name: "HTML5" },
      { icon: <SiBootstrap className="text-purple-600" />, name: "Bootstrap" },
      { icon: <SiNetlify className="text-green-500" />, name: "Netlify" },
    ],
  },
  {
    title: "AvtarEv",
    image: "/Images/Projects/AvtarEv.png",
    link: "https://www.avtarevmotors.in/",
    desc: "Official website for EV brand, showcasing electric vehicle models and booking info with modern UI.",
    category: "Next.js",
    tech: [
      { icon: <SiNextdotjs className="text-gray-900 dark:text-gray-200" />, name: "Next.js" },
      { icon: <SiTailwindcss className="text-blue-500" />, name: "Tailwind CSS" },
      { icon: <SiFramer className="text-pink-400" />, name: "Framer Motion" },
      { icon: <SiNetlify className="text-green-500" />, name: "Netlify" },
    ],
  },
];

const categories = ["All", "Next.js", "React", "HTML"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filteredProjects =
    activeCategory === "All"
      ? projectData
      : projectData.filter((p) => p.category === activeCategory);

  return (
    <section
      id="projectsSection"
      className="py-20 px-4 bg-background relative overflow-hidden"
    >
      {/* Decorative */}
      <div className="absolute top-0 left-1/3 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            Projects
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mt-4" />
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500"
              >
                {/* Image with overlay */}
                <div className="relative h-52 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={208}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-all transform translate-y-4 group-hover:translate-y-0 duration-500"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Preview
                    </a>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-foreground">
                      {project.title}
                    </h3>
                    <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-4">
                    {project.desc}
                  </p>

                  {/* Tech Icons */}
                  <div className="flex flex-wrap items-center gap-2">
                    {project.tech.map((tech, i) => (
                      <TechIconWithTooltip
                        key={i}
                        icon={tech.icon}
                        name={tech.name}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
