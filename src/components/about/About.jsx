import Section from '../Section';
import { motion } from 'framer-motion';

const About = () => {

  return (
    <section id="about" className="relative">
      <Section>
        {/* Core Philosophy Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20 border-l-4 border-accent pl-6 py-2"
        >
          <p className="text-[clamp(1.25rem,3vw,1.75rem)] font-heading font-semibold text-text leading-relaxed">
            "I design, optimize, and build backbones. Applying strict engineering discipline, algorithmic rigor, and AI-assisted workflows to translate complex architectural challenges into high-performance, production-ready systems."
          </p>
        </motion.div>

        {/* Two Column Layout - Info & Education */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column - Biography */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            <p className="font-mono text-accent text-xs tracking-widest uppercase">
              ABOUT ME
            </p>

            <p className="text-muted text-[0.95rem] leading-relaxed">
              I am a Software Engineer equipped with a B.E. degree. My background combines the precision of hardware-level optimization with modern, high-level software abstractions, allowing me to approach software development with unique depth.
            </p>
            <p className="text-muted text-[0.95rem] leading-relaxed">
              Currently engineering AI-first platforms and microservices at <strong className="text-white font-medium">JMAN Group</strong>, I leverage cutting-edge developer toolchains (like Claude Code and Cursor) to fast-track product delivery while maintaining rigorous security controls, automated testing coverage, and clean modular codebases.
            </p>
          </motion.div>

          {/* Right Column - Education Display Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 w-full"
          >
            <div className="bg-card border border-border-accent/10 rounded-[12px] p-6 relative overflow-hidden group hover:border-border-accent/30 transition-all duration-300">
              <div className="absolute top-0 right-0 w-[120px] h-[120px] bg-accent/5 rounded-full filter blur-[30px] group-hover:bg-accent/10 transition-colors"></div>
              
              <p className="font-mono text-[0.7rem] text-accent tracking-widest uppercase mb-4">
                ACADEMIC FOUNDATION
              </p>
              <h3 className="font-heading font-bold text-[1.25rem] text-white mb-1">
                B.E. in Electronics & Communication Engineering
              </h3>
              <p className="text-muted text-sm font-medium mb-3">
                Easwari Engineering College<br />(Anna University)
              </p>
              
              <div className="flex flex-wrap justify-between items-center py-3 border-y border-border/10 mb-4">
                <span className="font-mono text-xs text-muted">CGPA</span>
                <span className="font-heading font-extrabold text-accent text-[1.2rem]">8.46 / 10.0</span>
              </div>

              <div className="flex justify-between items-center text-[0.8rem] font-mono text-muted">
                <span>Nov. 2022 - May 2026</span>
                <span>Chennai, TN</span>
              </div>
            </div>
          </motion.div>
        </div>

      </Section>
    </section>
  );
};

export default About;
