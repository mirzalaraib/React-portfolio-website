import { motion } from 'framer-motion';

const SkillCard = ({ title, skills }) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-card border border-card-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
    >
      <h3 className="text-lg font-semibold text-foreground mb-4 border-b border-card-border pb-2">
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span 
            key={index}
            className="px-3 py-1 bg-secondary/10 text-secondary text-sm font-medium rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillCard;
