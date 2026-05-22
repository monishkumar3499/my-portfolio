const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-bg border-t border-border text-center p-8 text-[0.825rem] text-muted font-mono relative z-10">
      <p className="mb-1">
        Designed & Built by <span className="text-cyan">Monish Kumar V</span>
      </p>
      <p>
        Built with React & Tailwind CSS • {currentYear}
      </p>
    </footer>
  );
};

export default Footer;
