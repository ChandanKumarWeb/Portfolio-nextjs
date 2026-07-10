"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import Image from "next/image";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Yash Pratihasta",
    role: "CEO, Veda Motion Care",
    message:
      "Working with Chandan on the VedaMotion Care project was an amazing experience. He built a clean, responsive UI that perfectly matched our healthcare brand's vision. His attention to detail, quick turnaround, and strong communication made the process smooth and efficient.",
    image: "/Images/Freelancer.png",
    rating: 5,
  },
  {
    name: "Kartik",
    role: "CEO, Avtar Motors",
    message:
      "Chandan did an excellent job developing our Avtar EV Motors website. He created a modern, responsive front-end with smooth animations and perfect attention to branding details. His technical knowledge of Angular and API integration helped us achieve exactly what we needed for a seamless user experience.",
    image: "/Images/Freelancer.png",
    rating: 5,
  },
  {
    name: "Alok Ray",
    role: "Founder, Sankalp Electra Auto Motive",
    message:
      "Chandan did an excellent job developing our Sankalp Electra Auto Motive website. He created a modern, responsive front-end with smooth animations and perfect attention to branding details. His technical knowledge of Angular and API integration helped us achieve exactly what we needed for a seamless user experience.",
    image: "/Images/Freelancer.png",
    rating: 5,
  },
];

export default function Testimonial() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate for infinite scroll
  const allTestimonials = [...testimonials, ...testimonials];

  return (
    <section
      id="testimonials"
      className="py-20 px-4 bg-muted/30 relative overflow-hidden"
    >
      {/* Decorative */}
      <div className="absolute top-10 left-1/4 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-1/4 w-48 h-48 bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">
            What Clients Say
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            Testimonials
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mt-4" />
        </motion.div>

        {/* Scrolling Container */}
        <div
          className="overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div
            className="flex gap-6"
            animate={{
              x: isPaused ? undefined : ["0%", "-50%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }}
            style={{ willChange: "transform" }}
          >
            {allTestimonials.map((t, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[320px] sm:w-[360px]"
              >
                <div className="relative h-full bg-card border border-border rounded-2xl p-6 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                  {/* Quote icon */}
                  <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/10" />

                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, si) => (
                      <Star
                        key={si}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  {/* Message */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-5">
                    &ldquo;{t.message}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 mt-auto">
                    <div className="relative w-11 h-11 rounded-full overflow-hidden ring-2 ring-primary/20">
                      <Image
                        src={t.image}
                        alt={t.name}
                        fill
                        sizes="44px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground">
                        {t.name}
                      </h4>
                      <p className="text-xs text-primary font-medium">
                        {t.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Pause hint */}
        <p className="text-center text-xs text-muted-foreground mt-6">
          Hover to pause • Drag to explore
        </p>
      </div>
    </section>
  );
}
