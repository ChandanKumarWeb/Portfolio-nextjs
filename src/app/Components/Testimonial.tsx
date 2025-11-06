"use client";

import React, { useState } from "react";
import { Minus } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    name: "Yash Pratihasta",
    role: "CEO, Veda Motion Care",
    message:
      "Working with Chandan on the VedaMotion Care project was an amazing experience. He built a clean, responsive UI that perfectly matched our healthcare brand’s vision. His attention to detail, quick turnaround, and strong communication made the process smooth and efficient.",
    image: "/Images/Freelancer.png",
  },
  {
    name: "Kartik",
    role: "CEO, Avtar Motors",
    message:
      "Chandan did an excellent job developing our Avtar EV Motors website. He created a modern, responsive front-end with smooth animations and perfect attention to branding details. His technical knowledge of Angular and API integration helped us achieve exactly what we needed for a seamless user experience.",
    image: "/Images/Freelancer.png",
  },
  {
    name: "Alok Ray",
    role: "Founder, Sankalp Electra Auto Motive",
    message:
      "Chandan did an excellent job developing our Avtar EV Motors website. He created a modern, responsive front-end with smooth animations and perfect attention to branding details. His technical knowledge of Angular and API integration helped us achieve exactly what we needed for a seamless user experience.",
    image: "/Images/Freelancer.png",
  },
];


export default function Testimonial() {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    return (
        <section
            id="testimonials"
            className="bg-white dark:bg-[#0d0d0d] py-20 px-6 overflow-x-hidden"
        >
            <div className="max-w-6xl mx-auto text-center">
                {/* Section Header */}
                <div className="flex justify-start items-center text-red-500 mb-12">
                    <h2 className="text-3xl font-bold">Testimonials</h2>
                    <Minus size={45} />
                </div>

                {/* Auto-Scrolling Container */}
                <div className="w-full overflow-x-auto overflow-y-hidden">
                    <motion.div
                        className="flex gap-6"
                        initial={{ x: 0 }}
                        animate={{ x: [0, -1000] }}
                        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
                    >

                        {testimonials.concat(testimonials).map((t, i) => {
                            const isExpanded = expandedIndex === i;
                            const shortMessage = `${t.message.slice(0, 140)}...`;

                            return (
                                <motion.div
                                    key={i}
                                    className="bg-white dark:bg-[#1c1c1c] border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md p-6 min-w-[280px] max-w-xs flex-shrink-0 flex flex-col items-center text-center hover:shadow-xl transition duration-300 overflow-hidden"
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: i * 0.2 }}
                                >
                                    <Image
                                        src={t.image}
                                        alt={t.name}
                                        width={80}
                                        height={80}
                                        className="rounded-full mb-4 border-4 border-blue-500 shadow-md object-cover"
                                    />
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                        {t.name}
                                    </h3>
                                    <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-3">
                                        {t.role}
                                    </p>
                                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed break-words w-full max-w-xs">
                                        {isExpanded ? t.message : shortMessage}
                                        {t.message.length > 140 && (
                                            <span
                                                className="text-blue-500 cursor-pointer underline ml-1"
                                                onClick={() => setExpandedIndex(isExpanded ? null : i)}
                                            >
                                                {isExpanded ? "Show less" : "Read more"}
                                            </span>
                                        )}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
