import { Target, Heart, Zap, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Purpose-Driven",
      description: "Every design decision is guided by clear objectives and measurable outcomes.",
    },
    {
      icon: Heart,
      title: "User-Centric",
      description: "We put users at the heart of everything we create, ensuring meaningful experiences.",
    },
    {
      icon: Zap,
      title: "Innovation First",
      description: "We embrace new technologies and methodologies to stay ahead of the curve.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We hold ourselves to the highest standards in everything we deliver.",
    },
  ];

  const team = [
    { name: "Alex Chen", role: "Founder & Lead Designer", initials: "AC" },
    { name: "Sarah Miller", role: "UX Strategist", initials: "SM" },
    { name: "David Park", role: "Visual Designer", initials: "DP" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-24 relative overflow-hidden">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 relative">
          <div className="max-w-3xl mx-auto text-center animate-fade-up">
            <span className="inline-block px-4 py-2 bg-foreground text-background rounded-full text-sm font-medium mb-6">
              About Us
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[0.95] mb-6 tracking-tight">
              We're a Team of
              <br />
              <span className="text-gradient">Design Thinkers</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Think Venture was founded with a simple mission: to help businesses create products that truly resonate with their users. We believe great design has the power to transform businesses and improve lives.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-foreground text-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium mb-6">
                Our Story
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">
                Started with a vision
              </h2>
              <div className="space-y-4 text-background/70 leading-relaxed text-lg">
                <p>
                  Think Venture started as a small studio with big dreams. Founded in 2024, we set out to bridge the gap between innovative ideas and exceptional user experiences.
                </p>
                <p>
                  We've worked with startups and established companies alike, helping them discover what makes their products unique and translating that into designs that users love.
                </p>
                <p>
                  Today, we continue to push boundaries and challenge conventions, always staying true to our core belief: that design should be both beautiful and functional.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-accent/20 blur-3xl rounded-3xl"></div>
              <div className="relative bg-background/5 border border-background/10 rounded-3xl p-10">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { value: "10+", label: "Projects Delivered" },
                    { value: "100%", label: "Client Satisfaction" },
                    { value: "3", label: "Team Members" },
                    { value: "2024", label: "Founded" },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center p-6 bg-background/5 rounded-2xl border border-background/10">
                      <div className="font-display text-4xl font-bold text-accent mb-2">{stat.value}</div>
                      <div className="text-background/60 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-foreground text-background rounded-full text-sm font-medium mb-6">
              Our Values
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              What We Stand For
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              These principles guide everything we do and shape how we work with our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-secondary p-8 rounded-2xl hover-lift group text-center"
              >
                <div className="w-16 h-16 bg-foreground text-background rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="font-display font-semibold text-xl text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-foreground text-background rounded-full text-sm font-medium mb-6">
              Our Team
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Meet the Crew
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A small but mighty team dedicated to creating exceptional design solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-background p-10 rounded-2xl text-center hover-lift group"
              >
                <div className="w-28 h-28 bg-foreground text-background rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                  <span className="font-display text-3xl font-bold">
                    {member.initials}
                  </span>
                </div>
                <h3 className="font-display font-semibold text-xl text-foreground">
                  {member.name}
                </h3>
                <p className="text-muted-foreground mt-2">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;