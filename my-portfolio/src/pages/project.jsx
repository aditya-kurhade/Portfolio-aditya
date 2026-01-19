import React, { useState } from "react";
import realtimeLocationImg from "../assets/Img/realtime location project banner img.avif";
import aiPoweredCodeReviewerScreenshot from "../assets/Img/AI-Powered-Code-Reviewer-screenshot.png";

const PROJECTS = [
  { name: "MindConnect", desc: "AI mental health platform.", link: "https://mind-connect-brown.vercel.app", img: "https://res.cloudinary.com/dbd5zow1e/image/upload/v1762870080/Screenshot_2025-11-11_192533_rgzkut.png", color: "text-red-500" },
  { name: "Jobby", desc: "Job search platform.", link: "https://jobsApplication.ccbp.tech", img: "https://res.cloudinary.com/dbd5zow1e/image/upload/v1762870081/Screenshot_2025-11-11_192603_kzdp4x.png", color: "text-green-600" },
  { name: "NxtWatch", desc: "Video streaming app.", link: "https://nxtwatch003.ccbp.tech", img: "https://res.cloudinary.com/dbd5zow1e/image/upload/v1762870081/Screenshot_2025-11-11_192727_zlcqve.png", color: "text-purple-500" },
  { name: "IPL Dashboard", desc: "IPL stats dashboard.", link: "https://iplborad.ccbp.tech/", img: "https://res.cloudinary.com/dbd5zow1e/image/upload/v1762870082/Screenshot_2025-11-11_192746_zyqh7e.png", color: "text-blue-600" },
  { name: "Realtime Tracker", desc: "Live location tracking.", img: realtimeLocationImg, link: "https://realtime-location-tracker-zpej.onrender.com", color: "text-orange-500" },
  { name: "AI Code Reviewer", desc: "AI tool to improve code.", img: aiPoweredCodeReviewerScreenshot, link: "https://ai-powered-code-reviwer.vercel.app", color: "text-pink-500" }
];

// -----------------------
// LEFT PANEL
// -----------------------
function ProjectNameList({ projects, setActiveProject, activeProject }) {
  return (
    <div className="w-full lg:w-1/3 p-8 rounded-2xl shadow-md bg-white border border-gray-200">
      <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">BuildVerse</h1>
      <p className="mt-5 text-gray-500 text-xs uppercase tracking-wider">Your Project Ecosystem</p>

      <ul className="mt-6 space-y-4 pl-3 border-l-2 border-purple-300">
        {projects.map((p, i) => (
          <li
            key={i}
            onClick={() => setActiveProject(p)}
            className={`font-semibold text-sm cursor-pointer transition-all hover:translate-x-2 
                        ${p.color} ${activeProject.name === p.name ? "opacity-100 font-bold" : "opacity-70"}`}
          >
            {p.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

// -----------------------
// CARD COMPONENT
// -----------------------
function ProjectCard({ project }) {
  return (
    <div className="rounded-2xl p-6 bg-white shadow-md border border-gray-200">
      <h2 className={`text-xl font-bold ${project.color}`}>{project.name}</h2>
      <p className="text-gray-600 text-sm mt-2">{project.desc}</p>

      <div className="mt-4 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
        <img src={project.img} alt={project.name} className="w-full" />
      </div>

      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 inline-block text-blue-600 font-semibold text-sm hover:underline"
      >
        Open Project →
      </a>
    </div>
  );
}

// -----------------------
// MAIN SECTION
// -----------------------
export default function ProjectSection() {
  const [activeProject, setActiveProject] = useState(PROJECTS[0]);

  return (
    <div className="w-full flex flex-col lg:flex-row gap-8 p-6 bg-gray-100 rounded-3xl">
      
      {/* LEFT */}
      <ProjectNameList projects={PROJECTS} setActiveProject={setActiveProject} activeProject={activeProject} />

      {/* RIGHT */}
      <div className="w-full lg:w-2/3 h-[30px] flex items-start justify-center">
        <ProjectCard project={activeProject} />
      </div>

    </div>
  );
}
