"use client";

import React from "react";
import { FaInstagram, FaLinkedinIn, FaWhatsapp, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    {
      icon: <FaInstagram className="w-5 h-5" />,
      href: "https://instagram.com/iamchandankumar__",
      color: "hover:text-pink-500",
      bg: "hover:bg-pink-500/10",
      tooltip: "Instagram"
    },
    {
      icon: <FaLinkedinIn className="w-5 h-5" />,
      href: "https://linkedin.com/in/chandan-d",
      color: "hover:text-blue-500",
      bg: "hover:bg-blue-500/10",
      tooltip: "LinkedIn"
    },
    {
      icon: <FaWhatsapp className="w-5 h-5" />,
      href: "https://wa.me/8257060642",
      color: "hover:text-green-500",
      bg: "hover:bg-green-500/10",
      tooltip: "WhatsApp"
    },
    {
      icon: <FaGithub className="w-5 h-5" />,
      href: "https://github.com/ChandanKumarWeb",
      color: "hover:text-gray-800 dark:hover:text-white",
      bg: "hover:bg-gray-500/10 dark:hover:bg-gray-400/10",
      tooltip: "GitHub"
    }
  ];

  const quickLinks = [
    { name: "Home", href: "#heroSection" },
    { name: "Services", href: "#servicesSection" },
    { name: "Projects", href: "#projectsSection" },
    { name: "Skills", href: "#skillsSection" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contactSection" }
  ];

  return (
    <footer className="relative overflow-hidden  bg-white dark:bg-black text-gray-800 dark:text-white pt-20 pb-12 px-4 mt-24 border-t border-gray-200 dark:border-gray-800">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-1/4 w-32 h-32 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-5"></div>
        <div className="absolute bottom-20 right-1/3 w-40 h-40 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-5"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand & Socials */}
          <div className="text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center md:justify-start gap-2 mb-3"
            >
              <Sparkles className="text-blue-500 w-5 h-5" />
              <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                Chandan Kumar
              </h2>
            </motion.div>
            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xs mx-auto md:mx-0">
              Crafting exceptional digital experiences with modern web technologies
            </p>
            
            <div className="flex justify-center md:justify-start gap-4 mt-6">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-full transition-all ${link.color} ${link.bg} relative group`}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  {link.icon}
                  <span className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 text-xs bg-gray-800 text-white dark:bg-white dark:text-gray-900 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {link.tooltip}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <motion.h3 
              className="text-lg font-semibold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Explore
            </motion.h3>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.05, duration: 0.3 }}
                >
                  <a 
                    href={link.href} 
                    className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center justify-center md:justify-start gap-1"
                  >
                    <span className="w-1 h-1 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <motion.h3 
              className="text-lg font-semibold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Contact
            </motion.h3>
            <motion.div 
              className="space-y-2 text-sm text-gray-600 dark:text-gray-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <p>Jaipur, India</p>
              <a href="mailto:chandan42kumar55@gmail.com" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors block">
                chandan42kumar55@gmail.com
              </a>
              <a href="tel:+918257060642" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors block">
                +91 8257060642
              </a>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center md:text-left"
          >
            <h4 className="text-lg font-semibold mb-3">Let&apos;s collaborate</h4>
            <p className="text-sm mb-4 text-gray-600 dark:text-gray-400">
              Have a project in mind? Let&apos;s discuss how I can help bring your ideas to life.
            </p>
            <motion.a
              href="mailto:chandan42kumar55@gmail.com"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-2.5 px-6 rounded-full text-sm transition-all shadow-lg hover:shadow-xl"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get in touch
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </motion.a>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div 
          className="mt-16 text-center text-xs text-gray-500 dark:text-gray-400 flex flex-col items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="w-24 h-px bg-gray-300 dark:bg-gray-700 mb-4"></div>
          <p>
            &copy; {new Date().getFullYear()} Chandan Kumar. All rights reserved.
          </p>
          <p className="mt-1">
            Crafted with <span className="text-red-500">♥</span> in India
          </p>
        </motion.div>
      </div>
    </footer>
  );
}