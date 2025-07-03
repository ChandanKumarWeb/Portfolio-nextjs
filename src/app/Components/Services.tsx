"use client";
import React, { useRef } from 'react'
import { Minus } from "lucide-react";
import { Code2, Paintbrush, Cloud, Zap, Wrench, Bug } from "lucide-react";
import { motion, useInView } from "framer-motion";
export default function Services() {
    const CardData = [
        {
            key: 1,
            title: "Web Development",
            description: "Building responsive and dynamic web applications using modern frameworks like React, Next.js, and Angular.",
            icon: <Code2 className="text-blue-600 w-8 h-8" />
        },
        {
            key: 2,
            title: "UI/UX Design",
            description: "Creating intuitive and user-friendly interfaces with a focus on clean design and modular architecture.",
            icon: <Paintbrush className="text-pink-500 w-8 h-8" />
        },
        {
            key: 3,
            title: "API Integration",
            description: "Integrating third-party APIs to enhance functionality and provide dynamic data handling.",
            icon: <Cloud className="text-green-600 w-8 h-8" />,
        },
        {
            key: 4,
            title: "Performance Optimization",
            description: "Improving application performance through code optimization, lazy loading, and efficient state management.",
            icon: <Zap className="text-yellow-500 w-8 h-8" />
        }
        , {
            key: 5,
            title: "Testing and Debugging",
            description: "Conducting thorough testing and debugging to ensure high-quality, bug-free applications.",
            icon: <Bug className="text-red-500 w-8 h-8" />
        }
        , {
            key: 6,
            title: "Maintenance and Support",
            description: "Providing ongoing maintenance and support to keep your applications running smoothly.",
            icon: <Wrench className="text-blue-600 w-8 h-8" />
        }

    ]
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring" as const, bounce: 0.6, duration: 0.9 } 
  },
};
 return (
  <section id="servicesSection" className='h-fit my-4'>
    <div className="flex flex-col items-start justify-center w-full h-fit bg-white dark:bg-black px-6">
      <div className="flex justify-start items-center text-red-400">
        <h1 className="text-2xl">Services</h1>
        <Minus size={45} />
      </div>
    </div>
    <motion.div
      ref={ref}
      className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6'
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
    >
      {CardData.map((card) => (
        <motion.div
          key={card.key}
          className="h-56 flex flex-col items-center justify-evenly text-center rounded-4xl bg-white dark:bg-gray-800 drop-shadow-lg dark:drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] p-4"
          variants={cardVariants}
        >
          <div className="text-center w-fit bg-gray-800 dark:bg-blue-50 rounded-full  p-4">{card.icon}</div>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mt-4">{card.title}</h2>
          <p> {card.description} </p>
        </motion.div>
      ))}
    </motion.div>
  </section>
);
}
