"use client";
import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react"; // or use any icon you prefer

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 p-3 rounded-full bg-red-500 text-white shadow-lg transition-all duration-300 hover:bg-red-600 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      aria-label="Scroll to top"
    >
      <ChevronUp className="w-5 h-5" />
    </button>
  );
}
