import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar bg-white shadow-md py-4 m-8 rounded-lg w-4xl ml-auto mr-auto">
            <div className="container flex justify-center items-center">
                <ul className="flex gap-8 text-lg font-semibold justify-center items-center">
                    <li>
                        <div className='text-gray-400 hover:text-black'><Link to="/">Home</Link></div>
                    </li>
                    <li>
                        <div className='text-gray-400 hover:text-black'><Link to="/about">About</Link></div>
                    </li>
                    <li>
                        <div className='text-gray-400 hover:text-black'><Link to="/project">Project</Link></div>
                    </li>
                    <li>
                        <div className='text-gray-400 hover:text-black'><Link to="/contact">Contact</Link></div>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;