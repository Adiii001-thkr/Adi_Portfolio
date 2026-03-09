import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Play, Smartphone, Server, FileText } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Spotify Clone",
      description: "A modern frontend replica of Spotify with responsive design and interactive UI components.",
      category: "Frontend Development",
      tech: ["React", "CSS3", "JavaScript", "Responsive Design"],
      icon: Play,
      color: "bg-primary",
      glowColor: "shadow-primary",
      features: [
        "Modern UI/UX Design",
        "Responsive Layout",
        "Interactive Components",
        "Music Player Interface"
      ],
      status: "Completed"
    },
    {
      title: "IoT Garbage Management System",
      description: "Smart waste tracking system using IoT sensors and ID card access for efficient garbage collection.",
      category: "IoT Development",
      tech: ["IoT", "Sensors", "RFID", "Smart Systems"],
      icon: Smartphone,
      color: "bg-secondary",
      glowColor: "shadow-secondary",
      features: [
        "Real-time Monitoring",
        "ID Card Access",
        "Smart Sensors",
        "Waste Analytics"
      ],
      status: "Completed"
    },
    {
      title: "Technical Review Paper",
      description: "Authored a comprehensive technical review paper exploring cutting-edge technologies and methodologies.",
      category: "Research & Documentation",
      tech: ["Research", "Technical Writing", "Analysis", "Documentation"],
      icon: FileText,
      color: "bg-accent",
      glowColor: "shadow-accent",
      features: [
        "Literature Review",
        "Technical Analysis",
        "Research Methodology",
        "Academic Writing"
      ],
      status: "Published"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      {/* Background decorations */}
      <div className="absolute top-10 left-20 w-20 h-20 border-2 border-primary/20 rotate-45 animate-pulse-glow"></div>
      <div className="absolute bottom-10 right-20 w-24 h-24 border border-secondary/30 rounded-full animate-float"></div>

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing my journey through frontend development, IoT systems, and technical research
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group relative glass rounded-2xl p-8 card-hover overflow-hidden"
            >
              {/* Project Icon */}
              <div className="flex items-center justify-between mb-6">
                <div className={`w-16 h-16 ${project.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <project.icon className="h-8 w-8 text-white" />
                </div>
                <span className="text-sm text-primary font-medium px-3 py-1 bg-primary/10 rounded-full">
                  {project.status}
                </span>
              </div>

              {/* Project Details */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">{project.category}</p>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="text-xs px-3 py-1 bg-muted rounded-full border border-border/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-primary">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex-1 border-primary/50 text-primary hover:bg-primary/10"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                  <Button 
                    size="sm" 
                    className={`flex-1 ${project.color} hover:opacity-90`}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View
                  </Button>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Skills Integration Section */}
        <div className="glass rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-semibold text-primary-gradient mb-4">Project Highlights</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                <Server className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold">Full-Stack Development</h4>
              <p className="text-sm text-muted-foreground">
                Complete MERN stack implementations with modern best practices
              </p>
            </div>
            <div className="space-y-3">
              <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mx-auto">
                <Smartphone className="h-6 w-6 text-secondary" />
              </div>
              <h4 className="font-semibold">IoT Integration</h4>
              <p className="text-sm text-muted-foreground">
                Smart systems with sensor integration and real-time monitoring
              </p>
            </div>
            <div className="space-y-3">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                <FileText className="h-6 w-6 text-accent" />
              </div>
              <h4 className="font-semibold">Research & Documentation</h4>
              <p className="text-sm text-muted-foreground">
                Technical writing and comprehensive research methodologies
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;