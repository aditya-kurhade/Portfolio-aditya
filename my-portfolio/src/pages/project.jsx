import React, { useState } from 'react';
import { MdArrowOutward } from 'react-icons/md';
import realtimeLocationTrackerImg from '../assets/Img/realtime location project banner img.avif';
import aipoweredCodeReviewerImg from '../assets/Img/AI-Powered-Code-Reviewer-screenshot.png';

const projectList = [
  {
    name: 'Jobby',
    description: 'A job application website that allows users to search and apply for jobs.',
    imageUrl: realtimeLocationTrackerImg,
    projectUrl: 'https://jobsApplication.ccbp.tech',
    id: 1,
  },
  {
    name: 'Ai Powered Code Reviewer',
    description: 'An AI-powered code reviewer that provides feedback on code quality and best practices.',
    imageUrl: aipoweredCodeReviewerImg,
    projectUrl: 'https://ai-powered-code-reviwer.vercel.app',
    id: 2,
  },
  {
    name: 'Realtime Location Tracker',
    description: 'A real-time location tracker that allows users to track their location in real-time.',
    imageUrl: realtimeLocationTrackerImg,
    projectUrl: 'https://realtime-location-tracker-zpej.onrender.com',
    id: 3,
  },
  {
    name: 'IPL Dashboard',
    description: 'An IPL dashboard that provides information about IPL teams, players, and matches.',
    imageUrl: realtimeLocationTrackerImg,
    projectUrl: 'https://iplborad.ccbp.tech/',
    id: 4,
  },
  {
    name: 'Todos App',
    description: 'A simple todos application that allows users to manage their tasks.',
    imageUrl: realtimeLocationTrackerImg,
    projectUrl: 'https://todosapp10.ccbp.tech',
    id: 5,
  },
  {
    name: 'Food Munch',
    description: 'A food delivery application that allows users to order food from various restaurants.',
    imageUrl: realtimeLocationTrackerImg,
    projectUrl: 'https://adifoodmunch10.ccbp.tech',
    id: 6,
  },
  {
    name: 'Tourism Website',
    description: 'A tourism website that provides information about various tourist destinations.',
    imageUrl: realtimeLocationTrackerImg,
    projectUrl: 'https://tourismweb1001.ccbp.tech',
    id: 7,
  },
];

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(projectList[0]);

  return (
    <div className="w-full min-h-screen px-6 py-12  text-gray-900">
      

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-10 justify-center items-start">
        {/* Project Buttons */}
        <div className="w-full lg:w-1/3 flex flex-wrap justify-center gap-3">
          {projectList.map((project) => (
            <button
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className={`px-4 py-2 text-sm md:text-base font-semibold rounded-md transition-all duration-200 shadow-sm border
                ${
                  selectedProject.id === project.id
                    ? 'bg-blue-600 text-white shadow-md scale-105'
                    : 'bg-white text-gray-800 hover:bg-gray-100'
                }`}
            >
              {project.name}
            </button>
          ))}
        </div>

        {/* Project Display Card */}
        <div className="w-full lg:w-2/3 max-w-3xl bg-white shadow-lg rounded-xl overflow-hidden transition-all duration-300 p-6 hover:shadow-2xl">
          <img
            src={selectedProject.imageUrl}
            alt={selectedProject.name}
            className="w-full h-[300px] object-cover rounded-lg mb-5 transition-transform duration-500 hover:scale-[1.02]"
          />
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <div>
              <h2 className="text-2xl font-bold mb-2">{selectedProject.name}</h2>
              <p className="text-sm text-gray-600">{selectedProject.description}</p>
            </div>
            <a
              href={selectedProject.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 sm:mt-0 text-blue-600 font-semibold flex items-center hover:underline hover:text-blue-700"
            >
              Visit Site <MdArrowOutward className="ml-1" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
