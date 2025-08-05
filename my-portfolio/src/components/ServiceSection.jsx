import React from "react"
import customWebDev from '../assets/Img/service-logo/Custom Web Development.png';
import apiBackend from '../assets/Img/service-logo/API & Backend Integration.png';
import aiIntegration from '../assets/Img/service-logo/AI Integration & Automation.png';
import linkedinResume from '../assets/Img/service-logo/LinkedIn & Resume Optimization.png';

const servicesList = [
  {
    id: 1,
    title: "Custom Web Development",
    description: "Full-stack web applications with modern technologies",
    logo: customWebDev,
    logoSize: 'w-16 h-16'
  },
  {
    id: 2,
    title: "API & Backend Integration",
    description: "Robust backend systems and API development",
    logo: apiBackend,
    logoSize: 'w-16 h-16'
  },
  {
    id: 3,
    title: "AI Integration & Automation",
    description: "Smart solutions with AI and automation",
    logo: aiIntegration,
    logoSize: 'w-16 h-16'
  },
  {
    id: 4,
    title: "LinkedIn & Resume Optimization",
    description: "Professional profile and resume enhancement",
    logo: linkedinResume,
    logoSize: 'w-16 h-16'
  }
]

const ServiceSection = () => {
    return (
    <div className="service-section bg-white shadow-md w-[400px] rounded-[10px] p-4 ml-4">
        <h2 className="text-2xl font-bold mb-4">Services I Offer</h2>
        <div className="service-list space-y-4">
            {servicesList.map((service) => (
              <div key={service.id} className="service-item flex items-center p-3 hover:bg-gray-50 transition-colors duration-200 rounded-md cursor-pointer">
                <div className="service-logo mr-4">
                  <img 
                    src={service.logo} 
                    alt={`${service.title} Logo`} 
                    className={`${service.logoSize} object-contain transition-transform duration-300 hover:scale-110`}
                  />
                </div>
                <div className="service-content">
                  <h3 className="font-semibold text-lg">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              </div>
            ))}
        </div>
    </div>    
    )
}

export default ServiceSection;
