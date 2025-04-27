import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Roadmap from "../components/Roadmap";
import Footer from "../components/Footer";
import ScrollToTopButton from "../components/ScrollToTopButton";
import GalaxyBackground from "../components/GalaxyBackground";

const Home = () => {
  return (
    <div className="relative overflow-hidden bg-black text-white min-h-screen">
      <GalaxyBackground />
      <Hero />
      <About />
      <Roadmap />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Home;
