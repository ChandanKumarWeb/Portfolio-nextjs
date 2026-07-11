"use client";
import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "motion/react";
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

// Rocket SVG component
function RocketIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-lg"
    >
      {/* Rocket body */}
      <path
        d="M12 2C12 2 8 6 8 12C8 14.5 9 17 12 20C15 17 16 14.5 16 12C16 6 12 2 12 2Z"
        fill="url(#rocketGrad)"
        stroke="#dc2626"
        strokeWidth="0.5"
      />
      {/* Rocket window */}
      <circle cx="12" cy="10" r="2" fill="#1e3a5f" stroke="#93c5fd" strokeWidth="0.5" />
      <circle cx="12" cy="10" r="1" fill="#60a5fa" opacity="0.6" />
      {/* Left fin */}
      <path d="M8 14L5 18L8 16Z" fill="#ef4444" stroke="#dc2626" strokeWidth="0.3" />
      {/* Right fin */}
      <path d="M16 14L19 18L16 16Z" fill="#ef4444" stroke="#dc2626" strokeWidth="0.3" />
      {/* Flame */}
      <path d="M10 19C10 19 11 22 12 23C13 22 14 19 14 19C13.5 20 12.5 21 12 21.5C11.5 21 10.5 20 10 19Z" fill="#f59e0b" />
      <path d="M10.5 19.5C10.5 19.5 11.2 21.5 12 22C12.8 21.5 13.5 19.5 13.5 19.5C13 20.5 12.5 21 12 21C11.5 21 11 20.5 10.5 19.5Z" fill="#ef4444" />
      <defs>
        <linearGradient id="rocketGrad" x1="12" y1="2" x2="12" y2="20" gradientUnits="userSpaceOnUse">
          <stop stopColor="#f8fafc" />
          <stop offset="0.3" stopColor="#e2e8f0" />
          <stop offset="1" stopColor="#94a3b8" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// Individual skill card component with its own useInView
function SkillCard({
  skill,
  index,
}: {
  skill: (typeof skills)[number];
  index: number;
}) {
  const cardRef = useRef(null);
  const isCardInView = useInView(cardRef, { once: true, margin: "-50px" });
  const isLeft = index % 2 === 0;

  return (
    <div
      ref={cardRef}
      className={`relative mb-12 flex flex-col md:flex-row md:items-start ${
        isLeft ? "md:justify-start" : "md:justify-end"
      }`}
    >
      {/* Dot - desktop */}
      <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-5 z-10">
        <div className="relative">
          <span className="absolute inline-flex h-4 w-4 rounded-full bg-red-500 opacity-75 animate-ping" />
          <span className="relative inline-flex h-4 w-4 rounded-full bg-red-500 z-10 shadow-md shadow-red-500/50" />
        </div>
      </div>

      {/* Dot - mobile */}
      <div className="md:hidden flex justify-center mb-4">
        <div className="relative">
          <span className="absolute inline-flex h-4 w-4 rounded-full bg-red-500 opacity-75 animate-ping" />
          <span className="relative inline-flex h-4 w-4 rounded-full bg-red-500 z-10 shadow-md shadow-red-500/50" />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
        animate={isCardInView ? { opacity: 1, x: 0 } : {}}
        transition={{
          duration: 0.6,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
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
}

export default function SkillsSection() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  // Ref for the timeline container to track scroll
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 80%", "end 60%"],
  });

  // Map scroll progress to line height and rocket position
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const rocketTop = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="skillsSection"
      className="py-20 px-4 bg-muted/30 relative overflow-hidden"
    >
      {/* Decorative */}
      <div className="absolute top-10 right-20 w-60 h-60 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-20 w-48 h-48 bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
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

        <div className="relative" ref={timelineRef}>
          {/* Background Line (faded track) - desktop */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-red-500/10 rounded-full" />

          {/* Animated Red Line (draws on scroll) - desktop */}
          <motion.div
            className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 rounded-full origin-top z-[1]"
            style={{
              height: lineHeight,
              background: "linear-gradient(180deg, #ef4444 0%, #ef4444 85%, transparent 100%)",
            }}
          />

          {/* Rocket at the leading edge - desktop */}
          <motion.div
            className="hidden md:block absolute left-1/2 z-[5] pointer-events-none"
            style={{
              top: rocketTop,
              x: "-50%",
              y: "-14px",
            }}
          >
            {/* Glow effect behind rocket */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-red-500/30 rounded-full blur-xl" />
            {/* Flame trail */}
            <div
              className="absolute top-full left-1/2 -translate-x-1/2 w-2 blur-sm"
              style={{
                height: "40px",
                background: "linear-gradient(180deg, #f59e0b 0%, #ef4444 40%, transparent 100%)",
                borderRadius: "0 0 4px 4px",
              }}
            />
            <RocketIcon />
          </motion.div>

          {/* Background Line (faded track) - mobile */}
          <div className="md:hidden absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-red-500/10 z-0 rounded-full" />

          {/* Animated Red Line (draws on scroll) - mobile */}
          <motion.div
            className="md:hidden absolute left-1/2 transform -translate-x-1/2 w-0.5 rounded-full origin-top z-[1]"
            style={{
              height: lineHeight,
              background: "linear-gradient(180deg, #ef4444 0%, #ef4444 85%, transparent 100%)",
            }}
          />

          {/* Rocket at the leading edge - mobile */}
          <motion.div
            className="md:hidden absolute left-1/2 z-[5] pointer-events-none"
            style={{
              top: rocketTop,
              x: "-50%",
              y: "-12px",
            }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-red-500/25 rounded-full blur-lg" />
            <div
              className="absolute top-full left-1/2 -translate-x-1/2 w-1.5 blur-sm"
              style={{
                height: "30px",
                background: "linear-gradient(180deg, #f59e0b 0%, #ef4444 40%, transparent 100%)",
                borderRadius: "0 0 3px 3px",
              }}
            />
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="drop-shadow-md"
            >
              <path d="M12 2C12 2 8 6 8 12C8 14.5 9 17 12 20C15 17 16 14.5 16 12C16 6 12 2 12 2Z" fill="url(#rocketGradM)" stroke="#dc2626" strokeWidth="0.5" />
              <circle cx="12" cy="10" r="2" fill="#1e3a5f" stroke="#93c5fd" strokeWidth="0.5" />
              <circle cx="12" cy="10" r="1" fill="#60a5fa" opacity="0.6" />
              <path d="M8 14L5 18L8 16Z" fill="#ef4444" stroke="#dc2626" strokeWidth="0.3" />
              <path d="M16 14L19 18L16 16Z" fill="#ef4444" stroke="#dc2626" strokeWidth="0.3" />
              <path d="M10 19C10 19 11 22 12 23C13 22 14 19 14 19C13.5 20 12.5 21 12 21.5C11.5 21 10.5 20 10 19Z" fill="#f59e0b" />
              <path d="M10.5 19.5C10.5 19.5 11.2 21.5 12 22C12.8 21.5 13.5 19.5 13.5 19.5C13 20.5 12.5 21 12 21C11.5 21 11 20.5 10.5 19.5Z" fill="#ef4444" />
              <defs>
                <linearGradient id="rocketGradM" x1="12" y1="2" x2="12" y2="20" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#f8fafc" />
                  <stop offset="0.3" stopColor="#e2e8f0" />
                  <stop offset="1" stopColor="#94a3b8" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>

          {/* Skills List */}
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
