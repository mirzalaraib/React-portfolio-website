import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
  return (
    <motion.div 
      whileHover={{ y: -8, scale: 1.01 }}
      className="group flex flex-col h-full bg-card/80 backdrop-blur-md border border-card-border rounded-3xl overflow-hidden shadow-sm hover:shadow-glow hover:border-primary/40 transition-all duration-500"
    >
      <div className="p-8 flex-grow relative overflow-hidden">
        {/* Subtle background glow effect */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-500 -mr-16 -mt-16"></div>
        
        <h3 className="text-2xl font-display font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-secondary mb-8 leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((techItem, index) => (
            <span 
              key={index} 
              className="px-4 py-1.5 bg-primary/10 text-primary text-xs font-semibold rounded-full uppercase tracking-wider border border-primary/10 hover:bg-primary hover:text-white transition-colors duration-300"
            >
              {techItem}
            </span>
          ))}
        </div>
      </div>

      <div className="px-8 py-6 border-t border-card-border bg-card-border/10 flex items-center justify-between mt-auto backdrop-blur-sm">
        <div className="flex space-x-6">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="flex items-center text-sm font-semibold text-secondary hover:text-primary transition-all duration-300 hover:scale-105"
            >
              <ExternalLink size={18} className="mr-2" />
              Live Demo
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center text-sm font-semibold text-secondary hover:text-primary transition-all duration-300 hover:scale-105"
            >
              <FaGithub size={18} className="mr-2" />
              Source Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
