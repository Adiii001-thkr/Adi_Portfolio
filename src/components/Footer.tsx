import { Github, Linkedin, Mail, Heart, Code } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Adiii001-thkr",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/adityathakurr",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "mailto:aditya.thkr001@gmail.com",
      label: "Email"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-border/50 bg-background-secondary">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Logo and Description */}
          <div className="text-center md:text-left">
            <div 
              className="flex items-center gap-3 justify-center md:justify-start mb-4 cursor-pointer"
              onClick={scrollToTop}
            >
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Code className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold text-primary-gradient">Aditya Thakur</span>
            </div>
            <p className="text-muted-foreground max-w-md">
              CSE Student & MERN Stack Developer passionate about creating 
              impactful web applications and organizing memorable events.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors group"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span> {currentYear} Aditya Thakur. </span>
           
          </div>
          
          <div className="flex items-center gap-6">
            <span>Built with React & Tailwind CSS</span>
            <button 
              onClick={scrollToTop}
              className="text-primary hover:text-primary/80 transition-colors"
            >
              Back to Top ↑
            </button>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 text-center">
          <div className="glass rounded-lg p-4 inline-block">
            <p className="text-sm text-muted-foreground">
              🎓 <strong>Currently:</strong> Final Year CSE Student at Chandigarh University
              <br />
              🚀 <strong>Looking for:</strong> Full-Stack Development Opportunities
              <br />
              📍 <strong>Location:</strong> Punjab, India • Open to Remote Work
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;