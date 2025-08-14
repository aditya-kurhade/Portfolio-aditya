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

const WorkExperinceSection = () => {
  return (
    <div className="bg-white shadow-md w-full max-w-sm sm:max-w-md lg:max-w-lg rounded-lg p-4 sm:p-6 overflow-hidden">
      {/* Section Title */}
      <h1 className="text-xl sm:text-2xl font-bold border-b border-gray-200 pb-2 mb-3">
        Work Experience
      </h1>

      {/* Scrolling List */}
      <div className="h-64 overflow-hidden relative">
        <div className="animate-scroll-up">
          {[...workExperience, ...workExperience].map((exp, index) => (
            <div
              key={`${exp.id}-${index}`}
              className="flex items-center gap-4 p-3 mb-3 rounded-md hover:bg-gray-50 hover:shadow-sm transition-all duration-200"
            >
              {/* Year */}
              <div className="flex-shrink-0 text-gray-500 text-xs sm:text-sm font-medium w-16 sm:w-20">
                {exp.year}
              </div>

              {/* Logo */}
              <div className="flex-shrink-0">
                <img
                  src={exp.logo}
                  alt={`${exp.company} Logo`}
                  className={`${exp.logoSize} object-contain rounded-md`}
                />
              </div>

              {/* Company Info */}
              <div className="flex flex-col">
                <h2 className="font-semibold text-gray-800 text-sm sm:text-base">
                  {exp.company}
                </h2>
                <p className="text-gray-500 text-xs sm:text-sm">
                  {exp.position}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WorkExperinceSection
