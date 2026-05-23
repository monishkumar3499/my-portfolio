import { useRef, useState } from 'react';
import Section from '../Section';
import { motion } from 'framer-motion';

const Projects = ({ isCollapsed }) => {
  const projects = [
    {
      number: "01",
  name: "AI Financial Agent",
      tech: ["Python", "FastAPI", "LangGraph", "LangChain", "GPT-4", "SQLite", "Next.js"],
      summary: "Stateful financial agent orchestrating LangGraph multi-agent systems and real-time ledger forecasts.",
      description: [
        "Stateful multi-agent orchestrations with LangGraph auto-routers and conversational token context windows.",
        "Deep server-client integrations running Model Context Protocol (MCP) standards for zero-latency pipelines.",
        "Implements recursive tool-calling functions with stateful session memories and transaction caching.",
        "Auto-maps financial inputs to a robust 4-model relational database schema via safe FastAPI controller paths."
      ],
      github: "https://github.com/monishkumar3499/expense-tracking-agent",
      architecture: [
        "MCP Client <-> FastAPI Gateway",
        "LangGraph (Router & Memory Tool)",
        "SQLite Relational Core Engine",
        "GPT-4 System Context Schema"
      ]
    },
    {
      number: "02",
      name: "AI Document Classification",
      tech: ["Python", "BERT", "TensorFlow", "OCR", "Node.js", "PostgreSQL", "AWS (EC2/RDS)"],
      summary: "End-to-end OCR and custom BERT classification pipeline built for enterprise transit documents.",
      description: [
        "End-to-end automated classification pipelines engineered for Kochi Metro Rail enterprise environments.",
        "Integrates high-speed OCR deep extraction routines to parse scanned PDFs and image matrices.",
        "Natural Language Processing layer leveraging custom-tuned, localized BERT text classifier models.",
        "Achieved under 7 seconds processing times per batch, delivering a 97% overall system speedup."
      ],
      github: "https://github.com/monishkumar3499/ai-document-management-system",
      architecture: [
        "OCR Extraction (Deep Ingestion)",
        "BERT Model Inference Layer",
        "Kochi Metro REST Gateway",
        "AWS RDS Postgres Analytics"
      ]
    },
    {
      number: "03",
      name: "Automated Resume Ranking",
      tech: ["React.js", "Node.js", "Express.js", "Python", "BERT Embeddings", "REST APIs"],
      summary: "Advanced resume screening engine using semantic BERT embeddings and cosine matching.",
      description: [
        "Enterprise candidate screening platform utilizing advanced BERT semantic contextual embeddings.",
        "Custom prompt parameter matrices enabling HR admins to dynamically optimize scoring weights.",
        "High-performance matching engine using Cosine Similarity metrics to rank candidate records instantly.",
        "Integrated comprehensive CI/CD automated testing suites using Jest and PyTest frameworks."
      ],
      github: "https://github.com/monishkumar3499/resume-ranking-engine",
      architecture: [
        "React HR Admin Workspace Dashboard",
        "Node.js Express REST Controller",
        "BERT Text Semantic Scoring",
        "Jest & PyTest Integration Tests"
      ]
    },
    {
      number: "04",
      name: "Stock Analysis Agent",
      tech: ["Python", "FastAPI", "LangChain", "GPT-4", "yfinance", "Pandas", "NumPy"],
      summary: "Autonomous market research agent utilizing LangChain schemas and real-time financial APIs.",
      description: [
        "Autonomous agentic workflow running real-time financial data collection and market trend indicators.",
        "Real-time sub-second telemetry collection via high-speed, localized yfinance data connections.",
        "Automatic technical analysis indicator computations including moving averages and relative strength indexes.",
        "Structured LangChain prompt schemas to synthesize reliable, data-driven financial investment briefs."
      ],
      github: "https://github.com/monishkumar3499/stock-analysis-agent",
      architecture: [
        "FastAPI Market Data Controller",
        "yfinance Real-time Data Collector",
        "Pandas & NumPy Valuation Engine",
        "GPT-4 Prompt Brief Synthesis"
      ]
    },
    {
      number: "05",
      name: "Customer Churn Analysis",
      tech: ["Python", "Jupyter Notebook", "Pandas", "Scikit-Learn", "Matplotlib", "XGBoost"],
      summary: "Predictive analytics data pipeline using high-performance XGBoost classifiers.",
      description: [
        "Comprehensive predictive analytics data pipeline developed to forecast customer attrition.",
        "High-speed, custom ETL scripts written in Pandas and NumPy to clean and normalize raw arrays.",
        "In-depth exploratory data analysis (EDA) using Matplotlib and Seaborn segment correlation matrices.",
        "Trained high-accuracy XGBoost and Scikit-Learn classifiers to identify early attrition indicators."
      ],
      github: "https://github.com/monishkumar3499/customer-churn-analysis",
      architecture: [
        "ETL Pipeline (Pandas & NumPy)",
        "Exploratory Churn Data Analysis",
        "Feature Correlation & Selection",
        "XGBoost & Scikit-Learn Classifiers"
      ]
    }
  ];

  const [activeProject, setActiveProject] = useState(0);

  return (
    <section id="projects" className="relative">
      <Section>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-left"
        >
          <p className="font-mono text-accent text-xs tracking-widest uppercase mb-2">SYSTEM ARCHITECTURES</p>
          <h2 className="font-heading font-extrabold text-[clamp(2rem,5vw,2.5rem)] text-white">
            Core Engineering Projects
          </h2>
          <div className="w-[60px] h-[2px] bg-accent mt-3"></div>
        </motion.div>

        {/* Dynamic Project Grid / Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Interactive Selector List */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {projects.map((project, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveProject(index)}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className={`text-left p-6 rounded-[12px] border transition-all duration-300 relative overflow-hidden flex flex-col justify-between ${
                  activeProject === index
                    ? 'bg-card border-border-accent/40 shadow-[0_0_20px_rgba(181,255,77,0.05)]'
                    : 'bg-card/30 border-border/20 hover:border-border/60 hover:bg-card/50'
                }`}
              >
                {activeProject === index && (
                  <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-accent"></div>
                )}
                
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-mono text-xs text-accent">_{project.number}</span>
                  <h3 className={`font-heading font-bold text-[1.15rem] transition-colors ${
                    activeProject === index ? 'text-white' : 'text-muted'
                  }`}>
                    {project.name}
                  </h3>
                </div>

                <p className="text-muted text-[0.8rem] line-clamp-2 leading-relaxed mb-4">
                  {project.summary}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {project.tech.slice(0, 3).map((t, i) => (
                    <span key={i} className="font-mono text-[0.65rem] bg-border/20 px-2 py-0.5 rounded text-white/70 border border-border/20">
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="font-mono text-[0.65rem] text-accent/50 px-2 py-0.5">
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </div>
              </motion.button>
            ))}
          </div>

          {/* Right Column: Console Blueprint Terminal */}
          <div className="lg:col-span-7">
            <motion.div
              key={activeProject}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-[rgba(5,5,5,0.7)] border border-border-accent/15 rounded-[12px] h-full flex flex-col overflow-hidden text-left"
            >
              {/* Terminal Header */}
              <div className="bg-border/25 px-4 py-3 border-b border-border-accent/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                  <span className="font-mono text-[0.7rem] text-muted ml-3 uppercase tracking-wider">
                    Blueprint // sys-arch-{projects[activeProject].number}.conf
                  </span>
                </div>
                <div className="font-mono text-[0.65rem] text-accent/50">Vitals: SECURE</div>
              </div>

              {/* Terminal Body */}
              <div className="p-6 flex-1 flex flex-col gap-6 font-mono">
                {/* Upper Half: UI Preview Browser Frame */}
                <div className="w-full flex flex-col">
                  <span className="text-white/40 text-[0.75rem] mb-2">&gt; ui_preview.viewport</span>
                  <div className="bg-border/10 border border-border-accent/25 rounded-[8px] overflow-hidden flex flex-col relative group/frame">
                    {/* Mock Browser Header */}
                    <div className="bg-border/30 px-3 py-1.5 border-b border-border/20 flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
                      <div className="bg-bg/60 text-[0.55rem] text-muted px-2 py-0.5 rounded w-full text-center truncate select-none">
                        https://github.com/monishkumar3499/...
                      </div>
                    </div>
                    
                    {/* Mock Viewport Interface */}
                    <div className="flex-1 flex flex-col bg-[rgba(5,5,5,0.85)] relative min-h-[240px]">
                      {renderProjectViewport(activeProject, projects[activeProject].name)}
                    </div>
                  </div>
                </div>

                {/* Lower Half: Specifications & Action Details */}
                <div className="flex-1 flex flex-col gap-5 pt-4 border-t border-border/10 justify-between">
                  {/* Top Portion: Tech Badges & Description */}
                  <div className="flex-grow flex flex-col gap-5">
                    {/* Tech Badges Row */}
                    <div className="flex flex-col gap-2 text-left flex-none">
                      <span className="text-white/40 text-[0.75rem]">&gt; tech.stack</span>
                      <div className="flex flex-wrap gap-2">
                        {projects[activeProject].tech.map((tech, idx) => (
                          <span
                            key={idx}
                            className="text-[0.7rem] text-accent bg-accent/5 border border-accent/20 px-2.5 py-1 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Description Box */}
                    <div className="flex-grow flex flex-col gap-2 text-left bg-border/5 border border-border/20 p-4 rounded-[8px] min-h-[140px]">
                      <span className="text-white/40 text-[0.75rem]">&gt; description.info</span>
                      <ul className="font-sans text-muted text-xs md:text-sm leading-relaxed flex-1 space-y-2 list-none pl-1">
                        {projects[activeProject].description.map((bullet, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <span className="text-accent text-[0.8rem] mt-0.5 select-none flex-none">✓</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Repository Action Button at the absolute bottom */}
                  <div className="text-center pt-3 border-t border-border/10 flex-none">
                    <a
                      href={projects[activeProject].github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 border border-accent hover:bg-accent hover:text-bg text-accent font-bold text-[0.8rem] rounded transition-all duration-300 w-full sm:w-auto justify-center"
                    >
                      <span>View Repository</span>
                      <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>
    </section>
  );
};

// Helper to render high-fidelity custom visual interfaces for the blueprint viewports
function renderProjectViewport(index, projectName) {
  if (projectName.includes("AI Financial")) {
    return (
      <div className="w-full h-full flex flex-col p-4 text-[0.7rem] text-left gap-3.5 font-mono bg-black/60 relative">
        <div className="flex items-center justify-between border-b border-accent/20 pb-2 mb-1">
          <span className="text-accent font-bold tracking-wider">&gt; AI_FIN_AGENT_V1.0</span>
          <span className="text-cyan animate-pulse flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan inline-block animate-ping"></span>
            ● ACTIVE_MCP
          </span>
        </div>
        <div className="space-y-2 flex-1 flex flex-col justify-between">
          <div className="space-y-2">
            <div className="flex justify-between items-center bg-border/20 px-3 py-2 rounded border border-border/10">
              <span className="text-white/60 text-[0.65rem]">Balance Forecast</span>
              <span className="text-accent font-bold text-[0.8rem]">$24,850.00</span>
            </div>
            <div className="text-white/40 text-[0.6rem] flex items-center gap-2">
              <span className="opacity-80">&gt; langgraph_flow:</span>
              <span className="text-accent">Router → MemoryTool → SQLite</span>
            </div>
          </div>
          {/* Sparkline simulation */}
          <div className="h-16 w-full bg-border/10 border border-border/25 rounded relative overflow-hidden flex items-end">
            <svg className="absolute inset-0 w-full h-full text-accent/70" viewBox="0 0 100 30" preserveAspectRatio="none">
              {/* simplified sparkline: single stroked path, no heavy fill */}
              <path d="M0,20 L20,10 L40,18 L60,8 L80,16 L100,12" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="absolute top-2 right-2.5 text-[0.65rem] text-accent/80 font-semibold">Forecast: +14%</div>
          </div>
          <div className="space-y-1.5 text-[0.6rem] border-t border-border/10 pt-2">
            <div className="flex justify-between text-white/70">
              <span>● Cash Flow Inflow</span>
              <span className="text-accent font-bold">+$4,200.00</span>
            </div>
            <div className="flex justify-between text-white/70">
              <span>● AWS Cloud Invoice</span>
              <span className="text-red-400">-$150.00</span>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (projectName.includes("Document")) {
    return (
      <div className="w-full h-full flex flex-col p-4 text-[0.7rem] text-left gap-3.5 font-mono bg-black/60 relative">
        <div className="flex items-center justify-between border-b border-cyan/20 pb-2 mb-1">
          <span className="text-cyan font-bold tracking-wider">&gt; KMR_INGESTION_PIPELINE</span>
          <span className="text-accent bg-accent/10 px-1.5 py-0.5 rounded text-[0.55rem] font-bold">97% SPEEDUP</span>
        </div>
        <div className="space-y-3.5 flex-1 flex flex-col justify-between">
          <div className="space-y-1.5">
            <div className="flex justify-between text-white/60 text-[0.65rem]">
              <span>Current Batch Processing</span>
              <span className="text-cyan font-bold">Batch #44</span>
            </div>
            {/* Processing indicator */}
            <div className="w-full bg-border/20 h-2 rounded-full overflow-hidden border border-border/10">
              <div className="bg-cyan h-full w-[85%] rounded-full animate-pulse"></div>
            </div>
          </div>
          <div className="space-y-2 flex-1 flex flex-col justify-center">
            <div className="bg-border/20 border border-border/10 p-2.5 rounded flex flex-col gap-1.5">
              <div className="flex justify-between items-center text-white">
                <span className="truncate max-w-[150px] font-sans font-medium text-[0.65rem]">📄 invoice_kmr_829.pdf</span>
                <span className="text-accent font-bold text-[0.65rem] bg-accent/5 px-1.5 rounded border border-accent/10">98.2% BERT</span>
              </div>
              <div className="text-[0.55rem] text-white/40">&gt; Classifier match: [Finance / Billing]</div>
            </div>
            <div className="bg-border/20 border border-border/10 p-2.5 rounded flex flex-col gap-1.5">
              <div className="flex justify-between items-center text-white">
                <span className="truncate max-w-[150px] font-sans font-medium text-[0.65rem]">📄 metro_route_specs.pdf</span>
                <span className="text-accent font-bold text-[0.65rem] bg-accent/5 px-1.5 rounded border border-accent/10">96.5% BERT</span>
              </div>
              <div className="text-[0.55rem] text-white/40">&gt; Classifier match: [Operations / Technical]</div>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (projectName.includes("Resume")) {
    return (
      <div className="w-full h-full flex flex-col p-4 text-[0.7rem] text-left gap-3.5 font-mono bg-black/60 relative">
        <div className="flex items-center justify-between border-b border-accent/20 pb-2 mb-1">
          <span className="text-accent font-bold tracking-wider">&gt; BERT_SEMANTIC_RANKER</span>
          <span className="text-white/60 text-[0.55rem] border border-border/30 px-1.5 rounded bg-border/10">SDLC STAGED</span>
        </div>
        <div className="space-y-2.5 flex-1 flex flex-col justify-between">
          <div className="text-[0.65rem] text-white/40 flex items-center justify-between">
            <span>Rank & Matching Context</span>
            <span className="text-accent font-bold">Accuracy: 85%+</span>
          </div>
          <div className="space-y-2 flex-1 flex flex-col justify-center">
            <div className="flex items-center justify-between bg-border/20 border border-accent/25 p-2 rounded">
              <div className="flex items-center gap-2">
                <span className="w-4.5 h-4.5 rounded-full bg-accent/25 border border-accent/60 flex items-center justify-center text-accent text-[0.55rem] font-black font-heading">1</span>
                <span className="text-white font-sans font-medium text-[0.65rem] truncate max-w-[110px]">Jane_Doe_Resume</span>
              </div>
              <span className="text-accent font-extrabold bg-accent/5 border border-accent/20 px-2 py-0.5 rounded text-[0.6rem]">92.8% Match</span>
            </div>
            <div className="flex items-center justify-between bg-border/20 border border-border/10 p-2 rounded">
              <div className="flex items-center gap-2">
                <span className="w-4.5 h-4.5 rounded-full bg-border/40 border border-border/60 flex items-center justify-center text-white/60 text-[0.55rem] font-bold">2</span>
                <span className="text-white/70 font-sans text-[0.65rem] truncate max-w-[110px]">John_Smith_CV</span>
              </div>
              <span className="text-white/60 bg-border/30 px-2 py-0.5 rounded text-[0.6rem]">85.4% Match</span>
            </div>
            <div className="flex items-center justify-between bg-border/20 border border-border/10 p-2 rounded">
              <div className="flex items-center gap-2">
                <span className="w-4.5 h-4.5 rounded-full bg-border/40 border border-border/60 flex items-center justify-center text-white/60 text-[0.55rem] font-bold">3</span>
                <span className="text-white/70 font-sans text-[0.65rem] truncate max-w-[110px]">Developer_Resume</span>
              </div>
              <span className="text-white/40 bg-border/30 px-2 py-0.5 rounded text-[0.6rem]">78.1% Match</span>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (projectName.includes("Stock")) {
    return (
      <div className="w-full h-full flex flex-col p-4 text-[0.7rem] text-left gap-3.5 font-mono bg-black/60 relative">
        <div className="flex items-center justify-between border-b border-cyan/20 pb-2 mb-1">
          <span className="text-cyan font-bold tracking-wider">&gt; AGENTIC_TELEMETRY</span>
          <span className="text-accent font-bold text-[0.55rem] border border-accent/25 px-1.5 rounded bg-accent/5">VALUATION: AUTO</span>
        </div>
        <div className="space-y-3 flex-1 flex flex-col justify-between">
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-border/20 border border-border/10 p-2 rounded text-center">
              <div className="text-white/40 text-[0.55rem] mb-0.5">AAPL</div>
              <div className="text-white font-black text-xs">$182.52</div>
              <span className="inline-block mt-1 text-[0.5rem] bg-accent/15 text-accent px-1.5 py-0.5 rounded font-black font-heading tracking-wider">BUY</span>
            </div>
            <div className="bg-border/20 border border-border/10 p-2 rounded text-center">
              <div className="text-white/40 text-[0.55rem] mb-0.5">NVDA</div>
              <div className="text-white font-black text-xs">$950.02</div>
              <span className="inline-block mt-1 text-[0.5rem] bg-border/30 text-white/60 px-1.5 py-0.5 rounded font-bold">HOLD</span>
            </div>
          </div>
          {/* Candlestick graph simulation */}
          <div className="h-14 w-full bg-border/10 border border-border/25 rounded relative overflow-hidden flex items-center justify-around px-2">
            <div className="flex flex-col items-center">
              <div className="w-[1px] h-6 bg-accent"></div>
              <div className="w-2.5 h-3 bg-accent rounded-sm"></div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-[1px] h-8 bg-accent"></div>
              <div className="w-2.5 h-4.5 bg-accent rounded-sm"></div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-[1px] h-7 bg-red-400"></div>
              <div className="w-2.5 h-3 bg-red-400 rounded-sm"></div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-[1px] h-9 bg-accent"></div>
              <div className="w-2.5 h-5 bg-accent rounded-sm"></div>
            </div>
          </div>
          <div className="text-white/40 text-[0.55rem] leading-relaxed border-t border-border/10 pt-1.5">
            &gt; Apple Inc. shows robust support at 180, recommended trigger matched.
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="w-full h-full flex flex-col p-4 text-[0.7rem] text-left gap-3.5 font-mono bg-black/60 relative">
        <div className="flex items-center justify-between border-b border-accent/20 pb-2 mb-1">
          <span className="text-accent font-bold tracking-wider">&gt; CHURN_PREDICT_CORE</span>
          <span className="text-cyan text-[0.55rem] font-bold border border-cyan/25 px-1.5 rounded bg-cyan/5">XGBOOST ENABLED</span>
        </div>
        <div className="space-y-3.5 flex-1 flex flex-col justify-between">
          <div className="grid grid-cols-3 gap-1.5">
            <div className="bg-border/20 border border-border/10 p-1.5 rounded text-center">
              <div className="text-white/40 text-[0.5rem] mb-0.5">CHURN %</div>
              <div className="text-red-400 font-bold text-xs">12.4%</div>
            </div>
            <div className="bg-border/20 border border-border/10 p-1.5 rounded text-center">
              <div className="text-white/40 text-[0.5rem] mb-0.5">ACCURACY</div>
              <div className="text-accent font-bold text-xs">89.4%</div>
            </div>
            <div className="bg-border/20 border border-border/10 p-1.5 rounded text-center">
              <div className="text-white/40 text-[0.5rem] mb-0.5">SEGMENTS</div>
              <div className="text-white font-bold text-xs">420</div>
            </div>
          </div>
          <div className="space-y-2 flex-1 flex flex-col justify-center border-t border-border/10 pt-2">
            <span className="text-white/40 text-[0.58rem] font-bold">&gt; FEATURE_IMPORTANCE_ETL:</span>
            <div className="space-y-2">
              <div>
                <div className="flex justify-between text-white/70 text-[0.58rem] mb-1">
                  <span>Contract Period</span>
                  <span className="text-accent font-bold">90%</span>
                </div>
                <div className="w-full bg-border/20 h-1.5 rounded-full overflow-hidden border border-border/10">
                  <div className="bg-accent h-full w-[90%] rounded-full"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-white/70 text-[0.58rem] mb-1">
                  <span>Monthly Charges</span>
                  <span className="text-cyan font-bold">65%</span>
                </div>
                <div className="w-full bg-border/20 h-1.5 rounded-full overflow-hidden border border-border/10">
                  <div className="bg-cyan h-full w-[65%] rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
