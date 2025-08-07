import React from 'react'
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiGooglemaps, SiTailwindcss, SiMongodb, SiOpenai } from "react-icons/si";
import { FaFileAlt, FaQuestionCircle, FaBriefcase, FaRocket } from "react-icons/fa";
import { FaUsers,FaUserTie, FaComments } from "react-icons/fa";

import realtimeLocationImg from '../assets/Img/realtime location project banner img.avif';
import aiPoweredCodeReviewerScreenshot from '../assets/Img/AI-Powered-Code-Reviewer-screenshot.png';



const projects = [
  {
    name: "Realtime Location Tracker",
    img: realtimeLocationImg,
    link: "https://realtime-location-tracker-zpej.onrender.com",
    description: "Track live locations in real-time with Google Maps API.",
    tech: [<FaReact />, <FaNodeJs />, <SiGooglemaps />, <SiTailwindcss />]
  },
  {
    name: "AI-Powered Code Reviewer",
    img: aiPoweredCodeReviewerScreenshot,
    link: "https://ai-powered-code-reviwer.vercel.app",
    description: "AI tool to review and improve your code instantly.",
    tech: [<FaReact />, <FaNodeJs />, <SiMongodb />, <SiOpenai />]
  }
];

const ProjectSection = () => {
  return (
    <>
    <div className="container flex flex-row bg-white border border-gray-200 rounded-xl p-6 w-[400px] ml-4 shadow-md gap-7">
<div>
  <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h3>
  
  <div className="space-y-3 text-sm text-gray-700">
    <div className="flex items-center gap-2 hover:text-blue-600 cursor-pointer transition">
      <FaFileAlt />
      <p>View Resume</p>
    </div>

    <div className="flex items-center gap-2 hover:text-blue-600 cursor-pointer transition">
      <FaQuestionCircle />
      <p>Why Hire Me?</p>
    </div>

    <div className="flex items-center gap-2 hover:text-blue-600 cursor-pointer transition">
      <FaRocket />
      <p>Fast Delivery</p>
    </div>

    <div className="flex items-center gap-2 hover:text-blue-600 cursor-pointer transition">
      <FaBriefcase />
      <p>Certifications</p>
    </div>

  </div>
</div>

<div>
   <h3 className="text-lg font-semibold text-gray-800 mb-4">Roles of Responsibility</h3>
   <div className="space-y-3 text-sm text-gray-700">
    <div className="flex items-center gap-2 hover:text-blue-600 cursor-pointer transition">
      <FaUsers/>
      <p>ACM GHRECM President</p>
    </div>

    <div className="flex items-center gap-2 hover:text-blue-600 cursor-pointer transition">
      <FaUserTie />
      <p>ToastMaster International</p>
    </div>

    <div className="flex items-center gap-2 hover:text-blue-600 cursor-pointer transition">
      <FaComments />
      <p>Peer Counsellor</p>
    </div>

    <div className="flex items-center gap-2 hover:text-blue-600 cursor-pointer transition">
      <FaRocket />
      <p>Fast Delivery</p>
    </div>
  </div>
</div>
</div>



    <div className="bg-white shadow-md w-[400px] rounded-[10px] p-4 ml-4 mt-4">
      
      {/* Header */}
      <div className="flex items-center mb-4">
        <h1 className="text-2xl font-bold font-roboto border-b-2 border-blue-500 pb-1">
          Recent Projects
        </h1>
        <div className="ml-auto flex items-center text-gray-500 hover:text-blue-500 transition-colors duration-300">
          <Link to="/project" className="flex items-center gap-1 font-medium">
            All Projects <FaArrowRightLong />
          </Link>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="flex flex-col gap-4">
        {projects.map((project, index) => (
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            key={index}
            className="group relative rounded-md overflow-hidden shadow hover:shadow-lg transition-shadow duration-300"
          >
            {/* Project Image */}
            <img 
              src={project.img} 
              alt={project.name}
              className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
            />

            {/* Overlay on Hover */}
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white">
              <h2 className="text-lg font-semibold">{project.name}</h2>
              <p className="text-sm mt-1 px-4 text-center">{project.description}</p>
              <div className="flex gap-2 mt-2 text-lg">
                {project.tech.map((icon, i) => (
                  <span key={i} className="hover:text-blue-300 transition-colors duration-200">{icon}</span>
                ))}
              </div>
              <span className="mt-2 text-blue-300 text-sm">View Project →</span>
            </div>
          </a>
        ))}
      </div>
    </div>
    </>
  );
};


export default ProjectSection;
