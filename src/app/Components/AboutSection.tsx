"use client";

import { Briefcase, Code2, GraduationCap, Heart, MapPin } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const highlights = [
  {
    icon: <Briefcase className="w-5 h-5" />,
    label: "Frontend Developer",
    description: "Specializing in building production-ready web applications",
  },
  {
    icon: <Code2 className="w-5 h-5" />,
    label: "Tech Stack",
    description: "React, Next.js, Angular, TypeScript, Tailwind CSS",
  },
  {
    icon: <GraduationCap className="w-5 h-5" />,
    label: "Education",
    description: "Bachelor of Computer Applications (BCA)",
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    label: "Location",
    description: "Jaipur, Rajasthan, India",
  },
];

const funFacts = [
  "🎵 Love listening to music while coding",
  "☕ Coffee-powered developer",
  "🌙 Night owl coder",
  "📚 Continuous learner",
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="aboutSection"
      className="py-20 px-4 bg-background relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            Get to know me
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: About text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <p className="text-muted-foreground text-lg leading-relaxed">
              I&apos;m a passionate frontend developer based in Jaipur, India,
              with 1+ years of professional experience building modern web
              applications. I specialize in creating responsive, performant, and
              visually appealing user interfaces.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              My journey started with curiosity about how websites work, and it
              quickly evolved into a deep love for crafting pixel-perfect
              designs and seamless user experiences. I&apos;ve worked with
              startups and businesses to bring their digital visions to life.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              When I&apos;m not coding, you&apos;ll find me exploring new
              technologies, contributing to open-source, or enjoying a good cup
              of coffee while brainstorming creative solutions.
            </p>

            {/* Fun facts */}
            <div className="pt-4">
              <h3 className="flex items-center gap-2 text-foreground font-semibold mb-4">
                <Heart className="w-4 h-4 text-red-500" />
                Quick Facts
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {funFacts.map((fact, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="text-sm text-muted-foreground bg-muted/50 rounded-lg px-3 py-2"
                  >
                    {fact}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Highlight cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="p-5 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-3 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="text-foreground font-semibold text-sm mb-1">
                  {item.label}
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}

            {/* Download Resume Card */}
            <motion.a
              href="/Chandan_Kumar_Resume.pdf"
              download
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="col-span-1 sm:col-span-2 p-5 rounded-2xl bg-gradient-to-r from-primary to-accent text-white flex items-center justify-between group cursor-pointer"
            >
              <div>
                <h3 className="font-semibold text-sm mb-1">
                  Want to know more?
                </h3>
                <p className="text-white/80 text-xs">
                  Download my resume for full details
                </p>
              </div>
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
