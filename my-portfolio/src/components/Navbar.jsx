import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-white shadow-md py-4 px-8 rounded-lg max-w-screen-xl mx-auto" >
            <div className="flex justify-between items-center w-full">

                {/* Left - Logo */}
                <div className="flex-shrink-0 text-black font-extrabold text-3xl tracking-wider">
                    <Link to="/">AK</Link>
                </div>

                {/* Center - Nav Links */}
                <ul className="flex gap-10 text-lg font-medium text-gray-600">
                    {["Home", "About", "Project", "Contact"].map((item, index) => (
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

                {/* Right - Button */}
                <div className="flex-shrink-0">
                    <button className="text-white bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 shadow-md transition-all duration-300 rounded-md px-6 py-2 font-medium">
                        Let's Talk
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
