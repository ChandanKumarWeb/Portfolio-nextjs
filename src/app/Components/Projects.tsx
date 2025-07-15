"use client";
import { Minus } from "lucide-react";
import { motion } from "framer-motion";

const projectData = [
  { title: "Project One", image: "/your-image-1.png" },
  { title: "Project Two", image: "/your-image-2.png" },
  { title: "Project Three", image: "/your-image-3.png" },
  { title: "Project Four", image: "/your-image-4.png" },
];

export default function Projects() {
  return (
    <section id="projectsSection" className="h-fit py-16 px-4 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex justify-start items-center text-red-500 mb-10">
          <h1 className="text-3xl font-bold">Projects</h1>
          <Minus size={45} />
        </div>

        {/* Grid of Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ rotateX: 5, rotateY: -5, scale: 1.03 }}
              className="bg-white/90 dark:bg-white/10 backdrop-blur-sm shadow-xl rounded-xl overflow-hidden cursor-pointer transform transition-transform duration-300 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="h-52 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Info */}
              <div className="p-4 text-left">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{project.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 line-clamp-2">
                  {/* Placeholder description */}
                  Add a short description here about the project or tech used.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
