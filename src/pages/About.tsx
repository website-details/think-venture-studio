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
      <section className="pt-32 pb-20 md:pt-40 md:pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center animate-fade-up">
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6">
              About Us
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
              We're a Team of Passionate{" "}
              <span className="text-gradient">Design Thinkers</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Think Venture was founded with a simple mission: to help businesses create products that truly resonate with their users. We believe great design has the power to transform businesses and improve lives.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
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
              <div className="absolute -inset-4 bg-gradient-accent opacity-10 blur-3xl rounded-3xl"></div>
              <div className="relative bg-card rounded-2xl p-8 shadow-soft">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-secondary rounded-xl">
                    <div className="font-display text-4xl font-bold text-accent mb-2">10+</div>
                    <div className="text-muted-foreground text-sm">Projects Delivered</div>
                  </div>
                  <div className="text-center p-6 bg-secondary rounded-xl">
                    <div className="font-display text-4xl font-bold text-accent mb-2">100%</div>
                    <div className="text-muted-foreground text-sm">Client Satisfaction</div>
                  </div>
                  <div className="text-center p-6 bg-secondary rounded-xl">
                    <div className="font-display text-4xl font-bold text-accent mb-2">3</div>
                    <div className="text-muted-foreground text-sm">Team Members</div>
                  </div>
                  <div className="text-center p-6 bg-secondary rounded-xl">
                    <div className="font-display text-4xl font-bold text-accent mb-2">2024</div>
                    <div className="text-muted-foreground text-sm">Founded</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              These principles guide everything we do and shape how we work with our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-card p-6 rounded-xl shadow-soft hover:shadow-accent/20 transition-all duration-300 group text-center"
              >
                <div className="w-14 h-14 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-7 h-7 text-accent-foreground" />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet Our Team
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A small but mighty team dedicated to creating exceptional design solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-card p-8 rounded-xl shadow-soft text-center hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="w-24 h-24 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-display text-2xl font-bold text-accent-foreground">
                    {member.initials}
                  </span>
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground">
                  {member.name}
                </h3>
                <p className="text-muted-foreground text-sm mt-1">{member.role}</p>
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
