import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className="flex flex-col h-full bg-card border border-card-border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-primary/50 transition-all duration-300"
    >
      <div className="p-8 flex-grow">
        <h3 className="text-2xl font-bold text-foreground mb-3">{project.title}</h3>
        <p className="text-secondary mb-6 leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((techItem, index) => (
            <span 
              key={index} 
              className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full uppercase tracking-wider"
            >
              {techItem}
            </span>
          ))}
        </div>
      </div>

      <div className="px-8 py-5 border-t border-card-border bg-card-border/20 flex space-x-4 mt-auto">
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="flex items-center text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            <ExternalLink size={16} className="mr-2" />
            Live Demo
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            <FaGithub size={16} className="mr-2" />
            Source Code
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
