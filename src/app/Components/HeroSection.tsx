"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Minus } from "lucide-react";
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';

export default function HeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="heroSection"
      className="bg-white dark:bg-[#0b0b0b] mt-16 md:mt-20 px-4 py-10 md:py-20 h-fit flex items-center"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center w-full max-w-7xl mx-auto gap-10">
        {/* Left Text Section */}
        <motion.div
          className="w-full md:w-1/2 px-4 order-2 md:order-1"
          ref={ref}
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="flex items-center text-red-500 mb-4">
            <h1 className="text-2xl font-semibold">Intro</h1>
            <Minus size={45} />
          </div>

          <h1 className="text-gray-900 dark:text-white text-3xl md:text-4xl font-bold mb-2">Hello.</h1>
          <h2 className="text-3xl md:text-6xl text-blue-600 dark:text-red-300 font-extrabold mb-4">
            I&apos;m Chandan Kumar
          </h2>

          <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed mb-6">
            Front-end developer with expertise in React, Next.js, and Angular. I build responsive UIs using Angular Material, Bootstrap, and Tailwind CSS. Skilled in API integration, dynamic data handling, permission-based UI, and report generation. Passionate about clean design and intuitive UX.
          </p>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md transition duration-300 text-sm">
            Contact Me
          </button>

          {/* Stats */}
          <div className="flex flex-wrap gap-6 mt-8 text-center">
            {[
              { number: "10+", label: "Projects" },
              { number: "1+", label: "Years Exp" },
              { number: "3", label: "Clients" },
            ].map(({ number, label }, i) => (
              <div key={i} className="text-black dark:text-white">
                <h3 className="text-4xl md:text-5xl font-bold">{number}</h3>
                <p className="text-lg md:text-xl font-medium">{label}</p>
              </div>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 mt-8">
            <a href="https://instagram.com/iamchandankumar__" target="_blank" className="hover:text-pink-500 text-gray-700 dark:text-white">
              <FaInstagram className="w-7 h-7" />
            </a>
            <a href="https://linkedin.com/in/chandan-d" target="_blank" className="hover:text-blue-600 text-gray-700 dark:text-white">
              <FaLinkedinIn className="w-7 h-7" />
            </a>
            <a href="https://wa.me/8257060642" target="_blank" className="hover:text-green-500 text-gray-700 dark:text-white">
              <FaWhatsapp className="w-7 h-7" />
            </a>
          </div>
        </motion.div>

        {/* Right Image Section */}
        <motion.div
          className="w-full md:w-1/2 order-1 md:order-2 flex justify-center items-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="relative w-80 h-80 md:w-[450px] md:h-[450px] animate-glowRing">
            {/* Glowing Gradient Ring */}
            <div className="w-full h-full rounded-full bg-gradient-to-br from-green-400 via-emerald-500 to-teal-400 relative flex items-center justify-center shadow-xl animate-pulse-slow">
              {/* Inner Dark Circle */}
              <div className="absolute w-[70%] h-[70%] bg-[#121212] rounded-full z-10" />

              {/* Floating Skill Bubbles */}
              {[
                { label: "Next.js", pos: "top-4 left-4 md:top-14 md:left-10", delay: 0 },
                { label: "Tailwind", pos: "top-4 right-4 md:top-14 md:right-10", delay: 0.2 },
                { label: "AI", pos: "bottom-4 left-4 md:bottom-14 md:left-10", delay: 0.4 },
                { label: "GitHub", pos: "bottom-4 right-4 md:bottom-14 md:right-10", delay: 0.6 },
              ].map(({ label, pos, delay }, i) => (
                <motion.div
                  key={i}
                  className={`absolute ${pos} w-14 h-14 bg-[#1e1e1e] text-green-300 rounded-full flex items-center justify-center text-sm font-semibold z-20 shadow-lg`}
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "loop",
                    delay,
                  }}
                >
                  {label}
                </motion.div>
              ))}
            </div>

            {/* Floating Freelancer Image */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
              className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 w-48 md:w-80"
            >
              <Image
                src="/Images/Freelancer.png"
                alt="Freelancer"
                width={500}
                height={500}
                className="rounded-full drop-shadow-lg"
              />
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>

  );
}
