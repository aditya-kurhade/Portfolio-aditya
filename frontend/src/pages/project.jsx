import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import realtimeLocationImg from "../assets/Img/realtime location project banner img.avif";
import aiPoweredCodeReviewerScreenshot from "../assets/Img/AI-Powered-Code-Reviewer-screenshot.png";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const PROJECTS = [
  { 
    name: "MindConnect", 
    desc: "AI-powered mental health platform connecting users with professional therapists and resources.", 
    link: "https://mind-connect-brown.vercel.app", 
    img: "https://res.cloudinary.com/dbd5zow1e/image/upload/v1762870080/Screenshot_2025-11-11_192533_rgzkut.png", 
    gradient: "from-red-500 to-pink-500",
    tags: ["React", "Node.js", "AI"]
  },
  { 
    name: "Jobby", 
    desc: "Modern job search platform with personalized recommendations and easy application tracking.", 
    link: "https://jobsApplication.ccbp.tech", 
    img: "https://res.cloudinary.com/dbd5zow1e/image/upload/v1762870081/Screenshot_2025-11-11_192603_kzdp4x.png", 
    gradient: "from-green-500 to-teal-500",
    tags: ["React", "REST API", "CSS"]
  },
  { 
    name: "NxtWatch", 
    desc: "Video streaming application with personalized recommendations and seamless playback.", 
    link: "https://nxtwatch003.ccbp.tech", 
    img: "https://res.cloudinary.com/dbd5zow1e/image/upload/v1762870081/Screenshot_2025-11-11_192727_zlcqve.png", 
    gradient: "from-purple-500 to-indigo-500",
    tags: ["React", "Redux", "API"]
  },
  { 
    name: "IPL Dashboard", 
    desc: "Interactive IPL statistics dashboard with real-time data and beautiful visualizations.", 
    link: "https://iplborad.ccbp.tech/", 
    img: "https://res.cloudinary.com/dbd5zow1e/image/upload/v1762870082/Screenshot_2025-11-11_192746_zyqh7e.png", 
    gradient: "from-blue-500 to-cyan-500",
    tags: ["React", "Charts", "API"]
  },
  { 
    name: "Realtime Tracker", 
    desc: "Live location tracking system with real-time updates and interactive maps.", 
    img: realtimeLocationImg, 
    link: "https://realtime-location-tracker-zpej.onrender.com", 
    gradient: "from-orange-500 to-amber-500",
    tags: ["Node.js", "Socket.io", "Maps"]
  },
  { 
    name: "AI Code Reviewer", 
    desc: "AI-powered tool that analyzes and improves code quality with smart suggestions.", 
    img: aiPoweredCodeReviewerScreenshot, 
    link: "https://ai-powered-code-reviwer.vercel.app", 
    gradient: "from-pink-500 to-rose-500",
    tags: ["React", "OpenAI", "Node.js"]
  }
];

const FEATURED = PROJECTS[0];
const HIGHLIGHTS = PROJECTS.slice(1);
const STATS = [
  { label: "Projects shipped", value: "6", spec: "Production-ready builds" },
  { label: "Stacks explored", value: "12+", spec: "Across frontend + backend" },
  { label: "Focus", value: "AI + Full Stack", spec: "Tooling and products" }
];

