import React from 'react'
import HeroSection from '../components/HeroSection'
import WorkExperinceSection from '../components/WorkExperinceSection'
import ExpertSection from '../components/ExpertSection'
import ProjectSection from '../components/ProjectSection'
import ScrollingBanner from '../components/ScrollingBanner'

const Home = () => {
  return (
    <>
      <div className="home-container flex flex-col lg:flex-row justify-center gap-5 pt-10 px-4">
        
        {/* Left Side - Main Sections */}
        <div className="main-section-container flex flex-col w-full lg:w-2/3">
          
          {/* Hero + Work/Expert */}
          <div className="main2-section flex flex-col md:flex-row">
            
            {/* Hero Section */}
            <div className="hero-section-container w-full md:w-1/2">
              <HeroSection />
            </div>

            {/* Work Experience + Expert */}
            <div className="main3-section-container flex flex-col mt-6 md:mt-0 md:ml-4 w-full md:w-1/2">
              <div className="work-experience-section-container">
                <WorkExperinceSection />
              </div>
              <div className="expert-section-container mt-7">
                <ExpertSection />
              </div>
            </div>

          </div>

          {/* Scrolling Banner */}
          <div className="scrollingBanner-section mt-8">
            <ScrollingBanner />
          </div>
        </div>

        {/* Right Side - Projects */}
        <div className="project-section-container w-full lg:w-1/3 mt-8 lg:mt-0">
          <ProjectSection />
        </div>

      </div>
    </>
  )
}

export default Home
