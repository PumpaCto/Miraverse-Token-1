import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Roadmap from "./components/Roadmap";
import Tokenomics from "./components/Tokenomics";
import Team from "./components/Team";
import Community from "./components/Community";
import Footer from "./components/Footer";
import "./index.css";
import "./styles/animations.css";

const App = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    });

    document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className="bg-black text-white overflow-x-hidden min-h-screen">
      <Navbar />
      <main className="pt-20 space-y-20">
        <Hero />
        <About />
        <Roadmap />
        <Tokenomics />
        <Team />
        <Community />
      </main>
      <Footer />
    </div>
  );
};

export default App;