function ProjectCard({ project, index = 0, compact = false }) {
  const imageHeightClass = compact ? "h-44" : "h-56";
  const containerPaddingClass = compact ? "p-5" : "p-6";
  const titleSizeClass = compact ? "text-lg" : "text-xl";
  const tagSizeClass = compact ? "text-[11px]" : "text-xs";

  return (
    <div 
      className="relative rounded-3xl overflow-hidden bg-white/95 shadow-lg ring-1 ring-black/5"
    >
      {/* Image Container */}
      <div className={`relative ${imageHeightClass} overflow-hidden`}>
        <img 
          src={project.img} 
          alt={project.name} 
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay removed */}
        
        {/* Floating Action Button */}
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/95 backdrop-blur-sm
                     flex items-center justify-center shadow-lg"
        >
          <FaExternalLinkAlt className="text-gray-800 text-sm" />
        </a>
      </div>

      {/* Content */}
      <div className={containerPaddingClass}>
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.map((tag, i) => (
            <span 
              key={i} 
              className={`px-3 py-1 ${tagSizeClass} font-medium rounded-full bg-gradient-to-r ${project.gradient} text-white`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className={`${titleSizeClass} font-bold text-gray-900 mb-2`}>
          {project.name}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {project.desc}
        </p>

        {/* CTA Button */}
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full 
                     bg-gray-900 text-white text-sm font-semibold"
        >
          View Live
          <FaExternalLinkAlt className="text-xs" />
        </a>
      </div>

      {/* Decorative Corner */}
      <div className={`absolute -bottom-12 -right-12 w-24 h-24 rounded-full 
                       bg-gradient-to-r ${project.gradient} opacity-10`}></div>
    </div>
  );
}

export default function ProjectSection() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const selectedProject = HIGHLIGHTS[selectedIndex] || FEATURED;

  useEffect(() => {
    if (!isAutoPlay || HIGHLIGHTS.length <= 1) {
      return undefined;
    }

    const intervalId = setInterval(() => {
      setSelectedIndex((prev) => (prev + 1) % HIGHLIGHTS.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, [isAutoPlay]);

  return (
    <div className="relative min-h-screen bg-[#f5f2ed] py-16 px-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(14,116,144,0.12),_transparent_55%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,_rgba(234,88,12,0.12),_transparent_45%)]"></div>

      <div className="relative max-w-6xl mx-auto">
        <nav className="flex items-center justify-end gap-3 mb-6">
          <Link
            to="/"
            className="text-xs font-semibold text-gray-700 bg-white/90 px-3 py-1.5 rounded-full ring-1 ring-black/5"
          >
            Home
          </Link>
          <Link
            to="/project"
            className="text-xs font-semibold text-gray-700 bg-white/90 px-3 py-1.5 rounded-full ring-1 ring-black/5"
          >
            Projects
          </Link>
          <Link
            to="/about"
            className="text-xs font-semibold text-gray-700 bg-white/90 px-3 py-1.5 rounded-full ring-1 ring-black/5"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-xs font-semibold text-gray-700 bg-white/90 px-3 py-1.5 rounded-full ring-1 ring-black/5"
          >
            Contact
          </Link>
        </nav>
        {/* Header + Stats Section */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start mb-16">
          <div className="order-1 lg:order-1 text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 text-gray-900 rounded-full text-sm font-semibold shadow-sm ring-1 ring-black/5">
              Project Atlas
              <span className="h-2 w-2 rounded-full bg-teal-600"></span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mt-6">
              Builds that feel
              <span className="block bg-gradient-to-r from-teal-700 via-sky-600 to-blue-600 bg-clip-text text-transparent">
                alive and useful
              </span>
            </h1>
            <p className="text-gray-600 max-w-2xl text-lg mt-5">
              A curated set of experiments, client-like builds, and AI-driven tools designed to solve real problems.
            </p>

            <div className="flex flex-wrap justify-start gap-3 mt-8">
              {["Full Stack", "AI Integration", "Product Thinking", "Clean UI"].map((pill) => (
                <span key={pill} className="px-4 py-2 rounded-full bg-white/90 text-gray-700 text-sm font-medium shadow-sm ring-1 ring-black/5">
                  {pill}
                </span>
              ))}
            </div>
          </div>

          <div className="order-2 lg:order-2">
            <div className="rounded-3xl p-6">
              <p className="text-xs text-black font-bold uppercase tracking-[0.3em] text-gray-400">By the numbers</p>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {STATS.map((stat) => (
                  <div key={stat.label} className="rounded-2xl bg-white px-6 py-5 ring-1 ring-black/5">
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-xs uppercase tracking-widest text-gray-500 mt-2">{stat.label}</p>
                    <p className="text-xs text-gray-500 mt-2">{stat.spec}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>


          
        </div>

        {/* Signature Project Section */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gray-400">Signature Project</p>
            <h2 className="text-2xl font-bold text-gray-900 mt-2">MindConnect Spotlight</h2>
          </div>
          <span className="hidden sm:inline-flex px-3 py-1 rounded-full bg-white/90 text-xs font-semibold text-gray-600 ring-1 ring-black/5">
            Flagship Case Study
          </span>
        </div>
        <div className="grid grid-cols-1 gap-4 items-start">
          <div className="rounded-[22px] bg-[#f7fbfb] shadow-md ring-1 ring-black/5 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 p-4">
              <div className="relative min-h-[170px] rounded-2xl overflow-hidden">
                <img src={FEATURED.img} alt={FEATURED.name} className="w-full h-full object-cover" />
                {/* Gradient Overlay removed */}
                <div className="absolute bottom-4 left-4">
                  <p className="text-white/80 text-xs uppercase tracking-widest">Signature Project</p>
                  <h2 className="text-2xl font-bold text-white mt-2">{FEATURED.name}</h2>
                </div>
              </div>

              <div className="rounded-2xl bg-[#eef7f6] p-3">
                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400">Overview</p>
                <p className="text-xs text-gray-700 leading-relaxed mt-2">
                  Privacy-first AI mental health platform using local LLMs and RAG for real-time, secure support.
                </p>
                <p className="text-xs text-gray-700 leading-relaxed mt-2">
                  Async PDF ingestion, AI report automation, and a Dockerized REST backend with JWT.
                </p>
              </div>

              <div className="rounded-2xl bg-white/95 p-3 ring-1 ring-black/5">
                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400">Capability Tags</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {[
                    "AI-Native Architecture",
                    "RAG System Design",
                    "Vector Databases",
                    "Self-Hosted LLM Infrastructure",
                    "Async Processing Pipeline",
                    "Semantic Retrieval Engine",
                    "AI Report Automation",
                    "Role-Based Access Control",
                    "Production-Ready Backend"
                  ].map((item) => (
                    <span key={item} className="px-2 py-1 rounded-full bg-white text-[10px] font-semibold text-gray-700 ring-1 ring-black/5">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-white/95 p-3 ring-1 ring-black/5">
                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400">Tech Stack</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-2">
                  {[
                    "React",
                    "Node.js",
                    "Express",
                    "MySQL",
                    "Redis",
                    "BullMQ",
                    "Qdrant",
                    "LangChain",
                    "Ollama (Llama3)",
                    "Whisper",
                    "Docker",
                    "JWT",
                    "bcrypt"
                  ].map((item) => (
                    <div key={item} className="rounded-2xl bg-[#eef7f6] px-2.5 py-1.5 text-[11px] font-semibold text-gray-800">
                      {item}
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap items-center gap-3 mt-3">
                  <a
                    href={FEATURED.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-900 text-white text-xs font-semibold shadow-md"
                  >
                    <FaGithub className="text-[12px]" />
                    Live Demo
                    <FaExternalLinkAlt className="text-[10px]" />
                  </a>
                  <span className="text-xs text-gray-500">Impact-first, UX-forward build.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Split View */}
        <div className="mt-16">
          <div className="flex items-center justify-between gap-4 mb-6">
            <h3 className="text-2xl font-bold text-gray-900">Project Directory</h3>
            <span className="text-xs uppercase tracking-widest text-gray-400">Pick a project to preview</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-[0.35fr_0.65fr] gap-6 items-start">
            <div className="rounded-2xl bg-white/95 ring-1 ring-black/5 p-4">
              <div className="flex items-center justify-between">
                <p className="text-[11px] uppercase tracking-[0.25em] text-gray-400">Project Index</p>
                <button
                  type="button"
                  onClick={() => setIsAutoPlay((prev) => !prev)}
                  className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#eef7f6] text-[10px] font-semibold text-gray-700 ring-1 ring-black/5"
                >
                  {isAutoPlay ? "Auto Play" : "Paused"}
                </button>
              </div>
              <div className="mt-4 space-y-2">
                {HIGHLIGHTS.map((project, index) => (
                  <button
                    key={project.name}
                    type="button"
                    onClick={() => setSelectedIndex(index)}
                    className={`w-full text-left px-3 py-2 rounded-xl text-sm font-semibold transition-colors
                      ring-1 ring-black/5 bg-white/90 border-l-4
                      ${selectedProject.name === project.name ? "text-gray-900 border-teal-600" : "text-gray-600 border-gray-200 hover:border-teal-400"}`}
                  >
                    <span className="block text-[10px] uppercase tracking-[0.22em] text-gray-400">Project</span>
                    <span className="block mt-1">{project.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-white/95 ring-1 ring-black/5 p-4">
              <div className="flex items-center justify-between">
                <p className="text-[11px] uppercase tracking-[0.25em] text-gray-400">Project Snapshot</p>
                <span className="text-sm font-bold text-gray-900">{selectedProject.name}</span>
              </div>
              <div className="mt-4 rounded-2xl overflow-hidden bg-white ring-1 ring-black/5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3 min-h-[300px]">
                  <div className="relative h-[120px] rounded-xl overflow-hidden">
                    <img src={selectedProject.img} alt={selectedProject.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="rounded-xl bg-[#eef7f6] p-3">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400">Overview</p>
                    <h4 className="text-sm font-bold text-gray-900 mt-2">{selectedProject.name}</h4>
                    <p className="text-[11px] text-gray-600 mt-1">{selectedProject.desc}</p>
                  </div>
                  <div className="rounded-xl bg-white/95 p-3 ring-1 ring-black/5">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400">Capabilities</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {selectedProject.tags.map((tag) => (
                        <span key={tag} className={`px-2.5 py-1 rounded-full text-[10px] font-semibold bg-gradient-to-r ${selectedProject.gradient} text-white shadow-sm`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-xl bg-white/95 p-3 ring-1 ring-black/5">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400">Action</p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-[11px] text-gray-600">Live demo</span>
                      <a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-900 text-white text-[11px] font-semibold"
                      >
                        View
                        <FaExternalLinkAlt className="text-[10px]" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="flex justify-end mt-10">
          <div className="text-right">
            <p className="text-xs text-gray-500">Let’s build something meaningful.</p>
            <a 
              href="mailto:adityakurhade1000@gmail.com"
              className="inline-flex items-center gap-2 mt-2 px-4 py-2 bg-gray-900 text-white rounded-full 
                         text-xs font-semibold shadow-md"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
