import React from 'react'
import nxtwaveLogo from '../assets/img/nxtwave-logo.jpeg';

const WorkExperinceSection = () => {
  return (
    <div className="work-experience-section bg-white shadow-md w-[400px] rounded-[10px] p-2 ml-4">
        <h1 className="text-2xl font-bold p-2 m-2">Work Experience</h1>
        <div className="experience-item flex flex-row p-2 m-2">
          <div><p className='text-gray-500'>2024-2025</p></div>
          <div className="ml-14">
            <img src={nxtwaveLogo} alt="NxtWave Logo" className='w-18 mt-[-10px]'/>
          </div>
          <div>
            <h1 className='font-semibold'>NxtWave</h1>
            <p className='text-gray-500'>Teaching Assistant</p>
          </div>
            </div>
    </div>
  )
}

export default WorkExperinceSection