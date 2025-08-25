import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaAward, FaRocket, FaPlay, FaPause } from 'react-icons/fa';
import VerticalTimeline from '../components/VerticalTimeline';

const About = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const scrollRef = useRef(null);

  const stats = [
    { label: "Years Experience", value: "2+", color: "text-blue-500" },
    { label: "Projects Completed", value: "10+", color: "text-green-500" },
    { label: "Coders Guided", value: "200+", color: "text-orange-500" },
  ];

  const achievements = [
    "Best ACM Member (Technical Team)",
    "1st Position - Web Development Competition",
    "Smart India Hackathon 2024 Finalist",
    "Peer Counsellor Certified"
  ];

  const certificationImages = [
    { title: "Fossee Python  - IIT Bombay", img: "https://res.cloudinary.com/dbd5zow1e/image/upload/v1754836054/Fossee_basic_python_page-0001_qhcli5.jpg" },
    { title: "Certified Python Programmer - NxtWave", img: "https://res.cloudinary.com/dbd5zow1e/image/upload/v1754836017/Python_page-0001_t49avh.jpg" },
    { title: "XPM 4.O - NxtWave", img: "https://res.cloudinary.com/dbd5zow1e/image/upload/v1754836017/XPM_4.0_certificate_page-0001_onisjx.jpg" },
    { title: "Teaching Assistent - NxtWave", img: "https://res.cloudinary.com/dbd5zow1e/image/upload/v1754835339/Teaching_Assistant_lkohb7.png" },
    { title: "Responsive website - NxtWave", img: "https://res.cloudinary.com/dbd5zow1e/image/upload/v1754836016/Responsive_web_page-0001_pws9j2.jpg" },
    { title: "Static Website - NxtWave", img: "https://res.cloudinary.com/dbd5zow1e/image/upload/v1754836017/Static_web_page-0001_a78uln.jpg" },
    { title: "AWS Cloud Practitioner", img: "/certifications/aws.png" },
    { title: "React Developer - XYZ", img: "/certifications/react.png" },
  ];

  const timeline = [
    { year: "2023", text: "Started learning Full Stack Development" },
    { year: "2024", text: "Became Teaching Assistant at NxtWave CCBP" },
    { year: "2024", text: "Worked on IoT project SleepSync" },
    { year: "2025", text: "Building Data Science & Web3 skills" },
  ];

  // Auto-scroll effect
  useEffect(() => {
    if (!isPlaying) return;
    const scrollInterval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += 1; // smooth scrolling speed
        if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth - scrollRef.current.clientWidth) {
          scrollRef.current.scrollLeft = 0; // seamless loop
        }
      }   
    }, 15); // smaller value = faster

    return () => clearInterval(scrollInterval);
  }, [isPlaying]);

  return (
    <div className="about flex flex-col lg:flex-row justify-center gap-10 py-16 px-6 font-sans">

      {/* Left Timeline */}
      {/* <div className="about-verticalTime w-full lg:w-2/5 mb-8 lg:mb-0 flex justify-center items-center ">
        {/* <VerticalTimeline /> */}
      {/* </div> */} 

      {/* Right Content */}
      <div className="about-content w-full lg:w-2/3 p-6 mt-[-30px]">

        {/* Intro Section */}
        <section className="bg-white py-12 px-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50 to-purple-50 opacity-50 pointer-events-none"></div>
          <div className="relative max-w-4xl mx-auto mt-[-80px] text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3  mt-12 tracking-tight">Behind the Code</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto mb-6 shadow-md"></div>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed backdrop-blur-sm p-4 rounded-lg shadow-sm border border-gray-100">
              Hi, I’m <span className="font-semibold text-indigo-600">Aditya Kurhade</span>!  
              I’m a <span className="font-semibold text-blue-600">3rd-year engineering student</span> who’s always curious about how things work and how to make them better.  
              I love exploring new ideas, learning from different experiences, and working with people who share the same passion for growth.  
              When I’m not studying, you’ll probably find me thinking about cool projects, trying out new skills, or just enjoying a good conversation.
            </p>
          </div>
        </section>

        {/* Stats */}
        <div className="flex gap-10 mb-8 justify-center">
          {stats.map((stat, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.2 }} className="text-center">
              <h2 className={`text-4xl font-bold ${stat.color}`}>{stat.value}</h2>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Achievements */}
<div className="mt-12  w-75 lg:w-auto">
  <div className="flex items-center justify-between mb-3">
    <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
      <FaAward className="text-yellow-500" /> Achievements
    </h3>
    <Link
  to="/milestones"
  className="flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800 transition-colors duration-200"
>
  View All
  <FaRocket className="text-[10px]" />
</Link>
  </div>
  <ul className="list-disc list-inside text-gray-600 text-sm space-y-2">
    {achievements.map((ach, index) => (
      <li key={index}>{ach}</li>
    ))}
  </ul>
</div>

{/* Certifications Carousel */}
<div className="mt-8   w-75 lg:w-auto">
  <div className="flex items-center justify-between mb-3">
    <h3 className="text-xl font-semibold text-gray-800">Certifications</h3>
    <button
    onClick={() => setIsPlaying(!isPlaying)}
    className="text-gray-500 hover:text-gray-800 text-xs p-1 rounded-full bg-white shadow-sm border border-gray-200 z-10"
  >
    {isPlaying ? <FaPause /> : <FaPlay />}
  </button>
  </div>
  

  <div
    ref={scrollRef}
    className="flex gap-6 overflow-x-auto scrollbar-hide px-3 py-6  border border-gray-200 rounded-lg bg-white shadow-inner"
    style={{ scrollBehavior: "smooth" }}
  >
    {certificationImages.map((cert, idx) => (
      <div key={idx} className="flex-shrink-0 w-40 flex flex-col items-center text-center">
        <img
          src={cert.img}
          alt={cert.title}
          className="w-32 h-20 object-contain rounded-md border border-gray-100 shadow-sm"
        />
        <p className="mt-2 text-[11px] text-gray-700 leading-tight font-medium">{cert.title}</p>
      </div>
    ))}
  </div>
</div>


        {/* Timeline */}
        <div className="mt-8 ">
          <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <FaRocket className="text-blue-500" /> My Journey
          </h3>
          <div className="border-l-2 border-blue-300 pl-4">
            {timeline.map((item, index) => (
              <div key={index} className="mb-4">
                <p className="text-blue-600 font-bold">{item.year}</p>
                <p className="text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 mt-8">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-2xl"><FaLinkedin /></a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-black text-2xl"><FaGithub /></a>
          <a href="mailto:adityakurhade1000@gmail.com" className="text-red-500 hover:text-red-700 text-2xl"><FaEnvelope /></a>
        </div>

      </div>
    </div>
  );
};

export default About;
