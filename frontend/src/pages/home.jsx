import React from 'react'
import HeroSection from '../components/HeroSection'
import WorkExperienceSection from '../components/WorkExperienceSection'
import ExpertSection from '../components/ExpertSection'
import ProjectSection from '../components/ProjectSection'
import ScrollingBanner from '../components/ScrollingBanner'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'


const Home = () => {
  return (
    <>
      <div className="relative min-h-screen bg-[#f5f2ed]">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,_rgba(14,116,144,0.12),_transparent_55%)]"></div>
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_80%_30%,_rgba(234,88,12,0.12),_transparent_45%)]"></div>
        <div className="relative z-10 pt-10"><Navbar /></div>
        <div className="relative z-10 home-container flex flex-col lg:flex-row justify-center gap-5 lg:pt-7 px-4 lg:mr-16 lg:ml-22">
        
        {/* Left Side - Main Sections */}
        <div className="main-section-container flex flex-col w-full lg:w-210">
          
          {/* Hero + Work/Expert */}
          <div className="main2-section flex flex-col md:flex-row mt-5 lg:mt-0 gap-5 lg:w-210">
            
            {/* Hero Section */}
            <div className="hero-section-container p-0 w-full md:w-1/2 lg:mt-[-25px]">
              <HeroSection />
            </div>

            {/* Work Experience + Expert */}
            <div className="main3-section-container flex flex-col mt-10  lg:mt-0  md:mt-0 md:ml-4 w-full md:w-1/2">
              <div className="work-experience-section-container">
                <WorkExperienceSection />
              </div>
              <div className="expert-section-container mt-7">
                <ExpertSection />
              </div>
            </div>

          </div>

          {/* Scrolling Banner */}
          <div className="scrollingBanner-section mt-10 lg:w-210">
            <ScrollingBanner />
          </div>
        </div>

        {/* Right Side - Projects */}
        <div className="project-section-container w-full lg:w-1/3 mt-8  lg:mt-0">
          <ProjectSection />
        </div>

        </div>
        <Footer />
      </div>
      
    </>
  )
}

export default Home
