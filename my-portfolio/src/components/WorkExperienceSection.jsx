import React from 'react'
import nxtwaveLogo from '../assets/Img/company-logo/nxtwave-logo.jpeg';
import ghrcemLogo from '../assets/Img/company-logo/ACM-logo.png';
// import internshalaLogo from '../assets/Img/company-logo/internshala-logo.jpg';

const workExperience = [
  {
    id: 1,
    year: '2024-2025',
    company: 'NxtWave',
    position: 'Teaching Assistant',
    logo: nxtwaveLogo,
    logoSize: 'w-10 h-10 sm:w-12 sm:h-12',
  },
  {
    id: 2,
    year: '2024-2025',
    company: 'GHRCEM ACM',
    position: 'President',
    logo: ghrcemLogo,
    logoSize: 'w-10 h-10 sm:w-12 sm:h-12',
  },
  // Uncomment if needed
  // {
  //   id: 3,
  //   year: '2023-2024',
  //   company: 'Internshala',
  //   position: 'ISP',
  //   logo: internshalaLogo,
  //   logoSize: 'w-12 h-12',
  // },
];

const WorkExperienceSection = () => {
  return (
    <div className="bg-white shadow-md border border-indigo-100 w-full max-w-sm sm:max-w-md lg:max-w-lg rounded-xl lg:h-80 sm:p-3 overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Section Title */}
      <h1 className="text-xl sm:text-2xl font-bold border-b border-gray-100 font-roboto m-1 pb-3">
        <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">Work Experience</span>
      </h1>

      {/* Scrolling List */}
      <div className="h-64 overflow-hidden relative">
        <div className="animate-scroll-up">
          {[...workExperience, ...workExperience].map((exp, index) => (
            <div
              key={`${exp.id}-${index}`}
              className="flex items-center gap-4 p-3 mb-3 rounded-lg hover:bg-blue-50/50 hover:shadow-sm transition-all duration-200 group"
            >
              {/* Year */}
              <div className="flex-shrink-0 text-indigo-500 text-xs sm:text-sm font-semibold w-20 sm:w-24 bg-indigo-50 px-3 py-1 rounded-md text-center">
                {exp.year}
              </div>

              {/* Logo */}
              <div className='flex flex-row ml-17 lg:ml-17'>
              <div className="flex-shrink-0">
                <img
                  src={exp.logo}
                  alt={`${exp.company} Logo`}
                  className={`${exp.logoSize} object-contain rounded-md`}
                />
              </div>

              {/* Company Info */}
              <div className="flex flex-col ">
                <h2 className="font-semibold text-slate-800 text-sm sm:text-base group-hover:text-blue-700 transition-colors duration-200">
                  {exp.company}
                </h2>
                <p className="text-slate-500 text-xs sm:text-sm">
                  {exp.position}
                </p>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WorkExperienceSection
