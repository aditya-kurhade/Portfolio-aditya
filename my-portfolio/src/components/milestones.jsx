import React from "react";
import { FaAward, FaCertificate, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const Milestones = () => {
  const achievements = [
    "Best ACM Member (Technical Team)",
    "1st Position - Web Development Competition",
    "Smart India Hackathon 2024 Finalist",
    "Peer Counsellor Certified",
  ];

  const certifications = [
    { title: "Full Stack Web Development - NxtWave", img: "/certifications/fullstack.png" },
    { title: "Certified Python Programmer - NxtWave", img: "/certifications/python.png" },
    { title: "AWS Cloud Practitioner", img: "/certifications/aws.png" },
    { title: "React Developer - XYZ", img: "/certifications/react.png" },
  ];

  return (
    <div className="min-h-screen  py-12 px-6">
      {/* Back Button */}
      <div className="mb-6">
        <Link
          to="/"
          className="inline-flex items-center ml-10 gap-2 text-sm font-medium text-blue-600 hover:text-blue-800 transition"
        >
          <FaArrowLeft /> Back to Home
        </Link>
      </div>

      {/* Achievements Section */}
      <div className="max-w-5xl mx-auto mb-12">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-3 mb-6">
          <FaAward className="text-yellow-500" /> Achievements
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {achievements.map((ach, idx) => (
            <div
              key={idx}
              className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md border border-gray-100 transition duration-200"
            >
              <p className="text-gray-700 text-sm">{ach}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications Section */}
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-3 mb-6">
          <FaCertificate className="text-blue-500" /> Certifications
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md border border-gray-100 transition duration-200 flex flex-col items-center text-center"
            >
              <img
                src={cert.img}
                alt={cert.title}
                className="w-32 h-20 object-contain rounded-lg border border-gray-100 shadow-sm mb-3"
              />
              <p className="text-sm text-gray-700 font-medium">{cert.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Milestones;
