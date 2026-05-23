const Footer = ({ isCollapsed }) => {
  return (
    <footer className="relative border-t border-border-accent/10 mt-20">
      {/* Main CTA Section */}
      <div className="text-center py-20 px-6 relative z-10">
        <p className="font-mono text-accent text-xs tracking-widest uppercase mb-4">
          // CONTINUOUS DEPLOYMENT
        </p>
        <h2 className="font-heading font-extrabold text-[clamp(2rem,6vw,3.5rem)] text-white mb-6 tracking-tight uppercase-tracking">
          Let's Engineer Something Great
        </h2>

        {/* Prominent Email */}
        <a
          href="mailto:monishkumar3499@gmail.com"
          className="inline-flex items-center gap-2.5 px-6 py-3 bg-accent text-bg font-bold text-[0.8rem] rounded-full lowercase transition-all duration-300 hover:bg-accent/80 hover:-translate-y-[2px] hover:shadow-[0_6px_20px_rgba(181,255,77,0.25)]"
        >
          monishkumar3499@gmail.com
        </a>
      </div>

      {/* Decorative Name Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] overflow-hidden z-0">
        <div className="flex items-center justify-center h-full">
          <h1 className="font-heading text-[clamp(8rem,25vw,16rem)] font-black text-white leading-none uppercase tracking-widest select-none text-center">
            <span className="block">MONISH</span>
            <span className="block">KUMAR</span>
          </h1>
        </div>
      </div>

      {/* Bottom Footer Bar */}
      <div className="relative pt-1 pb-1 border-t border-border/10 z-10 mt-12">
        <div className={`grid grid-cols-1 md:grid-cols-3 w-full items-center gap-4 mx-auto px-4 transition-all duration-500 ${isCollapsed ? 'max-w-[1320px]' : 'max-w-[1100px]'}`}>
          {/* Left Column spacer for desktop centering balance */}
          <div className="hidden md:block"></div>

          {/* Center Column: Designer Credit */}
          <div className="text-center">
            <p className="font-mono text-[0.8rem] text-muted">
              Designed & Engineered by <span className="text-accent">Monish Kumar V</span>
            </p>
          </div>

          {/* Right Column: GitHub Star Badge */}
          <div className="flex md:justify-end justify-center">
            <a
              href="https://github.com/monishkumar3499"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-4 py-2 bg-border/25 border border-border/40 rounded-[8px] text-[0.8rem] font-mono text-muted hover:bg-border/45 hover:text-white transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" className="text-accent">
                <path d="M12 .032a11.48 11.48 0 00-6.217 2.106c-1.042 3.69.06 7.813 3.023 11.27.385.45 1.09.168 1.467-.158l.288-.245c.24-.27-.016-.66-.417-.66h-.01c-.468 0-.825.31-.903.73-.875 4.704-1.3 9.554-1.279 9.683-.011.09-.03.174-.03.261v.048c0 .136.11.245.245.245h7.25c.136 0 .245-.109.245-.245v-.048c0-.087-.019-.171-.03-.261.021-.129-.404-.979-1.279-9.683.025-.129-.435-.73-.903-.73h-.01c-.402 0-.657.39-.417.66l.288.245c.377.326 1.082.608 1.467.158 2.96-3.457 4.065-7.58 3.023-11.27A11.474 11.474 0 0012 .032zM12 12.5a3.5 3.5 0 110-7 3.5 3.5 0 010 7z"/>
              </svg>
              <span>Star my GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
