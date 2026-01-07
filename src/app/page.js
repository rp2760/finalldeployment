import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Code, Zap, Database, Brain, CheckCircle, Mail, Linkedin, Github } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Full-Stack Development",
      description: "Enterprise-grade web applications built with Next.js, React, and modern backend technologies. Scalable architecture designed for growth."
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI & Automation",
      description: "Intelligent automation workflows using n8n and AI agents. Streamline operations, reduce costs, and scale effortlessly."
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database Solutions",
      description: "Robust data architecture with MongoDB and SQL. Optimized for performance, security, and seamless integration."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance Optimization",
      description: "Lightning-fast applications with advanced caching, CDN integration, and performance-first engineering practices."
    }
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Full-Stack Development",
      description: "Built a scalable e-commerce solution with AI-powered recommendations, reducing cart abandonment by 35%.",
      tech: ["Next.js", "MongoDB", "Stripe", "AI"]
    },
    {
      title: "Business Automation Suite",
      category: "AI & Automation",
      description: "Automated 15+ business workflows using n8n and custom AI agents, saving 40 hours per week.",
      tech: ["n8n", "AI Agents", "APIs", "Webhooks"]
    },
    {
      title: "SaaS Dashboard",
      category: "Full-Stack Development",
      description: "Real-time analytics dashboard serving 10K+ users with sub-second load times and 99.9% uptime.",
      tech: ["React", "Node.js", "PostgreSQL", "Redis"]
    }
  ];

  const techStack = [
    "Next.js", "React", "Node.js", "TypeScript", "Tailwind CSS",
    "MongoDB", "PostgreSQL", "Redis", "n8n", "AI Agents",
    "Docker", "AWS", "Vercel", "Framer Motion"
  ];

  const NavLink = ({ href, children }) => (
    <a
      href={href}
      className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium"
      onClick={(e) => {
        e.preventDefault();
        setIsMenuOpen(false);
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
      }}
    >
      {children}
    </a>
  );

  return (
    <div className="bg-[#0a0a0a] text-gray-100 min-h-screen">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-[#0a0a0a]/95 backdrop-blur-sm border-b border-white/5 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold tracking-tight">
              TARABHAI <span className="text-orange-500">PATIDAR</span>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              <NavLink href="#home">Home</NavLink>
              <NavLink href="#services">Services</NavLink>
              <NavLink href="#projects">Projects</NavLink>
              <NavLink href="#about">About</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 flex flex-col space-y-4">
              <NavLink href="#home">Home</NavLink>
              <NavLink href="#services">Services</NavLink>
              <NavLink href="#projects">Projects</NavLink>
              <NavLink href="#about">About</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6" data-animate>
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Building Digital Solutions That
              <span className="text-orange-500"> Scale</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Full-stack development and AI automation for businesses ready to transform their digital presence. From concept to deployment, delivering scalable solutions that drive growth.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 group"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Get in Touch
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#projects" 
                className="border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View Work
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-[#0f0f0f]" data-animate>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Services</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-[#1a1a1a] p-8 rounded-xl border border-white/5 hover:border-orange-500/30 transition-all duration-300 group"
              >
                <div className="text-orange-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-400 font-semibold transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Discuss Your Project
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6" data-animate>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Real results for real businesses
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-[#1a1a1a] rounded-xl border border-white/5 overflow-hidden hover:border-orange-500/30 transition-all duration-300 group"
              >
                <div className="p-8">
                  <div className="text-sm text-orange-500 font-semibold mb-3">{project.category}</div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-orange-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span 
                        key={i}
                        className="text-xs bg-white/5 px-3 py-1 rounded-full text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-[#0f0f0f]" data-animate>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">About</h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                I'm a full-stack developer and AI automation specialist focused on building scalable digital solutions for modern businesses.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                With expertise in Next.js, React, and intelligent automation tools, I help startups and established companies transform their operations through technology.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Performance-First</h4>
                    <p className="text-gray-400">Every solution optimized for speed and efficiency</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Scalable Architecture</h4>
                    <p className="text-gray-400">Built to grow with your business</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">AI-Powered</h4>
                    <p className="text-gray-400">Leveraging automation to maximize efficiency</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Tech Stack</h3>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech, index) => (
                  <span 
                    key={index}
                    className="bg-[#1a1a1a] border border-white/10 px-4 py-2 rounded-lg text-sm hover:border-orange-500/30 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6" data-animate>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-gray-400 text-lg mb-12 leading-relaxed">
            Ready to transform your digital presence? Let's discuss how we can build something exceptional together.
          </p>
          
          <form className="space-y-6 text-left">
            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-300">Name</label>
              <input 
                type="text"
                className="w-full bg-[#1a1a1a] border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500 transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-300">Email</label>
              <input 
                type="email"
                className="w-full bg-[#1a1a1a] border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500 transition-colors"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-300">Message</label>
              <textarea 
                rows="5"
                className="w-full bg-[#1a1a1a] border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500 transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <button 
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              Get in Touch
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0f0f0f] border-t border-white/5 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-xl font-bold mb-2">
                TARABHAI <span className="text-orange-500">PATIDAR</span>
              </div>
              <p className="text-gray-400 text-sm">
                Building scalable digital solutions
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Navigation</h4>
              <div className="flex flex-col space-y-2 text-sm">
                <NavLink href="#home">Home</NavLink>
                <NavLink href="#services">Services</NavLink>
                <NavLink href="#projects">Projects</NavLink>
                <NavLink href="#about">About</NavLink>
                <NavLink href="#contact">Contact</NavLink>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Connect</h4>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/5 pt-8 text-center text-sm text-gray-400">
            © {new Date().getFullYear()} Tarabhai Patidar. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;