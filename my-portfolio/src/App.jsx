import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/home.jsx';
import Project from './pages/project.jsx';



const App = () => {
    return (
            <BrowserRouter>
            
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/project" element={<Project />} />
                </Routes>
            
            </BrowserRouter>
    )
}

export default App;