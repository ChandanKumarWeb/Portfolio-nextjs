"use client";

import {
  ArrowRight,
  Bug,
  CheckCircle2,
  Cloud,
  Code2,
  Layers,
  Paintbrush,
  Sparkles,
  Wrench,
  X,
  Zap,
} from "lucide-react";
import type { Variants } from "motion/react";
import { AnimatePresence, motion, useInView } from "motion/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Services() {
  const CardData = [
    {
      key: 1,
      title: "Web Development",
      description:
        "Building responsive, high-speed web applications using modern frameworks like React, Next.js, and Angular.",
      detailedDescription:
        "We deliver production-ready, highly scalable web applications customized to your business goals. From single-page applications (SPAs) to complex enterprise platforms, we ensure rock-solid architecture, clean modular code, and SEO-friendly server-side rendering using Next.js.",
      features: [
        "Custom Single Page & Multi-Page Applications",
        "Server-Side Rendering (SSR) & Static Site Generation (SSG)",
        "Mobile-First Responsive & Pixel-Perfect Layouts",
        "Secure Authentication & Role-Based Access Control",
      ],
      technologies: [
        "React.js",
        "Next.js",
        "Angular",
        "TypeScript",
        "Tailwind CSS",
      ],
      icon: <Code2 className="w-6 h-6" />,
      image: "/Images/WebDev.png",
      color: "from-blue-500 to-blue-700",
      accentColor: "text-blue-500",
      btnBg: "bg-blue-500/10 hover:bg-blue-500 text-blue-500 hover:text-white",
    },
    {
      key: 2,
      title: "UI/UX Design & Implementation",
      description:
        "Creating intuitive, aesthetic interfaces with a focus on seamless user journey and clean design system.",
      detailedDescription:
        "Good design is more than just aesthetics—it’s about functionality and conversion. We turn complex requirements into clean, delightful user interfaces that keep users engaged while ensuring accessibility (a11y) standards across all screen sizes.",
      features: [
        "Interactive Prototyping & Wireframing to Code",
        "Modern Glassmorphism & Micro-Animations",
        "Comprehensive Design System & Component Library Creation",
        "Usability Testing & Conversion Rate Optimization",
      ],
      technologies: [
        "Figma to Code",
        "Tailwind CSS",
        "Framer Motion",
        "Shadcn/UI",
      ],
      icon: <Paintbrush className="w-6 h-6" />,
      image: "/Images/UiUx.png",
      color: "from-pink-500 to-purple-600",
      accentColor: "text-pink-500",
      btnBg: "bg-pink-500/10 hover:bg-pink-500 text-pink-500 hover:text-white",
    },
    {
      key: 3,
      title: "API & Backend Integration",
      description:
        "Connecting frontend interfaces seamlessly with third-party APIs, payment gateways, and backend services.",
      detailedDescription:
        "We specialize in bridging the gap between front-end interfaces and complex back-end data structures. Whether integrating payment systems, live chat, mapping tools, or enterprise CRM endpoints, our data handling is robust, token-secure, and error-proof.",
      features: [
        "REST API & GraphQL Endpoint Integration",
        "Payment Gateway Integration (Stripe, Razorpay, PayPal)",
        "Token-Based Auth (OAuth, JWT, Firebase Authentication)",
        "Real-Time WebSockets & Data Synchronization",
      ],
      technologies: [
        "REST APIs",
        "Postman",
        "Axios",
        "TanStack React Query",
        "WebSockets",
      ],
      icon: <Cloud className="w-6 h-6" />,
      image: "/Images/ApiIntegration.png",
      color: "from-green-500 to-teal-600",
      accentColor: "text-green-500",
      btnBg:
        "bg-green-500/10 hover:bg-green-500 text-green-500 hover:text-white",
    },
    {
      key: 4,
      title: "Performance Optimization",
      description:
        "Supercharging application speed through code splitting, lazy loading, asset optimization, and state management.",
      detailedDescription:
        "Slow load times drive users away and hurt Google SEO rankings. We perform deep performance audits to eliminate rendering bottlenecks, reduce bundle sizes, optimize images, and streamline state updates so your app loads almost instantaneously.",
      features: [
        "95+ Google Lighthouse & Core Web Vitals Optimization",
        "Dynamic Code Splitting & Component Lazy Loading",
        "Efficient Global State Management (Zustand, Redux Toolkit)",
        "Image/Asset Compression & Next-Gen Caching Strategies",
      ],
      technologies: [
        "Lighthouse",
        "Next.js Image Optimization",
        "Webpack / Turbopack",
        "Zustand",
      ],
      icon: <Zap className="w-6 h-6" />,
      image: "/Images/performance.png",
      color: "from-yellow-500 to-amber-600",
      accentColor: "text-yellow-500",
      btnBg:
        "bg-yellow-500/10 hover:bg-yellow-500 text-yellow-500 hover:text-white",
    },
    {
      key: 5,
      title: "Testing, Debugging & QA",
      description:
        "Conducting rigorous testing across browsers and devices to guarantee zero bugs and stable user workflows.",
      detailedDescription:
        "Quality assurance is non-negotiable for production releases. We systematically trace and squash elusive bugs, fix cross-browser rendering discrepancies, and write comprehensive test suites to ensure zero surprises when real users use your application.",
      features: [
        "Cross-Browser & Cross-Device Compatibility Testing",
        "Thorough Debugging of Complex UI & State Logic Issues",
        "Automated Unit & End-to-End (E2E) Testing Workflows",
        "Memory Leak Detection & Rendering Profiling",
      ],
      technologies: [
        "React Testing Library",
        "Jest",
        "Cypress",
        "Chrome DevTools",
      ],
      icon: <Bug className="w-6 h-6" />,
      image: "/Images/Testing.png",
      color: "from-red-500 to-orange-600",
      accentColor: "text-red-500",
      btnBg: "bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white",
    },
    {
      key: 6,
      title: "Maintenance & Long-Term Support",
      description:
        "Providing ongoing feature upgrades, dependency upgrades, bug fixes, and continuous technical monitoring.",
      detailedDescription:
        "A successful web app requires continuous evolution. We provide dedicated post-launch support to keep your packages updated against security vulnerabilities, add new features as your business grows, and ensure uptime reliability.",
      features: [
        "Regular Framework & Dependency Version Upgrades",
        "Proactive Security Vulnerability Patches & Fixes",
        "Continuous Feature Additions & UX Enhancements",
        "Fast Response Time for Technical Troubleshooting",
      ],
      technologies: [
        "Git / GitHub",
        "CI/CD Pipelines",
        "Vercel / Netlify",
        "npm Audit",
      ],
      icon: <Wrench className="w-6 h-6" />,
      image: "/Images/Maintenance.png",
      color: "from-indigo-500 to-blue-600",
      accentColor: "text-indigo-500",
      btnBg:
        "bg-indigo-500/10 hover:bg-indigo-500 text-indigo-500 hover:text-white",
    },
  ];

  type CardType = (typeof CardData)[number];
  const [selectedCard, setSelectedCard] = useState<CardType | null>(null);

  useEffect(() => {
    if (selectedCard) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedCard]);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 0.7,
      },
    },
  };

  return (
    <section
      id="servicesSection"
      className="py-20 px-4 bg-muted/30 relative overflow-hidden"
    >
      {/* Decorative orbs */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-60 h-60 bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center sm:text-left"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">
            What I Do
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            Services & Offerings
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mt-4 mx-auto sm:mx-0" />
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {CardData.map((card, index) => (
            <motion.div
              key={card.key}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative cursor-pointer"
              onClick={() => setSelectedCard(card)}
            >
              <div className="relative h-full bg-card border border-border rounded-2xl p-7 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 flex flex-col items-center text-center overflow-hidden">
                {/* Index badge */}
                <span className="absolute top-4 right-4 text-xs font-bold text-muted-foreground/30">
                  0{index + 1}
                </span>

                {/* Gradient overlay on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 rounded-2xl`}
                />

                <div
                  className={`relative w-20 h-20 mb-5 rounded-2xl bg-gradient-to-br ${card.color} p-[2px] shadow-sm`}
                >
                  <div className="w-full h-full bg-card rounded-[14px] flex items-center justify-center p-2">
                    <Image
                      src={card.image}
                      alt={card.title}
                      width={64}
                      height={64}
                      className="object-contain"
                    />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {card.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {card.description}
                </p>

                <div className="mt-auto w-full pt-2">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedCard(card);
                    }}
                    className={`w-full py-2.5 px-4 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${card.btnBg} shadow-sm`}
                  >
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal - z-[100] ensures it appears above Navbar and everything */}
      <AnimatePresence>
        {selectedCard && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-[100] p-4 overflow-y-auto"
            onClick={() => setSelectedCard(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 30 }}
              transition={{ type: "spring", stiffness: 220, damping: 26 }}
              className="relative w-full max-w-2xl bg-card rounded-2xl shadow-2xl border border-border p-6 sm:p-8 max-h-[90vh] overflow-y-auto my-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top Banner Gradient */}
              <div
                className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${selectedCard.color} rounded-t-2xl`}
              />

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedCard(null)}
                className="absolute top-4 right-4 p-2 rounded-xl bg-muted/60 hover:bg-muted text-muted-foreground hover:text-foreground transition-all duration-200"
              >
                <X size={20} />
              </button>

              {/* Header */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-6 pt-2">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${selectedCard.color} p-[2px] flex-shrink-0 shadow-md`}
                >
                  <div className="w-full h-full bg-card rounded-[14px] flex items-center justify-center p-2">
                    <Image
                      src={selectedCard.image}
                      alt={selectedCard.title}
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="text-center sm:text-left">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                    Service Detail
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground mt-0.5">
                    {selectedCard.title}
                  </h2>
                </div>
              </div>

              {/* Detailed Description */}
              <div className="space-y-6 text-left">
                <p className="text-muted-foreground text-base leading-relaxed">
                  {selectedCard.detailedDescription}
                </p>

                {/* Key Features / Offerings */}
                <div className="bg-muted/40 rounded-2xl p-5 border border-border/60">
                  <h3 className="text-sm font-bold text-foreground flex items-center gap-2 mb-3.5">
                    <Sparkles className="w-4 h-4 text-primary" />
                    Key Features & Capabilities
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedCard.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 text-sm text-muted-foreground"
                      >
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies Stack */}
                <div>
                  <h3 className="text-sm font-bold text-foreground flex items-center gap-2 mb-3">
                    <Layers className="w-4 h-4 text-primary" />
                    Technologies & Tools
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedCard.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-primary/10 text-primary border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer CTA */}
              <div className="mt-8 pt-5 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-muted-foreground text-center sm:text-left">
                  Ready to start a project with this service?
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                  <button
                    type="button"
                    onClick={() => setSelectedCard(null)}
                    className="px-5 py-2.5 border border-border text-foreground rounded-xl font-medium hover:bg-muted transition-all text-sm w-full sm:w-auto"
                  >
                    Close
                  </button>
                  <a
                    href="#contactSection"
                    onClick={() => setSelectedCard(null)}
                    className="px-6 py-2.5 bg-primary text-primary-foreground rounded-xl font-semibold hover:opacity-90 transition-all text-sm text-center shadow-lg shadow-primary/20 w-full sm:w-auto"
                  >
                    Discuss Project
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
