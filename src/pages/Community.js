import React from "react";
import Footer from "../components/Footer";
import ScrollToTopButton from "../components/ScrollToTopButton";
import GalaxyBackground from "../components/GalaxyBackground";

const Community = () => {
  return (
    <div className="relative overflow-hidden bg-black text-white min-h-screen">
      <GalaxyBackground />
      <section className="py-20 px-4 text-center">
        <h1 className="text-5xl font-bold mb-8 animate-fadeIn">
          Join the <span className="text-yellow-400">Miraverse Community</span>
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto animate-fadeIn delay-300">
          Be a part of our growing family! Follow us on Telegram and Twitter to stay updated on the latest news, events, and special rewards.
        </p>
        <div className="mt-8 flex justify-center space-x-6 animate-fadeIn delay-500">
          <a
            href="https://t.me/miraversetoken"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-6 rounded-full transition-all"
          >
            Telegram
          </a>
          <a
            href="https://x.com/miraversetoken"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-6 rounded-full transition-all"
          >
            Twitter
          </a>
        </div>
      </section>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Community;
