import { Github, Linkedin, ChevronDown } from 'lucide-react';
import { useTypingAnimation } from '../hooks/useTypingAnimation';

const Hero = () => {
  const roles = [
    "Data Science Enthusiast",
    "Python Developer", 
    "Software Engineer",
    "Freelancer",
    "Full-Stack Developer",
    
  ];

  const typedText = useTypingAnimation({
    words: roles,
    typingSpeed: 100,
    deletingSpeed: 50,
    pauseDuration: 2000,
  });

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center hero-gradient relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
            Hi, I'm{' '}
            <span className="text-gradient">Shreya G K</span>
          </h1>
          
          <div className="text-xl sm:text-2xl lg:text-3xl text-secondary mb-8 h-12 flex items-center justify-center">
            <span className="typing-cursor">{typedText}</span>
          </div>
          
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            I build elegant, user-friendly solutions from complex data, specializing in Python, data science, and full-stack development. Currently with HCLTech, I am seeking freelance projects where I can apply my skills in web development and custom application building to meet client needs.
          </p>
          
          <div className="flex justify-center space-x-6 mb-16">
            <a
              href="https://www.linkedin.com/in/shreya-gk07/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-card hover:bg-card-hover rounded-full hover-lift glow-effect group"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={28} className="text-primary group-hover:text-primary-glow transition-colors" />
            </a>
            <a
              href="https://github.com/Shreyagk07"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-card hover:bg-card-hover rounded-full hover-lift glow-effect group"
              aria-label="GitHub Profile"
            >
              <Github size={28} className="text-primary group-hover:text-primary-glow transition-colors" />
            </a>
          </div>
        </div>
      </div>
      
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        aria-label="Scroll to About section"
      >
        <ChevronDown size={32} className="text-primary" />
      </button>
    </section>
  );
};

export default Hero;