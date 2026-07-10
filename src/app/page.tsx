"use client";
import AboutSection from "./Components/AboutSection";
import ContactForm from "./Components/ContactForm";
import Experience from "./Components/Experience";
import Footer from "./Components/Footer";
import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Services from "./Components/Services";
import SkillsSection from "./Components/Skills";
import Testimonial from "./Components/Testimonial";

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <Services />
      <Projects />
      <SkillsSection />
      <Experience />
      <Testimonial />
      <ContactForm />
      <Footer />
    </div>
  );
}
