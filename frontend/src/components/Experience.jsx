import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { portfolioData } from '../data/mock';
import { Calendar, Building, TrendingUp } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Experience</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Delivering measurable impact through AI/ML solutions
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            {portfolioData.experience.map((exp, index) => (
              <Card key={exp.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-3 gap-6">
                    {/* Left Column - Basic Info */}
                    <div className="lg:col-span-1 space-y-4">
                      <div>
                        <h3 className="text-xl font-bold text-slate-800 mb-2">
                          {exp.title}
                        </h3>
                        <div className="flex items-center text-blue-600 mb-1">
                          <Building className="h-4 w-4 mr-2" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                        <div className="flex items-center text-slate-600 mb-2">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span>{exp.period}</span>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {exp.type}
                        </Badge>
                      </div>
                      
                      {/* Technologies */}
                      <div>
                        <h4 className="font-medium text-slate-800 mb-2">Technologies</h4>
                        <div className="flex flex-wrap gap-1">
                          {exp.technologies.map((tech, techIndex) => (
                            <Badge 
                              key={techIndex}
                              variant="secondary"
                              className="text-xs bg-slate-100 text-slate-700"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right Column - Description & Achievements */}
                    <div className="lg:col-span-2 space-y-4">
                      <p className="text-slate-600 leading-relaxed">
                        {exp.description}
                      </p>
                      
                      <div>
                        <h4 className="font-medium text-slate-800 mb-3 flex items-center">
                          <TrendingUp className="h-4 w-4 mr-2 text-green-600" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start">
                              <div className="h-2 w-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-slate-600">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Summary Stats */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
              <div className="text-3xl font-bold text-blue-600 mb-2">40%</div>
              <div className="text-slate-600">Error Reduction Achieved</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
              <div className="text-3xl font-bold text-green-600 mb-2">3+</div>
              <div className="text-slate-600">Major AI Projects</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
              <div className="text-3xl font-bold text-purple-600 mb-2">2%</div>
              <div className="text-slate-600">Operational Risk Reduction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;