"use- client";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import Services from "./Components/Services";
import Projects from "./Components/Projects";
import SkillsSection from "./Components/Skills";
import Testimonial from "./Components/Testimonial";
import Footer from "./Components/Footer";
import ContactForm from "./Components/ContactForm";
export default function Home() {
  return (
    <div>
      <Navbar/>
      <HeroSection />
      <Services />
      <Projects />
      <SkillsSection/>
      <Testimonial/>
      <ContactForm/>
      <Footer/>
    </div>
  );
}
