import React from 'react'


const projectList = [
    {"name": "Jobby",
        "description": "A job application website that allows users to search and apply for jobs.",
        "imageUrl": "https://assets.ccbp.in/frontend/react-js/jobby-img.png",
        "projectUrl": "https://jobsApplication.ccbp.tech",
        "id": 1
    },
    {
        "name": "Ai Powered Code Reviewer",
        "description": "An AI-powered code reviewer that provides feedback on code quality and best practices.",
        "imageUrl": "https://assets.ccbp.in/frontend/react-js/ai-powered-code-reviewer-img.png",
        "projectUrl": "https://ai-powered-code-reviwer.vercel.app",
        "id": 2
    },
    {
        "name": "Realtime Location Tracker",
        "description": "A real-time location tracker that allows users to track their location in real-time.",
        "imageUrl": "https://assets.ccbp.in/frontend/react-js/realtime-location-tracker-img.png",
        "projectUrl": "https://realtime-location-tracker-zpej.onrender.com",
        "id": 3
    },
    {   "name": "IPL Dashboard",
        "description": "An IPL dashboard that provides information about IPL teams, players, and matches.",
        "imageUrl": "https://assets.ccbp.in/frontend/react-js/ipl-dashboard-img.png",
        "projectUrl": "https://iplborad.ccbp.tech/",
        "id": 4
    },
    {
        "name": "Todos App",
        "description": "A simple todos application that allows users to manage their tasks.",
        "imageUrl": "https://assets.ccbp.in/frontend/react-js/todos-app-img.png",
        "projectUrl": "https://todosapp10.ccbp.tech",
        "id": 5 
     },
     {
        "name": "Food Munch",
        "description": "A food delivery application that allows users to order food from various restaurants.",
        "imageUrl": "https://assets.ccbp.in/frontend/react-js/food-munch-img.png",
        "projectUrl": "https://adifoodmunch10.ccbp.tech",
        "id": 6
    }, 
    {   
        "name": "Tourism Website",
        "description": "A tourism website that provides information about various tourist destinations.",
        "imageUrl": "https://assets.ccbp.in/frontend/react-js/tourism-img.png",
        "projectUrl": "https://tourismweb1001.ccbp.tech",
        "id": 7
    },  
]
const project = () => {
  return (
    <div className="project">
        <div className="project-list w-1/3 flex flex-wrap p-5 text-center text-xl font-bold mt-10 mb-5">
            {projectList.map((project) => (
                <div key={project.id} className="project-item mb-5">
                    <p className="text-[15px] font-semibold m-2 border rounded-sm p-2">{project.name}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default project