"use client";

import React, { useRef } from "react";
import { Minus } from "lucide-react";
import { Code2, Paintbrush, Cloud, Zap, Wrench, Bug } from "lucide-react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import type { Variants } from "framer-motion";

export default function Services() {
  const CardData = [
    {
      key: 1,
      title: "Web Development",
      description:
        "Building responsive and dynamic web applications using modern frameworks like React, Next.js, and Angular.",
      icon: <Code2 className="w-6 h-6" />,
      image: "/Images/WebDev.png",
      color: "from-blue-500 to-blue-700",
      hoverColor: "hover:from-blue-600 hover:to-blue-800",
    },
    {
      key: 2,
      title: "UI/UX Design",
      description:
        "Creating intuitive and user-friendly interfaces with a focus on clean design and modular architecture.",
      icon: <Paintbrush className="w-6 h-6" />,
      image: "/Images/UiUx.png",
      color: "from-pink-500 to-purple-600",
      hoverColor: "hover:from-pink-600 hover:to-purple-700",
    },
    {
      key: 3,
      title: "API Integration",
      description:
        "Integrating third-party APIs to enhance functionality and provide dynamic data handling.",
      icon: <Cloud className="w-6 h-6" />,
      image: "/Images/ApiIntegration.png",
      color: "from-green-500 to-teal-600",
      hoverColor: "hover:from-green-600 hover:to-teal-700",
    },
    {
      key: 4,
      title: "Performance Optimization",
      description:
        "Improving application performance through code optimization, lazy loading, and efficient state management.",
      icon: <Zap className="w-6 h-6" />,
      image: "/Images/performance.png",
      color: "from-yellow-500 to-amber-600",
      hoverColor: "hover:from-yellow-600 hover:to-amber-700",
    },
    {
      key: 5,
      title: "Testing & Debugging",
      description:
        "Conducting thorough testing and debugging to ensure high-quality, bug-free applications.",
      icon: <Bug className="w-6 h-6" />,
      image: "/Images/Testing.png",
      color: "from-red-500 to-orange-600",
      hoverColor: "hover:from-red-600 hover:to-orange-700",
    },
    {
      key: 6,
      title: "Maintenance & Support",
      description:
        "Providing ongoing maintenance and support to keep your applications running smoothly.",
      icon: <Wrench className="w-6 h-6" />,
      image: "/Images/Maintenance.png",
      color: "from-indigo-500 to-blue-600",
      hoverColor: "hover:from-indigo-600 hover:to-blue-700",
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 60, scale: 0.8 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        type: "spring", 
        bounce: 0.4, 
        duration: 0.8 
      },
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: { duration: 0.3 }
    }
  };

  // const titleVariants: Variants = {
  //   hidden: { opacity: 0, x: -30 },
  //   show: { 
  //     opacity: 1, 
  //     x: 0,
  //     transition: {
  //       type: "spring",
  //       stiffness: 100,
  //       damping: 10
  //     }
  //   }
  // };

  return (
    <section
      id="servicesSection"
      className="py-16 px-4 bg-[#f8f6f8]  dark:bg-[#0b0b0b]  text-gray-900 dark:text-white relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-5"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-5"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative">
        {/* Heading with animation */}
        <div className="flex justify-start items-center text-red-500 mb-10">
          <h1 className="text-3xl font-bold">Services</h1>
          <Minus size={45} />
        </div>

        {/* Cards Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {CardData.map((card) => (
              <motion.div
                key={card.key}
                variants={cardVariants}
                whileHover="hover"
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${card.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md`} />
                
                <div className="relative h-full bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl dark:hover:shadow-blue-900/20 transition-all duration-300 flex flex-col items-center text-center overflow-hidden">
                  {/* Icon background */}
                  <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${card.color} rounded-full opacity-10 dark:opacity-5`} />
                  
                  {/* Image container with gradient border */}
                  <div className={`relative w-24 h-24 mb-6 rounded-xl bg-gradient-to-br ${card.color} p-1`}>
                    <div className="w-full h-full bg-white dark:bg-[#1a1a1a] rounded-lg flex items-center justify-center p-2">
                      <Image
                        src={card.image}
                        alt={card.title}
                        width={80}
                        height={80}
                        className="object-contain"
                      />
                    </div>
                  </div>
                  
                  {/* Icon with gradient background */}
                  <div className={`w-12 h-12 ${card.hoverColor} bg-gradient-to-br ${card.color} rounded-full flex items-center justify-center mb-4 text-white`}>
                    {card.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-br group-hover:from-blue-500 group-hover:to-purple-600 transition-all duration-300">
                    {card.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                    {card.description}
                  </p>
                  
                  {/* Learn more link */}
                  <div className="mt-auto pt-4">
                    <span className={`text-sm font-medium ${card.hoverColor} bg-gradient-to-br ${card.color} bg-clip-text text-transparent cursor-pointer`}>
                      Learn more →
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}