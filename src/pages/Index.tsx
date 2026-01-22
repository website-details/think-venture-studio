import { Link } from "react-router-dom";
import { ArrowRight, Lightbulb, Palette, Rocket, Users, Sparkles, Zap, Star, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  const services = [
    {
      icon: Lightbulb,
      title: "Product Strategy",
      description: "Define a clear product vision and roadmap aligned with your goals.",
      color: "from-blue-500 to-cyan-400",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that delight users.",
      color: "from-purple-500 to-pink-400",
    },
    {
      icon: Rocket,
      title: "Prototyping",
      description: "Rapid prototyping to validate ideas before development.",
      color: "from-cyan-500 to-blue-400",
    },
    {
      icon: Users,
      title: "User Research",
      description: "Deep insights into user behavior for design decisions.",
      color: "from-indigo-500 to-purple-400",
    },
  ];

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Large glowing orb */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] animate-pulse-glow" />
          
          {/* Orbiting elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]">
            <div className="absolute w-4 h-4 bg-primary rounded-full shadow-glow" style={{ animation: 'orbit 20s linear infinite' }} />
            <div className="absolute w-3 h-3 bg-cyan-400 rounded-full shadow-glow" style={{ animation: 'orbit 15s linear infinite reverse' }} />
            <div className="absolute w-2 h-2 bg-purple-400 rounded-full" style={{ animation: 'orbit 25s linear infinite' }} />
          </div>

          {/* Grid pattern overlay */}
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: 'linear-gradient(hsl(217 91% 60%) 1px, transparent 1px), linear-gradient(90deg, hsl(217 91% 60%) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />

          {/* Floating particles */}
          <div className="absolute top-20 left-20 w-2 h-2 bg-primary/60 rounded-full animate-float" />
          <div className="absolute top-40 right-32 w-3 h-3 bg-cyan-400/40 rounded-full animate-float" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-40 left-40 w-2 h-2 bg-purple-400/50 rounded-full animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute bottom-60 right-20 w-4 h-4 bg-primary/30 rounded-full animate-float" style={{ animationDelay: '0.5s' }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="animate-fade-up">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/10 border border-primary/20 backdrop-blur-sm rounded-full text-sm font-medium mb-10 text-primary">
                <Sparkles className="w-4 h-4" />
                Product Design Agency
                <ChevronRight className="w-4 h-4" />
              </div>

              {/* Main headline */}
              <h1 className="font-display text-5xl md:text-7xl lg:text-[6rem] font-bold leading-[0.9] mb-8 tracking-tight">
                <span className="text-foreground">We Design</span>
                <br />
                <span className="text-foreground">Products That</span>
                <br />
                <span className="text-gradient-hero">People Love</span>
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
                Think Venture transforms your ideas into exceptional digital products through strategic design thinking.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <Button variant="hero" size="xl" className="group" asChild>
                  <Link to="/contact">
                    Start Your Project
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button variant="outline" size="xl" className="border-primary/30 hover:bg-primary/10 hover:border-primary/50" asChild>
                  <Link to="/services">
                    Our Services
                  </Link>
                </Button>
              </div>

              {/* Stats row */}
              <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                {[
                  { value: "10+", label: "Projects Delivered" },
                  { value: "100%", label: "Client Satisfaction" },
                  { value: "24h", label: "Response Time" },
                ].map((stat, i) => (
                  <div key={stat.label} className="text-center animate-fade-in" style={{ animationDelay: `${0.3 + i * 0.1}s` }}>
                    <div className="font-display text-4xl md:text-5xl font-bold text-gradient mb-2">{stat.value}</div>
                    <div className="text-muted-foreground text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground animate-bounce">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-primary to-transparent" />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        
        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium mb-6 text-primary">
              <Zap className="w-4 h-4" />
              What We Do
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
              Our <span className="text-gradient">Services</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive design services to help you build products that stand out.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group relative bg-card border border-border rounded-3xl p-8 hover:border-primary/50 transition-all duration-500 hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-primary/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className={`relative w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="relative font-display font-semibold text-xl mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="relative text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>

                <div className="relative mt-6 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <span className="text-sm font-medium">Learn more</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button variant="creative" size="lg" asChild>
              <Link to="/services">
                View All Services
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium mb-6 text-primary">
                <Star className="w-4 h-4" />
                Why Think Venture
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Design That <span className="text-gradient">Drives Results</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
                We don't just create beautiful designs — we build strategic solutions that help your business grow and succeed in the digital landscape.
              </p>

              <div className="space-y-6">
                {[
                  { title: "Strategic Approach", desc: "Every design decision is backed by research and strategy" },
                  { title: "User-Centered", desc: "We put your users at the heart of everything we create" },
                  { title: "Results Driven", desc: "Our designs are optimized for conversions and growth" },
                ].map((item, i) => (
                  <div key={item.title} className="flex gap-4 items-start group">
                    <div className="w-10 h-10 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Zap className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-lg mb-1">{item.title}</h4>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual element */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 via-card to-purple-500/20 rounded-[3rem] border border-border p-8 relative overflow-hidden">
                {/* Inner glow */}
                <div className="absolute inset-0 bg-primary/10 rounded-[3rem]" />
                
                {/* Floating cards */}
                <div className="absolute top-8 left-8 w-32 h-20 bg-card/80 backdrop-blur border border-border rounded-2xl shadow-accent animate-float" />
                <div className="absolute top-1/2 right-8 w-40 h-24 bg-card/80 backdrop-blur border border-border rounded-2xl shadow-accent animate-float" style={{ animationDelay: '1s' }} />
                <div className="absolute bottom-12 left-1/4 w-36 h-20 bg-card/80 backdrop-blur border border-border rounded-2xl shadow-accent animate-float" style={{ animationDelay: '2s' }} />

                {/* Center element */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-primary to-cyan-400 rounded-3xl flex items-center justify-center shadow-glow animate-pulse-glow">
                  <Rocket className="w-12 h-12 text-background" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32">
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

            <div className="relative px-8 py-20 md:px-16 md:py-28 text-center">
              <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-background mb-6 leading-tight">
                Ready to Build
                <br />
                Something Great?
              </h2>
              <p className="text-background/80 text-lg md:text-xl max-w-2xl mx-auto mb-12">
                Let's collaborate to bring your vision to life. Start your journey with us today.
              </p>
              <Button size="xl" className="bg-background text-primary hover:bg-background/90 shadow-bold" asChild>
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
