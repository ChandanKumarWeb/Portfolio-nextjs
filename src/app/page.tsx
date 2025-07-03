"use- client";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import Services from "./Components/Services";
import Projects from "./Components/Projects";
export default function Home() {
  return (
    <div>
      <Navbar/>
      <HeroSection />
      <Services />
      <Projects />
    </div>
  );
}
