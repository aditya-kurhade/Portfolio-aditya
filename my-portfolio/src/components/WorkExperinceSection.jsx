import React from 'react'
import nxtwaveLogo from '../assets/Img/company-logo/nxtwave-logo.jpeg';
import ghrcemLogo from '../assets/Img/company-logo/ACM-logo.png';
import internshalaLogo from '../assets/Img/company-logo/internshala-logo.jpg';


const workExperience = [
  {
    id: 1,
    year: '2024-2025',
    company: 'NxtWave',
    position: 'Teaching Assistant',
    logo: nxtwaveLogo,
    logoSize: 'w-13 h-13'
  },
  {
    id: 2,
    year: '2024-2025',
    company: 'GHRCEM ACM',
    position: 'President',
    logo: ghrcemLogo,
    logoSize: 'w-12 h-12 '
  },
  {
    id: 3,
    year: '2023-2024',
    company: 'Internshala',
    position: 'ISP',
    logo: internshalaLogo,
    logoSize: 'w-15 h-15'
  },
  {
    id: 4,
    year: '2023-2024',
    company: 'GHRCEM ACM',
    position: 'Technical Member',
    logo: ghrcemLogo,
    logoSize: 'w-12 h-12'
  }
]

const WorkExperinceSection = () => {
  return (
    <div className="work-experience-section bg-white shadow-md w-[400px] rounded-[10px] p-2 ml-4 overflow-hidden">
        <h1 className="text-2xl font-bold p-2 m-2">Work Experience</h1>
        <div className="scrolling-container h-64 overflow-hidden relative">
          <div className="scrolling-content animate-scroll-up">
            {workExperience.map((experience) => (
              <div key={experience.id} className="experience-item flex flex-row p-2 m-2 hover:bg-gray-50 transition-colors duration-200 rounded-md">
                <div><p className='text-gray-500'>{experience.year}</p></div>
                <div className="ml-20">
                                 <img 
                     src={experience.logo} 
                     alt={`${experience.company} Logo`} 
                     className={`${experience.logoSize} object-contain mt-[-8px] transition-transform duration-300  cursor-pointer`}
                   />
                </div>
                <div>
                  <h1 className='font-semibold  ml-4 '>{experience.company}</h1>
                  <p className='text-gray-500  text-sm ml-4'>{experience.position}</p>
                </div>
              </div>
            ))}
            {workExperience.map((experience) => (
              <div key={`duplicate-${experience.id}`} className="experience-item flex flex-row p-2 m-2 hover:bg-gray-50 transition-colors duration-200 rounded-md">
                <div><p className='text-gray-500'>{experience.year}</p></div>
                <div className="ml-20">
                                 <img 
                     src={experience.logo} 
                     alt={`${experience.company} Logo`} 
                     className={`${experience.logoSize} object-contain mt-[-8px] transition-transform duration-300  cursor-pointer`}
                   />
                </div>
                <div>
                  <h1 className='font-semibold  ml-4 '>{experience.company}</h1>
                  <p className='text-gray-500  text-sm ml-4'>{experience.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
    </div>
  )
}

export default WorkExperinceSection