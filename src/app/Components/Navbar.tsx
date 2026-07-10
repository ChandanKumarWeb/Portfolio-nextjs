"use client";
import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { motion, AnimatePresence } from "motion/react";
import { X, Menu, Download } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("heroSection");

  const navLinks = [
    { label: "Home", href: "#heroSection", id: "heroSection" },
    { label: "About", href: "#aboutSection", id: "aboutSection" },
    { label: "Services", href: "#servicesSection", id: "servicesSection" },
    { label: "Projects", href: "#projectsSection", id: "projectsSection" },
    { label: "Skills", href: "#skillsSection", id: "skillsSection" },
    { label: "Experience", href: "#experienceSection", id: "experienceSection" },
    { label: "Testimonials", href: "#testimonials", id: "testimonials" },
    { label: "Contact", href: "#contactSection", id: "contactSection" },
  ];

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll spy - detect active section
  const handleIntersection = useCallback(() => {
    const sections = navLinks.map((link) => document.getElementById(link.id));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const cleanup = handleIntersection();
    return cleanup;
  }, [handleIntersection]);

  // Lock body scroll on mobile menu
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed w-full z-50 top-0 transition-all duration-500 ${
        scrolled
          ? "glass shadow-lg shadow-black/5 dark:shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="#heroSection" className="flex items-center space-x-2 group">
            <Image src="/Images/logo.png" width={36} height={36} alt="Chandan Kumar Logo" />
            <span className="text-lg font-bold tracking-tight text-foreground">
              Port
              <span className="gradient-text">.folio</span>
            </span>
          </a>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map(({ label, href, id }) => (
              <a
                key={label}
                href={href}
                className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  activeSection === id
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {label}
                {activeSection === id && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-primary rounded-full"
                    transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                  />
                )}
              </a>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-3">
            <AnimatedThemeToggler className="hidden lg:flex p-2 rounded-lg hover:bg-muted transition-colors" />

            <a
              href="/Chandan_Kumar_Resume.pdf"
              download
              className="hidden sm:inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-all duration-300 glow-btn"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              type="button"
              className="lg:hidden p-2 rounded-lg text-foreground hover:bg-muted transition-colors"
              aria-label="Toggle navigation"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              onClick={() => setMenuOpen(false)}
            />

            {/* Slide-in Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-72 glass z-50 shadow-2xl"
            >
              <div className="flex flex-col h-full">
                {/* Close */}
                <div className="flex justify-between items-center p-5 border-b border-border">
                  <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                    Menu
                  </span>
                  <button
                    onClick={() => setMenuOpen(false)}
                    className="p-2 rounded-lg hover:bg-muted transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Links */}
                <nav className="flex-1 overflow-y-auto p-4 space-y-1">
                  {navLinks.map(({ label, href, id }, index) => (
                    <motion.a
                      key={label}
                      href={href}
                      onClick={() => setMenuOpen(false)}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                        activeSection === id
                          ? "bg-primary/10 text-primary"
                          : "text-foreground hover:bg-muted"
                      }`}
                    >
                      {label}
                    </motion.a>
                  ))}
                </nav>

                {/* Bottom actions */}
                <div className="p-4 border-t border-border space-y-3">
                  <AnimatedThemeToggler className="flex items-center justify-center gap-2 w-full p-3 rounded-lg bg-muted hover:bg-muted/80 transition-colors" />
                  <a
                    href="/Chandan_Kumar_Resume.pdf"
                    download
                    className="flex items-center justify-center gap-2 w-full bg-primary text-primary-foreground px-4 py-3 rounded-lg text-sm font-medium"
                  >
                    <Download className="w-4 h-4" />
                    Download CV
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
