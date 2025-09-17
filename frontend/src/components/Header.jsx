import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { portfolioData } from '../data/mock';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold text-slate-800">
            {portfolioData.personal.name}
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-slate-600 hover:text-blue-600 transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-slate-600 hover:text-blue-600 transition-colors"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className="text-slate-600 hover:text-blue-600 transition-colors"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-slate-600 hover:text-blue-600 transition-colors"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('blog')}
              className="text-slate-600 hover:text-blue-600 transition-colors"
            >
              Blog
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-slate-600 hover:text-blue-600 transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href={portfolioData.personal.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-blue-600 transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href={portfolioData.personal.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-slate-800 transition-colors"
            >
              <Github size={20} />
            </a>
            <a 
              href={`mailto:${portfolioData.personal.email}`}
              className="text-slate-600 hover:text-blue-600 transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-600 hover:text-slate-800"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-slate-200">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left text-slate-600 hover:text-blue-600 transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('skills')}
                className="text-left text-slate-600 hover:text-blue-600 transition-colors"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection('experience')}
                className="text-left text-slate-600 hover:text-blue-600 transition-colors"
              >
                Experience
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-left text-slate-600 hover:text-blue-600 transition-colors"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('blog')}
                className="text-left text-slate-600 hover:text-blue-600 transition-colors"
              >
                Blog
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left text-slate-600 hover:text-blue-600 transition-colors"
              >
                Contact
              </button>
              
              {/* Mobile Social Links */}
              <div className="flex items-center space-x-4 pt-4">
                <a 
                  href={portfolioData.personal.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-blue-600 transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href={portfolioData.personal.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-slate-800 transition-colors"
                >
                  <Github size={20} />
                </a>
                <a 
                  href={`mailto:${portfolioData.personal.email}`}
                  className="text-slate-600 hover:text-blue-600 transition-colors"
                >
                  <Mail size={20} />
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;