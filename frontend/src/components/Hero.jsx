import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { ArrowDown, Download, ExternalLink } from 'lucide-react';
import { portfolioService } from '../services/api';

const Hero = () => {
  const [personalInfo, setPersonalInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPersonalInfo = async () => {
      try {
        const data = await portfolioService.getPersonalInfo();
        setPersonalInfo(data);
      } catch (error) {
        console.error('Error fetching personal info:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchPersonalInfo();
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (loading) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 pt-20">
        <div className="flex items-center space-x-2">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          <span className="text-slate-600">Loading...</span>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 pt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image */}
          <div className="mb-8">
            <img
              src={personalInfo?.image || '/placeholder-avatar.jpg'}
              alt={personalInfo?.name || 'Profile'}
              className="w-32 h-32 rounded-full mx-auto border-4 border-white shadow-lg object-cover"
            />
          </div>

          {/* Main Content */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-800 leading-tight">
              {personalInfo?.name || 'Loading...'}
            </h1>
            
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-semibold text-blue-600">
                {personalInfo?.title || ''}
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                {personalInfo?.subtitle || ''}
              </p>
            </div>

            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              {personalInfo?.bio || ''}
            </p>

            {/* Location */}
            <p className="text-slate-500">
              📍 {personalInfo?.location || ''}
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