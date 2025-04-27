import React from "react";
import Footer from "../components/Footer";
import ScrollToTopButton from "../components/ScrollToTopButton";
import GalaxyBackground from "../components/GalaxyBackground";

const Faq = () => {
  return (
    <div className="relative overflow-hidden bg-black text-white min-h-screen">
      <GalaxyBackground />
      <section className="py-20 px-4 text-center">
        <h1 className="text-5xl font-bold mb-8 animate-fadeIn">
          <span className="text-yellow-400">FAQ</span> - Frequently Asked Questions
        </h1>
        <div className="max-w-4xl mx-auto space-y-8 text-left">
          <div className="animate-fadeIn delay-300">
            <h2 className="text-2xl font-semibold mb-2 text-yellow-400">What is Miraverse Token?</h2>
            <p className="text-lg">Miraverse Token is the native token of the Miraverse ecosystem, powering games, NFT marketplaces, and community rewards.</p>
          </div>
          <div className="animate-fadeIn delay-500">
            <h2 className="text-2xl font-semibold mb-2 text-yellow-400">How can I buy Miraverse Token?</h2>
            <p className="text-lg">You will be able to purchase Miraverse Token through supported decentralized exchanges after launch.</p>
          </div>
          <div className="animate-fadeIn delay-700">
            <h2 className="text-2xl font-semibold mb-2 text-yellow-400">What are the future plans?</h2>
            <p className="text-lg">Our roadmap includes Play-to-Earn gaming, NFT integrations, staking rewards, and major partnerships with gaming studios.</p>
          </div>
        </div>
      </section>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Faq;
