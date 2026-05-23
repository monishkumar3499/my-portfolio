import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import Achievements from './components/Achievements';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className={`relative min-h-screen text-text bg-bg selection:bg-accent/25 selection:text-text overflow-x-hidden transition-all duration-300 ${isCollapsed ? 'sidebar-collapsed' : 'sidebar-expanded'}`}>
      {/* Background Animated Orbs */}
      <div className="orb-container">
        <div className="orb orb1"></div>
        <div className="orb orb2"></div>
        <div className="orb orb3"></div>
      </div>

      {/* Sidebar Navigation */}
      <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />

      {/* Main Content Area - Animated in lockstep with the Sidebar spring */}
      <motion.main
        initial={isMobile ? { paddingLeft: '0px', paddingTop: '60px' } : { paddingLeft: '260px' }}
        animate={isMobile ? { paddingLeft: '0px', paddingTop: '60px' } : { paddingLeft: isCollapsed ? '70px' : '260px' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="flex-1 min-h-screen px-4 md:px-12 pb-12"
      >
        {/* Render each section with exact matching ID for anchor navigation */}
        <div id="hero"><Hero isCollapsed={isCollapsed} /></div>
        <div id="about"><About isCollapsed={isCollapsed} /></div>
        <div id="experience"><Experience isCollapsed={isCollapsed} /></div>
        <div id="projects"><Projects isCollapsed={isCollapsed} /></div>
        <div id="skills"><Skills isCollapsed={isCollapsed} /></div>
        <div id="achievements"><Achievements isCollapsed={isCollapsed} /></div>
        
        {/* Footer */}
        <Footer isCollapsed={isCollapsed} />
      </motion.main>

      {/* Custom Cursor */}
      <CustomCursor />
    </div>
  );
}

export default App;
