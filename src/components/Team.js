import React from "react";

const Team = () => {
  return (
    <section id="team" className="py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold mb-12 animate-fadeIn">
          The Team
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg animate-fadeIn delay-200">
            <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gray-600"></div>
            <h3 className="text-2xl font-semibold text-yellow-400 mb-2">Mr. X</h3>
            <p className="text-lg">Founder - The visionary behind Miraverse.</p>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg animate-fadeIn delay-400">
            <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gray-600"></div>
            <h3 className="text-2xl font-semibold text-yellow-400 mb-2">Ms. Y</h3>
            <p className="text-lg">Lead Developer - Architect of innovation.</p>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg animate-fadeIn delay-600">
            <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gray-600"></div>
            <h3 className="text-2xl font-semibold text-yellow-400 mb-2">Mr. Z</h3>
            <p className="text-lg">Marketing Wizard - Creator of buzz and hype.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
