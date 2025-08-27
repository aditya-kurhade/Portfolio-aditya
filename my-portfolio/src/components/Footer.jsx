import React from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 px-6 py-6 mt-10 border-t border-gray-200 shadow-sm">
      <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Left - Small Tagline */}
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Aditya Kurhade · Crafted with <span className="text-red-500">♥</span>
        </p>

        {/* Right - Social Links */}
        <div className="flex gap-5 text-xl">
          <a
            href="https://github.com/aditya-kurhade"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 transition transform hover:scale-110"
          >
            <FiGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/aditya-kurhade/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition transform hover:scale-110"
          >
            <FiLinkedin />
          </a>
          <a
            href="mailto:adityakurhade1000@gmail.com"
            className="hover:text-red-500 transition transform hover:scale-110"
          >
            <FiMail />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
