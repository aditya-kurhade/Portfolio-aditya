import React from "react";
import { LinkPreview } from "./ui/link-preview.jsx";

const skills = [
  // --- Frontend Frameworks & Libraries ---
  { name: "React", url: "https://react.dev/", category: "frontend" },
  { name: "Tailwind", url: "https://tailwindcss.com/", category: "frontend" },

  // --- Backend & Server ---
  { name: "Node.js", url: "https://nodejs.org/", category: "backend" },
  { name: "Express.js", url: "https://expressjs.com/", category: "backend" },

  // --- Programming Languages ---
  { name: "JavaScript", url: "https://www.javascript.com/", category: "language" },
  { name: "Python", url: "https://www.python.org/", category: "language" },
  { name: "C++", url: "https://isocpp.org/", category: "language" },

  // --- Databases ---
  { name: "SQL", url: "https://www.mysql.com/", category: "database" },
  { name: "MongoDB", url: "https://www.mongodb.com/", category: "database" },

  { name: "Bootstrap", url: "https://getbootstrap.com/", category: "frontend" },
  { name: "Acernity UI", url: "https://acernity-ui.vercel.app/", category: "frontend" },
  { name: "Framer Motion", url: "https://www.framer.com/motion/", category: "frontend" },
  { name: "Spline", url: "https://spline.design/", category: "frontend" },

  // --- AI / LLMs ---
  { name: "Llama 4", url: "https://llama.meta.com/", category: "ai" },
  { name: "Gemini", url: "https://deepmind.google/technologies/gemini/", category: "ai" },

  // --- DevOps & Version Control ---
  { name: "Firebase", url: "https://firebase.google.com/", category: "devops" },
  { name: "GitHub", url: "https://github.com/", category: "devops" },
];

const categoryColors = {
  frontend: "border-blue-200 bg-blue-50/60 hover:border-blue-400 hover:bg-blue-100/80",
  backend: "border-green-200 bg-green-50/60 hover:border-green-400 hover:bg-green-100/80",
  language: "border-amber-200 bg-amber-50/60 hover:border-amber-400 hover:bg-amber-100/80",
  database: "border-purple-200 bg-purple-50/60 hover:border-purple-400 hover:bg-purple-100/80",
  ai: "border-pink-200 bg-pink-50/60 hover:border-pink-400 hover:bg-pink-100/80",
  devops: "border-slate-200 bg-slate-50/60 hover:border-slate-400 hover:bg-slate-100/80",
};

const categoryTextColors = {
  frontend: "text-blue-700",
  backend: "text-green-700",
  language: "text-amber-700",
  database: "text-purple-700",
  ai: "text-pink-700",
  devops: "text-slate-700",
};

export function LinkPreviewDemo() {
  return (
    <div className="flex justify-center items-center flex-col px-2">
      <div className="flex flex-wrap gap-2 mt-1 mb-3">
        {skills.map(skill => (
          <div key={skill.name} className={`w-auto px-3 py-1.5 rounded-full border shadow-sm
              text-[12px] ${categoryColors[skill.category] || "border-gray-200 bg-white hover:bg-gray-50"}
              hover:scale-105 hover:shadow-md transition-all duration-200
              whitespace-nowrap cursor-pointer`}>
            <LinkPreview url={skill.url}>
              <span className={`font-semibold ${categoryTextColors[skill.category] || "text-slate-700"}`}>{skill.name}</span>
            </LinkPreview>
          </div>
        ))}
      </div>
    </div>
  );
}
