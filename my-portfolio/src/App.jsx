import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/home.jsx';
import Project from './pages/project.jsx';
import About from './pages/about.jsx';
import Contact from './pages/contact.jsx';
import Milestones from './components/milestones.jsx';
import Loader from './components/loader.jsx';
import WhyWorkWithMe from './components/WhyWorkWithMe.jsx';
import UnderDevelopment from './pages/UnderDevelopment.jsx';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading or replace with your actual loading logic
    const timer = setTimeout(() => setLoading(false), 2000); // 2 seconds loader
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <div
      style={{
        minHeight: '100vh',
        background: "linear-gradient(135deg, #f0f4ff 0%, #ffffff 100%)"
      }}
    >
      <BrowserRouter>
        <Routes>
          {/* Routes with Navbar */}
          <Route
            path="/"
            element={
              <>
                <div className="pt-10"><Navbar /></div>
                <Home />
              </>
            }
          />
          <Route
            path="/project"
            element={
              <>
                <div className="pt-10"><Navbar /></div>
                <UnderDevelopment />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <div className="pt-10"><Navbar /></div>
                <About />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <div className="pt-10"><Navbar /></div>
                <Contact />
              </>
            }
          />

          {/* Route without Navbar */}
          <Route path="/milestones" element={<Milestones />} />
          <Route path="/why-work-with-me" element={<WhyWorkWithMe />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
