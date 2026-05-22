import Section from './Section';
import { GithubIcon, LinkedinIcon } from './Icons';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div id="contact" className="bg-gradient-to-b from-bg2 to-transparent text-center">
      <Section>
        <div className="max-w-[600px] mx-auto text-center flex flex-col items-center">
          <motion.div
             initial={{ opacity: 0, y: 40 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-50px" }}
             transition={{ duration: 0.7 }}
          >
            <p className="section-label">06. What's Next?</p>
            <h2 className="section-title">Get In <span>Touch</span></h2>
            <div className="section-divider mx-auto mb-8"></div>
          </motion.div>
          
          <motion.p 
             initial={{ opacity: 0, y: 40 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-50px" }}
             transition={{ duration: 0.7, delay: 0.1 }}
             className="text-muted mb-8 leading-[1.7]"
          >
            I'm currently looking for new opportunities. Whether you have a question, a project proposal, or just want to say hi, my inbox is always open. I'll try my best to get back to you!
          </motion.p>
          
          <motion.div
             initial={{ opacity: 0, y: 40 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-50px" }}
             transition={{ duration: 0.7, delay: 0.2 }}
          >
            <a 
              href="mailto:monishkumar3499@gmail.com" 
              className="inline-flex items-center gap-2 text-[1.1rem] text-cyan font-mono px-8 py-4 border border-border-accent rounded-[10px] transition-all duration-300 no-underline mb-8 hover:bg-[rgba(0,229,255,0.15)] hover:shadow-[0_0_30px_rgba(0,229,255,0.15)]"
            >
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              Say Hello
            </a>
          </motion.div>
          
          <motion.div 
             initial={{ opacity: 0, y: 40 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-50px" }}
             transition={{ duration: 0.7, delay: 0.3 }}
             className="flex justify-center flex-wrap gap-4 mt-6"
          >
            <a href="https://github.com/monishkumar3499" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 border border-border rounded-[8px] text-muted no-underline text-[0.875rem] transition-all duration-200 hover:border-border-accent hover:text-cyan hover:bg-[rgba(0,229,255,0.15)]">
              <GithubIcon size={18} />
              GitHub
            </a>
            <a href="https://linkedin.com/in/monishkumar-v/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 border border-border rounded-[8px] text-muted no-underline text-[0.875rem] transition-all duration-200 hover:border-border-accent hover:text-cyan hover:bg-[rgba(0,229,255,0.15)]">
              <LinkedinIcon size={18} />
              LinkedIn
            </a>
            <a href="https://leetcode.com/u/Mon1shkumar/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 border border-border rounded-[8px] text-muted no-underline text-[0.875rem] transition-all duration-200 hover:border-border-accent hover:text-cyan hover:bg-[rgba(0,229,255,0.15)]">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M13.483 0a1.374 1.374 0 00-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 00-1.209 2.104 5.35 5.35 0 00-.125.513 5.527 5.527 0 00.062 2.362 5.83 5.83 0 00.349 1.017 5.938 5.938 0 00 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 00-1.951-.003l-2.396 2.392a3.021 3.021 0 01-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 01.066-.523 2.545 2.545 0 01.619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 00-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0013.483 0zm-2.866 12.815a1.38 1.38 0 00-1.38 1.382 1.38 1.38 0 001.38 1.382H20.79a1.38 1.38 0 001.38-1.382 1.38 1.38 0 00-1.38-1.382z"/></svg>
              LeetCode
            </a>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};

export default Contact;
