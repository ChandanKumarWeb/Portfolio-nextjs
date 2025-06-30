"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Minus } from "lucide-react";

export default function HeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="heroSection"
      className="bg-white dark:bg-black mt-16 md:mt-4 px-2 h-screen flex items-center"
    >
      <div className="flex flex-col md:flex-row justify-around items-center w-full h-full">
        {/* Left Text Section */}
        <motion.div
          className="w-full md:w-2/5 px-4 p-2 order-2 md:order-1"
          ref={ref}
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{
            duration: 0.4,
            scale: { type: "spring", bounce: 0.5 },
          }}
        >
          <div className="flex items-center text-red-400">
            <h1 className="text-2xl">Intro</h1>
            <Minus size={45} />
          </div>
          <h1 className="text-gray-900 dark:text-red-200 text-3xl mb-0">Hello.</h1>
          <h1 className="text-3xl md:text-6xl text-gray-900 dark:text-red-200  ml-12 md:ml-18">
            It&apos;s  Chandan Kumar
          </h1>
          <p className="ml-12 mt-4 md:ml-18 w-4/5 text-gray-900 dark:text-gray-200 ">
            Front-end developer with hands-on experience in React, Next.js, and Angular.
            Skilled in building responsive UIs using Angular Material, Bootstrap, and Tailwind CSS.
            Proficient in API integration, dynamic data handling, permission-based UI, and report generation.
            Passionate about clean design, modular architecture, and delivering intuitive user experiences.
          </p>
          <div className="ml-12 md:ml-18 mt-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition-all duration-200">
              Contact Me
            </button>
          </div>
          <div className="flex items-center justify-evenly mt-8">
            <div className="flex flex-col gap-2 text-black dark:text-white">
              <h1 className="text-3xl md:text-6xl">10+</h1>
              <p className="text-xl md:text-3xl font-bold">Projects</p>
            </div>
            <div className="flex flex-col gap-2 text-black dark:text-white">
              <h1 className="text-3xl md:text-6xl">1+</h1>
              <p className="text-xl md:text-3xl font-bold">Experience</p>
            </div>
            <div className="flex flex-col gap-2 text-black dark:text-white">
              <h1 className="text-3xl md:text-6xl">3</h1>
              <p className="text-xl md:text-3xl font-bold">Clients</p>
            </div>
          </div>
        </motion.div>

        {/* Right Visual Section */}
        <motion.div
          className="w-full md:w-3/5 p-2 flex justify-center items-center order-1 md:order-2"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            scale: { type: "spring", bounce: 0.5 },
          }}
        >
          <div className="relative w-80 h-80 md:w-[500px] md:h-[500px]">
            {/* Gradient Ring */}
            <div className="w-full h-full rounded-full bg-gradient-to-tr from-green-400 to-emerald-400 relative flex items-center justify-center">
              {/* Inner cutout */}
              <div className="absolute w-[70%] h-[70%] bg-[#121212] rounded-full z-10" />

              {/* Skill Bubbles */}
              <div className="absolute w-14 h-14  bg-[#1e1e1e] text-green-300 rounded-full flex items-center justify-center font-semibold z-20 top-3 left-3 md:top-16">
                Next.js
              </div>
              <div className="absolute w-14 h-14   bg-[#1e1e1e] text-green-300 rounded-full flex items-center justify-center font-semibold z-20 top-3 right-3 md:top-16">
                Tailwind
              </div>
              <div className="absolute w-14 h-14   bg-[#1e1e1e] text-green-300 rounded-full flex items-center justify-center font-semibold z-20 bottom-3 left-3 md:bottom-16">
                Ai
              </div>
              <div className="absolute w-14 h-14  bg-[#1e1e1e] text-green-300 rounded-full flex items-center justify-center font-semibold z-20 bottom-3 right-3 md:bottom-16">
                GitHub
              </div>
            </div>

            {/* Image */}
            <Image
              src="/Images/Freelancer.png"
              alt="Freelancer"
              width={500}
              height={500}
              className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 w-48 md:w-96"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
