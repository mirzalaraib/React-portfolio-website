import { portfolioData } from '../data/portfolioData';
import { AnimatedPage } from '../components/AnimatedPage';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const { projects } = portfolioData;

  return (
    <AnimatedPage>
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 flex items-center">
            <span className="w-8 h-1 bg-primary mr-4 rounded-full"></span>
            Featured Projects
          </h2>
          <p className="text-lg text-secondary max-w-2xl">
            A selection of my recent works highlighting my expertise in building scalable and performant backend APIs, architecture and full stack solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Projects;
