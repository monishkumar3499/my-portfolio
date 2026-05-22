import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-5 left-1/2 -translate-x-1/2 z-[100] flex items-center justify-center px-6 h-[46px] bg-[rgba(7,11,20,0.65)] backdrop-blur-[20px] backdrop-saturate-[1.5] border border-border/80 rounded-full transition-all duration-300 w-[90%] max-w-[640px] md:w-auto ${
        scrolled ? 'shadow-[0_8px_32px_rgba(0,0,0,0.4)] !border-border-accent/60 bg-[rgba(7,11,20,0.85)] top-3 h-[42px]' : ''
      }`}
    >
      {/* Desktop Nav */}
      <ul className="hidden md:flex gap-7 list-none m-0 p-0 items-center justify-center">
        {navLinks.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              className="text-muted no-underline text-[0.8rem] font-medium tracking-[0.05em] uppercase transition-colors duration-200 relative hover:text-cyan group py-1"
            >
              {link.name}
              <span className="absolute -bottom-0.5 left-0 right-0 h-[1.5px] bg-gradient-to-r from-cyan to-cyan2 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile view inside pill */}
      <div className="flex md:hidden w-full items-center justify-between gap-6">
        <span className="text-[0.75rem] font-mono text-cyan tracking-[0.1em] uppercase font-bold">Menu</span>
        {/* Mobile Nav Toggle */}
        <div 
          className="flex flex-col gap-[5px] cursor-pointer p-1" 
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={`w-[18px] h-[2px] bg-text rounded-[2px] transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[7px]' : ''}`}></span>
          <span className={`w-[18px] h-[2px] bg-text rounded-[2px] transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-[18px] h-[2px] bg-text rounded-[2px] transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}></span>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-[56px] left-0 right-0 bg-[#070b14f2] backdrop-blur-[25px] p-5 flex flex-col gap-4 border border-border rounded-[18px] z-[99] shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-text no-underline text-[0.95rem] font-medium hover:text-cyan transition-colors py-1 px-2 rounded-md hover:bg-white/5"
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
