import React from "react";
import realtimeLocationImg from '../assets/Img/realtime location project banner img.avif';
import aiPoweredCodeReviewerScreenshot from '../assets/Img/AI-Powered-Code-Reviewer-screenshot.png';

export default function ProjectSection() {
  const projects = [
    { name: "MindConnect", link: "https://mind-connect-brown.vercel.app", img: "https://res.cloudinary.com/dbd5zow1e/image/upload/v1762870080/Screenshot_2025-11-11_192533_rgzkut.png" },
    { name: "Jobby", link: "https://jobsApplication.ccbp.tech", img: "https://res.cloudinary.com/dbd5zow1e/image/upload/v1762870081/Screenshot_2025-11-11_192603_kzdp4x.png" },
    { name: "NxtWatch", link: "https://nxtwatch003.ccbp.tech", img: "https://res.cloudinary.com/dbd5zow1e/image/upload/v1762870081/Screenshot_2025-11-11_192727_zlcqve.png" },
    { name: "IPL Dashboard", link: "https://iplborad.ccbp.tech/", img: "https://res.cloudinary.com/dbd5zow1e/image/upload/v1762870082/Screenshot_2025-11-11_192746_zyqh7e.png" },
    { name: "Realtime Location Tracker", img: realtimeLocationImg, link: "https://realtime-location-tracker-zpej.onrender.com" },
    { name: "AI-Powered Code Reviewer", img: aiPoweredCodeReviewerScreenshot, link: "https://ai-powered-code-reviwer.vercel.app" },
    { name: "Todos App", link: "https://todosapp10.ccbp.tech", img: "https://res.cloudinary.com/dbd5zow1e/image/upload/v1762870081/Screenshot_2025-11-11_192800_mloylo.png" },
    { name: "Food Munch", link: "https://adifoodmunch10.ccbp.tech", img: "https://res.cloudinary.com/dbd5zow1e/image/upload/v1762869823/FoodMunch1_cgxjfv.webp" },
    { name: "Tourism Website", link: "https://tourismweb1001.ccbp.tech", img: "https://res.cloudinary.com/dbd5zow1e/image/upload/v1762869822/download_wfnjum.png" },
    { name: "Trust & Earn (In Progress)", link: "#", img: "https://res.cloudinary.com/dbd5zow1e/image/upload/v1762869822/download_wfnjum.png" },
    { name: "Medsarthi.ai (In Progress)", link: "#", img: "https://res.cloudinary.com/dbd5zow1e/image/upload/v1762869822/download_wfnjum.png" },
  ];

  return (
    <section
      id="projects"
      className="text-gray-900 py-24 px-6 sm:px-12 lg:px-24 bg-[linear-gradient(135deg,_rgb(240,244,255)_0%,_rgb(255,255,255)_100%)]"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-16 text-gray-900 tracking-tight">
          BuildVerse
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.name}`}
              className="group relative flex flex-col bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.img}
                  alt={project.name}
                  loading="lazy"
                  className="w-full h-60 sm:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              <div className="p-7 sm:p-8 text-center">
                <h3 className="text-2xl font-semibold mb-2 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  {project.name}
                </h3>
                <p className="text-gray-500 text-sm group-hover:text-gray-700 transition-all">
                  Click to preview this project →
                </p>
              </div>

              <span className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
