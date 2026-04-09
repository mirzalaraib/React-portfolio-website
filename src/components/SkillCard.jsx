import { motion } from 'framer-motion';

const SkillCard = ({ title, skills }) => {
  return (
    <motion.div 
      whileHover={{ y: -4, scale: 1.02 }}
      className="bg-card/80 backdrop-blur-sm border border-card-border rounded-2xl p-6 shadow-sm hover:shadow-glow hover:border-primary/40 transition-all duration-300"
    >
      <h3 className="text-xl font-display font-semibold text-foreground mb-4 pb-2 border-b border-card-border relative overflow-hidden">
        {title}
        <span className="absolute bottom-0 left-0 w-12 h-[2px] bg-primary rounded-full transition-all duration-300 group-hover:w-full"></span>
      </h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span 
            key={index}
            className="px-3 py-1.5 bg-primary/5 text-secondary hover:text-primary hover:bg-primary/10 text-sm font-medium rounded-full transition-colors border border-transparent hover:border-primary/20"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillCard;
