import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Code2, 
  Database, 
  Cloud, 
  Smartphone, 
  Palette, 
  Settings, 
  BookOpen, 
  Award,
  TrendingUp,
  Star
} from 'lucide-react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      id: 'cv-nlp',
      name: 'Computer Vision & NLP',
      icon: Code2,
      skills: [
        { name: 'OpenCV', level: 90, experience: '1+ years', projects: 3 },
        { name: 'PyTorch', level: 85, experience: '1+ years', projects: 3 },
        { name: 'TensorFlow', level: 80, experience: '1+ years', projects: 2 },
        { name: 'YOLOv8', level: 95, experience: '1+ years', projects: 2 },
        { name: 'Faster R-CNN', level: 85, experience: '1+ years', projects: 2 },
        { name: 'Hugging Face', level: 75, experience: '1+ years', projects: 2 },
        { name: 'spaCy', level: 70, experience: '1+ years', projects: 1 },
        { name: 'NLTK', level: 70, experience: '1+ years', projects: 1 }
      ]
    },
    {
      id: 'backend',
      name: 'Programming & Backend',
      icon: Database,
      skills: [
        { name: 'Python', level: 95, experience: '1.5+ years', projects: 3 },
        { name: 'FastAPI', level: 90, experience: '1+ years', projects: 2 },
        { name: 'Flask', level: 85, experience: '1+ years', projects: 2 },
        { name: 'MongoDB', level: 80, experience: '1+ years', projects: 2 },
        { name: 'REST APIs', level: 85, experience: '1+ years', projects: 3 },
        { name: 'JWT Authentication', level: 85, experience: '1+ years', projects: 2 },
        { name: 'Webhooks', level: 75, experience: '1+ years', projects: 2 },
        { name: 'JSON Processing', level: 85, experience: '1+ years', projects: 3 }
      ]
    },
    {
      id: 'data-ml',
      name: 'Data & ML Operations',
      icon: Database,
      skills: [
        { name: 'Pandas', level: 90, experience: '1.5+ years', projects: 3 },
        { name: 'NumPy', level: 90, experience: '1.5+ years', projects: 3 },
        { name: 'Data Annotation', level: 95, experience: '1+ years', projects: 3 },
        { name: 'Model Testing', level: 90, experience: '1+ years', projects: 3 },
        { name: 'ONNX', level: 80, experience: '1+ years', projects: 2 },
        { name: 'Docker', level: 85, experience: '1+ years', projects: 2 },
        { name: 'Model Deployment', level: 85, experience: '1+ years', projects: 3 },
        { name: 'Edge Computing', level: 80, experience: '1+ years', projects: 2 }
      ]
    },
    {
      id: 'tools',
      name: 'Data Annotation & Tools',
      icon: Cloud,
      skills: [
        { name: 'Solomon META-AIVI', level: 95, experience: '1+ years', projects: 1 },
        { name: 'LabelImg', level: 85, experience: '1+ years', projects: 2 },
        { name: 'Roboflow', level: 80, experience: '1+ years', projects: 2 },
        { name: 'Data Augmentation', level: 85, experience: '1+ years', projects: 3 },
        { name: 'Quality Checks', level: 90, experience: '1+ years', projects: 3 },
        { name: 'Python Scripting', level: 90, experience: '1.5+ years', projects: 3 },
        { name: 'Bash Scripting', level: 80, experience: '1+ years', projects: 2 },
        { name: 'Ubuntu Linux', level: 85, experience: '1+ years', projects: 3 }
      ]
    },
    {
      id: 'automation',
      name: 'Scripting & Automation',
      icon: Smartphone,
      skills: [
        { name: 'Python Automation', level: 95, experience: '1.5+ years', projects: 3 },
        { name: 'Data Extraction', level: 90, experience: '1+ years', projects: 3 },
        { name: 'Log Processing', level: 85, experience: '1+ years', projects: 2 },
        { name: 'Cron Jobs', level: 80, experience: '1+ years', projects: 2 },
        { name: 'Shell Scripts', level: 80, experience: '1+ years', projects: 2 },
        { name: 'Error Handling', level: 85, experience: '1+ years', projects: 3 },
        { name: 'System Monitoring', level: 80, experience: '1+ years', projects: 2 },
        { name: 'API Automation', level: 85, experience: '1+ years', projects: 2 }
      ]
    },
    {
      id: 'development-tools',
      name: 'Development Tools',
      icon: Settings,
      skills: [
        { name: 'Git/GitHub', level: 85, experience: '1.5+ years', projects: 3 },
        { name: 'VS Code', level: 90, experience: '1.5+ years', projects: 3 },
        { name: 'Postman', level: 85, experience: '1+ years', projects: 3 },
        { name: 'Docker', level: 80, experience: '1+ years', projects: 2 },
        { name: 'Requests Library', level: 85, experience: '1+ years', projects: 3 },
        { name: 'VGGFace', level: 75, experience: '6 months', projects: 1 },
        { name: 'ResNet50', level: 75, experience: '6 months', projects: 1 },
        { name: 'ReactJS', level: 70, experience: '6 months', projects: 1 }
      ]
    }
  ];

  const certifications = [
    {
      name: 'B.Tech AI & Data Science',
      issuer: 'Vishwakarma Institute of Information Technology',
      year: '2024',
      level: 'Bachelor\'s Degree',
      icon: Award
    },
    {
      name: 'Computer Vision Specialist',
      issuer: 'Industry Experience',
      year: '2024',
      level: 'Professional',
      icon: Code2
    },
    {
      name: 'AI Vision System Developer',
      issuer: 'TACO Project',
      year: '2024',
      level: 'Professional',
      icon: Cloud
    },
    {
      name: 'FastAPI & Backend Development',
      issuer: 'Industry Projects',
      year: '2024',
      level: 'Professional',
      icon: Database
    }
  ];

  const learningGoals = [
    { skill: 'Advanced Deep Learning', progress: 70, target: 'Q2 2025' },
    { skill: 'MLOps & Model Deployment', progress: 60, target: 'Q2 2025' },
    { skill: 'Natural Language Processing', progress: 50, target: 'Q3 2025' },
    { skill: 'Cloud AI Services', progress: 40, target: 'Q3 2025' }
  ];

  const getSkillColor = (level: number) => {
    if (level >= 90) return 'text-green-600';
    if (level >= 80) return 'text-blue-600';
    if (level >= 70) return 'text-yellow-600';
    return 'text-gray-600';
  };

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold mb-4">Skills & Expertise</h1>
            <p className="text-xl text-muted-foreground">
              A comprehensive overview of my technical skills, certifications, and continuous learning journey
            </p>
          </motion.div>

          {/* Skills Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <Tabs defaultValue="frontend" className="w-full">
              <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 h-auto p-1">
                {skillCategories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="flex flex-col py-3 px-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                    <category.icon className="h-4 w-4 mb-1" />
                    <span className="text-xs font-medium">{category.name.split(' ')[0]}</span>
                  </TabsTrigger>
                ))}
              </TabsList>

              {skillCategories.map((category) => (
                <TabsContent key={category.id} value={category.id} className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <category.icon className="h-5 w-5 text-primary" />
                        {category.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-6">
                        {category.skills.map((skill, index) => (
                          <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.1 * index }}
                            className="space-y-3"
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <span className="font-medium">{skill.name}</span>
                                <Star className={`h-4 w-4 ${getSkillColor(skill.level)}`} />
                              </div>
                              <div className="text-right text-sm text-muted-foreground">
                                <div>{skill.level}%</div>
                              </div>
                            </div>
                            <Progress value={skill.level} className="h-2" />
                            <div className="flex justify-between text-xs text-muted-foreground">
                              <span>{skill.experience}</span>
                              <span>{skill.projects} projects</span>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary" />
                    Certifications
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {certifications.map((cert, index) => (
                    <div key={cert.name} className="flex items-start gap-3 p-4 rounded-lg bg-secondary/20">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <cert.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold">{cert.name}</h4>
                        <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="outline" className="text-xs">{cert.level}</Badge>
                          <span className="text-xs text-muted-foreground">{cert.year}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            {/* Learning Goals */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-primary" />
                    Currently Learning
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {learningGoals.map((goal) => (
                    <div key={goal.skill} className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{goal.skill}</span>
                        <div className="text-sm text-muted-foreground">
                          Target: {goal.target}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Progress value={goal.progress} className="h-2" />
                        <div className="text-xs text-muted-foreground">
                          {goal.progress}% complete
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="pt-4 border-t">
                    <p className="text-sm text-muted-foreground">
                      Always learning and adapting to new technologies and industry trends.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Skills Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  Skills Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">
                      {skillCategories.reduce((sum, cat) => sum + cat.skills.length, 0)}
                    </div>
                    <div className="text-sm text-muted-foreground">Technical Skills</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">3</div>
                    <div className="text-sm text-muted-foreground">Major Projects</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">
                      {certifications.length}
                    </div>
                    <div className="text-sm text-muted-foreground">Achievements</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">1.5+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Skills;