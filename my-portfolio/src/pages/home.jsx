import React from 'react'
import HeroSection from '../components/HeroSection'
import WorkExperinceSection from '../components/WorkExperinceSection'

const home = () => {
  return (
    <div className="home-container flex flex-row ">
      <div className="hero-section-container">
      <HeroSection />
      </div>
      <div>
      <div className="work-experience-section-container">
      <WorkExperinceSection />
      </div>
      </div>
    </div>
  )
}


export default home