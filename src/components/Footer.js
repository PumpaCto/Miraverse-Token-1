import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 mt-12 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="text-sm text-center md:text-left mb-4 md:mb-0">
          © 2025 Miraverse Token. All rights reserved.
        </div>
        <div className="flex space-x-6">
          <a href="https://t.me/miraversetoken" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
            Telegram
          </a>
          <a href="https://x.com/miraversetoken" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
