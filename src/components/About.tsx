import profileImage from '../assets/shreya-profile.jpg';

const About = () => {
  return (
    <section id="about" className="py-20 bg-background-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl overflow-hidden border-4 border-primary glow-effect">
                <img
                  src={profileImage}
                  alt="Shreya G K - Software Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary-glow rounded-full opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl font-bold text-gradient mb-6">About Me</h2>
              
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  As a developer at HCLTech with a background in Electronics and Communication Engineering, I specialize in transforming complex data into powerful, user-friendly applications. My core skills include Python, Java, SQL, and Selenium, which I've used to build end-to-end solutions ranging from AI-powered stock assistants to full-stack financial trackers. I am currently available for freelance opportunities where I can help clients solve problems with clean code and insightful data analysis. If you're looking for a dedicated developer for your project, let's connect.
                </p>
                <p>
                  My experience as a Data Science Intern at Compsoft Technologies allowed me to work on real-world, medical-related projects, honing my skills in Python and data analysis. I am a proactive learner, constantly exploring new technologies and frameworks to enhance my skill set. I am certified in 'Google Analytics for Beginners' and have completed the '100 Days of Code: The Complete Python Pro Bootcamp'.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8">
              <div className="text-center p-4 bg-card rounded-lg hover-lift">
                <div className="text-2xl font-bold text-primary mb-2">4+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center p-4 bg-card rounded-lg hover-lift">
                <div className="text-2xl font-bold text-primary mb-2">2+</div>
                <div className="text-sm text-muted-foreground">Certifications</div>
              </div>
              <div className="text-center p-4 bg-card rounded-lg hover-lift">
                <div className="text-2xl font-bold text-primary mb-2">1</div>
                <div className="text-sm text-muted-foreground">Internship</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;