import { useEffect } from 'react';
import { motion } from 'framer-motion';

const Sidebar = ({ isCollapsed, setIsCollapsed }) => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 1024;

  const socialLinks = [
    {
      icon: (
        <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
        </svg>
      ),
      label: 'GitHub',
      href: 'https://github.com/monishkumar3499'
    },
    {
      icon: (
        <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      ),
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/monishkumar-v/'
    },
    {
      icon: (
        <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
        </svg>
      ),
      label: 'LeetCode',
      href: 'https://leetcode.com/u/Mon1shkumar/'
    }
  ];

  const menuLinks = [
    {
      name: 'Home',
      href: '#hero',
      icon: (
        <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 0 0 1 1h3m10-11l2 2m-2-2v10a1 1 0 0 1-1 1h-3m-6 0a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1m-6 0h6"/>
        </svg>
      )
    },
    {
      name: 'About',
      href: '#about',
      icon: (
        <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
        </svg>
      )
    },
    {
      name: 'Experience',
      href: '#experience',
      icon: (
        <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
        </svg>
      )
    },
    {
      name: 'Projects',
      href: '#projects',
      icon: (
        <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-6l-2-2H5a2 2 0 0 0-2 2z"/>
        </svg>
      )
    },
    {
      name: 'Skills',
      href: '#skills',
      icon: (
        <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><circle cx="12" cy="12" r="3"/></svg>
      )
    },
    {
      name: 'Achievements',
      href: '#achievements',
      icon: (
        <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 15v2m-6 4h12M12 3v10M6 5v4a6 6 0 0012 0V5H6z"/>
        </svg>
      )
    }
  ];

  return (
    <>
      {/* Mobile Header (Hamburger Toggle Top Bar) */}
      {isMobile && (
        <div className="fixed top-0 left-0 right-0 h-[60px] bg-[rgba(10,10,10,0.8)] backdrop-blur-md border-b border-border-accent/10 z-[99] flex items-center justify-between px-6">
          <span className="font-heading font-extrabold text-[1.1rem] text-white tracking-wider uppercase">
            MONISH KUMAR <span className="text-accent">V</span>
          </span>
          <button
            className="flex flex-col gap-[5px] cursor-pointer w-[24px] z-[101]"
            onClick={() => setIsCollapsed(!isCollapsed)}
            aria-label="Toggle Navigation"
          >
            <span className={`w-full h-[2px] bg-text rounded-[1px] transition-all duration-300 ${isCollapsed ? 'rotate-45 translate-y-[7px]' : ''}`}></span>
            <span className={`w-full h-[2px] bg-text rounded-[1px] transition-all duration-300 ${isCollapsed ? 'opacity-0' : ''}`}></span>
            <span className={`w-full h-[2px] bg-text rounded-[1px] transition-all duration-300 ${isCollapsed ? '-rotate-45 -translate-y-[7px]' : ''}`}></span>
          </button>
        </div>
      )}

      {/* Sidebar Container */}
      <motion.div
        initial={isMobile ? { x: -300 } : { width: '260px' }}
        animate={isMobile ? (isCollapsed ? { x: 0 } : { x: -300 }) : { width: isCollapsed ? '70px' : '260px' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className={`fixed top-0 left-0 h-screen bg-[rgba(8,8,8,0.95)] backdrop-blur-[15px] border-r border-border-accent/10 z-[100] flex flex-col p-4 overflow-y-auto overflow-x-hidden ${
          isMobile ? 'shadow-[5px_0_30px_rgba(0,0,0,0.5)] pt-[80px] w-[260px]' : 'pt-12'
        }`}
      >
        {/* Desktop floating minimize toggle arrow */}
        {/* Desktop floating minimize toggle arrow */}
        {!isMobile && (
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className={`absolute top-[24px] w-5.5 h-5.5 rounded-full bg-accent text-bg flex items-center justify-center border border-border-accent/30 shadow-md cursor-pointer hover:scale-110 transition-all duration-200 z-[102] ${isCollapsed ? 'right-[24px]' : 'right-[12px]'}`}
            aria-label={isCollapsed ? "Expand Sidebar" : "Minimize Sidebar"}
          >
            <svg width="11" height="11" fill="none" stroke="currentColor" strokeWidth="3.5" viewBox="0 0 24 24" className={`transition-transform duration-300 ${isCollapsed ? 'rotate-180' : ''}`}>
              <path d="M15 19l-7-7 7-7"/>
            </svg>
          </button>
        )}

        {/* MENU Section (First Order) */}
        <div className="mb-8 w-full">
          {(!isCollapsed || isMobile) && (
            <p className="font-mono text-muted text-[0.65rem] tracking-widest uppercase mb-4 opacity-50 border-b border-border/10 pb-1 px-2">
              MENU
            </p>
          )}
          <div className={`space-y-1 w-full transition-all duration-300 ${isCollapsed && !isMobile ? 'pt-4' : ''}`}>
            {menuLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={() => isMobile && setIsCollapsed(false)}
                className={`flex items-center text-muted font-medium hover:text-accent hover:bg-[rgba(181,255,77,0.04)] rounded-[6px] transition-all duration-200 ${
                  isCollapsed && !isMobile ? 'justify-center p-2.5' : 'px-3 py-2.5'
                }`}
                title={isCollapsed && !isMobile ? link.name : undefined}
              >
                <span className="text-accent/60 flex items-center justify-center">{link.icon}</span>
                {(!isCollapsed || isMobile) && (
                  <span className="ml-3 text-sm">{link.name}</span>
                )}
              </a>
            ))}
          </div>
        </div>

        {/* SOCIAL Section (Second Order) */}
        <div className="mb-8 w-full">
          {(!isCollapsed || isMobile) && (
            <p className="font-mono text-muted text-[0.65rem] tracking-widest uppercase mb-4 opacity-50 border-b border-border/10 pb-1 px-2">
              SOCIAL
            </p>
          )}
          <div className="space-y-1 w-full">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center text-muted hover:text-accent hover:bg-[rgba(181,255,77,0.04)] rounded-[6px] transition-all duration-200 ${
                  isCollapsed && !isMobile ? 'justify-center p-2.5' : 'px-3 py-2.5'
                }`}
                title={isCollapsed && !isMobile ? link.label : undefined}
              >
                <span className="text-accent/60 flex items-center justify-center">{link.icon}</span>
                {(!isCollapsed || isMobile) && (
                  <span className="ml-3 text-sm">{link.label}</span>
                )}
              </a>
            ))}
          </div>
        </div>

        {/* CONTACT INFO */}
        <div className="mt-auto pt-6 border-t border-border/10 w-full">
          {(!isCollapsed || isMobile) ? (
            <>
              <p className="font-mono text-[0.65rem] text-muted uppercase tracking-widest opacity-40 mb-2 px-2">
                GET IN TOUCH
              </p>
              <a
                href="mailto:monishkumar3499@gmail.com"
                className="block font-mono text-[0.75rem] text-muted hover:text-accent transition-colors duration-200 truncate px-2"
              >
                monishkumar3499@gmail.com
              </a>
            </>
          ) : (
            <a
              href="mailto:monishkumar3499@gmail.com"
              className="flex justify-center text-muted hover:text-accent p-2.5 rounded-[6px] hover:bg-[rgba(181,255,77,0.04)] transition-all duration-200"
              title="monishkumar3499@gmail.com"
            >
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z"/>
              </svg>
            </a>
          )}
        </div>
      </motion.div>

      {/* Mobile Drawer Overlay */}
      {isMobile && isCollapsed && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-[2px] z-[98]"
          onClick={() => setIsCollapsed(false)}
        ></div>
      )}
    </>
  );
};

export default Sidebar;