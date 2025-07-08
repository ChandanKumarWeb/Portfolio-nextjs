"use client";
import React, { useRef } from 'react'
import { Minus } from "lucide-react";
import { Code2, Paintbrush, Cloud, Zap, Wrench, Bug } from "lucide-react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import type { Variants } from "framer-motion";

export default function Services() {
  const CardData = [
    {
      key: 1,
      title: "Web Development",
      description: "Building responsive and dynamic web applications using modern frameworks like React, Next.js, and Angular.",
      icon: <Code2 className="text-blue-600 w-8 h-8" />,
      image: "/Images/WebDev.png",
    },
    {
      key: 2,
      title: "UI/UX Design",
      description: "Creating intuitive and user-friendly interfaces with a focus on clean design and modular architecture.",
      icon: <Paintbrush className="text-pink-500 w-8 h-8" />,
      image: "/Images/UiUx.png",
    },
    {
      key: 3,
      title: "API Integration",
      description: "Integrating third-party APIs to enhance functionality and provide dynamic data handling.",
      icon: <Cloud className="text-green-600 w-8 h-8" />,
      image: "/Images/ApiIntegration.png",
    },
    {
      key: 4,
      title: "Performance Optimization",
      description: "Improving application performance through code optimization, lazy loading, and efficient state management.",
      icon: <Zap className="text-yellow-500 w-8 h-8" />,
      image: "/Images/performance.png",
    },
    {
      key: 5,
      title: "Testing and Debugging",
      description: "Conducting thorough testing and debugging to ensure high-quality, bug-free applications.",
      icon: <Bug className="text-red-500 w-8 h-8" />,
      image: "/Images/Testing.png",
    },
    {
      key: 6,
      title: "Maintenance and Support",
      description: "Providing ongoing maintenance and support to keep your applications running smoothly.",
      icon: <Wrench className="text-blue-600 w-8 h-8" />,
      image: "/Images/Maintenance.png",
    }
  ];

  function chunkCards(cards: typeof CardData) {
    const result: typeof CardData[] = [];
    let i = 0;
    while (i < cards.length) {
      result.push(cards.slice(i, i + 2));
      i += 2;
      if (i < cards.length) {
        result.push(cards.slice(i, i + 1));
        i += 1;
      }
    }
    return result;
  }

  // const cardRows = chunkCards(CardData);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });


  const containerVariants: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.18,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, bounce: 0.6, duration: 0.9 }
    },
  };

  return (
    <section id="servicesSection" className="py-16 px-6 bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-start items-center text-red-400 mb-10">
          <h1 className="text-3xl font-bold">Services</h1>
          <Minus size={45} />
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {CardData.map((card) => (
            <motion.div
              key={card.key}
              variants={cardVariants}
              className="flex flex-col items-center text-center bg-white dark:bg-gray-800 rounded-4xl p-6 shadow-xl dark:shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:dark:shadow-[0_0_30px_rgba(255,255,255,0.3)] cursor-pointer"
            >

              <Image
                src={card.image}
                alt={card.title}
                width={140}
                height={140}
                className="mb-4"
              />
              <div className="mb-2">{card.icon}</div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{card.title}</h2>
              <p className="mt-2 text-gray-700 dark:text-gray-300">{card.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

  );
}