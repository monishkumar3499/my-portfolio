import Section from './Section';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      icon: "🤖",
      title: 'Finn - AI Financial Intelligence Agent',
      description: 'Architected a <strong class="text-text font-medium">full-stack finance agent</strong> on an <strong class="text-text font-medium">MCP server-client architecture</strong> with LangGraph tool-calling. Integrated <strong class="text-text font-medium">Mistral OCR</strong> for automated PDF data collection, eliminating manual entry to zero. Built a multi-timeline budgeting engine with real-time health scoring and cash flow forecasts.',
      tech: ['FastAPI', 'LangGraph', 'LangChain', 'GPT-4', 'Next.js', 'SQLite', 'MCP'],
      github: 'https://github.com/monishkumar3499/expense-tracking-agent',
      linkText: 'View on GitHub',
    },
    {
      icon: "📄",
      title: 'AI Document Classification System',
      description: 'Designed an end-to-end <strong class="text-text font-medium">AI pipeline</strong> for Kochi Metro Rail automating <strong class="text-text font-medium">document routing via REST APIs</strong> across departments. Cut processing time from 2-5 min to <strong class="text-text font-medium">under 7 seconds (97% faster)</strong>; enabled scalable multi-department ingestion eliminating all manual sorting errors. <strong class="text-text font-medium">Top 6 Nationally</strong> at Smart India Hackathon 2025.',
      tech: ['Python', 'BERT', 'TensorFlow', 'OCR', 'React', 'Node.js', 'PostgreSQL'],
      github: 'https://github.com/monishkumar3499/document-manager',
      linkText: 'View on GitHub',
    },
    {
      icon: "🎯",
      title: 'Automated Resume Ranking System',
      description: 'Built a <strong class="text-text font-medium">full-stack screening platform</strong> (React, Node.js, Express.js REST APIs) running a <strong class="text-text font-medium">BERT-based NLP pipeline</strong>; eliminated manual shortlisting and scaled to <strong class="text-text font-medium">high-volume hiring workflows</strong>. Designed semantic scoring with contextual embeddings achieving <strong class="text-text font-medium">85% shortlisting accuracy</strong>.',
      tech: ['Node.js', 'Express.js', 'React', 'Python', 'BERT', 'NLP'],
      github: 'https://github.com/monishkumar3499',
      linkText: 'View on GitHub',
    },
    {
      icon: "💰",
      title: 'Customer Churn Analysis',
      description: 'Exploratory data analysis and ML modelling pipeline to predict customer churn. Applied feature engineering, model selection, and visualisation to surface <strong class="text-text font-medium">actionable retention insights</strong> from real-world business data.',
      tech: ['Python', 'Jupyter', 'scikit-learn', 'pandas', 'ML'],
      github: 'https://github.com/monishkumar3499/customer-churn-analysis',
      linkText: 'View on GitHub',
    },
    {
      icon: "🛰️",
      title: 'Marine Oil Spill Detection (Research)',
      description: 'Co-authored research on a <strong class="text-text font-medium">Multi-Sensor Imaging Framework</strong> for marine oil spill detection using a <strong class="text-text font-medium">CNN on 1,000+ satellite images</strong>, achieving <strong class="text-text font-medium">94% validation accuracy</strong>. Under review in a <strong class="text-text font-medium">Scopus-indexed journal</strong>.',
      tech: ['CNN', 'Computer Vision', 'Python', 'TensorFlow', 'Satellite Imagery'],
      github: 'https://github.com/monishkumar3499',
      linkText: 'Research Paper',
    },
    {
      icon: "🏢",
      title: 'Helpdesk Platform (JMAN Group)',
      description: 'Core Agile team member building a <strong class="text-text font-medium">RESTful API-first helpdesk platform</strong> with <strong class="text-text font-medium">RBAC/JWT authentication</strong>. Deployed customer-facing apps on <strong class="text-text font-medium">AWS with Docker autoscaling</strong>, cutting latency by <strong class="text-text font-medium">50%</strong> and shipping production-ready in 4 weeks.',
      tech: ['NestJS', 'Next.js', 'Java', 'AWS', 'Docker', 'RBAC/JWT'],
      github: 'https://github.com/monishkumar3499',
      linkText: 'Professional Project',
    }
  ];

  return (
    <div id="projects" className="bg-gradient-to-b from-transparent to-bg2">
      <Section>
        <div className="mb-12">
          <p className="section-label">03. Projects</p>
          <h2 className="section-title">Things I've <span>Built</span></h2>
          <div className="section-divider"></div>
        </div>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-6">
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: (index % 3) * 0.1 }}
              className="bg-card border border-border rounded-[14px] p-7 flex flex-col gap-4 relative overflow-hidden transition-all duration-300 group hover:border-border-accent hover:shadow-[0_0_40px_rgba(0,229,255,0.1),_0_20px_40px_rgba(0,0,0,0.3)] hover:-translate-y-1"
            >
              {/* Radial gradient hover effect overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,229,255,0.05)_0%,transparent_60%)] opacity-0 transition-opacity duration-400 group-hover:opacity-100 z-0"></div>
              
              <div className="relative z-10 flex flex-col h-full gap-4">
                <h3 className="font-heading text-[1.15rem] font-bold text-white flex items-start gap-2.5">
                  <span className="text-[1.4rem] leading-none flex-shrink-0 mt-[0.1rem] group-hover:scale-110 transition-transform duration-300">
                    {project.icon}
                  </span>
                  <span>{project.title}</span>
                </h3>
                
                <p 
                  className="text-[0.875rem] text-muted leading-[1.7] flex-1"
                  dangerouslySetInnerHTML={{ __html: project.description }}
                ></p>
                
                <div className="flex flex-wrap gap-[0.4rem] mt-1">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="font-mono text-[0.7rem] text-cyan2 bg-[rgba(56,189,248,0.08)] border border-[rgba(56,189,248,0.15)] px-[0.55rem] py-[0.2rem] rounded-[20px] tracking-[0.02em]">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3 mt-1">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[0.8rem] font-medium text-muted no-underline transition-colors duration-200 tracking-[0.02em] hover:text-cyan">
                      <svg className="w-[14px] h-[14px]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
                      {project.linkText}
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Projects;
