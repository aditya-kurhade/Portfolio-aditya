import React from "react";
import { LinkPreview } from "./ui/link-preview.jsx";

const skills = [
  // --- Frontend Frameworks & Libraries ---
  { name: "React", url: "https://react.dev/" },
  { name: "Next.js", url: "https://nextjs.org/" },
  { name: "Tailwind", url: "https://tailwindcss.com/" },
  

  // --- Backend & Server ---
  { name: "Node.js", url: "https://nodejs.org/" },
  { name: "Express.js", url: "https://expressjs.com/" },

  // --- Programming Languages ---
  { name: "JavaScript", url: "https://www.javascript.com/" },
  { name: "Python", url: "https://www.python.org/" },
  { name: "C++", url: "https://isocpp.org/" },

  // --- Databases ---
  { name: "SQL", url: "https://www.mysql.com/" },
  { name: "MongoDB", url: "https://www.mongodb.com/" },

  { name: "Bootstrap", url: "https://getbootstrap.com/" },
  { name: "Acernity UI", url: "https://acernity-ui.vercel.app/" },
  { name: "Framer Motion", url: "https://www.framer.com/motion/" },
  { name: "Spline", url: "https://spline.design/" },

  // --- AI / LLMs ---
  { name: "Llama 4", url: "https://llama.meta.com/" },
  { name: "Gemini", url: "https://deepmind.google/technologies/gemini/" },

  // --- DevOps & Version Control ---
  { name: "Docker", url: "https://www.docker.com/" },
  { name: "GitHub", url: "https://github.com/" },
];

// const colorClasses = [
//   "bg-gradient-to-r from-pink-400 to-purple-400",
//   "bg-gradient-to-r from-blue-400 to-green-400",
//   "bg-gradient-to-r from-yellow-400 to-red-400",
//   "bg-gradient-to-r from-green-400 to-blue-400",
//   "bg-gradient-to-r from-purple-400 to-pink-400",
//   "bg-gradient-to-r from-orange-400 to-yellow-400",
//   "bg-gradient-to-r from-teal-400 to-blue-400",
//   "bg-gradient-to-r from-red-400 to-orange-400",
//   "bg-gradient-to-r from-indigo-400 to-blue-400",
//   "bg-gradient-to-r from-pink-400 to-yellow-400",
//   "bg-gradient-to-r from-blue-400 to-purple-400",
//   "bg-gradient-to-r from-green-400 to-teal-400"
// ];

export function LinkPreviewDemo() {
  return (
    <div className="flex justify-center items-center flex-col px-4">
      {/* <LinkPreview
        url="https://ui.aceternity.com"
        className="font-bold bg-clip-text color-black bg-gradient-to-br from-purple-500 to-pink-500"
      >
        <p className="text-black">Aceternity UI</p>
      </LinkPreview> */}
      <div className="flex flex-wrap gap-2 mt-1 mb-3">
        {skills.map(skill => (
          <div key={skill.name} className="w-auto px-4 py-2 rounded-full border-1 border-gray-300 shadow
              text-white  text-[12px] bg-white hover:bg-gray-100
              hover:scale-105 transition-transform duration-200
              whitespace-nowrap">
            <LinkPreview url={skill.url}>
              <span className="text-black font-semibold">{skill.name}</span>
            </LinkPreview>
          </div>
        ))}
      </div>
    </div>
  );
}
