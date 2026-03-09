import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Github, Linkedin, MapPin, Send, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 🔗 Contact Info Section
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "aditya.thkr001@gmail.com",
      link: "mailto:aditya.thkr001@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8580776025",
      link: "tel:+918580776025",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "Adiii001-thkr",
      link: "https://github.com/Adiii001-thkr",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "adityathakurr",
      link: "https://www.linkedin.com/in/adityathakurr",
    },
  ];

  // 📩 Handle Input
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // 🚀 Handle Submit with EmailJS
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const serviceId = "service_m7p5z4v"; // 🔑 Replace with your Service ID
      const templateId = "template_wu9vbls"; // 🔑 Replace with your Template ID
      const publicKey = "1GuC8nQNs_mkXsKX9"; // 🔑 Replace with your Public Key

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: "Aditya Thakur",
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute top-10 left-10 w-40 h-40 border border-primary/20 rounded-full animate-rotate"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 border-2 border-secondary/30 rotate-45 animate-pulse-glow"></div>

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient mb-4">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to collaborate on your next project? Let's connect and build something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Contact Information */}
          <div className="space-y-8">
            <div className="glass rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold">Let's Talk</h3>
              </div>

              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always open to discussing new opportunities, collaborations, or just having 
                a chat about technology and development. Feel free to reach out through any of 
                the channels below.
              </p>

              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.link}
                    target={contact.link.startsWith("http") ? "_blank" : undefined}
                    rel={contact.link.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 p-4 glass rounded-xl hover:bg-primary/5 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <contact.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">{contact.label}</div>
                      <div className="text-muted-foreground group-hover:text-primary transition-colors">
                        {contact.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Location */}
            <div className="glass rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold">Location</h3>
              </div>
              <p className="text-muted-foreground">
                <strong>Chandigarh University</strong>
                <br />
                Punjab, India
                <br />
                Available for remote work and local meetups
              </p>
            </div>
          </div>

          {/* Right: Contact Form with EmailJS */}
          <div className="glass rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                <Send className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-2xl font-semibold">Send a Message</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="What's this about?"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project or just say hello!"
                  rows={5}
                  required
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground glow-primary group"
                size="lg"
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Sending...
                  </div>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </>
                )}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">Usually responds within 24 hours</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;