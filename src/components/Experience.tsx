import { Users, Calendar, Award, Lightbulb, Target, Code, Globe } from "lucide-react";

const Experience = () => {
  const services = [
    {
      icon: Code,
      title: "Full-stack Web Development",
      description: "Complete MERN stack solutions with modern architecture and best practices",
      features: ["React.js Frontend", "Node.js Backend", "MongoDB Database", "RESTful APIs"],
      color: "bg-primary",
      accent: "text-primary"
    },
    {
      icon: Globe,
      title: "Frontend Development",
      description: "Responsive and interactive user interfaces with modern design principles",
      features: ["React Components", "Responsive Design", "Modern CSS", "User Experience"],
      color: "bg-secondary",
      accent: "text-secondary"
    },
    {
      icon: Users,
      title: "Event Planning & Management",
      description: "Professional event coordination with proven track record of success",
      features: ["Team Leadership", "Project Planning", "Resource Management", "Execution"],
      color: "bg-accent",
      accent: "text-accent"
    }
  ];

  const achievements = [
    {
      icon: Calendar,
      title: "50+ University Events",
      description: "Successfully organized and contributed to over 50 technical and cultural events",
      stats: "50+",
      label: "Events"
    },
    {
      icon: Award,
      title: "Published Research",
      description: "Authored and published a comprehensive technical review paper",
      stats: "1",
      label: "Publication"
    },
    {
      icon: Target,
      title: "Project Completion",
      description: "Successfully completed multiple full-stack development projects",
      stats: "3+",
      label: "Projects"
    },
    {
      icon: Lightbulb,
      title: "Leadership Experience",
      description: "Led teams and managed resources for large-scale university events",
      stats: "4+",
      label: "Years"
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 border border-primary/20 rounded-full animate-rotate"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 border-2 border-secondary/30 rotate-45 animate-pulse-glow"></div>

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient mb-4">Experience & Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Combining technical expertise with proven leadership in event management
          </p>
        </div>

        {/* Experience Highlight */}
        <div className="glass rounded-2xl p-8 mb-16 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <div className="text-left">
              <h3 className="text-2xl font-bold text-primary-gradient">Event Team Experience</h3>
              <p className="text-muted-foreground">Chandigarh University • 2022 - Present</p>
            </div>
          </div>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Actively involved in my university's event crew, organizing and contributing to 50+ technical and cultural events. 
            This experience has provided me with invaluable leadership, team management, and organizational skills that 
            perfectly complement my technical development abilities.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="glass rounded-2xl p-8 card-hover group text-center">
              <div className={`w-20 h-20 ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon className="h-10 w-10 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3 justify-center">
                    <div className={`w-2 h-2 ${service.color} rounded-full`}></div>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-primary-gradient mb-4">Key Achievements</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Highlighting the milestones and accomplishments throughout my academic and professional journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="glass rounded-xl p-6 text-center card-hover group">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <achievement.icon className="h-8 w-8 text-primary" />
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="text-3xl font-bold text-primary">{achievement.stats}</div>
                  <div className="text-sm text-muted-foreground">{achievement.label}</div>
                </div>
                
                <h4 className="font-semibold text-lg mb-2">{achievement.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="glass rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-primary-gradient mb-4">Ready to Collaborate?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let's work together on your next project. Whether it's web development or event management, 
              I bring both technical expertise and proven leadership skills to every engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors glow-primary"
              >
                Start a Project
              </button>
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 border border-primary/50 text-primary rounded-lg hover:bg-primary/10 transition-colors"
              >
                View My Work
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;