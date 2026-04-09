import { portfolioData } from '../data/portfolioData';
import { AnimatedPage } from '../components/AnimatedPage';
import { Briefcase, Calendar, Link as LinkIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const Experience = () => {
  const { experience } = portfolioData;

  return (
    <AnimatedPage>
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6 flex items-center">
            <span className="w-12 h-1 bg-gradient-to-r from-primary to-accent mr-4 rounded-full"></span>
            Professional Experience
          </h2>
        </div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-primary/30 before:to-transparent">
          {experience.map((exp, idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              key={idx} 
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              {/* Timeline marker */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-card bg-primary text-white shadow-[0_0_15px_rgba(var(--color-primary-rgb),0.5)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-transform duration-300 group-hover:scale-110">
                <Briefcase size={16} />
              </div>
              
              {/* Content box */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-3xl bg-card/80 backdrop-blur-sm border border-card-border shadow-sm hover:shadow-glow hover:border-primary/30 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h3 className="font-bold text-xl text-foreground">{exp.role}</h3>
                  <div className="flex items-center text-secondary text-sm font-medium mt-1 md:mt-0 bg-secondary/10 px-3 py-1 rounded-full w-fit">
                    <Calendar size={14} className="mr-2" />
                    {exp.duration}
                  </div>
                </div>
                
                <h4 className="flex items-center text-primary font-semibold mb-4">
                  {exp.company}
                  {exp.companyLink && (
                    <a href={exp.companyLink} target="_blank" rel="noreferrer" className="ml-2 hover:text-accent transition-colors">
                      <LinkIcon size={14} />
                    </a>
                  )}
                </h4>
                
                <ul className="space-y-3">
                  {exp.points.map((point, pointIdx) => (
                    <li key={pointIdx} className="flex items-start text-secondary">
                      <span className="text-primary mt-1 mr-2 text-lg leading-none">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Experience;
