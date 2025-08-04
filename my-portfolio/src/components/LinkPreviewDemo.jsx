import React from "react";
import { LinkPreview } from "./ui/link-preview.jsx";

const skills = [
  { name: "React", url: "https://react.dev/" },
  { name: "Node.js", url: "https://nodejs.org/" },
  { name: "Python", url: "https://www.python.org/" },
  { name: "C++", url: "https://isocpp.org/" },
  { name: "JavaScript", url: "https://developer.mozilla.org/docs/Web/JavaScript" },
  { name: "Bootstrap", url: "https://getbootstrap.com/" },
  { name: "SQL", url: "https://www.w3schools.com/sql/" },
  { name: "MongoDB", url: "https://www.mongodb.com/" },
  { name: "Tableau", url: "https://www.tableau.com/" },
  { name: "Power BI", url: "https://powerbi.microsoft.com/" },
  { name: "Git", url: "https://git-scm.com/" },
  { name: "GitHub", url: "https://github.com/" }
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
      <div className="flex flex-wrap gap-3 mt-6 justify-center">
        {skills.map(skill => (
          <div key={skill.name} className="w-auto px-4 py-2 rounded-full border-2 border-gray-300 shadow
              text-white font-semibold text-sm
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
