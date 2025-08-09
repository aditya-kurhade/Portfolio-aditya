import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen  py-16 px-6 flex justify-center items-center">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-2xl p-8 border border-gray-100 relative overflow-hidden">
        
        {/* Decorative gradient circle */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-full opacity-30 translate-x-10 -translate-y-10"></div>

        {/* Heading */}
        <h1 className="text-3xl font-bold text-gray-800 text-center">
          Let’s <span className="text-indigo-600">Build Something</span> Amazing
        </h1>
        <p className="text-gray-600 text-center mt-2 text-sm">
          I’m always excited to collaborate and create impactful solutions.
        </p>

        {/* Subheading */}
        <p className="text-center mt-4 text-lg text-gray-700 italic">
          “Interested to work with me? Let’s connect!”
        </p>

        {/* Contact Form */}
        <form className="mt-8 space-y-5">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-sm"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-sm"
          />
          <textarea
            rows="4"
            placeholder="Your Message..."
            className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-sm"
          ></textarea>
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-indigo-600 text-white py-3 rounded-lg shadow-md hover:bg-indigo-700 transition duration-200"
          >
            <FaPaperPlane /> Send Message
          </button>
        </form>

        {/* Social Links */}
        <div className="mt-8 flex justify-center gap-6 text-2xl">
          <a
            href="mailto:adityakurhade1000@gmail.com"
            className="text-red-500 hover:text-red-600 transition"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-black transition"
          >
            <FaGithub />
          </a>
        </div>

        {/* Small Footer Note */}
        <p className="text-xs text-gray-400 text-center mt-6">
          I usually respond within 24 hours — looking forward to hearing from you!
        </p>
      </div>
    </div>
  );
};

export default Contact;
