import Section from './Section';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      icon: '💻',
      title: 'Languages',
      skills: ['Python', 'Java', 'C/C++', 'JavaScript', 'TypeScript', 'SQL']
    },
    {
      icon: '⚡',
      title: 'Frameworks & APIs',
      skills: ['REST APIs', 'Node.js', 'Express.js', 'NestJS', 'Next.js', 'React.js', 'FastAPI', 'LangChain', 'LangGraph']
    },
    {
      icon: '🧠',
      title: 'AI & ML',
      skills: ['LLMs', 'MCP', 'RAG', 'NLP', 'Computer Vision', 'Transformers', 'BERT', 'Fine-tuning', 'Agentic AI']
    },
    {
      icon: '☁️',
      title: 'Cloud & Infra',
      skills: ['AWS EC2', 'AWS ELB', 'AWS RDS', 'Docker', 'Terraform', 'Azure']
    },
    {
      icon: '🗄️',
      title: 'Databases',
      skills: ['PostgreSQL', 'MySQL', 'SQLite']
    },
    {
      icon: '🛠️',
      title: 'Tools & Methods',
      skills: ['Git', 'GitHub', 'Linux', 'Agile/Scrum', 'RBAC/JWT', 'Microservices']
    }
  ];

  return (
    <div id="skills" className="bg-gradient-to-b from-bg2 to-transparent">
      <Section>
        <div className="mb-12">
          <p className="section-label">04. Skills</p>
          <h2 className="section-title">My <span>Toolkit</span></h2>
          <div className="section-divider"></div>
        </div>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-6">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: (index % 3) * 0.1 }}
              className="bg-card border border-border rounded-[14px] p-6 transition-colors duration-300 hover:border-border-accent"
            >
              <h3 className="font-heading text-[0.85rem] font-bold text-cyan uppercase tracking-[0.1em] mb-4 flex items-center gap-2">
                <span className="text-[1rem]">{category.icon}</span> {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span 
                    key={idx} 
                    className="text-[0.82rem] text-text bg-[rgba(255,255,255,0.04)] border border-border px-[0.75rem] py-[0.3rem] rounded-[6px] transition-all duration-200 cursor-default hover:bg-[rgba(0,229,255,0.08)] hover:border-border-accent hover:text-cyan"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Skills;
