"use client";

import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    role: "Frontend Developer",
    company: "Finnaux Tech Solution Pvt Ltd",
    location: "Jaipur, India",
    period: "March 2025 — Present",
    description:
      "Working as a Frontend Developer on both V1 and V2 enterprise web applications. Architecting and developing the V2 platform using Next.js with modern UI/UX practices, while maintaining and enhancing the V1 system built with Angular.",
    achievements: [
      "Developing the modern V2 web application using Next.js and Tailwind CSS",
      "Maintaining and building new features for the V1 enterprise platform using Angular",
      "Collaborating with backend teams on seamless REST API integrations and data flow",
      "Optimizing application performance across both versions for enhanced user experience",
    ],
    isCurrent: true,
  },
  {
    role: "Frontend Developer",
    company: "Freelance",
    location: "Remote / Jaipur, India",
    period: "2024 — 2025",
    description:
      "Building custom web applications for startups and businesses. Delivered responsive websites for clients across healthcare, automotive, and finance sectors using React, Next.js, and Angular.",
    achievements: [
      "Delivered 10+ production-ready web applications",
      "Implemented responsive designs achieving 95+ Lighthouse scores",
      "Built component libraries reducing development time by 40%",
      "Integrated payment gateways and third-party APIs",
    ],
    isCurrent: false,
  },
  {
    role: "Frontend Developer",
    company: "Professional Experience",
    location: "Jaipur, India",
    period: "2023 — 2024",
    description:
      "Worked on enterprise-level applications using Angular and React. Focused on building permission-based UIs, dynamic report generation, and API-driven data handling.",
    achievements: [
      "Built permission-based UI systems for enterprise apps",
      "Developed dynamic report generation modules",
      "Optimized application performance with lazy loading",
      "Collaborated with backend teams on API integration",
    ],
    isCurrent: false,
  },
];

function ExperienceCard({
  exp,
  index,
}: {
  exp: (typeof experiences)[number];
  index: number;
}) {
  const cardRef = useRef(null);
  const isCardInView = useInView(cardRef, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, x: -30 }}
      animate={isCardInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative pl-12 md:pl-20"
    >
      {/* Timeline dot */}
      <div className="absolute left-4 md:left-8 top-2 -translate-x-1/2 z-10">
        <div className="relative">
          {exp.isCurrent ? (
            <>
              <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-30" />
              <div className="w-3.5 h-3.5 rounded-full bg-primary ring-4 ring-background" />
            </>
          ) : (
            <div className="w-3.5 h-3.5 rounded-full bg-muted-foreground/40 ring-4 ring-background" />
          )}
        </div>
      </div>

      {/* Content Card */}
      <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
          <div>
            <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-primary" />
              {exp.role}
            </h3>
            <p className="text-primary font-medium text-sm">
              {exp.company}
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
              <Calendar className="w-3 h-3" />
              {exp.period}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
              <MapPin className="w-3 h-3" />
              {exp.location}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          {exp.description}
        </p>

        {/* Achievements */}
        <div className="space-y-2">
          {exp.achievements.map((achievement, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={isCardInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.05 }}
              className="flex items-start gap-2 text-sm text-muted-foreground"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
              {achievement}
            </motion.div>
          ))}
        </div>

        {/* Current badge */}
        {exp.isCurrent && (
          <div className="mt-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Currently Working
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const timelineContainerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineContainerRef,
    offset: ["start 70%", "end 60%"],
  });

  const scrollHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const pulseTop = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="experienceSection"
      className="py-20 px-4 bg-background relative overflow-hidden"
    >
      {/* Decorative */}
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto relative" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">
            Career Path
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            Work Experience
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mt-4" />
        </motion.div>

        {/* Timeline */}
        <div className="relative" ref={timelineContainerRef}>
          {/* Faded background vertical line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-border" />

          {/* Active colored line drawing on scroll */}
          <motion.div
            className="absolute left-4 md:left-8 top-0 w-px bg-primary origin-top"
            style={{ height: scrollHeight }}
          />

          {/* Moving scroll indicator orb */}
          <motion.div
            className="absolute left-4 md:left-8 z-[2] -translate-x-1/2 pointer-events-none"
            style={{
              top: pulseTop,
              y: "-4px",
            }}
          >
            <div className="w-2.5 h-2.5 rounded-full bg-primary shadow-lg shadow-primary/80 relative">
              <span className="absolute -inset-1 rounded-full bg-primary/40 animate-ping" />
            </div>
          </motion.div>

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} exp={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
