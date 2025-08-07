import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/home.jsx';
import Project from './pages/project.jsx';
import About from './pages/about.jsx';



const App = () => {
    return (
        <>
        <div
      style={{
        minHeight: '100vh',
        background: "linear-gradient(135deg, #f0f4ff 0%, #ffffff 100%)"
      }}
    >
            <BrowserRouter>
                <div className="pt-10">
                <Navbar />
                </div>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/project" element={<Project />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            
            </BrowserRouter>
            </div>
        </>
    )
}

export default App;