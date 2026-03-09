import { Button } from "@/components/ui/button";
import { Download, Sparkles, ArrowRight, Code, Zap } from "lucide-react";
import adityaProfile from "@/assets/IMG_2941.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/80 to-background"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5"></div>
      
      {/* Floating Geometric Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border-2 border-primary/20 rounded-full animate-float blur-[1px]"></div>
      <div className="absolute top-32 left-20 w-16 h-16 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg rotate-45 animate-float delay-1000"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 border border-secondary/20 rotate-45 animate-pulse-glow backdrop-blur-sm"></div>
      <div className="absolute bottom-32 right-32 w-8 h-8 bg-accent/20 rounded-full animate-float delay-2000"></div>
      <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-primary/60 rounded-full animate-ping"></div>
      <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-accent/60 rounded-full animate-ping delay-1000"></div>
      <div className="absolute top-2/3 left-1/3 w-1 h-1 bg-secondary/60 rounded-full animate-ping delay-2000"></div>
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-gradient-to-r from-accent/5 to-primary/5 rounded-full blur-2xl animate-float delay-3000"></div>

      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left space-y-10">
            {/* Modern Header Section */}
            <div className="space-y-6">
              {/* Enhanced Status Badge */}
              <div className="flex items-center gap-4 justify-center lg:justify-start">
                <div className="relative">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center backdrop-blur-sm border border-primary/20">
                    <Sparkles className="w-6 h-6 text-primary animate-pulse-glow" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-primary rounded-full animate-ping"></div>
                </div>
                <div className="glass px-4 py-2 rounded-full">
                  <span className="text-sm font-medium bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Available for opportunities
                  </span>
                </div>
              </div>
              
              {/* Enhanced Typography */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <h1 className="text-6xl lg:text-8xl font-bold leading-[0.9] tracking-tight">
                    <span className="block text-foreground">ADITYA</span>
                    <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient-x">
                      THAKUR
                    </span>
                  </h1>
                </div>
                
                <div className="flex items-center gap-3 justify-center lg:justify-start">
                  <Code className="w-6 h-6 text-primary animate-pulse-glow" />
                  <h2 className="text-xl lg:text-2xl font-semibold text-muted-foreground uppercase tracking-[0.2em]">
                    CSE Student & Developer
                  </h2>
                  <Zap className="w-6 h-6 text-secondary animate-pulse-glow" />
                </div>
              </div>
              
              <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Crafting innovative digital experiences through 
                <span className="text-primary font-medium"> MERN stack development</span> and 
                <span className="text-secondary font-medium"> event management</span>. 
                Transforming ideas into scalable solutions.
              </p>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="default" 
                size="lg" 
                className="relative bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground shadow-lg shadow-primary/25 group overflow-hidden"
                onClick={() => scrollToSection('projects')}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <ArrowRight className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform relative z-10" />
                <span className="relative z-10">Explore Projects</span>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="glass border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary/50 group backdrop-blur-sm"
                onClick={() => scrollToSection('contact')}
              >
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Get In Touch
              </Button>
            </div>

            {/* Enhanced Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
              <div className="glass p-4 rounded-xl text-center lg:text-left group hover:scale-105 transition-transform duration-300">
                <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">50+</div>
                <div className="text-sm text-muted-foreground mt-1">Events Organized</div>
                <div className="w-full h-1 bg-gradient-to-r from-primary/20 to-primary/60 rounded-full mt-2"></div>
              </div>
              <div className="glass p-4 rounded-xl text-center lg:text-left group hover:scale-105 transition-transform duration-300">
                <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-secondary to-secondary/80 bg-clip-text text-transparent">3+</div>
                <div className="text-sm text-muted-foreground mt-1">Major Projects</div>
                <div className="w-full h-1 bg-gradient-to-r from-secondary/20 to-secondary/60 rounded-full mt-2"></div>
              </div>
              <div className="glass p-4 rounded-xl text-center lg:text-left group hover:scale-105 transition-transform duration-300">
                <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">2026</div>
                <div className="text-sm text-muted-foreground mt-1">Graduation Year</div>
                <div className="w-full h-1 bg-gradient-to-r from-accent/20 to-accent/60 rounded-full mt-2"></div>
              </div>
              <div className="glass p-4 rounded-xl text-center lg:text-left group hover:scale-105 transition-transform duration-300">
                <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">B.E.</div>
                <div className="text-sm text-muted-foreground mt-1">CSE Degree</div>
                <div className="w-full h-1 bg-gradient-to-r from-primary/20 to-secondary/60 rounded-full mt-2"></div>
              </div>
            </div>
          </div>

          {/* Enhanced Right Content - Profile Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Enhanced Decorative Elements */}
              <div className="absolute -inset-8 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-full blur-2xl animate-float"></div>
              <div className="absolute inset-0 rounded-full border-2 border-gradient-to-r from-primary/30 via-secondary/30 to-accent/30 animate-rotate backdrop-blur-sm"></div>
              <div className="absolute inset-4 rounded-full border border-primary/20 animate-rotate delay-1000" style={{ animationDirection: 'reverse' }}></div>
              <div className="absolute inset-8 rounded-full border border-secondary/15 animate-rotate delay-2000"></div>
              
              {/* Enhanced Profile Image Container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden group">
                {/* Gradient Border */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent rounded-full p-1 animate-gradient-x">
                  <div className="w-full h-full bg-background rounded-full overflow-hidden">
                    <img 
                      src={adityaProfile} 
                      alt="Aditya Thakur - Software Developer and CSE Student"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-primary/10"></div>
                  </div>
                </div>
                
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 blur-xl animate-pulse-glow"></div>
              </div>

              {/* Enhanced Floating Badges */}
              <div className="absolute -top-6 -right-6 glass rounded-xl p-4 animate-float group hover:scale-110 transition-transform duration-300">
                <div className="flex items-center gap-2">
                  <Code className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    MERN Stack
                  </span>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 glass rounded-xl p-4 animate-float delay-1000 group hover:scale-110 transition-transform duration-300">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-secondary" />
                  <span className="text-sm font-semibold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                    Event Manager
                  </span>
                </div>
              </div>

              {/* Additional Tech Badges */}
              <div className="absolute top-1/4 -left-8 glass rounded-lg p-2 animate-float delay-2000">
                <span className="text-xs font-medium text-accent">React</span>
              </div>
              
              <div className="absolute bottom-1/4 -right-8 glass rounded-lg p-2 animate-float delay-3000">
                <span className="text-xs font-medium text-primary">Node.js</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;