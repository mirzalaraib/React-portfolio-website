import { portfolioData } from '../data/portfolioData';
import { Mail, ArrowUp } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const { links, personalInfo } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t border-card-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold text-foreground">{personalInfo.name}</h3>
            <p className="text-sm text-secondary mt-1">{personalInfo.role}</p>
          </div>
          
          <div className="flex space-x-6">
            <a href={links.github} target="_blank" rel="noreferrer" className="text-secondary hover:text-primary transition-colors" aria-label="GitHub">
              <FaGithub size={20} />
            </a>
            <a href={links.linkedin} target="_blank" rel="noreferrer" className="text-secondary hover:text-primary transition-colors" aria-label="LinkedIn">
              <FaLinkedin size={20} />
            </a>
            <a href={`mailto:${personalInfo.email}`} className="text-secondary hover:text-primary transition-colors" aria-label="Email">
              <Mail size={20} />
            </a>
          </div>

          <button 
            onClick={scrollToTop}
            className="flex items-center space-x-2 text-sm text-secondary hover:text-primary transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp size={16} />
          </button>
        </div>
        
        <div className="mt-8 text-center text-sm text-secondary">
          <p>&copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
