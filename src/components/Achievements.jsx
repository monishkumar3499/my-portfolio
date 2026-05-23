import Section from './Section';
import { motion } from 'framer-motion';

const Achievements = () => {
  const achievements = [
    {
      badge: 'TOP 6 NATIONWIDE',
      title: 'Smart India Hackathon 2025',
      summary: 'Agile Team Leader & Systems Architect',
      description: 'Led a 6-member engineering team to design and deploy a production-grade AI document classification system for Kochi Metro Rail. Staged an end-to-end OCR and BERT processing pipeline on AWS that beat manual document sorting times by 97%—outperforming over 10,000 competing teams.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-accent">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      badge: 'GLOBAL RANK 3,179',
      title: 'Meta Hacker Cup 2025',
      summary: 'Competitive Programmer',
      description: 'Qualified for Round 2 of the Meta Hacker Cup, achieving a global rank of 3,179. Solved 600+ complex algorithmic and data structure problems across LeetCode, HackerRank, and Codeforces with solid runtime and space-complexity optimizations in Python, Java, and JavaScript.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-cyan">
          <circle cx="12" cy="8" r="7" stroke="currentColor" strokeWidth="2"/>
          <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      badge: 'RESEARCH PAPER',
      title: 'Scopus-Indexed Co-Author',
      summary: 'Deep Learning for Remote Marine Sensing',
      description: 'Co-authored the research paper "Multi-Sensor Imaging Framework for Marine Oil Spill Detection." Engineered a deep Convolutional Neural Network (CNN) trained on a custom dataset of 1,000+ multi-spectral satellite images, achieving a 94% validation accuracy (currently under peer review).',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-accent">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 19.5A2.5 2.5 0 0 0 6.5 22H20M4 19.5V3A1 1 0 0 1 5 2h14a1 1 0 0 1 1 1v14M14 6h2m-6 4h6m-6 4h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  return (
    <section id="achievements" className="relative">
      <Section>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-left"
        >
          <p className="font-mono text-accent text-xs tracking-widest uppercase mb-2">MILESTONES & RECOGNITIONS</p>
          <h2 className="font-heading font-extrabold text-[clamp(2rem,5vw,2.5rem)] text-white">
            Honors & Achievements
          </h2>
          <div className="w-[60px] h-[2px] bg-accent mt-3"></div>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card border border-border/20 rounded-[12px] p-6 text-left hover:border-border-accent/30 hover:shadow-[0_0_20px_rgba(181,255,77,0.03)] transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Corner cyan accent overlay on hover */}
              <div className="absolute top-0 right-0 w-[80px] h-[80px] bg-cyan/5 rounded-full filter blur-[20px] group-hover:bg-cyan/10 transition-colors"></div>

              <div>
                {/* Header Badge */}
                <div className="flex justify-between items-center mb-6">
                  <span className="font-mono text-[0.7rem] font-bold text-accent bg-accent/5 px-2.5 py-1 rounded border border-accent/15 tracking-widest uppercase">
                    {item.badge}
                  </span>
                  <div className="w-[40px] h-[40px] rounded-[8px] bg-border/25 flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                    {item.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-heading font-bold text-[1.2rem] text-white mb-1 group-hover:text-accent transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="font-mono text-[0.75rem] text-muted mb-4 uppercase tracking-wider">
                  {item.summary}
                </p>
                <p className="text-muted text-xs leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </section>
  );
};

export default Achievements;
