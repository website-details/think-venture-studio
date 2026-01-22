import { Link } from "react-router-dom";
import { ArrowRight, Lightbulb, Palette, Rocket, Users, Layers, PenTool, Check, Zap, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Services = () => {
  const services = [
    {
      icon: Lightbulb,
      title: "Product Strategy",
      description: "We help you define your product vision, identify market opportunities, and create a roadmap for success.",
      features: ["Market Research", "Competitive Analysis", "Product Roadmapping", "Feature Prioritization"],
      color: "from-blue-500 to-cyan-400",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that enhance user satisfaction and drive meaningful engagement.",
      features: ["User Interface Design", "Interaction Design", "Visual Identity", "Design Systems"],
      color: "from-purple-500 to-pink-400",
    },
    {
      icon: Users,
      title: "User Research",
      description: "Deep insights into user behavior, needs, and motivations to inform better design decisions.",
      features: ["User Interviews", "Usability Testing", "Journey Mapping", "Persona Development"],
      color: "from-cyan-500 to-blue-400",
    },
    {
      icon: Rocket,
      title: "Prototyping",
      description: "Rapid prototyping to validate ideas, test concepts, and iterate quickly before development.",
      features: ["Interactive Prototypes", "Concept Validation", "Rapid Iteration", "Stakeholder Demos"],
      color: "from-indigo-500 to-purple-400",
    },
    {
      icon: Layers,
      title: "Design Systems",
      description: "Scalable design systems that ensure consistency and accelerate product development.",
      features: ["Component Libraries", "Style Guides", "Documentation", "Team Training"],
      color: "from-blue-400 to-indigo-500",
    },
    {
      icon: PenTool,
      title: "Brand Design",
      description: "Distinctive brand identities that communicate your values and resonate with your audience.",
      features: ["Logo Design", "Brand Guidelines", "Visual Language", "Brand Strategy"],
      color: "from-pink-500 to-purple-500",
    },
  ];

  const process = [
    { step: "01", title: "Discover", description: "We learn about your business, users, and goals." },
    { step: "02", title: "Define", description: "We synthesize insights and define the design strategy." },
    { step: "03", title: "Design", description: "We create and iterate on design solutions." },
    { step: "04", title: "Deliver", description: "We hand off polished designs ready for development." },
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
              <Zap className="w-4 h-4" />
              Our Services
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[0.95] mb-6 tracking-tight">
              Design Services That
              <br />
              <span className="text-gradient-hero">Drive Results</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From strategy to execution, we offer end-to-end design services that help you build products users love.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        
        <div className="container mx-auto px-6 relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group relative bg-card border border-border p-8 rounded-3xl hover:border-primary/50 transition-all duration-500 hover-lift"
              >
                <div className="absolute inset-0 bg-primary/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className={`relative w-14 h-14 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="relative font-display font-bold text-2xl mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="relative text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="relative space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium mb-6 text-primary">
              <Star className="w-4 h-4" />
              How We Work
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our <span className="text-gradient">Process</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A proven methodology that ensures successful outcomes for every project.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={item.step} className="relative text-center group">
                <div className="font-display text-7xl md:text-8xl font-bold text-primary/10 group-hover:text-primary/30 transition-colors duration-300 mb-4">
                  {item.step}
                </div>
                <h3 className="font-display font-semibold text-2xl text-foreground mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-px bg-gradient-to-r from-primary/30 to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="relative rounded-[3rem] overflow-hidden">
            {/* Background with animated gradient */}
            <div 
              className="absolute inset-0 bg-gradient-to-r from-primary via-cyan-500 to-purple-500"
              style={{
                backgroundSize: '200% 200%',
                animation: 'gradientMove 8s ease infinite'
              }}
            />
            
            {/* Overlay pattern */}
            <div 
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                backgroundSize: '32px 32px',
              }}
            />

            <div className="relative px-8 py-16 md:px-16 md:py-24 text-center">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Start Your Project?
              </h2>
              <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">
                Let's discuss how we can help bring your product vision to life with our design expertise.
              </p>
              <Button size="xl" className="bg-white text-primary hover:bg-white/90 shadow-bold" asChild>
                <Link to="/contact">
                  Get in Touch
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

export default Services;
