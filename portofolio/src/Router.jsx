import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Interest from './pages/Interest';
import Awards from './pages/Awards';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; 

function AppRouter() {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/interest" element={<Interest />} />
          <Route path="/awards" element={<Awards />} />
        </Routes>
      </div>
      <Footer /> 
    </Router>
  );
}

export default AppRouter;
