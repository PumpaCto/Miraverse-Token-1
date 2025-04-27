import React from "react";
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
  return (
    <div className="bg-black text-white overflow-x-hidden">
      <Navbar />
      <main className="pt-20">
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
