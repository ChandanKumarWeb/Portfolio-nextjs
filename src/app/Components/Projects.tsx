"use client";

import { Minus } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import TechIconWithTooltip from "@/components/ui/TechIconWithTooltip";
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

// Project data with tech stack icons
const projectData = [
  {
    title: "VedaMotion Care",
    image: "/Images/Projects/VedaMotion.png",
    link: "https://vedamotioncare.netlify.app/",
    desc: "Responsive website for a physiotherapy clinic, featuring services, testimonials, and contact details with modern design.",
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
    tech: [
      { icon: <SiNextdotjs className="text-gray-900 dark:text-gray-200" />, name: "Next.js" },
      { icon: <SiTailwindcss className="text-blue-500" />, name: "Tailwind CSS" },
      { icon: <SiFramer className="text-pink-400" />, name: "Framer Motion" },
      { icon: <SiNetlify className="text-green-500" />, name: "Netlify" },
    ],
  },
];

export default function Projects() {
  return (
    <section
      id="projectsSection"
      className="h-fit py-16 px-4 bg-white dark:bg-black"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex justify-start items-center text-red-500 mb-10">
          <h1 className="text-3xl font-bold">Projects</h1>
          <Minus size={45} />
        </div>

        {/* Grid of Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ rotateX: 5, rotateY: -5, scale: 1.03, transition: { duration: 0.3 } }}
              className="bg-white/90 dark:bg-white/10 backdrop-blur-sm shadow-xl rounded-xl overflow-hidden cursor-pointer transform transition-transform duration-300 hover:shadow-2xl"
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                {/* Image */}
                <div className="h-52 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={208}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {/* Info */}
                <div className="p-4 text-left">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 line-clamp-2">
                    {project.desc}
                  </p>

                  {/* Tech Icons */}
                  <div className="flex flex-wrap items-center gap-2 mt-4">
                    {project.tech.map((tech, i) => (
                      <TechIconWithTooltip
                        key={i}
                        icon={tech.icon}
                        name={tech.name}
                      />
                    ))}

                  </div>

                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
