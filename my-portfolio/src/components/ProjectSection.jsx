import React from 'react'
import {Link} from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";
import realtimeLocationImg from '../assets/Img/realtime location project banner img.avif';

const ProjectSection = () => {
  return (
    <div className="bg-white shadow-md w-[400px] rounded-[10px] p-2 ml-4">
        <div className="project-section-header flex flex-row font-roboto">
        <h1 className="text-2xl font-bold font-roboto">Recent Projects</h1>
        <div className="ml-auto flex items-center text-gray-400 hover:text-blue-500">
        <p className='text-lg ml-12 mt-1 font-bold font-roboto' ><Link to="/project">All Projects</Link></p>
         <Link to="/project"><FaArrowRightLong className='mt-1 ml-1 text-semibold'/></Link>
        </div>
        </div>
        <div className="project-list mt-6 flex flex-wrap gap-2">
            <div className="project-item p-2">
                <img
                  src={realtimeLocationImg}
                  alt="Realtime Location Project"
                  className="w-full h-60 object-cover rounded-md mb-2"
                />
            </div>
            <div className="project-item p-2 ">
                <img
                  src={realtimeLocationImg}
                  alt="Realtime Location Project"
                  className="w-full h-60 object-cover rounded-md mb-2"
                />
            </div>
        </div>            
    </div>
  )
}

export default ProjectSection