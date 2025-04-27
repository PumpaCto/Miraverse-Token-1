import React from "react";

const Hero = () => {
  return (
    <section id="home" className="h-screen flex flex-col justify-center items-center text-center">
      <h1 className="text-5xl font-bold mb-4 text-white">
        Welcome to <span className="text-yellow-400">Miraverse</span>
      </h1>
      <p className="text-lg mb-6 text-gray-300">
        The future of crypto, gaming, and anime combined!
      </p>
      <a href="#about" className="px-8 py-3 bg-yellow-400 text-black rounded-full font-semibold">
        Explore
      </a>
    </section>
  );
};

export default Hero;
