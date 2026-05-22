import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GithubIcon, LinkedinIcon } from './Icons';

const Hero = () => {
  const roles = [
    "Trainee Software Engineer",
    "AI/ML Engineer",
    "Full-Stack Developer",
    "Competitive Programmer"
  ];

  const [currentRole, setCurrentRole] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = roles[currentRole];
    let typingSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && displayedText === fullText) {
      setTimeout(() => setIsDeleting(true), 2000);
      return;
    } else if (isDeleting && displayedText === '') {
      setIsDeleting(false);
      setCurrentRole((prev) => (prev + 1) % roles.length);
      return;
    }

    const timer = setTimeout(() => {
      setDisplayedText((prev) =>
        isDeleting
          ? fullText.substring(0, prev.length - 1)
          : fullText.substring(0, prev.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRole, roles]);

  return (
    <section id="hero" className="relative z-10 pt-[110px] pb-[55px] md:pt-[130px] md:pb-[75px] px-[5%]">
      <div className="max-w-[1100px] mx-auto w-full grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 md:gap-[4rem] items-center text-center md:text-left">

        <div>
          <motion.p
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="font-mono text-[0.9rem] text-cyan tracking-[0.1em] mb-4 relative top-[15px]"
          >
            // Hello, World! I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.35 }}
            className="font-heading font-extrabold text-[clamp(2.5rem,10vw,3.5rem)] md:text-[clamp(3rem,8vw,5.5rem)] leading-none text-white tracking-[-0.03em] mb-2"
          >
            Monish<br /><span className="text-cyan">Kumar V</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.5 }}
            className="font-heading font-semibold text-[clamp(1.4rem,3vw,2rem)] text-muted min-h-[2.4rem] mb-6"
          >
            <span className="text-cyan2">{displayedText}</span>
            <span className="inline-block w-[2px] h-[1.2em] bg-cyan ml-[2px] align-middle animate-[blink_0.9s_step-end_infinite]"></span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.65 }}
            className="text-[1rem] text-muted max-w-[520px] mx-auto md:mx-0 leading-[1.8] mb-10"
          >
            Building <strong className="text-text font-medium">intelligent systems</strong> at the intersection of AI and full-stack engineering. Turning complex problems into <strong className="text-text font-medium">elegant, production-ready solutions</strong>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.8 }}
            className="flex flex-wrap justify-center md:justify-start gap-4 mb-10"
          >
            <a href="mailto:monishkumar3499@gmail.com" className="inline-flex items-center gap-2 px-7 py-3 bg-cyan text-bg font-bold text-[0.9rem] rounded-[6px] tracking-[0.02em] transition-all duration-200 relative overflow-hidden group hover:-translate-y-[2px] hover:shadow-[0_8px_25px_rgba(0,229,255,0.35)]">
              <span className="absolute inset-0 bg-white/15 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
              Contact Me
            </a>
            <a href="https://github.com/monishkumar3499" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-7 py-3 bg-transparent text-cyan font-bold text-[0.9rem] rounded-[6px] border border-border-accent tracking-[0.02em] transition-all duration-200 hover:bg-[rgba(0,229,255,0.15)] hover:border-cyan hover:-translate-y-[2px] hover:shadow-[0_8px_25px_rgba(0,229,255,0.15)]">
              <GithubIcon size={16} />
              GitHub
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.95 }}
            className="flex justify-center md:justify-start gap-5"
          >
            {[
              { icon: <GithubIcon size={18} />, href: "https://github.com/monishkumar3499" },
              { icon: <LinkedinIcon size={18} />, href: "https://linkedin.com/in/monishkumar-v/" },
              { icon: <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M13.483 0a1.374 1.374 0 00-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 00-1.209 2.104 5.35 5.35 0 00-.125.513 5.527 5.527 0 00.062 2.362 5.83 5.83 0 00.349 1.017 5.938 5.938 0 00 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 00-1.951-.003l-2.396 2.392a3.021 3.021 0 01-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 01.066-.523 2.545 2.545 0 01.619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 00-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0013.483 0zm-2.866 12.815a1.38 1.38 0 00-1.38 1.382 1.38 1.38 0 001.38 1.382H20.79a1.38 1.38 0 001.38-1.382 1.38 1.38 0 00-1.38-1.382z" /></svg>, href: "https://leetcode.com/u/Mon1shkumar/" },
              { icon: <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>, href: "mailto:monishkumar3499@gmail.com" }
            ].map((social, i) => (
              <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-[42px] h-[42px] border border-border rounded-[8px] text-muted transition-all duration-200 hover:border-cyan hover:text-cyan hover:bg-[rgba(0,229,255,0.15)] hover:-translate-y-[3px] hover:shadow-[0_6px_20px_rgba(0,229,255,0.15)]">
                {social.icon}
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}
          className="hidden md:block relative"
        >
          <div className="w-[300px] h-[300px] rounded-full bg-[conic-gradient(from_180deg,var(--color-cyan)_0deg,var(--color-cyan2)_90deg,transparent_180deg,transparent_360deg)] p-[3px] animate-[spin_8s_linear_infinite] flex items-center justify-center">
            <div className="w-full h-full rounded-full bg-bg flex items-center justify-center font-heading text-[5rem] font-extrabold text-cyan tracking-[-0.05em] animate-[spin_8s_linear_infinite_reverse]">
              MK
            </div>
          </div>
          <div className="absolute bottom-[10px] right-0 bg-bg2 border border-border-accent rounded-[8px] px-3 py-1.5 font-mono text-[0.72rem] text-cyan whitespace-nowrap">
            Chennai, TN, India
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
