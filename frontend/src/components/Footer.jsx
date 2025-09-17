import React from 'react';
import { portfolioData } from '../data/mock';
import { Mail, Linkedin, Github, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-800 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="md:col-span-2 space-y-4">
              <h3 className="text-2xl font-bold">{portfolioData.personal.name}</h3>
              <p className="text-slate-300 text-lg leading-relaxed max-w-md">
                AI/ML Developer passionate about creating intelligent solutions that solve real-world problems with measurable impact.
              </p>
              <div className="flex space-x-4">
                <a 
                  href={portfolioData.personal.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-slate-700 hover:bg-blue-600 p-3 rounded-full transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href={portfolioData.personal.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-slate-700 hover:bg-slate-600 p-3 rounded-full transition-all duration-300 hover:scale-110"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a 
                  href={`mailto:${portfolioData.personal.email}`}
                  className="bg-slate-700 hover:bg-blue-600 p-3 rounded-full transition-all duration-300 hover:scale-110"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <nav className="space-y-2">
                <button 
                  onClick={() => scrollToSection('about')}
                  className="block text-slate-300 hover:text-white transition-colors"
                >
                  About Me
                </button>
                <button 
                  onClick={() => scrollToSection('skills')}
                  className="block text-slate-300 hover:text-white transition-colors"
                >
                  Skills
                </button>
                <button 
                  onClick={() => scrollToSection('experience')}
                  className="block text-slate-300 hover:text-white transition-colors"
                >
                  Experience
                </button>
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="block text-slate-300 hover:text-white transition-colors"
                >
                  Projects
                </button>
                <button 
                  onClick={() => scrollToSection('blog')}
                  className="block text-slate-300 hover:text-white transition-colors"
                >
                  Blog
                </button>
              </nav>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
              <div className="space-y-3">
                <div>
                  <div className="text-sm text-slate-400">Email</div>
                  <a 
                    href={`mailto:${portfolioData.personal.email}`}
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    {portfolioData.personal.email}
                  </a>
                </div>
                <div>
                  <div className="text-sm text-slate-400">Location</div>
                  <div className="text-slate-300">{portfolioData.personal.location}</div>
                </div>
                <div>
                  <div className="text-sm text-slate-400">Response Time</div>
                  <div className="text-slate-300">Within 24 hours</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-700">
        <div className="container mx-auto px-6 py-6">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 text-slate-400 mb-4 md:mb-0">
              <span>© 2024 {portfolioData.personal.name}. Built with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>and React</span>
            </div>
            
            <button
              onClick={scrollToTop}
              className="bg-slate-700 hover:bg-slate-600 p-2 rounded-full transition-all duration-300 hover:scale-110 group"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-4 w-4 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;