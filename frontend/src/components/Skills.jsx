import React, { useState, useEffect } from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { portfolioService } from '../services/api';
import { Brain, Database, Cloud, Code, Zap } from 'lucide-react';

const Skills = () => {
  const [skillCategories, setSkillCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const iconMap = {
    Brain,
    Database,
    Cloud,
    Code,
    Zap
  };

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const skills = await portfolioService.getSkills();
        const categoriesWithIcons = skills.map(skill => ({
          ...skill,
          icon: iconMap[skill.icon] || Brain
        }));
        setSkillCategories(categoriesWithIcons);
      } catch (error) {
        console.error('Error fetching skills:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchSkills();
  }, []);

  if (loading) {
    return (
      <section id="skills" className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Technical Skills</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              A comprehensive toolkit for building intelligent AI/ML solutions
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card key={index} className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className={`p-3 rounded-full ${category.color} mr-4`}>
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <h3 className="font-semibold text-slate-800 text-lg">
                        {category.category}
                      </h3>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <Badge 
                          key={skillIndex}
                          variant="secondary"
                          className="bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors cursor-default"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <Card className="bg-gradient-to-r from-blue-600 to-purple-600 border-0 text-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Always Learning</h3>
                <p className="text-lg opacity-90 max-w-2xl mx-auto">
                  I'm constantly exploring new technologies and methodologies in AI/ML. 
                  Currently focusing on advanced computer vision techniques and scalable deployment strategies.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;