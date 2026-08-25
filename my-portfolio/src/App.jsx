import React, { useEffect, useState } from 'react';
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



import VersionBanner from './components/VersionBanner.jsx';

const AppContent = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 6200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <div
      style={{
        minHeight: '100vh',
        background: "linear-gradient(135deg, #f8faff 0%, #f0f4ff 30%, #ffffff 70%, #faf5ff 100%)"
      }}
    >
      <VersionBanner />
      <Routes>
        {/* Routes with Navbar */}
        <Route
          path="/"
          element={
            <>
            
              <Home />
            </>
          }
        />
        <Route
          path="/project"
          element={
            <>
              <Project />
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
        <Route
          path="/under-development"
          element={
            <>
              <div className="pt-10"><Navbar /></div>
              <UnderDevelopment />
            </>
          }
        />

        {/* Route without Navbar */}
        <Route path="/milestones" element={<Milestones />} />
        <Route path="/why-work-with-me" element={<WhyWorkWithMe />} />
      </Routes>
    </div>
  );
};

const App = () => (
  <BrowserRouter>
    <AppContent />
  </BrowserRouter>
);

export default App;
