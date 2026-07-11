"use client";

import React from "react";
import { FaInstagram, FaLinkedinIn, FaWhatsapp, FaGithub } from "react-icons/fa";
import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    {
      icon: <FaInstagram className="w-5 h-5" />,
      href: "https://instagram.com/iamchandankumar__",
      color: "hover:text-pink-500",
      bg: "hover:bg-pink-500/10",
      tooltip: "Instagram",
    },
    {
      icon: <FaLinkedinIn className="w-5 h-5" />,
      href: "https://linkedin.com/in/chandan-d",
      color: "hover:text-blue-500",
      bg: "hover:bg-blue-500/10",
      tooltip: "LinkedIn",
    },
    {
      icon: <FaWhatsapp className="w-5 h-5" />,
      href: "https://wa.me/8257060642",
      color: "hover:text-green-500",
      bg: "hover:bg-green-500/10",
      tooltip: "WhatsApp",
    },
    {
      icon: <FaGithub className="w-5 h-5" />,
      href: "https://github.com/ChandanKumarWeb",
      color: "hover:text-foreground",
      bg: "hover:bg-muted",
      tooltip: "GitHub",
    },
  ];

  const quickLinks = [
    { name: "Home", href: "#heroSection" },
    { name: "About", href: "#aboutSection" },
    { name: "Services", href: "#servicesSection" },
    { name: "Projects", href: "#projectsSection" },
    { name: "Skills", href: "#skillsSection" },
    { name: "Experience", href: "#experienceSection" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contactSection" },
  ];

  return (
    <footer className="relative overflow-hidden bg-card border-t border-border pt-16 pb-10 px-4">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-1/4 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/3 w-40 h-40 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand & Socials */}
          <div className="text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center justify-center md:justify-start gap-2 mb-3"
            >
              <Sparkles className="text-primary w-5 h-5" />
              <h2 className="text-2xl font-bold tracking-tight gradient-text">
                Chandan Kumar
              </h2>
            </motion.div>
            <p className="text-sm text-muted-foreground max-w-xs mx-auto md:mx-0">
              Crafting exceptional digital experiences with modern web
              technologies
            </p>

            <div className="flex justify-center md:justify-start gap-3 mt-6">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.tooltip}
                  className={`p-2.5 rounded-xl border border-border text-muted-foreground transition-all duration-300 ${link.color} ${link.bg} relative group`}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  {link.icon}
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs bg-foreground text-background px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    {link.tooltip}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <motion.h3
              className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Explore
            </motion.h3>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.1 + index * 0.04,
                    duration: 0.3,
                  }}
                >
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center justify-center md:justify-start gap-1"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <motion.h3
              className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Contact
            </motion.h3>
            <motion.div
              className="space-y-2 text-sm text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <p>Jaipur, India</p>
              <a
                href="mailto:chandan42kumar55@gmail.com"
                className="hover:text-primary transition-colors block"
              >
                chandan42kumar55@gmail.com
              </a>
              <a
                href="tel:+918257060642"
                className="hover:text-primary transition-colors block"
              >
                +91 8257060642
              </a>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center md:text-left"
          >
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">
              Let&apos;s collaborate
            </h4>
            <p className="text-sm mb-4 text-muted-foreground">
              Have a project in mind? Let&apos;s discuss how I can help bring
              your ideas to life.
            </p>
            <motion.a
              href="mailto:chandan42kumar55@gmail.com"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground py-2.5 px-6 rounded-xl text-sm font-medium transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get in touch
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </motion.a>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          className="mt-14 text-center text-xs text-muted-foreground flex flex-col items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="section-divider w-full max-w-xs mb-4" />
          <p>
            &copy; {new Date().getFullYear()} Chandan Kumar. All rights
            reserved.
          </p>
          <p className="mt-1">
            Crafted with{" "}
            <motion.span
              className="inline-block text-red-500 mx-1"
              animate={{ scale: [1, 1.25, 1, 1.25, 1] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              ♥
            </motion.span>{" "}
            in India
          </p>
        </motion.div>
      </div>
    </footer>
  );
}