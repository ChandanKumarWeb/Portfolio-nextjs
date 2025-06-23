"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ModeToggle } from "./ModeToggle";
import MobileToggle from "./MobileToggle";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-gray-900 fixed w-full z-30 top-0 border-b border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2">
            <Image src="/logo.png" width={40} height={40} alt="Logo" />
            <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Port<span className="text-red-600">.folio</span>
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-blue-700 dark:text-blue-500 font-medium hover:underline">
              Home
            </a>
            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
              About
            </a>
            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
              Services
            </a>
            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
              Contact
            </a>
            <ModeToggle />
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition-all duration-200">
              Download CV
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              type="button"
              className="md:hidden p-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <span className="sr-only">Toggle navigation</span>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pt-2 pb-4 space-y-2 bg-white dark:bg-gray-900 shadow-md">
          <a href="#" className="block text-blue-600 dark:text-blue-400 font-medium">
            Home
          </a>
          <a href="#" className="block text-gray-700 dark:text-gray-300">
            About
          </a>
          <a href="#" className="block text-gray-700 dark:text-gray-300">
            Services
          </a>
          <a href="#" className="block text-gray-700 dark:text-gray-300">
            Contact
          </a>
          <MobileToggle />
        </div>
      )}
    </header>
  );
}
