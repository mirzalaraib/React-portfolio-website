import { portfolioData } from '../data/portfolioData';
import { AnimatedPage } from '../components/AnimatedPage';
import { NavLink, useNavigate } from 'react-router-dom';
import { Download, ArrowRight, Mail, Car } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.2, // Time between each word
    },
  },
};

const word = {
  hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      ease: "easeOut",
      duration: 0.6,
    },
  },
};

const Home = () => {
  const { personalInfo } = portfolioData;
  const [isDriving, setIsDriving] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleDrive = (e) => {
      setIsDriving(true);
      setTimeout(() => {
        navigate(e.detail);
      }, 1000); // 1 second drive time
    };
    window.addEventListener("driveCar", handleDrive);
    return () => window.removeEventListener("driveCar", handleDrive);
  }, [navigate]);

  return (
    <AnimatedPage className="flex items-center justify-center min-h-[calc(100vh-10rem)] relative w-full">
      {/* Giant Background Word */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none z-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
          animate={{ opacity: [0.06, 0.3, 0.06], scale: 1, rotate: -5 }}
          transition={{ 
            opacity: { duration: 0.5, repeat: Infinity, repeatDelay: 1, ease: "easeInOut" },
            default: { duration: 1.5, ease: "easeOut" }
          }}
          className="text-center"
        >
          <span className="text-[12vw] md:text-[10vw] font-display font-extrabold text-foreground leading-none tracking-tighter">
            JAVASCRIPT
          </span>
        </motion.div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-8 inline-flex justify-center"
        >
          <div className="flex items-center px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(var(--color-primary-rgb),0.3)]">
            <motion.div
              animate={isDriving ? { x: '100vw', y: 0, scale: 1.5 } : { 
                x: [0, 6, 0],
                y: [0, -2, 0, -1, 0]
              }}
              transition={isDriving ? { duration: 1, ease: "easeInOut" } : { 
                x: { duration: 3.5, repeat: Infinity, ease: "easeInOut" },
                y: { duration: 0.8, repeat: Infinity, ease: "easeInOut" }
              }}
              className={`mt-[-1px] text-amber-500 dark:text-amber-400 drop-shadow-[0_0_8px_rgba(245,158,11,0.7)] ${isDriving ? 'relative z-[9999] mr-0 origin-right' : 'mr-3'}`}
            >
              <Car size={24} strokeWidth={2.5} />
            </motion.div>
            {personalInfo.location}
          </div>
        </motion.div>

        <motion.h1 
          className="text-5xl md:text-7xl font-display font-extrabold text-foreground tracking-tight mb-6 leading-tight flex flex-wrap justify-center items-center"
          variants={sentence}
          initial="hidden"
          animate="visible"
        >
          <motion.span variants={word} className="mr-3 md:mr-4">Hi,</motion.span>
          <motion.span variants={word} className="mr-3 md:mr-4">I'm</motion.span>
          {/* Force break on mobile */}
          <div className="basis-full h-0 md:hidden"></div>
          <motion.span variants={word} className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-gradient-x mt-2 md:mt-0">
            {personalInfo.name}
          </motion.span>
        </motion.h1>

        <motion.h2 
          className="text-2xl md:text-4xl font-display font-bold text-foreground mb-8 drop-shadow-sm"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
        >
          {personalInfo.role}
        </motion.h2>

        <motion.p 
          className="text-lg md:text-xl text-secondary max-w-2xl mx-auto mb-12 leading-relaxed"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
        >
          {personalInfo.heroSummary}
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
        >
          <NavLink
            to="/projects"
            onClick={(e) => {
              e.preventDefault();
              window.dispatchEvent(new CustomEvent("driveCar", { detail: "/projects" }));
            }}
            className="flex items-center px-8 py-3.5 rounded-full bg-primary text-white font-semibold hover:bg-accent hover:-translate-y-1 transition-all duration-300 shadow-[0_0_20px_rgba(var(--color-primary-rgb),0.5)] hover:shadow-[0_0_30px_rgba(var(--color-primary-rgb),0.7)]"
          >
            View Projects
            <ArrowRight className="ml-2" size={20} />
          </NavLink>
          
          <a
            href={personalInfo.resumeLink}
            target="_blank"
            rel="noreferrer"
            className="flex items-center px-8 py-3.5 rounded-full bg-card/50 backdrop-blur-md border border-card-border text-foreground font-semibold hover:border-primary/50 hover:bg-primary/5 hover:-translate-y-1 transition-all duration-300"
          >
            Download Resume
            <Download className="ml-2" size={20} />
          </a>

          <NavLink
            to="/contact"
            onClick={(e) => {
              e.preventDefault();
              window.dispatchEvent(new CustomEvent("driveCar", { detail: "/contact" }));
            }}
            className="flex items-center px-8 py-3.5 rounded-full bg-secondary/10 text-foreground font-semibold hover:bg-primary/10 hover:text-primary hover:-translate-y-1 transition-all duration-300 group"
          >
            Contact Me
            <motion.div
              animate={{ rotate: [0, -15, 15, -15, 15, -10, 10, 0] }}
              transition={{ duration: 0.6, repeat: Infinity, ease: "linear" }} 
              className="ml-2 text-primary"
            >
              <Mail size={20} />
            </motion.div>
          </NavLink>
        </motion.div>
      </div>
    </AnimatedPage>
  );
};

export default Home;
