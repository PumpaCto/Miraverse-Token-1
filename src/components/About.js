import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-black text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 animate-fadeIn">
          About <span className="text-yellow-400">Miraverse</span>
        </h2>
        <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto animate-fadeIn delay-300">
          Miraverse Token is your gateway to a revolutionary universe where crypto innovation and gaming converge. Join our vibrant community to explore limitless possibilities, powered by decentralization and creativity.
        </p>
      </div>
    </section>
  );
};

export default About;
