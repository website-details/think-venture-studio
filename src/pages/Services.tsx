import { Link } from "react-router-dom";
import { ArrowRight, Lightbulb, Palette, Rocket, Users, Layers, PenTool, BarChart, Check } from "lucide-react";
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
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that enhance user satisfaction and drive meaningful engagement.",
      features: ["User Interface Design", "Interaction Design", "Visual Identity", "Design Systems"],
    },
    {
      icon: Users,
      title: "User Research",
      description: "Deep insights into user behavior, needs, and motivations to inform better design decisions.",
      features: ["User Interviews", "Usability Testing", "Journey Mapping", "Persona Development"],
    },
    {
      icon: Rocket,
      title: "Prototyping",
      description: "Rapid prototyping to validate ideas, test concepts, and iterate quickly before development.",
      features: ["Interactive Prototypes", "Concept Validation", "Rapid Iteration", "Stakeholder Demos"],
    },
    {
      icon: Layers,
      title: "Design Systems",
      description: "Scalable design systems that ensure consistency and accelerate product development.",
      features: ["Component Libraries", "Style Guides", "Documentation", "Team Training"],
    },
    {
      icon: PenTool,
      title: "Brand Design",
      description: "Distinctive brand identities that communicate your values and resonate with your audience.",
      features: ["Logo Design", "Brand Guidelines", "Visual Language", "Brand Strategy"],
    },
  ];

  const process = [
    { step: "01", title: "Discover", description: "We learn about your business, users, and goals." },
    { step: "02", title: "Define", description: "We synthesize insights and define the design strategy." },
    { step: "03", title: "Design", description: "We create and iterate on design solutions." },
    { step: "04", title: "Deliver", description: "We hand off polished designs ready for development." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center animate-fade-up">
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6">
              Our Services
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
              Design Services That{" "}
              <span className="text-gradient">Drive Results</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From strategy to execution, we offer end-to-end design services that help you build products users love and businesses rely on.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-card p-8 rounded-2xl shadow-soft hover:shadow-accent/20 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-gradient-accent rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-accent-foreground" />
                </div>
                <h3 className="font-display font-bold text-xl text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-accent" />
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
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Process
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A proven methodology that ensures successful outcomes for every project.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={item.step} className="relative text-center">
                <div className="font-display text-6xl font-bold text-accent/20 mb-4">
                  {item.step}
                </div>
                <h3 className="font-display font-semibold text-xl text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-accent/30 to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-dark rounded-3xl p-12 md:p-16 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto mb-8">
              Let's discuss how we can help bring your product vision to life with our design expertise.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Get in Touch
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
