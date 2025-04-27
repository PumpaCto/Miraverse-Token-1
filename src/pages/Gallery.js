import React from "react";
import Footer from "../components/Footer";
import ScrollToTopButton from "../components/ScrollToTopButton";
import GalaxyBackground from "../components/GalaxyBackground";

const Gallery = () => {
  return (
    <div className="relative overflow-hidden bg-black text-white min-h-screen">
      <GalaxyBackground />
      <section className="py-20 px-4 text-center">
        <h1 className="text-5xl font-bold mb-8 animate-fadeIn">
          Miraverse <span className="text-yellow-400">Gallery</span>
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto animate-fadeIn delay-300">
          Explore stunning artworks, concept designs, and visuals from the Miraverse universe.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 animate-fadeIn delay-500">
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <img src="/gallery1.png" alt="Artwork 1" className="rounded-md" />
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <img src="/gallery2.png" alt="Artwork 2" className="rounded-md" />
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <img src="/gallery3.png" alt="Artwork 3" className="rounded-md" />
          </div>
        </div>
      </section>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Gallery;
