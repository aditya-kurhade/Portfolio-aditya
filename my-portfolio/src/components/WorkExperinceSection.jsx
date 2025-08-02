import React from 'react'

const WorkExperinceSection = () => {
  return (
    <div className="work-experience-section bg-white shadow-md w-[400px] rounded-[10px] p-2 m-8">
        <h1 className="text-2xl font-bold p-2 m-2">Work Experience</h1>
        <div className="experience-item p-2 m-2">
            <h2 className="text-xl font-semibold">Teaching Assistant </h2>
            <p className="text-gray-600">NxtWave - Remote</p>
            <p className="text-gray-500">August 2024 – November 2024
          <li>Helped over 200+ learners debug projects and practice questions in JavaScript, Python, and React, ensuring better code quality and concept clarity.</li>
          <li>
            Profile:&nbsp;
            <a
              href="https://portal.ccbp.in/teaching-assistant-profile?uid=aditya-3"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              View Profile
            </a>
          </li>
            </p>       
            </div>
    </div>
  )
}

export default WorkExperinceSection