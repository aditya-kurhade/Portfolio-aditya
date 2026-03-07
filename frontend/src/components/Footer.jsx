import React from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-white/80 backdrop-blur-md text-slate-700 px-6 py-6 mt-10 border-t border-gray-100 shadow-sm">
      <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Left - Small Tagline */}
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} <span className="font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Aditya Kurhade</span> · Crafted with <span className="text-red-500">♥</span>
        </p>

        {/* Right - Social Links */}
        <div className="flex gap-5 text-xl">
          <a
            href="https://github.com/aditya-kurhade"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-slate-900 transition-all duration-300 transform hover:scale-110 hover:-translate-y-0.5"
          >
            <FiGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/aditya-kurhade/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-blue-600 transition-all duration-300 transform hover:scale-110 hover:-translate-y-0.5"
          >
            <FiLinkedin />
          </a>
          <a
            href="mailto:adityakurhade1000@gmail.com"
            className="text-slate-500 hover:text-red-500 transition-all duration-300 transform hover:scale-110 hover:-translate-y-0.5"
          >
            <FiMail />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
