import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar bg-white shadow-md py-4 m-8 rounded-lg w-6xl ml-auto mr-auto">
            <div className="container flex justify-center items-center">
                <ul className="flex gap-8 text-lg font-semibold justify-center items-center">
                    <li>
                        <div className='text-black font-bold text-[30px] mr-50'><Link to="/">AK</Link></div>
                    </li>
                    
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
                    <li>
                        <div><button className='text-white bg-black hover:bg-blue-400 border-sm rounded-md w-30 h-10 ml-50'>Let's Talk</button></div>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;