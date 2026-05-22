import Section from './Section';

const Experience = () => {
  return (
    <div id="experience" className="bg-gradient-to-b from-bg2 to-transparent">
      <Section>
        <div className="mb-12">
          <p className="section-label">02. Experience</p>
          <h2 className="section-title">Where I've <span>Worked</span></h2>
          <div className="section-divider"></div>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 top-[8px] bottom-0 w-[1px] bg-gradient-to-b from-cyan to-transparent"></div>
          
          <div className="pl-8 pb-12 relative">
            {/* Timeline Dot */}
            <div className="absolute left-[-5px] top-[8px] w-[11px] h-[11px] rounded-full bg-cyan shadow-[0_0_12px_rgba(0,229,255,0.5)]"></div>
            
            <div className="bg-card border border-border rounded-[12px] p-7 relative overflow-hidden transition-all duration-300 hover:border-border-accent hover:shadow-[0_0_40px_rgba(0,229,255,0.08)] hover:-translate-y-[2px] group">
              {/* Top Gradient Border Reveal */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan via-cyan2 to-transparent scale-x-0 origin-left transition-transform duration-400 group-hover:scale-x-100"></div>
              
              <div className="flex justify-between items-start flex-wrap gap-2 mb-1">
                <span className="font-heading text-[1.15rem] font-bold text-white">JMAN Group</span>
                <span className="font-mono text-[0.78rem] text-cyan bg-[rgba(0,229,255,0.08)] px-[0.6rem] py-[0.25rem] rounded-[20px] border border-[rgba(0,229,255,0.2)] whitespace-nowrap">Feb 2026 - Present</span>
              </div>
              
              <div className="text-[0.875rem] text-cyan2 mb-4">Trainee Software Engineer · Chennai, TN</div>
              
              <ul className="flex flex-col gap-[0.6rem] list-none">
                <li className="flex gap-3 text-[0.9rem] text-muted leading-[1.6]">
                  <span className="text-cyan shrink-0 mt-[0.1rem]">▸</span>
                  <span>Core <strong className="text-text font-medium">Agile team</strong> member building a <strong className="text-text font-medium">RESTful API-first helpdesk platform</strong> (NestJS, Next.js, Java) with <strong className="text-text font-medium">RBAC/JWT</strong>; led sprint code reviews, proof-of-concept testing, and cut customer latency by <strong className="text-text font-medium">50%</strong>.</span>
                </li>
                <li className="flex gap-3 text-[0.9rem] text-muted leading-[1.6]">
                  <span className="text-cyan shrink-0 mt-[0.1rem]">▸</span>
                  <span>Deployed <strong className="text-text font-medium">customer-facing web apps</strong> on <strong className="text-text font-medium">AWS (EC2, ELB, RDS)</strong> with <strong className="text-text font-medium">Docker</strong> and autoscaling; shipped production-ready build in <strong className="text-text font-medium">4 weeks</strong> via data-driven load profiling.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Experience;
