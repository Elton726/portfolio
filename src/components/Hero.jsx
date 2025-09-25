import React, { useState, useEffect } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaChevronDown,
  FaBook,
} from "react-icons/fa";

const Hero = () => {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/Elton726", label: "GitHub" },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/elton-chirambo-6965b8380/",
      label: "LinkedIn",
    },
    {
      icon: FaEnvelope,
      href: "mailto:eltonchirambo100@gmail.com",
      label: "Email",
    },
  ];

  // Hide scroll indicator when user scrolls
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollIndicator(window.scrollY === 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen gradient-bg-hero relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div
          className="absolute top-40 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/2 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center pt-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="animate-fade-in">
              <div className="flex items-center justify-center mb-4">
                <FaBook className="text-purple-200 mr-2" />
                <p className="text-purple-200 font-medium text-lg">
                  ICT Student
                </p>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                Hi, I'm <span className="text-purple-200">Elton Chirambo</span>
              </h1>
              <h2 className="text-xl md:text-2xl text-purple-100 mb-6 font-light">
                Passionate Developer & Tech Enthusiast
              </h2>
              <p className="text-lg text-white/80 mb-8 leading-relaxed max-w-2xl mx-auto">
                Currently pursuing my Bachelor's in Information Communication
                and Technology while building real-world projects. I love
                turning ideas into code and learning new technologies along the
                way.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a
                  href="#projects"
                  className="bg-white/10 hover:bg-white/20 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 backdrop-blur-sm border border-white/20 professional-card inline-flex items-center justify-center"
                >
                  See My Projects
                </a>
                <a
                  href="#contact"
                  className="bg-white text-purple-600 hover:bg-purple-50 font-medium py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 professional-card inline-flex items-center justify-center"
                >
                  Let's Connect
                </a>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 max-w-md mx-auto mb-12"> {/* Increased mb-12 for more space */}
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">5+</div>
                  <div className="text-purple-200 text-sm">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">2+</div>
                  <div className="text-purple-200 text-sm">Years Coding</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">2.8</div>
                  <div className="text-purple-200 text-sm">GPA</div>
                </div>
              </div>

              {/* Social Links with more bottom margin */}
              <div className="flex justify-center space-x-6 mb-16"> {/* Added mb-16 for ample space */}
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="text-white/70 hover:text-white hover:scale-110 transition-all duration-300 p-3 rounded-full bg-white/10 hover:bg-white/20"
                    aria-label={social.label}
                  >
                    <social.icon className="text-xl" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Conditional Scroll Indicator - Only shows when at top of page */}
      {showScrollIndicator && (
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10">
          <a href="#about" className="animate-bounce inline-block">
            <div className="w-8 h-12 border-2 border-white/40 rounded-full flex justify-center">
              <FaChevronDown className="text-white/70 mt-2 text-sm" />
            </div>
          </a>
        </div>
      )}
    </section>
  );
};

export default Hero;