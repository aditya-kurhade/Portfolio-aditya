import React from 'react';
import Navbar from './components/Navbar.jsx';
import Home from './pages/home.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



const App = () => {
    return (
            <BrowserRouter>
            
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                </Routes>
            
            </BrowserRouter>
    )
}

export default App;