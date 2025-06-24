"use client";
import React from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
function HeroSection() {
    const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
    return (
        <div>
            <section id="heroSection" className="bg-white dark:bg-black mt-16 lg:mt-16 px-2">
                <div className="flex flex-col md:flex-row justify-around">
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 }: {}}
                        transition={{
                            duration: 0.4,
                            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                        }}
                    >
                        <h1 className="font-condensed text-red-400 text-3xl mb-0 ">Hello.</h1>
                        <h1 className="font-condensed text-4xl text-red-200 ml-12 md:ml-18">It's Chandan Kumar</h1>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.4,
                            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                        }}
                    >
                        <Image
                            src="/Images/Freelancer.png"
                            alt="Freelancer"
                            width={500}
                            height={500}
                        />
                    </motion.div>
                </div>

            </section>
        </div>
    );
}

export default HeroSection;