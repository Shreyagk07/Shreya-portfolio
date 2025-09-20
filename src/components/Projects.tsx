import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Stock Assistant Chatbot",
      description: "Developed a chatbot assistant using the OpenAI API for real-time stock data and market insights. It features stock performance visualization, trend analysis, and alerts, all built with an interactive Streamlit UI.",
      technologies: ["Python", "OpenAI", "API", "Streamlit"],
      image: "📈",
      github: "#",
      demo: "#"
    },
    {
      title: "Expense Tracker",
      description: "A comprehensive Expense Tracker built with Flask and SQL, supporting full CRUD operations for managing expenses. It includes features for categorization, data visualization, and predictive analytics to forecast future expenses based on historical trends.",
      technologies: ["Python", "Flask", "SQL"],
      image: "💰",
      github: "#",
      demo: "#"
    },
    {
      title: "Web Scraper with Voice Assistant",
      description: "A Python-based tool that scrapes real-time COVID-19 data via API integration. It features a voice assistant for hands-free interaction, allowing users to query and hear the data using speech recognition and text-to-speech systems.",
      technologies: ["Python", "API", "Web Scraping"],
      image: "🎤",
      github: "#",
      demo: "#"
    },
    {
      title: "Flask-note web",
      description: "A note-taking web application built with a Flask backend and a Python-powered database. The frontend uses HTML, CSS, and JavaScript, providing users with a seamless experience to easily add and delete notes as needed.",
      technologies: ["Python", "HTML", "CSS", "Flask"],
      image: "📝",
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gradient mb-4">My Recent Work</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of projects that showcase my skills and passion for development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-card rounded-2xl overflow-hidden hover-lift glow-effect animate-scale-in group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Image/Icon */}
              <div className="h-48 bg-gradient-to-br from-primary/20 to-primary-dark/20 flex items-center justify-center">
                <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                  {project.image}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="flex items-center space-x-2 px-4 py-2 bg-muted hover:bg-muted/80 text-foreground rounded-lg transition-colors group/link"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <Github size={18} className="group-hover/link:text-primary transition-colors" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center space-x-2 px-4 py-2 bg-primary hover:bg-primary-dark text-primary-foreground rounded-lg transition-colors group/link"
                    aria-label={`View ${project.title} live demo`}
                  >
                    <ExternalLink size={18} className="group-hover/link:scale-110 transition-transform" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-card p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-primary mb-4">Want to see more?</h3>
            <p className="text-muted-foreground mb-6">
              Check out my GitHub profile for more projects and contributions.
            </p>
            <a
              href="https://github.com/Shreyagk07"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-primary hover:bg-primary-dark text-primary-foreground rounded-lg transition-colors"
            >
              <Github size={20} />
              <span>View GitHub Profile</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;