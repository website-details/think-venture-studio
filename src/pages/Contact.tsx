import { useState } from "react";
import { Mail, Phone, MapPin, Send, ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({ name: "", email: "", company: "", message: "" });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "hello@thinkventure.com",
      link: "mailto:hello@thinkventure.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "San Francisco, CA",
      link: null,
    },
  ];

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-24 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/15 rounded-full blur-[100px]" />
        </div>
        
        <div className="container mx-auto px-6 relative">
          <div className="max-w-3xl mx-auto text-center animate-fade-up">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/10 border border-primary/20 backdrop-blur-sm rounded-full text-sm font-medium mb-8 text-primary">
              <MessageCircle className="w-4 h-4" />
              Contact Us
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[0.95] mb-6 tracking-tight">
              Let's Start a
              <br />
              <span className="text-gradient-hero">Conversation</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Have a project in mind? We'd love to hear about it. Get in touch and let's explore how we can work together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        
        <div className="container mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card border border-border p-8 md:p-10 rounded-3xl">
              <h2 className="font-display text-3xl font-bold mb-8 text-foreground">
                Send us a message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="h-14 bg-secondary border-border focus:border-primary text-foreground placeholder:text-muted-foreground"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="h-14 bg-secondary border-border focus:border-primary text-foreground placeholder:text-muted-foreground"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2 text-foreground">
                    Company
                  </label>
                  <Input
                    id="company"
                    name="company"
                    placeholder="Your company name"
                    value={formData.company}
                    onChange={handleChange}
                    className="h-14 bg-secondary border-border focus:border-primary text-foreground placeholder:text-muted-foreground"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="resize-none bg-secondary border-border focus:border-primary text-foreground placeholder:text-muted-foreground"
                  />
                </div>
                <Button
                  type="submit"
                  variant="hero"
                  size="xl"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="font-display text-3xl font-bold mb-6 text-foreground">
                Get in touch
              </h2>
              <p className="text-muted-foreground mb-10 leading-relaxed text-lg">
                We're always excited to hear about new projects and opportunities. Reach out through any of these channels.
              </p>

              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <div
                    key={info.title}
                    className="group flex items-center gap-5 p-6 bg-card border border-border rounded-2xl hover:border-primary/50 transition-all duration-300"
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-cyan-400 rounded-xl flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-foreground">{info.title}</h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 relative rounded-3xl overflow-hidden">
                {/* Gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-cyan-500 to-purple-500" />
                
                <div className="relative p-8">
                  <h3 className="font-display text-2xl font-bold mb-4 text-white">
                    Prefer a call?
                  </h3>
                  <p className="text-white/80 mb-6 leading-relaxed">
                    Schedule a free 30-minute consultation to discuss your project needs.
                  </p>
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
                    <a href="mailto:hello@thinkventure.com?subject=Schedule a Call">
                      Book a Call
                      <ArrowRight className="w-5 h-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
