import React from "react";

const Tokenomics = () => {
  return (
    <section id="tokenomics" className="py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold mb-12 animate-fadeIn">
          Tokenomics
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg animate-fadeIn delay-200">
            <h3 className="text-2xl font-semibold text-yellow-400 mb-4">Community</h3>
            <p className="text-lg">50% - Distributed to the community.</p>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg animate-fadeIn delay-400">
            <h3 className="text-2xl font-semibold text-yellow-400 mb-4">Development</h3>
            <p className="text-lg">30% - Project development and ecosystem growth.</p>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg animate-fadeIn delay-600">
            <h3 className="text-2xl font-semibold text-yellow-400 mb-4">Marketing</h3>
            <p className="text-lg">20% - Marketing, promotions, and partnerships.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
