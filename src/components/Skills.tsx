const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "Python", icon: "🐍" },
        { name: "Java", icon: "☕" },
        { name: "SQL", icon: "🗃️" },
        { name: "HTML/CSS", icon: "🌐" },
      ]
    },
    {
      title: "Frameworks & Technologies",
      skills: [
        { name: "Flask", icon: "🔥" },
        { name: "OpenAI API", icon: "🤖" },
        { name: "Streamlit", icon: "⚡" },
        { name: "Git", icon: "🔧" },
        { name: "GitHub", icon: "🐙" },
      ]
    },
    {
      title: "Developer Tools",
      skills: [
        { name: "VS Code", icon: "💻" },
        { name: "PyCharm", icon: "🚀" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gradient mb-4">Professional Skillset</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title} 
              className="animate-fade-in-up"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <h3 className="text-2xl font-semibold text-primary mb-8 text-center">
                {category.title}
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className="bg-card p-6 rounded-xl text-center hover-lift glow-effect group animate-scale-in"
                    style={{ animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s` }}
                  >
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                      {skill.icon}
                    </div>
                    <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">
                      {skill.name}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <div className="mt-16 text-center">
          <div className="bg-card p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-primary mb-4">Currently Learning</h3>
            <p className="text-muted-foreground">
              Always expanding my skillset with new technologies like Machine Learning frameworks, 
              Cloud platforms, and modern web development tools.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;