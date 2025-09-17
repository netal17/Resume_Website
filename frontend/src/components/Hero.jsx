import React from 'react';
import { Button } from './ui/button';
import { ArrowDown, Download, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/mock';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 pt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image */}
          <div className="mb-8">
            <img
              src={portfolioData.personal.image}
              alt={portfolioData.personal.name}
              className="w-32 h-32 rounded-full mx-auto border-4 border-white shadow-lg object-cover"
            />
          </div>

          {/* Main Content */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-800 leading-tight">
              {portfolioData.personal.name}
            </h1>
            
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-semibold text-blue-600">
                {portfolioData.personal.title}
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                {portfolioData.personal.subtitle}
              </p>
            </div>

            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              {portfolioData.personal.bio}
            </p>

            {/* Location */}
            <p className="text-slate-500">
              📍 {portfolioData.personal.location}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
                <Download className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Scroll Indicator */}
            <div className="pt-12">
              <button
                onClick={() => scrollToSection('about')}
                className="animate-bounce text-blue-600 hover:text-blue-700 transition-colors"
              >
                <ArrowDown size={32} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;