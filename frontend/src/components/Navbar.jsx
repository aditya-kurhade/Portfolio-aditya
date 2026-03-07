import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { FiHome, FiUser, FiFolder, FiMail } from "react-icons/fi"; // ✅ Feather Icons
import { FaTrophy } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/", icon: <FiHome className="inline mr-2" /> },
    { name: "About", path: "/about", icon: <FiUser className="inline mr-2" /> },
    { name: "Project", path: "/project", icon: <FiFolder className="inline mr-2" /> },
    { name: "Milestones", path: "/milestones", icon: <FaTrophy className="inline mr-2 text-yellow-500" /> },
    { name: "Contact", path: "/contact", icon: <FiMail className="inline mr-2" /> },
  ];

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-sm border border-gray-100 px-4 sm:px-8 rounded-xl max-w-screen-xl mx-auto">
      <div className="flex justify-between items-center w-full">

        {/* Left - Logo */}
        <div className="flex-shrink-0 text-black font-extrabold text-3xl tracking-wider">
          <Link to="/">
            <img
              src="https://res.cloudinary.com/dbd5zow1e/image/upload/v1754757199/Untitled_design_1_uldlee.png"
              alt="Logo"
              title="Aditya's Portfolio"
              loading="lazy"
              className="w-16 h-16 sm:w-20 sm:h-20"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-lg font-medium">
          {navLinks.map((item, index) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={index}>
                <Link
                  to={item.path}
                  className={`relative transition-colors duration-200 group flex items-center 
                    ${
                      isActive
                        ? "text-blue-700 font-semibold"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                >
                  {item.icon} {item.name}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300 
                    ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                  ></span>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <Link to="/contact">
            <button className="text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 shadow-md hover:shadow-lg transition-all duration-300 rounded-lg px-6 py-2 font-medium">
              Let's Talk
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 text-gray-700 font-medium">
          {navLinks.map((item, index) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={index}
                to={item.path}
                className={`flex items-center transition-colors duration-200 ${
                  isActive ? "text-blue-700 font-semibold" : "text-slate-600 hover:text-slate-900"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.icon} {item.name}
              </Link>
            );
          })}
          <Link to="/contact" onClick={() => setIsOpen(false)}>
            <button className="w-full text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 shadow-md hover:shadow-lg transition-all duration-300 rounded-lg px-6 py-2 font-medium">
              Let's Talk
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
