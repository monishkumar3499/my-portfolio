import Section from '../Section';
import { motion } from 'framer-motion';

const Experience = ({ isCollapsed }) => {
  const experiences = [
    {
      company: 'JMAN Group',
      role: 'Trainee Software Engineer',
      period: 'Feb. 2026 - Present',
      location: 'Chennai, TN, India',
      highlights: [
        {
          text: 'Leveraged AI-first development methodologies using advanced agents (Claude Code, Cursor) to accelerate the product lifecycle, shipping a production-grade helpdesk platform within 4 weeks.',
          title: 'AI-First Co-Engineering'
        },
        {
          text: 'Architected a highly secure, RESTful service (NestJS, Next.js) configured with Role-Based Access Control (RBAC) and JSON Web Tokens (JWT) for enterprise-grade authentication.',
          title: 'Secure REST Architecture'
        },
        {
          text: 'Applied precise prompt engineering strategies to automate unit testing suites, execute automated code reviews, and optimize database query structures—cutting system latency by 50%.',
          title: 'Performance & QA Automation'
        },
        {
          text: 'Designed and orchestrated a scalable infrastructure on AWS, provisioning auto-scaled EC2 instances, Elastic Load Balancing (ELB), and RDS databases within Dockerized isolation.',
          title: 'AWS Cloud Orchestration'
        }
      ],
      stack: ['NestJS', 'Next.js', 'TypeScript', 'AWS (EC2/RDS)', 'Docker', 'JWT/RBAC', 'CI/CD']
    }
  ];

  return (
    <section id="experience" className="relative">
      <Section>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-left"
        >
          <p className="font-mono text-accent text-xs tracking-widest uppercase mb-2">PROFESSIONAL TIMELINE</p>
          <h2 className="font-heading font-extrabold text-[clamp(2rem,5vw,2.5rem)] text-white">
            Industry Experience
          </h2>
          <div className="w-[60px] h-[2px] bg-accent mt-3"></div>
        </motion.div>

        {/* Experience Timeline Grid */}
        <div className={`mx-auto transition-all duration-500 ${isCollapsed ? 'max-w-5xl' : 'max-w-3xl'}`}>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative border-l-2 border-border-accent/20 pl-6 md:pl-10 pb-8 text-left"
            >
              {/* Timeline dot decoration */}
              <div className="absolute -left-[9px] top-0 w-[16px] h-[16px] rounded-full bg-bg border-2 border-accent flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
              </div>

              {/* Head Info */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-6">
                <div>
                  <h3 className="font-heading font-extrabold text-[1.4rem] text-white leading-tight">
                    {exp.role}
                  </h3>
                  <p className="font-mono text-accent text-sm font-semibold mt-1">
                    {exp.company}
                  </p>
                </div>
                <div className="text-left md:text-right">
                  <span className="inline-block px-3 py-1 rounded-[4px] bg-border/20 border border-border/40 text-[0.8rem] font-mono text-white mb-1">
                    {exp.period}
                  </span>
                  <p className="text-muted text-[0.75rem] font-mono">{exp.location}</p>
                </div>
              </div>

              {/* Tech Stack Chips */}
              <div className="flex flex-wrap gap-2 mb-8">
                {exp.stack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="font-mono text-[0.75rem] text-accent bg-accent/5 px-2.5 py-1 rounded-[4px] border border-accent/10 hover:border-accent/30 transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Highlights Detailed Cards */}
              <div className={`grid grid-cols-1 gap-4 transition-all duration-500 ${isCollapsed ? 'lg:grid-cols-2' : ''}`}>
                {exp.highlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-card/30 border border-border/20 rounded-[8px] p-4 hover:border-border-accent/10 hover:bg-border/5 transition-all duration-300 group"
                  >
                    <h4 className="font-heading font-bold text-xs text-white uppercase tracking-widest mb-1 group-hover:text-accent transition-colors">
                      // {item.title}
                    </h4>
                    <p className="text-muted text-sm leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </section>
  );
};

export default Experience;
