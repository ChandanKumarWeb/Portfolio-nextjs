"use client";

import { ArrowDown } from "lucide-react";
import { motion, useInView } from "motion/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

const roles = [
  "Frontend Developer",
  "React Expert",
  "Next.js Developer",
  "UI/UX Enthusiast",
  "Angular Developer",
];

export default function HeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      if (displayText.length < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        }, 80);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length - 1));
        }, 40);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  const socialLinks = [
    {
      icon: <FaInstagram className="w-5 h-5" />,
      href: "https://instagram.com/iamchandankumar__",
      label: "Instagram",
      hoverColor:
        "hover:text-pink-500 hover:border-pink-500/30 hover:bg-pink-500/10",
    },
    {
      icon: <FaLinkedinIn className="w-5 h-5" />,
      href: "https://linkedin.com/in/chandan-d",
      label: "LinkedIn",
      hoverColor:
        "hover:text-blue-500 hover:border-blue-500/30 hover:bg-blue-500/10",
    },
    {
      icon: <FaWhatsapp className="w-5 h-5" />,
      href: "https://wa.me/8257060642",
      label: "WhatsApp",
      hoverColor:
        "hover:text-green-500 hover:border-green-500/30 hover:bg-green-500/10",
    },
    {
      icon: <FaGithub className="w-5 h-5" />,
      href: "https://github.com/ChandanKumarWeb",
      label: "GitHub",
      hoverColor:
        "hover:text-foreground hover:border-foreground/30 hover:bg-foreground/10",
    },
  ];

  return (
    <section
      id="heroSection"
      className="relative min-h-screen flex items-center bg-background overflow-hidden"
    >
      {/* Grid pattern background */}
      <div className="absolute inset-0 grid-pattern opacity-60" />

      {/* Gradient orbs */}
      <div className="absolute top-20 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 -right-32 w-96 h-96 bg-accent/15 rounded-full blur-3xl" />

      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 gap-12 py-20 md:py-0">
        {/* Image section */}
        <motion.div
          className="order-1 md:order-2 w-full md:w-1/2 flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="relative w-72 h-72 md:w-[400px] md:h-[400px]">
            {/* Gradient ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-accent to-primary/50 animate-pulse-glow" />
            <div className="absolute inset-[3px] rounded-full bg-background" />

            {/* Inner gradient circle */}
            <div className="absolute inset-[20%] rounded-full bg-gradient-to-br from-primary/10 to-accent/10 dark:from-primary/20 dark:to-accent/20" />

            {/* Floating tech bubbles */}
            {[
              {
                label: "Next.js",
                pos: "top-2 left-2 md:top-8 md:left-6",
                delay: 0,
              },
              {
                label: "Tailwind",
                pos: "top-2 right-2 md:top-8 md:right-6",
                delay: 0.2,
              },
              {
                label: "React",
                pos: "bottom-2 left-2 md:bottom-8 md:left-6",
                delay: 0.4,
              },
              {
                label: "Angular",
                pos: "bottom-2 right-2 md:bottom-8 md:right-6",
                delay: 0.6,
              },
            ].map(({ label, pos, delay }, i) => (
              <motion.div
                key={i}
                className={`absolute ${pos} px-3 py-2 glass-card rounded-full flex items-center justify-center text-xs font-semibold text-primary z-20 shadow-lg`}
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  repeatType: "loop",
                  delay,
                }}
              >
                {label}
              </motion.div>
            ))}

            {/* Profile image */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
              className="absolute inset-0 z-20 flex items-center justify-center"
            >
              <div className="relative w-32 h-32 md:w-44 md:h-44 rounded-full overflow-hidden shadow-2xl ring-4 ring-background">
                <Image
                  src="/Images/Freelancer.jpeg"
                  alt="Chandan Kumar - Frontend Developer"
                  fill
                  sizes="(max-width: 768px) 128px, 176px"
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Text section */}
        <motion.div
          className="order-2 md:order-1 w-full md:w-1/2"
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Available for freelance work
          </motion.div>

          <h1 className="text-foreground text-3xl md:text-4xl lg:text-5xl font-bold mb-3 tracking-tight">
            Hello, I&apos;m
          </h1>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-3 gradient-text leading-tight">
            Chandan Kumar
          </h2>

          {/* Typewriter role */}
          <div className="text-xl md:text-2xl lg:text-3xl font-semibold text-muted-foreground mb-6 h-10">
            <span>{displayText}</span>
            <span className="animate-pulse text-primary">|</span>
          </div>

          <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8 max-w-lg">
            Front-end developer with expertise in React, Next.js, and Angular. I
            build responsive UIs with clean design and intuitive UX that bring
            ideas to life.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-10">
            <a
              href="#contactSection"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 glow-btn"
            >
              Let&apos;s Talk
              <ArrowDown className="w-4 h-4 rotate-[-90deg]" />
            </a>
            <a
              href="#projectsSection"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold border border-border text-foreground hover:bg-muted transition-all duration-300"
            >
              View Projects
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mb-8">
            {[
              { number: "10+", label: "Projects" },
              { number: "1+", label: "Years Exp" },
              { number: "3+", label: "Clients" },
            ].map(({ number, label }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="text-center"
              >
                <h3 className="text-3xl md:text-4xl font-bold gradient-text">
                  {number}
                </h3>
                <p className="text-sm text-muted-foreground font-medium">
                  {label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex gap-3">
            {socialLinks.map((link, i) => (
              <motion.a
                key={i}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + i * 0.1 }}
                className={`p-2.5 rounded-xl border border-border text-muted-foreground transition-all duration-300 ${link.hoverColor}`}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-xs text-muted-foreground font-medium">
          Scroll
        </span>
        <ArrowDown className="w-4 h-4 text-muted-foreground" />
      </motion.div>
    </section>
  );
}
