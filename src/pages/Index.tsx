import { Link } from "react-router-dom";
import { ArrowRight, Lightbulb, Palette, Rocket, Users, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  const services = [
    {
      icon: Lightbulb,
      title: "Product Strategy",
      description: "We help you define a clear product vision and roadmap that aligns with your business goals.",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that delight users and drive engagement.",
    },
    {
      icon: Rocket,
      title: "Prototyping",
      description: "Rapid prototyping to validate ideas and iterate quickly before development.",
    },
    {
      icon: Users,
      title: "User Research",
      description: "Deep insights into user behavior to inform design decisions.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-up">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-foreground text-background rounded-full text-sm font-medium mb-8">
                <Sparkles className="w-4 h-4" />
                Product Design Agency
              </span>
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-[0.95] mb-8 tracking-tight">
                We Design
                <br />
                Products That
                <br />
                <span className="text-gradient">People Love</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                Think Venture transforms your ideas into exceptional digital products through strategic design thinking and innovative solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="xl" asChild>
                  <Link to="/contact">
                    Start Your Project
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="xl" asChild>
                  <Link to="/services">Our Services</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.3s" }}>
            {[
              { value: "10+", label: "Projects" },
              { value: "100%", label: "Satisfaction" },
              { value: "2024", label: "Founded" },
              { value: "24h", label: "Response" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-3xl md:text-4xl font-bold text-foreground">{stat.value}</div>
                <div className="text-muted-foreground text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-foreground text-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium mb-6">
              What We Do
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Our Services
            </h2>
            <p className="text-background/60 text-lg max-w-2xl mx-auto">
              We offer comprehensive design services to help you build products that stand out in the market.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="bg-background/5 border border-background/10 p-8 rounded-2xl hover:bg-accent hover:border-accent transition-all duration-500 group hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 bg-accent text-accent-foreground rounded-xl flex items-center justify-center mb-6 group-hover:bg-foreground group-hover:text-background transition-colors duration-500">
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="font-display font-semibold text-xl mb-3 group-hover:text-accent-foreground transition-colors">
                  {service.title}
                </h3>
                <p className="text-background/60 text-sm leading-relaxed group-hover:text-accent-foreground/80 transition-colors">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="creative" size="lg" asChild>
              <Link to="/services">
                View All Services
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="relative bg-foreground rounded-[2rem] p-12 md:p-20 text-center overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/30 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/20 rounded-full blur-3xl" />
            
            <div className="relative">
              <h2 className="font-display text-4xl md:text-6xl font-bold text-background mb-6">
                Ready to Build
                <br />
                <span className="text-accent">Something Great?</span>
              </h2>
              <p className="text-background/60 text-lg max-w-2xl mx-auto mb-10">
                Let's collaborate to bring your vision to life. Get in touch with us today and start your journey.
              </p>
              <Button variant="creative" size="xl" asChild>
                <Link to="/contact">
                  Let's Talk
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;