"use client";
import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
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
  SiFramer,
} from "react-icons/si";

const skills = [
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-foreground w-6 h-6" />,
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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="skillsSection"
      className="py-20 px-4 bg-muted/30 relative overflow-hidden"
    >
      {/* Decorative */}
      <div className="absolute top-10 right-20 w-60 h-60 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-20 w-48 h-48 bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">
            My Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            Skills & Technologies
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mt-4" />
        </motion.div>

        <div className="relative">
          {/* Vertical Line - desktop */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/30 rounded-full" />

          {/* Vertical Line - mobile */}
          <div className="md:hidden absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/30 z-0 rounded-full" />

          {/* Skills List */}
          {skills.map((skill, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div
                key={index}
                className={`relative mb-12 flex flex-col md:flex-row md:items-start ${
                  isLeft ? "md:justify-start" : "md:justify-end"
                }`}
              >
                {/* Dot - desktop */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-5 z-10">
                  <div className="relative">
                    <span className="absolute inline-flex h-4 w-4 rounded-full bg-primary opacity-75 animate-ping" />
                    <span className="relative inline-flex h-4 w-4 rounded-full bg-primary z-10" />
                  </div>
                </div>

                {/* Dot - mobile */}
                <div className="md:hidden flex justify-center mb-4">
                  <div className="relative">
                    <span className="absolute inline-flex h-4 w-4 rounded-full bg-primary opacity-75 animate-ping" />
                    <span className="relative inline-flex h-4 w-4 rounded-full bg-primary z-10" />
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`w-full md:w-1/2 px-2 ${
                    isLeft ? "md:pr-10" : "md:pl-10"
                  }`}
                >
                  <div className="relative bg-card border border-border p-5 rounded-xl shadow-sm hover:shadow-lg hover:border-primary/30 hover:shadow-primary/5 transition-all duration-300 transform hover:-translate-y-1 z-10">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center">
                        {skill.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {skill.name}
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground pl-[52px]">
                      {skill.description}
                    </p>
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
