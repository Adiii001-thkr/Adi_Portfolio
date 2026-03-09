import { Code, Database, Globe, Users, Layers, GitBranch } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      icon: Code,
      color: "text-primary",
      bgColor: "bg-primary/10",
      skills: [
        { name: "Java", level: 90 },
        { name: "Data Structures & Algorithms", level: 85 },
        { name: "JavaScript", level: 88 }
      ]
    },
    {
      title: "Frontend Development",
      icon: Globe,
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      skills: [
        { name: "React.js", level: 90 },
        { name: "HTML/CSS", level: 95 },
        { name: "Responsive Design", level: 88 }
      ]
    },
    {
      title: "Backend Development",
      icon: Database,
      color: "text-accent",
      bgColor: "bg-accent/10",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 82 },
        { name: "MongoDB", level: 80 }
      ]
    },
    {
      title: "Management",
      icon: Users,
      color: "text-primary",
      bgColor: "bg-primary/10",
      skills: [
        { name: "Event Management", level: 95 },
        { name: "Team Leadership", level: 88 },
        { name: "Project Coordination", level: 85 }
      ]
    }
  ];

  const technologies = [
    { name: "React", icon: "⚛️" },
    { name: "Node.js", icon: "🟢" },
    { name: "MongoDB", icon: "🍃" },
    { name: "Express", icon: "🚂" },
    { name: "JavaScript", icon: "🟨" },
    { name: "Java", icon: "☕" },
    { name: "HTML5", icon: "🏗️" },
    { name: "CSS3", icon: "🎨" }
  ];

  return (
    <section id="skills" className="py-20 relative">
      {/* Background decorations */}
      <div className="absolute top-20 right-10 w-40 h-40 border border-primary/20 rounded-full animate-rotate"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 border border-secondary/20 rotate-45 animate-pulse-glow"></div>

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient mb-4">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive skill set spanning full-stack development and event management
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="glass rounded-2xl p-8 card-hover group">
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-16 h-16 ${category.bgColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <category.icon className={`h-8 w-8 ${category.color}`} />
                </div>
                <h3 className="text-2xl font-semibold">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className={`text-sm ${category.color}`}>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${category.bgColor.replace('/10', '')} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technology Icons */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-8 text-primary-gradient">Technologies I Work With</h3>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-6">
            {technologies.map((tech, index) => (
              <div 
                key={index} 
                className="glass rounded-xl p-4 card-hover group text-center"
              >
                <div className="text-3xl mb-2 group-hover:scale-125 transition-transform">
                  {tech.icon}
                </div>
                <div className="text-sm text-muted-foreground">{tech.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating 3D Skill Cubes */}
        <div className="mt-16 relative h-40 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              {/* Central rotating element */}
              <div className="w-32 h-32 glass rounded-2xl animate-rotate flex items-center justify-center">
                <Layers className="h-12 w-12 text-primary" />
              </div>
              
              {/* Orbiting elements */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 w-16 h-16 glass rounded-xl animate-float flex items-center justify-center">
                <Code className="h-6 w-6 text-secondary" />
              </div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-8 w-16 h-16 glass rounded-xl animate-float delay-1000 flex items-center justify-center">
                <Database className="h-6 w-6 text-accent" />
              </div>
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-8 w-16 h-16 glass rounded-xl animate-float delay-500 flex items-center justify-center">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-8 w-16 h-16 glass rounded-xl animate-float delay-1500 flex items-center justify-center">
                <Users className="h-6 w-6 text-secondary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;