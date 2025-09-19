import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  TrendingUp, 
  Users, 
  Code2, 
  Database,
  Cloud,
  Smartphone
} from 'lucide-react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: 'AI Developer',
      company: 'NextGen AI Vision System (Client: TACO)',
      location: 'Pune, India',
      period: 'Ongoing (3+ months)',
      type: 'Project-based',
      description: 'Part of development team for a scalable AI vision system for CURVV EV battery inspection, tailored for Indian manufacturing environments.',
      achievements: [
        'Integrated multiple YOLOv8 models for bolt alignment, connector locking, barcode, QR, and OCR detection',
        'Developed unified FastAPI endpoints with JWT-based authentication for secure backend access',
        'Reduced inspection errors by ~40% and operational risk by ~2% through live demo to senior management',
        'Currently building real-time dashboards and automated reporting modules for visual analytics'
      ],
      technologies: ['YOLOv8', 'FastAPI', 'Computer Vision', 'JWT', 'Python', 'OpenCV'],
      icon: TrendingUp
    },
    {
      title: 'Developer & Tester',
      company: 'Solomon META-AIVI (Clients: Fleetgaurd Filtrum, TACO)',
      location: 'Pune, India',
      period: '14 months',
      type: 'Full-time',
      description: 'Worked on innovative AI and machine learning solutions for industrial and manufacturing sectors, specializing in computer vision, real-time inferencing, and automation.',
      achievements: [
        'Analysed client requirements for object detection, classification, defect analysis, and object counting',
        'Led data annotation strategy considering lighting, shadows, FOV, and angles for model training',
        'Optimized real-time inferencing through threshold tuning and ROI adjustments',
        'Integrated REST APIs for seamless data flow between edge devices and server infrastructure'
      ],
      technologies: ['OpenCV', 'PyTorch', 'REST APIs', 'Edge Computing', 'Python', 'MongoDB'],
      icon: Database
    },
    {
      title: 'Developer Intern',
      company: 'Plural Technology',
      location: 'Pune, India',
      period: '5 months',
      type: 'Internship',
      description: 'Worked on an innovative project aimed at revolutionizing workplace management through AI, facial recognition, and natural language processing.',
      achievements: [
        'Developed smart office assistant integrating facial recognition, NLP, and appointment scheduling',
        'Implemented face recognition using VGGFace and ResNet50 with scalable Python/FastAPI backend',
        'Designed dynamic ReactJS UI for real-time visitor interaction and personalized guidance',
        'Automated workflows using Microsoft Flow with SharePoint Lists and SQL for secure access control'
      ],
      technologies: ['VGGFace', 'ResNet50', 'ReactJS', 'Microsoft Flow', 'Python', 'FastAPI'],
      icon: Smartphone
    }
  ];

  const skills = [
    { category: 'Computer Vision', items: ['YOLOv8', 'OpenCV', 'PyTorch', 'TensorFlow', 'Faster R-CNN'] },
    { category: 'Backend & APIs', items: ['Python', 'FastAPI', 'Flask', 'REST APIs', 'JWT Auth'] },
    { category: 'Data & ML', items: ['Pandas', 'NumPy', 'MongoDB', 'Data Annotation', 'Model Testing'] },
    { category: 'Tools & Deployment', items: ['Docker', 'ONNX', 'Ubuntu Linux', 'Git', 'Postman'] },
    { category: 'Automation', items: ['Python Scripts', 'Bash', 'Cron Jobs', 'System Monitoring'] },
    { category: 'AI Frameworks', items: ['Hugging Face', 'spaCy', 'NLTK', 'VGGFace', 'ResNet50'] }
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
            <h1 className="text-4xl font-bold mb-4">Work Experience</h1>
            <p className="text-xl text-muted-foreground">
              My professional journey and key achievements
            </p>
          </motion.div>

          {/* Experience Timeline */}
          <div className="space-y-8 mb-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <exp.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{exp.title}</CardTitle>
                          <p className="text-lg font-semibold text-primary">{exp.company}</p>
                          <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {exp.period}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              {exp.location}
                            </div>
                            <Badge variant="secondary">{exp.type}</Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{exp.description}</p>
                    
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-primary" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Skills Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code2 className="h-5 w-5 text-primary" />
                  Technical Skills Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {skills.map((skillGroup, index) => (
                    <div key={skillGroup.category} className="space-y-3">
                      <h4 className="font-semibold text-primary">{skillGroup.category}</h4>
                      <div className="space-y-2">
                        {skillGroup.items.map((skill) => (
                          <div key={skill} className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-primary/60" />
                            <span className="text-sm text-muted-foreground">{skill}</span>
                          </div>
                        ))}
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

export default Experience;