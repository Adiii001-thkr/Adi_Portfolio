import { GraduationCap, Users, Code, Calendar } from "lucide-react";

const About = () => {
  const timelineItems = [
    {
      year: "2022",
      title: "Started B.E. in Computer Science",
      description: "Began my journey at Chandigarh University",
      icon: GraduationCap,
      color: "bg-primary"
    },
    {
      year: "2023",
      title: "Event Management Involvement", 
      description: "Joined university event crew, organized 20+ events",
      icon: Users,
      color: "bg-secondary"
    },
    {
      year: "2024",
      title: "MERN Stack Development",
      description: "Mastered full-stack development, built major projects",
      icon: Code,
      color: "bg-accent"
    },
    {
      year: "2026",
      title: "Graduation & Career",
      description: "Graduating with 50+ events organized, ready for industry",
      icon: Calendar,
      color: "bg-primary"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A passionate final-year CSE student combining technical expertise with leadership experience
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Bio Section */}
          <div className="space-y-8">
            <div className="glass rounded-2xl p-8 card-hover">
              <h3 className="text-2xl font-semibold text-primary-gradient mb-6">My Story</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I am a final-year CSE student at Chandigarh University, aspiring to become a 
                MERN stack developer. My journey combines technical excellence with practical 
                leadership experience.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Alongside coding, I am actively involved in my university's event crew, 
                organizing 50+ events, gaining strong team management experience that 
                complements my technical skills perfectly.
              </p>
            </div>

            {/* Key Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="glass rounded-xl p-6 text-center card-hover">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold text-lg mb-2">Education</h4>
                <p className="text-muted-foreground text-sm">B.E. Computer Science Engineering</p>
              </div>

              <div className="glass rounded-xl p-6 text-center card-hover">
                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-secondary" />
                </div>
                <h4 className="font-semibold text-lg mb-2">Leadership</h4>
                <p className="text-muted-foreground text-sm">50+ Events Organized</p>
              </div>
            </div>
          </div>

          {/* Interactive Timeline */}
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent"></div>
            
            <div className="space-y-8">
              {timelineItems.map((item, index) => (
                <div key={index} className="relative flex items-start gap-6 group">
                  {/* Timeline dot */}
                  <div className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center glow-primary group-hover:scale-110 transition-transform z-10`}>
                    <item.icon className="h-8 w-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 glass rounded-xl p-6 card-hover">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl font-bold text-primary">{item.year}</span>
                      <div className="h-px bg-gradient-accent flex-1"></div>
                    </div>
                    <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;