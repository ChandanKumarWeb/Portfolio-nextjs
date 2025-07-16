"use client";
import React from "react";
import { motion } from "framer-motion";
import { Minus } from "lucide-react";
import {
  FaReact,
  FaAngular,
  FaJs,
  FaBootstrap,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiPostman,
  SiOpenai,
  SiFramer
} from "react-icons/si";

const skills = [
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-white w-6 h-6" />,
    description: "Implemented SSR, routing, SEO and APIs with ease.",
  },
  {
    name: "React",
    icon: <FaReact className="text-sky-500 w-6 h-6" />,
    description: "Built dynamic SPAs using hooks, state, and router.",
  },
  {
    name: "Angular",
    icon: <FaAngular className="text-red-500 w-6 h-6" />,
    description: "Form-heavy enterprise UIs using Angular and RxJS.",
  },
   {
    name: "Framer Motion",
    icon: <SiFramer className="text-pink-400 w-6 h-6" />,
    description: "Framer Motion adds smooth, declarative animations to React components easily.",
  },

  {
    name: "JavaScript",
    icon: <FaJs className="text-yellow-400 w-6 h-6" />,
    description: "Deep knowledge of JS logic, closures, async, and ES6+.",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-blue-500 w-6 h-6" />,
    description: "Responsive UI with utility-first Tailwind workflows.",
  },
  {
    name: "Bootstrap",
    icon: <FaBootstrap className="text-purple-500 w-6 h-6" />,
    description: "Used Bootstrap 4/5 for fast layout & grid setup.",
  },
  {
    name: "Git",
    icon: <FaGitAlt className="text-orange-500 w-6 h-6" />,
    description: "Version control, GitHub workflow, and branching.",
  },
  {
    name: "API Integration",
    icon: <SiPostman className="text-orange-400 w-6 h-6" />,
    description: "REST APIs, token auth, CRUD logic, Postman tests.",
  },
  {
    name: "AI Tools",
    icon: <SiOpenai className="text-green-400 w-6 h-6" />,
    description: "ChatGPT and AI APIs integrated into projects.",
  },
];

export default function SkillsSection() {
  return (
    <section id="skillsSection" className="py-20 px-4 bg-white dark:bg-[#0f0f0f] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="flex items-center text-red-500 mb-12">
          <h2 className="text-3xl font-bold">Skills</h2>
          <Minus size={45} />
        </div>

        <div className="relative">
          {/* Vertical Line - desktop */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-red-500" />

          {/* Vertical Line - mobile */}
          <div className="md:hidden absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-red-500 z-0" />

          {/* Skills List */}
          {skills.map((skill, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div
                key={index}
                className={`relative mb-12 flex flex-col md:flex-row md:items-start ${isLeft ? "md:justify-start" : "md:justify-end"}`}
              >
                {/* Dot - desktop */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-5 z-10">
                  <div className="relative">
                    <span className="absolute inline-flex h-4 w-4 rounded-full bg-red-500 opacity-75 animate-ping" />
                    <span className="relative inline-flex h-4 w-4 rounded-full bg-red-500 z-10" />
                  </div>
                </div>

                {/* Dot - mobile */}
                <div className="md:hidden flex justify-center mb-4">
                  <div className="relative">
                    <span className="absolute inline-flex h-4 w-4 rounded-full bg-red-500 opacity-75 animate-ping" />
                    <span className="relative inline-flex h-4 w-4 rounded-full bg-red-500 z-10" />
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`w-full md:w-1/2 px-2 ${isLeft ? "md:pr-10" : "md:pl-10"}`}
                >
                  <div className="relative bg-white dark:bg-[#1c1c1c] border border-gray-200 dark:border-gray-700 p-5 rounded-lg shadow-md hover:shadow-xl transition transform hover:-translate-y-1 duration-300 z-10">
                    <div className="flex items-center gap-2 mb-2">
                      {skill.icon}
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {skill.name}
                      </h3>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{skill.description}</p>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
