import React from 'react'
import HeroSection from '../components/HeroSection'
import WorkExperinceSection from '../components/WorkExperinceSection'
import ExpertSection from '../components/ExpertSection'
import ProjectSection from '../components/ProjectSection'


const home = () => {
  return (
    <>
    <div className="home-container flex flex-row justify-center gap-10">
      <div className="hero-section-container">
      <HeroSection />
      </div>
      <div>
        
      <div className="work-experience-section-container">
      <WorkExperinceSection />
      </div>
      <div className='expert-section-container mt-7'>
      <ExpertSection />
      </div>
      </div>
      <div className="project-section-container">
      <ProjectSection />
      </div>
    </div>
    </>
  )
}


export default home