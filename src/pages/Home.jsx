import { portfolioData } from '../data/portfolioData';
import { AnimatedPage } from '../components/AnimatedPage';
import { NavLink } from 'react-router-dom';
import { Download, ArrowRight, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Home = () => {
  const { personalInfo } = portfolioData;

  return (
    <AnimatedPage className="flex items-center justify-center min-h-[calc(100vh-10rem)]">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-block"
        >
          <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide uppercase">
            {personalInfo.location}
          </span>
        </motion.div>

        <motion.h1 
          className="text-5xl md:text-7xl font-extrabold text-foreground tracking-tight mb-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">{personalInfo.name}</span>
        </motion.h1>

        <motion.h2 
          className="text-2xl md:text-3xl font-medium text-secondary mb-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {personalInfo.role}
        </motion.h2>

        <motion.p 
          className="text-lg md:text-xl text-secondary max-w-2xl mx-auto mb-10 leading-relaxed"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          {personalInfo.heroSummary}
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <NavLink
            to="/projects"
            className="flex items-center px-8 py-3 rounded-full bg-primary text-white font-medium hover:bg-accent hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-primary/30"
          >
            View Projects
            <ArrowRight className="ml-2" size={20} />
          </NavLink>
          
          <a
            href={personalInfo.resumeLink}
            target="_blank"
            rel="noreferrer"
            className="flex items-center px-8 py-3 rounded-full bg-card border border-card-border text-foreground font-medium hover:bg-card-border hover:-translate-y-1 transition-all duration-300"
          >
            Download Resume
            <Download className="ml-2" size={20} />
          </a>

          <NavLink
            to="/contact"
            className="flex items-center px-8 py-3 rounded-full bg-secondary/10 text-foreground font-medium hover:bg-secondary/20 hover:-translate-y-1 transition-all duration-300"
          >
            Contact Me
            <Mail className="ml-2" size={20} />
          </NavLink>
        </motion.div>
      </div>
    </AnimatedPage>
  );
};

export default Home;
