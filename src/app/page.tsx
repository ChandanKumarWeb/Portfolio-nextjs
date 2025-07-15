"use- client";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import Services from "./Components/Services";
import Projects from "./Components/Projects";
import SkillsSection from "./Components/Skills";
export default function Home() {
  return (
    <div>
      <Navbar/>
      <HeroSection />
      <Services />
      <Projects />
      <SkillsSection/>
    </div>
  );
}
