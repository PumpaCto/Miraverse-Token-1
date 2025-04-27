import React from "react";
import Footer from "../components/Footer";
import ScrollToTopButton from "../components/ScrollToTopButton";
import GalaxyBackground from "../components/GalaxyBackground";

const ComingSoon = () => {
  return (
    <div className="relative overflow-hidden bg-black text-white min-h-screen flex flex-col justify-center items-center text-center">
      <GalaxyBackground />
      <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fadeIn">
        Coming <span className="text-yellow-400">Soon</span>!
      </h1>
      <p className="text-lg md:text-2xl max-w-2xl animate-fadeIn delay-300">
        Exciting things are on the way. Stay tuned for updates as we build the Miraverse universe!
      </p>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default ComingSoon;
