import React from "react";
import Footer from "../components/Footer";
import ScrollToTopButton from "../components/ScrollToTopButton";
import GalaxyBackground from "../components/GalaxyBackground";
import Roadmap from "../components/Roadmap";

const RoadmapPage = () => {
  return (
    <div className="relative overflow-hidden bg-black text-white min-h-screen">
      <GalaxyBackground />
      <section className="py-20 px-4 text-center">
        <h1 className="text-5xl font-bold mb-8 animate-fadeIn">
          Our <span className="text-yellow-400">Journey</span>
        </h1>
        <Roadmap />
      </section>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default RoadmapPage;
