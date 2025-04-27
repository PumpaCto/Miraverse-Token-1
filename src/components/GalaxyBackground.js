import React from "react";

const GalaxyBackground = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-0 overflow-hidden pointer-events-none">
      <div className="absolute w-72 h-72 bg-gradient-to-br from-blue-500 to-purple-700 opacity-30 rounded-full animate-pulse -top-10 -left-10 blur-3xl"></div>
      <div className="absolute w-96 h-96 bg-gradient-to-tr from-yellow-500 to-pink-600 opacity-20 rounded-full animate-pulse top-1/2 left-1/3 blur-3xl"></div>
      <div className="absolute w-60 h-60 bg-gradient-to-bl from-cyan-400 to-indigo-600 opacity-25 rounded-full animate-pulse bottom-0 right-0 blur-3xl"></div>
    </div>
  );
};

export default GalaxyBackground;
