import { portfolioData } from '../data/portfolioData';
import { AnimatedPage } from '../components/AnimatedPage';
import { FileText, Award, GraduationCap } from 'lucide-react';
import SkillCard from '../components/SkillCard';

const About = () => {
  const { personalInfo, skills, certifications, education } = portfolioData;

  const skillCategories = [
    { title: "Languages", items: skills.languages },
    { title: "Frameworks", items: skills.frameworks },
    { title: "Frontend", items: skills.frontend },
    { title: "Databases", items: skills.databases },
    { title: "Tools", items: skills.tools },
  ];

  return (
    <AnimatedPage>
      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* About Section */}
        <section>
          <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center">
            <span className="w-8 h-1 bg-primary mr-4 rounded-full"></span>
            About Me
          </h2>
          <div className="bg-card border border-card-border rounded-2xl p-8 shadow-sm">
            <p className="text-lg text-secondary leading-relaxed mb-6">
              {personalInfo.aboutSummary}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-primary/10 rounded-lg text-primary mt-1">
                  <FileText size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Backend Specialization</h4>
                  <p className="text-sm text-secondary">Expertise in Node.js, Express.js, and Nest.js architecture.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-accent/10 rounded-lg text-accent mt-1">
                  <Award size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Database Optimization</h4>
                  <p className="text-sm text-secondary">Skilled in MySQL & PostgreSQL queries and modeling.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section>
          <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center">
            <span className="w-8 h-1 bg-primary mr-4 rounded-full"></span>
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, idx) => (
              <SkillCard key={idx} title={category.title} skills={category.items} />
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section>
          <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center">
            <span className="w-8 h-1 bg-primary mr-4 rounded-full"></span>
            Education
          </h2>
          <div className="space-y-6">
            {education.map((edu, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between p-6 bg-card border border-card-border rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start mb-4 sm:mb-0">
                  <div className="p-3 bg-primary/10 rounded-xl text-primary mr-4 shrink-0 mt-1">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{edu.degree}</h3>
                    <p className="text-secondary mt-1 font-medium">{edu.institute}</p>
                  </div>
                </div>
                <div className="sm:text-right ml-16 sm:ml-0">
                  <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary text-sm font-semibold rounded-full">
                    {edu.year}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section>
          <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center">
            <span className="w-8 h-1 bg-primary mr-4 rounded-full"></span>
            Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, idx) => (
              <a
                key={idx}
                href={cert.link}
                target="_blank"
                rel="noreferrer"
                className="group block p-6 bg-card border border-card-border rounded-2xl shadow-sm hover:shadow-md hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">{cert.title}</h3>
                    <p className="text-sm text-secondary mt-1">View Certificate ↗</p>
                  </div>
                  <Award className="text-secondary/50 group-hover:text-primary transition-colors" size={32} />
                </div>
              </a>
            ))}
          </div>
        </section>
      </div>
    </AnimatedPage>
  );
};

export default About;
