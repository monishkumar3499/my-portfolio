import Section from '../Section';
import { motion } from 'framer-motion';

const Skills = ({ isCollapsed }) => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['Python', 'Java', 'JavaScript', 'TypeScript', 'SQL']
    },
    {
      title: 'Frameworks & APIs',
      skills: ['REST APIs', 'FastAPI', 'Node.js', 'Express.js', 'React.js', 'Next.js', 'LangChain', 'LangGraph']
    },
    {
      title: 'AI & Agentic Engineering',
      skills: ['LLMs', 'AI Agents', 'MCP', 'Prompt Engineering', 'RAG', 'Transformers', 'Fine-tuning']
    },
    {
      title: 'Cloud, Infra & DB',
      skills: ['AWS (EC2/RDS)', 'Docker', 'Terraform', 'Kubernetes', 'PostgreSQL', 'MySQL']
    },
    {
      title: 'Developer Tools',
      skills: ['Claude Code', 'Cursor', 'Git', 'CI/CD', 'Agile/Scrum', 'Automated Testing', 'Application Security']
    }
  ];

  return (
    <section id="skills" className="relative">
      <Section>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-left"
        >
          <p className="font-mono text-accent text-xs tracking-widest uppercase mb-2">ENGINEERING STACK</p>
          <h2 className="font-heading font-extrabold text-[clamp(2rem,5vw,2.5rem)] text-white">
            Technical Arsenal
          </h2>
          <div className="w-[60px] h-[2px] bg-accent mt-3"></div>
        </motion.div>

        {/* Categories Stack */}
        <div className="space-y-12">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              className="text-left"
            >
              {/* Category Title */}
              <h3 className="font-heading font-bold text-[1.1rem] text-accent tracking-widest uppercase mb-6 flex items-center gap-3">
                <span className="text-white/30">//</span> {category.title}
              </h3>

              {/* Skills Row - Standard Uniform Grid */}
              <div className={`grid gap-2.5 sm:gap-3 w-full grid-cols-3 sm:grid-cols-4 md:grid-cols-5 ${
                isCollapsed 
                  ? 'lg:grid-cols-7 xl:grid-cols-8' 
                  : 'lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8'
              }`}>
                {category.skills.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -3, borderColor: 'rgba(181, 255, 77, 0.4)', backgroundColor: 'rgba(181, 255, 77, 0.03)' }}
                    className="bg-card/40 border border-border/20 rounded-[10px] py-4 px-2 sm:px-3 flex flex-col items-center justify-center text-center transition-all duration-300 group w-full min-w-0"
                  >
                    {/* SVG Icon Container */}
                    <div className="w-[42px] h-[42px] flex items-center justify-center bg-border/20 rounded-[8px] mb-3 group-hover:bg-accent/10 transition-colors duration-300 flex-none [&_svg]:w-[22px] [&_svg]:h-[22px]">
                      {getFrameworkIcon(skill)}
                    </div>
                    <span className="font-sans text-[0.68rem] sm:text-[0.74rem] md:text-[0.78rem] font-bold text-text group-hover:text-accent transition-colors duration-300 whitespace-normal leading-tight text-center px-0.5 w-full">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </section>
  );
};

