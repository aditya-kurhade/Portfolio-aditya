import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { MdArrowOutward, MdPlayArrow, MdPause }  from 'react-icons/md';
import { FaPlay, FaPause } from 'react-icons/fa';
import realtimeLocationTrackerImg from '../assets/Img/realtime location project banner img.avif';
import aipoweredCodeReviewerImg from '../assets/Img/AI-Powered-Code-Reviewer-screenshot.png';

const projectList = [
  {
    name: 'Jobby',
    description: 'A job application website that allows users to search and apply for jobs.',
    tag: 'Full Stack',
    imageUrl: realtimeLocationTrackerImg,
    projectUrl: 'https://jobsApplication.ccbp.tech',
    id: 1,
  },
  {
    name: 'Ai Powered Code Reviewer',
    description: 'An AI-powered code reviewer that provides feedback on code quality and best practices.',
    tag: 'AI & Web',
    imageUrl: aipoweredCodeReviewerImg,
    projectUrl: 'https://ai-powered-code-reviwer.vercel.app',
    id: 2,
  },
  {
    name: 'Realtime Location Tracker',
    description: 'A real-time location tracker that allows users to track their location in real-time.',
    tag: 'Realtime App',
    imageUrl: realtimeLocationTrackerImg,
    projectUrl: 'https://realtime-location-tracker-zpej.onrender.com',
    id: 3,
  },
  {
    name: 'IPL Dashboard',
    description: 'An IPL dashboard that provides information about IPL teams, players, and matches.',
    tag: 'Sports Data',
    imageUrl: realtimeLocationTrackerImg,
    projectUrl: 'https://iplborad.ccbp.tech/',
    id: 4,
  },
  {
    name: 'Todos App',
    description: 'A simple todos application that allows users to manage their tasks.',
    tag: 'Productivity',
    imageUrl: realtimeLocationTrackerImg,
    projectUrl: 'https://todosapp10.ccbp.tech',
    id: 5,
  },
  {
    name: 'Food Munch',
    description: 'A food delivery application that allows users to order food from various restaurants.',
    tag: 'E-commerce',
    imageUrl: realtimeLocationTrackerImg,
    projectUrl: 'https://adifoodmunch10.ccbp.tech',
    id: 6,
  },
  {
    name: 'Tourism Website',
    description: 'A tourism website that provides information about various tourist destinations.',
    tag: 'Travel',
    imageUrl: realtimeLocationTrackerImg,
    projectUrl: 'https://tourismweb1001.ccbp.tech',
    id: 7,
  },
];

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(projectList[0]);
  const [autoPlay, setAutoPlay] = useState(true); // auto-play ON by default

  // Auto-play effect
  useEffect(() => {
    let timer;
    if (autoPlay) {
      timer = setInterval(() => {
        setSelectedProject((prev) => {
          const currentIndex = projectList.findIndex((p) => p.id === prev.id);
          const nextIndex = (currentIndex + 1) % projectList.length;
          return projectList[nextIndex];
        });
      }, 3000); // change every 3 seconds
    }
    return () => clearInterval(timer);
  }, [autoPlay]);

  return (
    <div className="w-full min-h-screen px-6 py-12 text-gray-900">
      <div className="flex flex-col lg:flex-row gap-10 justify-center items-start">
        {/* Left Section */}
        <div className="flex flex-col w-full lg:w-1/3 lg:flex-col gap-3 lg:gap-1">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 120, damping: 16 }}
              whileHover={{ scale: 1.02 }}
              className="mb-2 text-4xl sm:text-5xl font-extrabold leading-tight"
              style={{ fontFamily: "'Poppins', system-ui" }}
            >
              <span className=" bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-pink-500 to-amber-500">
                Buildverse
              </span>
            </motion.h1>

            <motion.p
              initial={{ y: 8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.08, duration: 0.45 }}
              className="max-w-2xl mt-4 text-sm sm:text-base opacity-85"
              style={{ fontFamily: "'DM Serif Display', serif", color: 'rgba(0, 0, 0, 0.9)' }}
            >
              Beyond the Blueprint — elegant ideas translated into purposeful, production-ready projects.
            </motion.p>

            {/* Decorative line */}
            <div className="mt-6 flex items-center justify-center">
              <span className="h-0.5 w-36 rounded-full bg-gradient-to-r from-indigo-400 via-pink-500 to-amber-500" />
                        {/* Auto Play Button */}
          <div className="flex justify-center">
              <button
                onClick={() => setAutoPlay(!autoPlay)}
                className="relative group flex items-center justify-center w-10 h-10  text-gradient-to-r from-indigo-400 via-pink-500 to-amber-500 transition-all"
                aria-label={autoPlay ? 'Pause Auto-Play' : 'Start Auto-Play'}
              >
                {autoPlay ? <MdPause size={20} /> : <MdPlayArrow size={20} />}
                <span className="absolute bottom-full mb-2 w-max px-2 py-1 text-xs rounded bg-black text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap ">
                  {autoPlay ? 'Pause' : 'Play'}
                </span>
              </button>
                </div>
            </div>
          </div>

          {/* Project Tabs */}
          <div className="w-full flex flex-wrap mx-auto justify-center gap-3 mt-4">
            {projectList.map((project) => (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className={`relative px-4 py-2 text-sm md:text-base font-semibold rounded-md transition-all duration-300 border ${
                  selectedProject.id === project.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                    : 'bg-white/60 backdrop-blur-md border-gray-200 text-gray-800 hover:bg-white/80'
                }`}
              >
                {project.name}
              </motion.button>
            ))}
          </div>


        </div>

        {/* Right Section */}
        <div className="flex w-full lg:w-2/3 flex-col">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="w-3/6 bg-white/70 backdrop-blur-lg rounded-xl overflow-hidden transition-all duration-300 p-4 border border-gray-200 shadow-lg hover:shadow-2xl mx-auto"
          >
            <img
              src={selectedProject.imageUrl}
              alt={selectedProject.name}
              className="w-full h-[240px] object-cover rounded-lg mb-4 transition-transform duration-500 hover:scale-[1.03]"
            />

            <div>
              <span className="inline-block px-2 py-1 text-xs font-semibold text-purple-600 bg-purple-100 rounded-full mb-2">
                {selectedProject.tag}
              </span>
              <h2 className="text-xl font-bold mb-2">{selectedProject.name}</h2>
              <p className="text-sm text-gray-600">{selectedProject.description}</p>
              <a
                href={selectedProject.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex text-blue-600 font-semibold items-center hover:underline hover:text-blue-700"
              >
                Visit Site <MdArrowOutward className="ml-1" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Project;
