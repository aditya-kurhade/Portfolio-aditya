import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ["Home", "About", "Project", "Contact"];

  return (
    <nav className="bg-white shadow-md px-4 sm:px-8 rounded-lg max-w-screen-xl mx-auto">
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
        <ul className="hidden md:flex gap-8 text-lg font-medium text-gray-600">
          {navLinks.map((item, index) => (
            <li key={index}>
              <Link
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="relative hover:text-black transition-colors duration-200 group"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <Link to="/contact">
            <button className="text-white bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 shadow-md transition-all duration-300 rounded-md px-6 py-2 font-medium">
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
          {navLinks.map((item, index) => (
            <Link
              key={index}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="hover:text-blue-500"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </Link>
          ))}
          <Link to="/contact" onClick={() => setIsOpen(false)}>
            <button className="w-full text-white bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 shadow-md transition-all duration-300 rounded-md px-6 py-2 font-medium">
              Let's Talk
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
