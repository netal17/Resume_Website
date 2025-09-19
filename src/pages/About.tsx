import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { 
  User, 
  GraduationCap, 
  Award, 
  Heart, 
  Coffee, 
  Music, 
  Camera, 
  Gamepad2 
} from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const languages = [
    { name: 'English', level: 90, description: 'Fluent' },
    { name: 'Hindi', level: 100, description: 'Native' },
    { name: 'Marathi', level: 95, description: 'Native' },
  ];

  const interests = [
    { icon: Coffee, name: 'AI Research', description: 'Exploring latest AI/ML technologies' },
    { icon: Music, name: 'Computer Vision', description: 'Object detection and classification' },
    { icon: Camera, name: 'Technology', description: 'Learning new frameworks and tools' },
    { icon: Gamepad2, name: 'Automation', description: 'Building intelligent systems' },
  ];

  const achievements = [
    'AI Vision System for TACO - Reduced inspection errors by 40%',
    'Industrial AI Solutions for manufacturing sectors',
    'Smart Office Assistant with facial recognition',
    'Expert in YOLOv8, FastAPI, and Computer Vision',
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold mb-4">About Me</h1>
            <p className="text-xl text-muted-foreground">
              Get to know me better - my background, skills, and what drives me
            </p>
          </motion.div>

          {/* Personal Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5 text-primary" />
                  Personal Story
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  I'm an AI/ML Developer with 1.5+ years of hands-on experience in computer vision, 
                  backend engineering, and intelligent automation. My journey in tech is driven by 
                  a passion for solving real-world problems through innovation and continuous learning.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I have a proven track record in developing and deploying scalable AI models, 
                  automating workflows, and integrating real-time systems across industrial environments. 
                  I'm skilled in data processing, scripting, and edge/cloud deployment to enhance 
                  operational efficiency and system scalability.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I'm adept at handling large datasets, building secure APIs, and optimizing model performance 
                  for defect detection and classification. My experience spans from developing NextGen AI vision 
                  systems to creating smart office assistants with facial recognition and NLP capabilities.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12"
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border-l-2 border-primary pl-4">
                  <h3 className="text-lg font-semibold">B. Tech (Artificial Intelligence & Data Science)</h3>
                  <p className="text-muted-foreground">Vishwakarma Institute of Information Technology, Pune</p>
                  <p className="text-sm text-muted-foreground">2024</p>
                  <p className="text-sm mt-2">
                    Specialized in AI/ML, Computer Vision, and Data Science technologies. 
                    Focused on practical applications of artificial intelligence in real-world scenarios.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>Languages</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {languages.map((lang, index) => (
                    <div key={lang.name}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{lang.name}</span>
                        <span className="text-sm text-muted-foreground">{lang.description}</span>
                      </div>
                      <Progress value={lang.level} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary" />
                    Certifications
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {achievements.map((achievement) => (
                    <div key={achievement} className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm">{achievement}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Interests */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-primary" />
                  Interests & Hobbies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-4">
                  {interests.map((interest) => (
                    <div key={interest.name} className="flex items-center gap-3 p-3 rounded-lg bg-secondary/20 hover:bg-secondary/40 transition-colors">
                      <interest.icon className="h-6 w-6 text-primary" />
                      <div>
                        <h4 className="font-medium">{interest.name}</h4>
                        <p className="text-sm text-muted-foreground">{interest.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;