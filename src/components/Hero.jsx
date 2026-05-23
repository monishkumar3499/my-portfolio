import { motion } from 'framer-motion';

const Hero = ({ isCollapsed }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex flex-col justify-center px-4 md:px-8 py-[55px] md:py-[75px] overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] bg-accent/5 rounded-full filter blur-[80px] animate-pulse"></div>
        <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-cyan/5 rounded-full filter blur-[100px]"></div>
      </div>

      <div className={`relative z-10 text-left transition-all duration-500 ${isCollapsed ? 'max-w-5xl' : 'max-w-4xl'} mx-auto w-full`}>
        {/* Futuristic Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-border/20 border border-border-accent/30 mb-6 backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </span>
          <span className="font-mono text-[0.7rem] text-white/70 font-semibold uppercase tracking-widest">
            <span className="text-accent font-bold">Monish Kumar V</span> - Software Engineer @ JMAN Group
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-heading text-[clamp(2.5rem,6vw,4.5rem)] font-black leading-tight text-white mb-4 tracking-tight"
        >
          Building <span className="text-accent">AI-First</span> Platforms & <span className="bg-gradient-to-r from-cyan to-cyan2 bg-clip-text text-transparent">Scalable</span> Systems
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`text-muted text-[clamp(1rem,2vw,1.15rem)] leading-relaxed mb-8 ${isCollapsed ? 'max-w-3xl' : 'max-w-2xl'}`}
        >
          I am a systems-focused <strong className="text-white font-semibold">Software Engineer</strong> specializing in architecting reliable AI agents (MCP, LangGraph), scaling robust RESTful microservices, and orchestrating secure, Dockerized cloud infrastructures on AWS. Driven by algorithm design and solid computer science principles.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center gap-4 mb-16"
        >
          <a
            href="mailto:monishkumar3499@gmail.com"
            className="inline-flex items-center gap-2 px-5 py-2 bg-accent text-bg font-bold text-sm rounded-md uppercase tracking-wider transition-all duration-300 hover:bg-accent/80 hover:-translate-y-[2px] hover:shadow-[0_8px_25px_rgba(181,255,77,0.35)]"
          >
            Get In Touch
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-5 py-2 bg-transparent text-text font-bold text-sm rounded-md uppercase tracking-wider border border-border hover:border-accent hover:text-accent transition-all duration-300 hover:-translate-y-[2px]"
          >
            View Projects
          </a>
        </motion.div>

        {/* Key Metrics Section */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
    className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-border-accent/10 w-full mx-auto transition-all duration-500 ${isCollapsed ? 'max-w-5xl pl-2' : 'max-w-4xl pl-4'}`}
        >
          {[
            { value: 'Top 6', label: 'SIH 2025 Nationwide' },
            { value: 'Rank 3,179', label: 'Meta Hacker Cup 2025' },
            { value: '600+', label: 'Algorithmic Problems' },
            { value: 'Top 30%', label: 'LeetCode' }
          ].map((stat, idx) => (
            <div
              key={idx}
              className="bg-card border border-border-accent/30 rounded-[10px] p-5 text-center flex flex-col justify-center items-center h-[120px] w-full hover:border-accent hover:shadow-[0_0_20px_rgba(181,255,77,0.1)] transition-all duration-300"
            >
              <div className="text-[1.6rem] font-heading font-black text-accent leading-none mb-2">
                {stat.value}
              </div>
              <div className="font-mono text-[0.65rem] text-text uppercase tracking-widest leading-snug text-center font-bold">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;