import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const HeroSection = () => {
  return (
    <div className="hero-section flex flex-col items-center justify-center text-center p-2 bg-gray-100 w-[400px] rounded-[20px] shadow-lg">
        <div>
            <img src="https://res.cloudinary.com/dbd5zow1e/image/upload/c_crop,ar_1:1/v1738689136/IMG_20240317_195721_2_r1mkd4.jpg" alt="Hero Image" className="w-[300px]" />
        </div>
        <div>
            <h1 className="text-4xl font-bold text-center mt-8">Aditya Kurhade</h1>
            <p className="text-center text-gray-600 mt-4">From crafting responsive frontends to building secure APIs and databases, I develop full-stack solutions with real-world impact.</p>
        </div>
        <div className="container flex flex-row justify-center items-center mt-4">
            <ul className="flex flex-row gap-6">
              <li>
                <a href="https://github.com/aditya-kurhade" target="_blank" rel="noopener noreferrer">
                  <FaGithub size={28} />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/aditya-kurhade/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin size={28} />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/your-twitter-username" target="_blank" rel="noopener noreferrer">
                  <BsTwitterX size={28} />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/_aditya_kurhade_/" target="_blank" rel="noopener noreferrer">
                  <FaSquareInstagram size={28} />
                </a>
              </li>
              <li>
                <a href="mailto:adityakurhade1000@email.com" target="_blank" rel="noopener noreferrer">
                  <IoMdMail size={28} />
                </a>
              </li>
            </ul>
        </div>
    </div>
  )
}

export default HeroSection