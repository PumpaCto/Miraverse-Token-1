import React from "react";
import { FaTelegramPlane, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black py-10 text-center text-white border-t border-gray-800">
      <div className="flex justify-center space-x-6 mb-4">
        <a
          href="https://t.me/miraversetoken"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-yellow-400 transition"
        >
          <FaTelegramPlane />
        </a>
        <a
          href="https://twitter.com/miraversetoken"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-yellow-400 transition"
        >
          <FaTwitter />
        </a>
      </div>
      <p className="text-sm text-gray-400">
        © 2025 Miraverse Token. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
