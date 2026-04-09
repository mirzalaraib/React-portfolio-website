import { portfolioData } from '../data/portfolioData';
import { AnimatedPage } from '../components/AnimatedPage';
import ContactForm from '../components/ContactForm';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const { personalInfo, links } = portfolioData;

  const contactMethods = [
    {
      icon: <Mail className="text-primary" size={24} />,
      title: "Email",
      value: personalInfo.email,
      link: `mailto:${personalInfo.email}`
    },
    {
      icon: <Phone className="text-primary" size={24} />,
      title: "Phone",
      value: personalInfo.phone,
      link: `tel:${personalInfo.phone}`
    },
    {
      icon: <MapPin className="text-primary" size={24} />,
      title: "Location",
      value: personalInfo.location,
      link: null
    }
  ];

  return (
    <AnimatedPage>
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6 flex items-center justify-center md:justify-start">
            <span className="hidden md:block w-12 h-1 bg-gradient-to-r from-primary to-accent mr-4 rounded-full"></span>
            Get In Touch
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto md:mx-0">
            Have a project in mind or want to explore potential opportunities?
            I'm currently open to new roles in Backend Development. Let's connect!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start mt-12">
          {/* Contact Info */}
          <div className="md:col-span-5 space-y-8">
            <div className="space-y-6">
              {contactMethods.map((method, idx) => (
                <div key={idx} className="flex items-start">
                  <div className="p-4 bg-primary/10 rounded-2xl mr-4 shrink-0 shadow-[0_0_15px_rgba(var(--color-primary-rgb),0.15)] group-hover:shadow-[0_0_20px_rgba(var(--color-primary-rgb),0.3)] transition-all">
                    {method.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-semibold text-foreground mb-1">{method.title}</h3>
                    {method.link ? (
                      <a href={method.link} className="text-secondary hover:text-primary transition-colors">
                        {method.value}
                      </a>
                    ) : (
                      <p className="text-secondary">{method.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-8 border-t border-card-border">
              <h3 className="text-lg font-semibold text-foreground mb-4">Social Profiles</h3>
              <div className="flex space-x-4">
                <a
                  href={links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center p-3 rounded-full bg-card border border-card-border hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 text-secondary"
                  aria-label="GitHub"
                >
                  <FaGithub size={22} />
                </a>
                <a
                  href={links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center p-3 rounded-full bg-card border border-card-border hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 text-secondary"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={22} />
                </a>
                {/* <a 
                  href={links.portfolio} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center p-3 rounded-full bg-card border border-card-border hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 text-secondary"
                  aria-label="Portfolio"
                >
                  <ExternalLink size={22} />
                </a> */}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Contact;
