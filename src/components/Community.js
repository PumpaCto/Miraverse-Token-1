import React from "react";

const Community = () => {
  return (
    <section id="community" className="py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold mb-12 animate-fadeIn">
          Join the <span className="text-yellow-400">Community</span>
        </h2>
        <p className="text-lg md:text-xl mb-8 animate-fadeIn delay-300">
          Be a part of the future of Miraverse!  
          Follow us, engage, and let's build together.
        </p>
        <div className="flex justify-center space-x-8 animate-fadeIn delay-500">
          <a
            href="https://t.me/miraversetoken"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-800 px-6 py-3 rounded-lg font-semibold text-white transition duration-300"
          >
            Join Telegram
          </a>
          <a
            href="https://twitter.com/miraversetoken"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold text-white transition duration-300"
          >
            Follow Twitter
          </a>
        </div>
      </div>
    </section>
  );
};

export default Community;
