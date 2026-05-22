import Section from './Section';
import { motion } from 'framer-motion';

const Achievements = () => {
  const achievements = [
    {
      icon: "🏆",
      title: 'Smart India Hackathon 2025, Top 6 Nationwide',
      description: 'Led 6-member Agile team, among 10,000+ teams, for Kochi Metro Rail AI classification system.'
    },
    {
      icon: "🏅",
      title: 'Meta Hacker Cup 2025',
      description: 'Global rank 3,179, advanced to Round 2; 600+ problems solved on LeetCode, HackerRank, Codeforces.'
    },
    {
      icon: "📜",
      title: 'Research Publication',
      description: 'Co-authored "Multi-Sensor Imaging Framework for Marine Oil Spill Detection" - CNN on 1,000+ satellite images, 94% validation accuracy; under review in Scopus-indexed journal.'
    }
  ];

  return (
    <div id="achievements" className="bg-gradient-to-b from-transparent to-bg2">
      <Section>
        <div className="mb-12">
          <p className="section-label">05. Achievements</p>
          <h2 className="section-title">Notable <span>Milestones</span></h2>
          <div className="section-divider"></div>
        </div>

        <div className="flex flex-col gap-5">
          {achievements.map((item, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="bg-card border border-border rounded-[12px] p-6 flex flex-col md:flex-row gap-5 items-start transition-all duration-300 relative overflow-hidden group hover:border-border-accent hover:shadow-[0_0_30px_rgba(0,229,255,0.06)] hover:translate-x-1"
            >
              {/* Left Gradient Reveal Border */}
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-cyan to-cyan2 scale-y-0 origin-top transition-transform duration-400 group-hover:scale-y-100"></div>
              
              <div className="text-[1.75rem] shrink-0 leading-none">
                {item.icon}
              </div>
              
              <div>
                <h3 className="font-heading text-[1rem] font-bold text-white mb-1.5">
                  {item.title}
                </h3>
                <p className="text-[0.875rem] text-muted leading-[1.7]">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Achievements;
