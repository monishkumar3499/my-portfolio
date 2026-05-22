import Section from './Section';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div id="about" className="bg-gradient-to-b from-transparent to-bg2">
      <Section>
        <div className="mb-12">
          <p className="section-label">01. About Me</p>
          <h2 className="section-title">Who I <span>Am</span></h2>
          <div className="section-divider"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[4rem] items-start">
          <div className="text-muted leading-[1.9]">
            <p className="mb-4">
              I'm a <strong className="text-text font-medium">Trainee Software Engineer at JMAN Group</strong> and final-year B.E. student at Easwari Engineering College (Anna University), specializing in Electronics & Communication Engineering.
            </p>
            <p className="mb-4">
              My passion lies at the crossroads of <strong className="text-text font-medium">AI systems and full-stack engineering</strong>, designing production-grade platforms that scale. I architect everything from <strong className="text-text font-medium">agentic AI pipelines with LangGraph & MCP</strong> to cloud-native microservices on AWS.
            </p>
            <p className="mb-4">
              Beyond work, I'm a <strong className="text-text font-medium">competitive programmer</strong>, with a global rank of 3,179 at Meta Hacker Cup 2025 and 600+ problems solved across LeetCode, HackerRank, and Codeforces. I believe algorithmic thinking makes better engineers.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-card border border-border rounded-[12px] p-6 relative overflow-hidden transition-all duration-300 hover:border-border-accent hover:shadow-[0_0_30px_rgba(0,229,255,0.08)] group"
          >
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan via-cyan2 to-transparent"></div>

            <div className="font-heading text-[1.1rem] font-bold text-white mb-2 flex items-center gap-2">
              <span className="text-[1.3rem] leading-none">🎓</span>
              <span>Easwari Engineering College</span>
            </div>
            <div className="text-[0.8rem] text-muted mb-1">(Anna University)</div>
            <div className="text-[0.875rem] text-cyan mb-2 font-mono">B.E. - Electronics & Communication Engineering</div>

            <div className="flex justify-between items-center text-[0.8rem] text-muted mt-4 pt-4 border-t border-border">
              <span>Nov 2022 - May 2026 · Chennai, TN</span>
              <span className="bg-[rgba(0,229,255,0.1)] text-cyan px-2.5 py-1 rounded-[20px] font-mono border border-[rgba(0,229,255,0.2)]">CGPA 8.46</span>
            </div>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};

export default About;
