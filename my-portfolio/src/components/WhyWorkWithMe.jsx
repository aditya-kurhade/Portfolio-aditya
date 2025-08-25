import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaLaptopCode, FaChartLine, FaRobot, FaBolt, FaTrophy, FaBrain, FaArrowLeft } from 'react-icons/fa';

const WhyWorkWithMe = () => {
  const points = [
    {
      icon: <FaLaptopCode className="text-blue-500 w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      title: "Full Stack Expertise",
      description: "I build end-to-end web applications, from frontend interfaces with React/Next.js to backend APIs, databases, and cloud deployments."
    },
    {
      icon: <FaChartLine className="text-green-500 w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      title: "Data Analytics & Insights",
      description: "I analyze complex datasets, visualize trends, and make data-driven decisions that improve business outcomes."
    },
    {
      icon: <FaRobot className="text-purple-500 w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      title: "AI & Machine Learning",
      description: "I integrate AI tools and ML models into applications, like AI-powered code reviewers and predictive analytics dashboards."
    },
    {
      icon: <FaBolt className="text-yellow-400 w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      title: "Fast Delivery & Clean Code",
      description: "I write efficient, scalable, and maintainable code using modern tools like Tailwind, Prisma, and Docker."
    },
    {
      icon: <FaTrophy className="text-pink-500 w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      title: "Proven Performer",
      description: "Hackathon finalist, Web Development champion, and Teaching Assistant for 200+ peers—delivering quality results under deadlines."
    },
    {
      icon: <FaBrain className="text-indigo-500 w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      title: "Quick Learner & Adaptable",
      description: "From new frameworks to cloud services, I can pick up technologies fast and apply them effectively in projects."
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-10 sm:py-20 px-4 sm:px-6 lg:px-20">
      {/* Back to Home Button */}
      <div className="mb-4 sm:mb-6 lg:mb-10">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm sm:text-base font-medium text-blue-600 hover:text-blue-800 transition"
        >
          <FaArrowLeft /> Back to Home
        </Link>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-full sm:max-w-3xl lg:max-w-4xl mx-auto bg-gray-900 text-white p-6 sm:p-10 rounded-2xl shadow-xl"
      >
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
          🚀 Why Hire Me?
        </h2>

        <ul className="space-y-4 sm:space-y-6 lg:space-y-8 text-sm sm:text-base lg:text-lg leading-relaxed">
          {points.map((point, idx) => (
            <motion.li
              key={idx}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg cursor-pointer hover:bg-gray-800 transition-all duration-300"
              whileHover={{ scale: 1.03 }}
            >
              <div className="flex-shrink-0">{point.icon}</div>
              <div>
                <strong>{point.title}:</strong> {point.description}
              </div>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default WhyWorkWithMe;
