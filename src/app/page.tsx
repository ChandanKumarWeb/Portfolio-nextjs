"use- client";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import Services from "./Components/Services";
export default function Home() {
  return (
    <div>
      <Navbar/>
      <HeroSection />
      <Services />
    </div>
  );
}
