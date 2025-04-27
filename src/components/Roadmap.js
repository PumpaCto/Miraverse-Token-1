import React from "react";

const Roadmap = () => {
  return (
    <section id="roadmap" className="py-20 px-4 bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 animate-fadeIn">
          Our <span className="text-yellow-400">Roadmap</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg animate-fadeIn delay-300">
            <h3 className="text-2xl font-semibold mb-4 text-yellow-400">Phase 1 - Launch</h3>
            <ul className="list-disc list-inside text-lg space-y-2">
              <li>Token Release</li>
              <li>Website Launch</li>
              <li>Initial Marketing</li>
            </ul>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg animate-fadeIn delay-500">
            <h3 className="text-2xl font-semibold mb-4 text-yellow-400">Phase 2 - Community Growth</h3>
            <ul className="list-disc list-inside text-lg space-y-2">
              <li>Expanding Social Media</li>
              <li>Partnerships</li>
              <li>Early Community Rewards</li>
            </ul>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg animate-fadeIn delay-700">
            <h3 className="text-2xl font-semibold mb-4 text-yellow-400">Phase 3 - Ecosystem Expansion</h3>
            <ul className="list-disc list-inside text-lg space-y-2">
              <li>Game Development Start</li>
              <li>NFT Integrations</li>
              <li>Staking Platform Launch</li>
            </ul>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg animate-fadeIn delay-900">
            <h3 className="text-2xl font-semibold mb-4 text-yellow-400">Phase 4 - Miraverse Launch</h3>
            <ul className="list-disc list-inside text-lg space-y-2">
              <li>Major CEX Listings</li>
              <li>Global Marketing Campaign</li>
              <li>Full Platform Release</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
