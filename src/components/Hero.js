import React from "react";

const Hero = () => {
  return (
    <section id="home" className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black via-gray-900 to-black text-center px-6">
      <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fadeIn">
        Welcome to <span className="text-yellow-400">Miraverse</span>
      </h1>
      <p className="text-lg md:text-2xl mb-8 max-w-3xl animate-fadeIn delay-300">
        The new era of decentralized anime, gaming and crypto adventure.
      </p>
      <a
        href="#about"
        className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-4 rounded-full text-lg font-semibold transition duration-300 animate-fadeIn delay-500"
      >
        Explore
      </a>
    </section>
  );
};

export default Hero;
