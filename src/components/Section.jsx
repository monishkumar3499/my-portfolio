import { motion } from 'framer-motion';

const Section = ({ id, children, className = '' }) => {
  return (
    <section id={id} className={`py-[55px] md:py-[75px] relative z-10 ${className}`}>
  <div className="section-container mx-auto px-[5%] text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default Section;