// High-fidelity handcrafted SVG logos for the skills grid
function getFrameworkIcon(tech) {
  switch (tech) {
    case 'Python':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-cyan">
          <path d="M11.85 2a4.42 4.42 0 0 0-4.38 4.41v1.65h4.44v.55H5.47A3.49 3.49 0 0 0 2 12.1a3.49 3.49 0 0 0 3.47 3.49h1.1v-1.54A3.03 3.03 0 0 1 9.6 11h4.44a1.9 1.9 0 0 0 1.9-1.92V4.64A2.65 2.65 0 0 0 13.29 2h-1.44z" fill="currentColor"/>
          <path d="M12.15 22a4.42 4.42 0 0 0 4.38-4.41v-1.65h-4.44v-.55h6.44A3.49 3.49 0 0 0 22 11.9a3.49 3.49 0 0 0-3.47-3.49h-1.1v1.54A3.03 3.03 0 0 1 14.4 13H9.96a1.9 1.9 0 0 0-1.9 1.92v4.44A2.65 2.65 0 0 0 10.71 22h1.44z" fill="rgba(181,255,77,0.8)"/>
        </svg>
      );
    case 'Java':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#ea2d2e]">
          <path d="M18.8 11.6c.3 1.1-.3 2.1-1.3 2.6-.9.4-2.1.2-2.9-.3-.5-.3-.9-.8-1.1-1.3-.2-.5-.2-1 0-1.5.3-1.1 1.5-1.8 2.6-1.5 1 .3 2.2 1 2.7 2zm-8.2.2c-.2.9-1.1 1.5-2 1.3-.9-.2-1.5-1.1-1.3-2s1.1-1.5 2-1.3c.9.2 1.5 1.1 1.3 2z" fill="currentColor"/>
          <path d="M4 19.5c5.3 1.2 10.7 1.2 16 0-3.5 1.5-7.3 2.2-11 2.2s-3.5-.7-5-2.2zM12 2c0 2-1 3.5-2.5 4.5.5-1 .5-2 0-3C9 4 8 5.5 8 7c0-2-1-3.5-2-4.5.5 1 .5 2 0 3-.5 1-1.5 2-1.5 3.5 0-1 0-2-.5-2.5-.5.5-.5 1.5-.5 2 0 2.5 1.5 4.5 4 4.5s4-2 4-4.5V2z" fill="currentColor"/>
        </svg>
      );
    case 'JavaScript':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#f7df1e]">
          <rect width="20" height="20" x="2" y="2" rx="2" fill="currentColor"/>
          <path d="M12.3 18.2c-.3-.2-.4-.6-.4-.9.1-.5.5-.8 1-.8.4 0 .7.3.7.6v.5c0 .3-.2.5-.5.5-.3.1-.6 0-.8-.1zm2.9-.1c-.4.5-.9.7-1.5.7-.7 0-1.3-.4-1.6-1l1.1-.7c.2.3.4.4.6.4.3 0 .4-.2.4-.4v-4.3H15.2v5.3z" fill="#000"/>
        </svg>
      );
    case 'TypeScript':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#3178c6]">
          <rect width="20" height="20" x="2" y="2" rx="2" fill="currentColor"/>
          <path d="M12.2 17.5v-7.3H9v-1.4h7.9v1.4h-3.2v7.3h-1.5zm6-1c0 1.2-.8 2-2 2-1 0-1.7-.5-1.9-1.2l1.3-.5c.1.3.3.5.6.5.3 0 .5-.2.5-.5v-.1c0-.4-.4-.5-.9-.7-.7-.2-1.5-.6-1.5-1.6 0-1 .8-1.7 1.8-1.7s1.6.5 1.8 1.1l-1.2.6c-.1-.3-.3-.4-.6-.4-.3 0-.4.1-.4.3 0 .3.4.4.8.6.8.2 1.6.5 1.6 1.6v.3z" fill="#fff"/>
        </svg>
      );
    case 'SQL':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-accent">
          <ellipse cx="12" cy="5" rx="9" ry="3" stroke="currentColor" strokeWidth="2"/>
          <path d="M3 5v6c0 1.66 4 3 9 3s9-1.34 9-3V5" stroke="currentColor" strokeWidth="2"/>
          <path d="M3 11v6c0 1.66 4 3 9 3s9-1.34 9-3v-6" stroke="currentColor" strokeWidth="2"/>
        </svg>
      );
    case 'REST APIs':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-cyan">
          <circle cx="5" cy="5" r="3" stroke="currentColor" strokeWidth="2"/>
          <circle cx="19" cy="5" r="3" stroke="currentColor" strokeWidth="2"/>
          <circle cx="12" cy="19" r="3" stroke="currentColor" strokeWidth="2"/>
          <path d="M5 8v6a2 2 0 0 0 2 2h3m7-8v6a2 2 0 0 1-2 2h-3" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 16v-4" stroke="currentColor" strokeWidth="2"/>
        </svg>
      );
    case 'FastAPI':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#059669]">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
          <path d="M13 6l-5 7h4l-1 5 5-7h-4l1-5z" fill="currentColor"/>
        </svg>
      );
    case 'Node.js':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#43853d]">
          <path d="M12 2L4 6.5v9L12 20l8-4.5v-9L12 2zm6 12.3L12 17.7 6 14.3v-4.6l6-3.4 6 3.4v4.6z" fill="currentColor"/>
        </svg>
      );
    case 'Express.js':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
          <rect width="20" height="20" x="2" y="2" rx="4" stroke="currentColor" strokeWidth="2"/>
          <path d="M7 8h4v2H9v1.5h2v2H9V16H7V8zm9 8l-2-3-2 3h-2l3-4.5L11 8h2l2 3 2-3h2l-3 4.5 3 4.5h-2z" fill="currentColor"/>
        </svg>
      );
    case 'React.js':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-cyan animate-[spin_10s_linear_infinite]">
          <ellipse cx="12" cy="12" rx="10" ry="3.5" stroke="currentColor" strokeWidth="1.5" transform="rotate(30 12 12)"/>
          <ellipse cx="12" cy="12" rx="10" ry="3.5" stroke="currentColor" strokeWidth="1.5" transform="rotate(90 12 12)"/>
          <ellipse cx="12" cy="12" rx="10" ry="3.5" stroke="currentColor" strokeWidth="1.5" transform="rotate(150 12 12)"/>
          <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
        </svg>
      );
    case 'Next.js':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
          <path d="M9 16V8l7.5 8H15l-6-6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      );
    case 'LangChain':
    case 'LangGraph':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-accent">
          <rect width="18" height="6" x="3" y="9" rx="3" stroke="currentColor" strokeWidth="2"/>
          <circle cx="6" cy="12" r="1.5" fill="currentColor"/>
          <circle cx="18" cy="12" r="1.5" fill="currentColor"/>
          <path d="M12 9V5a2 2 0 0 1 2-2h4M12 15v4a2 2 0 0 1-2 2H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      );
    case 'LLMs':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-cyan">
          <rect width="16" height="12" x="4" y="6" rx="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M9 16v2m6-2v2m-9-8h8m-5 4h2" stroke="currentColor" strokeWidth="2"/>
          <circle cx="8" cy="10" r="1" fill="currentColor"/>
          <circle cx="16" cy="10" r="1" fill="currentColor"/>
        </svg>
      );
    case 'AI Agents':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-accent">
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
          <circle cx="5" cy="5" r="2" fill="currentColor"/>
          <circle cx="19" cy="5" r="2" fill="currentColor"/>
          <circle cx="5" cy="19" r="2" fill="currentColor"/>
          <circle cx="19" cy="19" r="2" fill="currentColor"/>
          <path d="M8.5 8.5l2-2m3 3l2-2m-5 5.5l-2 2m5-2l2 2" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      );
    case 'MCP':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-cyan">
          <rect width="8" height="8" x="2" y="8" rx="2" stroke="currentColor" strokeWidth="2"/>
          <rect width="8" height="8" x="14" y="8" rx="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M10 12h4m-2-2v4" stroke="currentColor" strokeWidth="2"/>
        </svg>
      );
    case 'Prompt Engineering':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-accent">
          <path d="M21 11.5a8.5 8.5 0 1 1-8.5-8.5v3a5.5 5.5 0 1 0 5.5 5.5h3z" fill="currentColor" opacity="0.3"/>
          <path d="M22 2l-3 3 1.5 1.5L22 2zm-5 5L8 16m0 0h3m-3 0v-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      );
    case 'RAG':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-cyan">
          <path d="M4 6V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2M4 18v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" stroke="currentColor" strokeWidth="2"/>
          <rect width="18" height="8" x="3" y="8" rx="2" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="2"/>
          <path d="M9 12h6" stroke="currentColor" strokeWidth="2"/>
        </svg>
      );
    case 'Transformers':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-accent">
          <path d="M4 4h6v6H4V4zm10 0h6v6h-6V4zM4 14h6v6H4v-6zm10 0h6v6h-6v-6z" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M10 7h4M10 17h4M7 10v4m10-4v4" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2"/>
        </svg>
      );
    case 'Fine-tuning':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-cyan">
          <path d="M12 2v4m0 12v4M2 12h4m12 0h4" stroke="currentColor" strokeWidth="2"/>
          <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2"/>
          <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
        </svg>
      );
    case 'AWS (EC2/RDS)':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#ff9900]">
          <path d="M6 16c-3 0-4-1.8-4-3.5S3.5 9 7 9c.5 0 1 .1 1.5.2C9.3 7 11.5 5 14 5c3.3 0 6 2.2 6 5.5 2.2 0 4 1.3 4 3.25S22.2 17 20 17H6v-1z" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="2"/>
          <path d="M7 18c4 3 8 3 12 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      );
    case 'Docker':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#0db7ed]">
          <path d="M2 14c2 1 6 1 8 0 4-2 9-1 11-5v-1c-2-1-6-1-8 0-4 2-9 1-11 6z" stroke="currentColor" strokeWidth="2"/>
          <rect width="3" height="3" x="5" y="6" fill="currentColor"/>
          <rect width="3" height="3" x="9" y="6" fill="currentColor"/>
          <rect width="3" height="3" x="13" y="6" fill="currentColor"/>
        </svg>
      );
    case 'Terraform':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#7B42BC]">
          <path d="M4 2h7v7H4V2zm8 0h8v7h-8V2zm-8 8h8v7H4v-7zm8 8h8v4h-8v-4z" fill="currentColor"/>
        </svg>
      );
    case 'Kubernetes':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#326ce5]">
          <path d="M12 2l8.5 4v11L12 21l-8.5-4V6L12 2z" stroke="currentColor" strokeWidth="2"/>
          <circle cx="12" cy="11.5" r="3.5" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M12 2v6m0 7v6m-6.5-9.5H10m4 0h6.5" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      );
    case 'PostgreSQL':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#336791]">
          <path d="M12 3a8 8 0 0 0-8 8c0 3 1.5 5 3.5 6l-.5 3h3l.5-3c.5.2 1 .3 1.5.3 4.4 0 8-3.6 8-8.3A8 8 0 0 0 12 3z" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="2"/>
          <circle cx="9.5" cy="9.5" r="1.5" fill="currentColor"/>
        </svg>
      );
    case 'MySQL':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#00758f]">
          <path d="M3 10c2-5 7-7 12-4 3 2 4.5 5 4.5 7.5S17 19.5 12 20.5" stroke="currentColor" strokeWidth="2"/>
          <path d="M21 9c-3 1-5 3-5 5s2 4 4.5 3" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      );
    case 'Claude Code':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
          <rect width="18" height="14" x="3" y="5" rx="3" stroke="currentColor" strokeWidth="2"/>
          <path d="M7 10l2 2-2 2m5-2h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M18 2l1.5 1.5L21 2l-1.5 1.5L21 5l-1.5-1.5L18 5l1.5-1.5L18 2z" fill="currentColor"/>
        </svg>
      );
    case 'Cursor':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-accent">
          <path d="M4 4l16 8.5-8 1.5-3.5 6L4 4z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        </svg>
      );
    case 'Git':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#f05032]">
          <circle cx="18" cy="6" r="3" stroke="currentColor" strokeWidth="2"/>
          <circle cx="6" cy="18" r="3" stroke="currentColor" strokeWidth="2"/>
          <path d="M6 15V9a3 3 0 0 1 3-3h6" stroke="currentColor" strokeWidth="2"/>
        </svg>
      );
    case 'CI/CD':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-cyan">
          <path d="M6.5 12a3.5 3.5 0 1 1 7 0M17.5 12a3.5 3.5 0 1 1-7 0" stroke="currentColor" strokeWidth="2"/>
          <path d="M10 12l2 2 2-2" stroke="currentColor" strokeWidth="2"/>
        </svg>
      );
    case 'Agile/Scrum':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-accent">
          <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 15a5 5 0 1 1 5-5 5 5 0 0 1-5 5z" fill="currentColor" opacity="0.2"/>
          <path d="M12 4v4l3 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      );
    case 'Automated Testing':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-cyan">
          <path d="M9 11l3 3L22 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <rect width="12" height="12" x="2" y="8" rx="2" stroke="currentColor" strokeWidth="2"/>
        </svg>
      );
    case 'Application Security':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-accent">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="2"/>
          <circle cx="12" cy="11" r="2" fill="currentColor"/>
          <path d="M12 13v3" stroke="currentColor" strokeWidth="2"/>
        </svg>
      );
    default:
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-accent">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
          <path d="M8 12h8" stroke="currentColor" strokeWidth="2"/>
        </svg>
      );
  }
}

export default Skills;
