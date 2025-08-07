import React from 'react'
import HeroSection from '../components/HeroSection'
import WorkExperinceSection from '../components/WorkExperinceSection'
import ExpertSection from '../components/ExpertSection'
import ProjectSection from '../components/ProjectSection'
// import ServiceSection from '../components/ServiceSection'
import ScrollingBanner from '../components/ScrollingBanner'


const home = () => {
  return (
    <>
    
    {/* <div className="home-container flex flex-row justify-center gap-10 pt-10 ">
      
     <div>
      <div className="hero-section-container">
      <HeroSection />
      </div>
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
   
    </div>    */}


    <div className="home-container flex flex-row justify-center gap-5 pt-10">
      <div className="main-section-container flex flex-col">
        <div className='main2-section flex flex-row'>
          <div className="hero-section-container">
            <HeroSection />
          </div>
          
          <div className="main3-section-container flex flex-col ml-4">
            <div className="work-experience-section-container">
              <WorkExperinceSection />
            </div>
            <div className='expert-section-container mt-7'>
              <ExpertSection />
            </div>
          </div>

        </div>
        <div className='ScrollingBanner-section mt-8'>
          <ScrollingBanner />
        </div>

      </div>
      
      
      <div className='project-section-container'>
        <ProjectSection />
        </div>

     </div> 


    
   
    </>
  )
}


export default home