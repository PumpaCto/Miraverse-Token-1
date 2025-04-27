import React from "react";

const Hero = () => {
  return (
    <section className="text-center py-20 px-4 bg-gradient-to-b from-black via-gray-900 to-black min-h-screen flex flex-col justify-center items-center text-white">
      <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fadeIn">
        Welcome to <span className="text-yellow-400">Miraverse Token</span>
      </h1>
      <p className="text-lg md:text-2xl mb-6 max-w-2xl animate-fadeIn delay-300">
        Explore the infinite possibilities of decentralized crypto and gaming!
      </p>
      <a href="#about" className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-8 rounded-full transition-all animate-fadeIn delay-500">
        Learn More
      </a>
    </section>
  );
};

export default Hero;
