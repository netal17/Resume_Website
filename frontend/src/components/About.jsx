import React from 'react';
import { Card, CardContent } from './ui/card';
import { portfolioData } from '../data/mock';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">About Me</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Passionate about building intelligent systems that solve real-world problems
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-lg text-slate-600 leading-relaxed">
                I'm an AI/ML Developer specializing in Computer Vision, Backend Engineering, and Intelligent Automation. 
                My passion lies in creating intelligent systems that deliver measurable impact and solve complex real-world challenges.
              </p>
              
              <p className="text-lg text-slate-600 leading-relaxed">
                With hands-on experience in projects like NextGen AI Vision System, where I achieved a 40% reduction in 
                inspection errors, I focus on building robust, scalable solutions using cutting-edge technologies like 
                YOLOv8, FastAPI, and various ML frameworks.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed">
                I believe in the power of combining technical expertise with practical problem-solving to create 
                AI solutions that make a real difference in business operations and user experiences.
              </p>

              {/* Key Stats */}
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center p-4 bg-slate-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">40%</div>
                  <div className="text-sm text-slate-600">Error Reduction</div>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">3+</div>
                  <div className="text-sm text-slate-600">Major Projects</div>
                </div>
              </div>
            </div>

            {/* Image and Education */}
            <div className="space-y-8">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop&crop=face"
                  alt="About Netal Daga"
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-4 rounded-xl shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold">2024</div>
                    <div className="text-sm">Graduate</div>
                  </div>
                </div>
              </div>

              {/* Education Card */}
              <Card className="bg-gradient-to-r from-blue-50 to-slate-50 border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-600 p-3 rounded-full">
                      <GraduationCap className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-slate-800 mb-2">
                        {portfolioData.education[0].degree}
                      </h3>
                      <div className="space-y-1 text-sm text-slate-600">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2" />
                          {portfolioData.education[0].institution}, {portfolioData.education[0].location}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2" />
                          {portfolioData.education[0].year}
                        </div>
                      </div>
                      <p className="text-sm text-slate-600 mt-2">
                        {portfolioData.education[0].description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;