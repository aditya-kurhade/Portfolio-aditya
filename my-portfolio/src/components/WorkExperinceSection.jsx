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
    logoSize: 'w-12 h-12',
    accent: 'border-l-4 border-blue-500'
  },
  // {
  //   id: 2,
  //   year: '2024-2025',
  //   company: 'GHRCEM ACM',
  //   position: 'President',
  //   logo: ghrcemLogo,
  //   logoSize: 'w-12 h-12',
  //   accent: 'border-l-4 border-purple-500'
  // },
  {
    id: 3,
    year: '2023-2024',
    company: 'Internshala',
    position: 'ISP',
    logo: internshalaLogo,
    logoSize: 'w-12 h-12',
    accent: 'border-l-4 border-teal-500'
  },
  // {
  //   id: 4,
  //   year: '2023-2024',
  //   company: 'GHRCEM ACM',
  //   position: 'Technical Member',
  //   logo: ghrcemLogo,
  //   logoSize: 'w-12 h-12',
  //   accent: 'border-l-4 border-purple-500'
  // }
];

const WorkExperinceSection = () => {
  return (
    <div className="bg-white shadow-md w-[400px] rounded-lg p-4 ml-4 overflow-hidden">
      {/* Section Title */}
      <h1 className="text-2xl font-bold border-b border-gray-200 pb-2 mb-3">
        Work Experience
      </h1>

      {/* Scrolling List */}
      <div className="h-64 overflow-hidden relative ">
        <div className="animate-scroll-up">
          {[...workExperience, ...workExperience].map((exp, index) => (
            <div
              key={`${exp.id}-${index}`}
              className={`flex items-center gap-4 p-3 mb-3 rounded-md hover:bg-gray-50 hover:shadow-sm transition-all duration-200 hover:border-l-4 border-blue-500`}
            >
              {/* Year */}
              <div className="w-20 text-gray-500 text-sm font-medium">
                {exp.year}
              </div>

              {/* Logo */}
              <div className="flex-shrink-0 ml-14">
                <img
                  src={exp.logo}
                  alt={`${exp.company} Logo`}
                  className={`${exp.logoSize} object-contain rounded-md`}
                />
              </div>

              {/* Company Info */}
              <div>
                <h2 className="font-semibold text-gray-800 ">{exp.company}</h2>
                <p className="text-gray-500 text-sm ">{exp.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkExperinceSection;
