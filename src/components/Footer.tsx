import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-muted-foreground">
              © {currentYear} <span className="text-primary font-semibold">Shreya G K</span>. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4">
            <a
              href="mailto:shreyagk6899@gmail.com"
              className="p-2 bg-card hover:bg-card-hover rounded-lg hover-lift transition-colors group"
              aria-label="Email"
            >
              <Mail size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/shreya-gk07/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-card hover:bg-card-hover rounded-lg hover-lift transition-colors group"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://github.com/Shreyagk07"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-card hover:bg-card-hover rounded-lg hover-lift transition-colors group"
              aria-label="GitHub"
            >
              <Github size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>
        </div>

        {/* Back to Top Button */}
        <div className="mt-8 text-center">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span>Back to top</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;