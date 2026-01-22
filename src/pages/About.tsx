import { Target, Heart, Zap, Award, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Purpose-Driven",
      description: "Every design decision is guided by clear objectives and measurable outcomes.",
      color: "from-blue-500 to-cyan-400",
    },
    {
      icon: Heart,
      title: "User-Centric",
      description: "We put users at the heart of everything we create, ensuring meaningful experiences.",
      color: "from-purple-500 to-pink-400",
    },
    {
      icon: Zap,
      title: "Innovation First",
      description: "We embrace new technologies and methodologies to stay ahead of the curve.",
      color: "from-cyan-500 to-blue-400",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We hold ourselves to the highest standards in everything we deliver.",
      color: "from-indigo-500 to-purple-400",
    },
  ];

  const team = [
    { name: "Alex Chen", role: "Founder & Lead Designer", initials: "AC" },
    { name: "Sarah Miller", role: "UX Strategist", initials: "SM" },
    { name: "David Park", role: "Visual Designer", initials: "DP" },
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
              <Star className="w-4 h-4" />
              About Us
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[0.95] mb-6 tracking-tight">
              We're a Team of
              <br />
              <span className="text-gradient-hero">Design Thinkers</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Think Venture was founded with a simple mission: to help businesses create products that truly resonate with their users.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        
        <div className="container mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium mb-6 text-primary">
                <Zap className="w-4 h-4" />
                Our Story
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">
                Started with a <span className="text-gradient">Vision</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
                <p>
                  Think Venture started as a small studio with big dreams. Founded in 2024, we set out to bridge the gap between innovative ideas and exceptional user experiences.
                </p>
                <p>
                  We've worked with startups and established companies alike, helping them discover what makes their products unique.
                </p>
                <p>
                  Today, we continue to push boundaries, always staying true to our core belief: that design should be both beautiful and functional.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-3xl"></div>
              <div className="relative bg-card border border-border rounded-3xl p-8">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: "10+", label: "Projects Delivered" },
                    { value: "100%", label: "Client Satisfaction" },
                    { value: "3", label: "Team Members" },
                    { value: "2024", label: "Founded" },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center p-6 bg-secondary rounded-2xl border border-border group hover:border-primary/30 transition-colors">
                      <div className="font-display text-4xl font-bold text-gradient mb-2">{stat.value}</div>
                      <div className="text-muted-foreground text-sm">{stat.label}</div>
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium mb-6 text-primary">
              <Heart className="w-4 h-4" />
              Our Values
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              What We <span className="text-gradient">Stand For</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              These principles guide everything we do and shape how we work with our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="group relative bg-card border border-border p-8 rounded-3xl hover:border-primary/50 transition-all duration-500 hover-lift text-center"
              >
                <div className="absolute inset-0 bg-primary/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className={`relative w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="relative font-display font-semibold text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                  {value.title}
                </h3>
                <p className="relative text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        
        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium mb-6 text-primary">
              <Award className="w-4 h-4" />
              Our Team
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Meet the <span className="text-gradient">Crew</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A small but mighty team dedicated to creating exceptional design solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, i) => (
              <div
                key={member.name}
                className="group bg-card border border-border p-10 rounded-3xl text-center hover:border-primary/50 transition-all duration-500 hover-lift"
              >
                <div className="w-28 h-28 bg-gradient-to-br from-primary to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow group-hover:scale-110 transition-transform duration-500">
                  <span className="font-display text-3xl font-bold text-primary-foreground">
                    {member.initials}
                  </span>
                </div>
                <h3 className="font-display font-semibold text-xl text-foreground group-hover:text-primary transition-colors">
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
