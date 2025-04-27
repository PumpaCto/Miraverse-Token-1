import React from "react";
import Footer from "../components/Footer";
import ScrollToTopButton from "../components/ScrollToTopButton";
import GalaxyBackground from "../components/GalaxyBackground";

const About = () => {
  return (
    <div className="relative overflow-hidden bg-black text-white min-h-screen">
      <GalaxyBackground />
      <section className="py-20 px-4 text-center">
        <h1 className="text-5xl font-bold mb-8 animate-fadeIn">
          About <span className="text-yellow-400">Miraverse</span>
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto animate-fadeIn delay-300">
          Miraverse Token is a cosmic journey through the world of blockchain, gaming, and decentralized innovation.
          Our mission is to unite communities and build the future of interactive decentralized experiences.
        </p>
      </section>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default About;
