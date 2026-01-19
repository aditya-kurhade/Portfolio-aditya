import React from 'react'
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiGooglemaps, SiTailwindcss, SiMongodb, SiOpenai } from "react-icons/si";
import { FaFileAlt, FaQuestionCircle, FaCertificate, FaTrophy, FaLightbulb, FaUsers, FaUserTie, FaComments } from "react-icons/fa";


const projects = [
  {
    name: "MindConnect",
      link: "https://mind-connect-brown.vercel.app",
      img: "https://res.cloudinary.com/dbd5zow1e/image/upload/v1762870080/Screenshot_2025-11-11_192533_rgzkut.png",
    description: "A mental health platform connecting users to therapists.",
    tech: [<FaReact />, <FaNodeJs />, <SiGooglemaps />, <SiTailwindcss />]
  },
  {
    name: "NxtWatch",
      link: "https://nxtwatch003.ccbp.tech",
      img: "https://res.cloudinary.com/dbd5zow1e/image/upload/v1762870081/Screenshot_2025-11-11_192727_zlcqve.png",
    description: "A video streaming platform with personalized recommendations.",
    tech: [<FaReact />, <FaNodeJs />, <SiMongodb />, <SiOpenai />]
  }
];

const ProjectSection = () => {
  return (
    <div className="space-y-4 max-w-full sm:max-w-md lg:max-w-lg mx-auto sm:mx-4">
      
      {/* Quick Links + Roles */}
      <div className="flex flex-col lg:flex-row lg:gap-3 bg-white border border-gray-200 rounded-xl p-6 shadow-md  ">
        
        {/* Quick Links */}
        <div className='lg:w-40'>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h3>
          <div className="space-y-3 text-sm text-gray-700">
            <div className="flex items-center gap-2 hover:text-blue-600 hover:underline cursor-pointer transition">
              <FaFileAlt />
              <a href="https://drive.google.com/file/d/1CKVGVFeL1hrWc-utguJ7Ey_VUNK54orE/view?usp=drive_link" target="_blank" rel="noreferrer">
        View Resume
      </a>
            </div>
            <div className="flex items-center gap-2 hover:text-blue-600 hover:underline cursor-pointer transition">
              <FaQuestionCircle />
              <Link to="/why-work-with-me"><p>Why I’m the One?</p></Link>
            </div>
            <div className="flex items-center gap-2 hover:text-blue-600 hover:underline cursor-pointer transition">
              <FaTrophy />
              <Link to="/milestones"><p>Achievements</p></Link>
            </div>
            <div className="flex items-center gap-2 hover:text-blue-600 hover:underline cursor-pointer transition">
              <FaCertificate />
              <Link to="/milestones"><p>Certifications</p></Link>
            </div>
          </div>
        </div>

        {/* Roles of Responsibility */}
        <div className='mt-5 lg:mt-0'>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Roles of Responsibility</h3>
          <div className="space-y-3 text-sm text-gray-700">
            <div className="flex items-center gap-2 hover:text-green-600 cursor-pointer transition">
              <FaUsers />
              <p>ACM GHRECM President</p>
            </div>
            <div className="flex items-center gap-2 hover:text-green-600 cursor-pointer transition">
              <FaUserTie />
              <p>ToastMaster International</p>
            </div>
            <div className="flex items-center gap-2 hover:text-green-600 cursor-pointer transition">
              <FaComments />
              <p>Peer Counsellor</p>
            </div>
            <div className="flex items-center gap-2 hover:text-green-600 cursor-pointer transition">
              <FaLightbulb />
              <p>Innovative Problem Solver</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Projects */}
      <div className="bg-white shadow-md rounded-[10px] p-4">
        <div className="flex items-center mb-4">
          <h1 className="text-2xl font-bold font-roboto border-b-2 border-blue-500 pb-1">
            Recent Projects
          </h1>
          <div className="ml-auto flex items-center text-gray-500 hover:text-blue-500 transition-colors duration-300">
            <Link to="/under-development" className="flex items-center gap-1 font-medium">
              All Projects <FaArrowRightLong />
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {projects.map((project, index) => (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="group relative rounded-md overflow-hidden shadow hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={project.img}
                alt={project.name}
                className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
              />
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
    </div>
  )
}

export default ProjectSection
