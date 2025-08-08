import React from 'react'
import HeroSection from '../components/HeroSection'
import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaEnvelope, FaAward, FaRocket } from 'react-icons/fa'
import ScrollLine from '../components/ScrollLine'

const About = () => {
  const skills = [
    "MERN Stack", "Python", "SQL", "Tailwind", "Next.js", "IoT", "AI"
  ]

  const stats = [
    { label: "Years Experience", value: "2+", color: "text-blue-500" },
    { label: "Projects Completed", value: "15+", color: "text-green-500" },
    { label: "Coders Guided", value: "200+", color: "text-orange-500" },
  ]

  const achievements = [
    "Best ACM Member (Technical Team)",
    "1st Position - Web Development Competition",
    "Smart India Hackathon 2024 Participant",
    "Peer Counsellor Certified"
  ]

  const certifications = [
    "Full Stack Web Development - NxtWave",
    "Certified Python Programmer - NxtWave"
  ]

  const timeline = [
    { year: "2023", text: "Started learning Full Stack Development" },
    { year: "2024", text: "Became Teaching Assistant at NxtWave CCBP" },
    { year: "2024", text: "Worked on IoT project SleepSync" },
    { year: "2025", text: "Building Data Science & Web3 skills" },
  ]

  return (
    <div className="about flex flex-col lg:flex-row justify-center gap-10 py-16 px-6  font-sans">
      {/* <ScrollLine /> */}

      
      <div className="about-hero w-full lg:w-1/3 mb-8 lg:mb-0">
      
      <HeroSection />
      </div>

      {/* Right: About Content */}
      <div className="about-content w-full lg:w-2/3">

      <section className=" text-white flex">
      <div className="">
        {/* Heading */}
        <div className="text-center">
         <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-teal-400 animate-pulse text-center">
  🚀 Who's Building This?
</h1>




          <p className="text-lg sm:text-xl mt-4 mb-5 text-gray-300 italic">
            Unpacking the mind behind the code.
          </p>
           <li>🚀 Tech Stack Highlights: <code className="bg-gray-800 px-2 py-1 rounded text-purple-400">Next.js</code>, <code className="bg-gray-800 px-2 py-1 rounded text-pink-400">Docker</code>, <code className="bg-gray-800 px-2 py-1 rounded text-yellow-400">Stripe SDK</code>, <code className="bg-gray-800 px-2 py-1 rounded text-blue-400">Kafka</code>, <code className="bg-gray-800 px-2 py-1 rounded text-green-400">Prisma</code>, and more.</li>
        </div>
          </div>
        </section>



      
           
        













        
        {/* Intro */}
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          Hi, I'm <span className="font-semibold text-indigo-600">Aditya Kurhade</span>, 
          a <span className="text-blue-600">Full Stack Developer</span> and 
          <span className="text-green-600"> Data Enthusiast</span> passionate about 
          building scalable and efficient solutions.
        </p>

        <p className="text-gray-600 mb-4">
          I work with <span className="text-purple-600">MERN Stack, Python, SQL, Tailwind, and Next.js</span> 
          to create impactful projects. I also have experience as a Teaching Assistant, 
          helping over <span className="text-orange-500 font-semibold">200+ learners</span> debug code 
          and understand core programming concepts.
        </p>

        {/* Stats */}
        <div className="flex gap-10 mb-8">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: index * 0.2 }}
              className="text-center"
            >
              <h2 className={`text-4xl font-bold ${stat.color}`}>{stat.value}</h2>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Skills */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Skills</h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <span 
                key={index} 
                className="px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <FaAward className="text-yellow-500" /> Achievements
          </h3>
          <ul className="list-disc list-inside text-gray-600">
            {achievements.map((ach, index) => (
              <li key={index}>{ach}</li>
            ))}
          </ul>
        </div>

        {/* Certifications */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Certifications</h3>
          <ul className="list-disc list-inside text-gray-600">
            {certifications.map((cert, index) => (
              <li key={index}>{cert}</li>
            ))}
          </ul>
        </div>

        {/* Timeline */}
        <div className="mb-8">
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
        <div className="flex gap-6">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
            className="text-blue-600 hover:text-blue-800 text-2xl">
            <FaLinkedin />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
            className="text-gray-800 hover:text-black text-2xl">
            <FaGithub />
          </a>
          <a href="mailto:adityakurhade1000@gmail.com" 
            className="text-red-500 hover:text-red-700 text-2xl">
            <FaEnvelope />
          </a>
        </div>

      </div>   
    </div> 
  )
}

export default About
