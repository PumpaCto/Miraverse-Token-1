import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import RoadmapPage from "./pages/Roadmap";
import Community from "./pages/Community";
import Faq from "./pages/Faq";
import Gallery from "./pages/Gallery";
import ComingSoon from "./pages/ComingSoon";

const App = () => {
  return (
    <Router>
      <div className="bg-black min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/roadmap" element={<RoadmapPage />} />
          <Route path="/community" element={<Community />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/comingsoon" element={<ComingSoon />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
