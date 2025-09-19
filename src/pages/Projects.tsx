import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  ExternalLink, 
  Github, 
  Play, 
  Star, 
  Users, 
  Calendar,
  Globe,
  Smartphone,
  Database,
  Cloud
} from 'lucide-react';
import { motion } from 'framer-motion';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'NextGen AI Vision System',
      category: 'ai',
      description: 'Scalable AI vision system for CURVV EV battery inspection with multiple YOLOv8 models for comprehensive detection.',
      longDescription: 'Developed a comprehensive AI vision system for TACO client featuring bolt alignment, connector locking, barcode, QR, and OCR detection using multiple YOLOv8 models with unified FastAPI endpoints and JWT authentication.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop',
      technologies: ['YOLOv8', 'FastAPI', 'Computer Vision', 'JWT Auth', 'Python', 'OpenCV'],
      features: ['Multi-Model Detection', 'Real-time Processing', 'Secure APIs', 'Performance Analytics'],
      github: 'https://github.com/netal17',
      demo: '#',
      status: 'In Progress',
      year: '2024',
      stars: 0,
      users: '1 Client',
      icon: Database
    },
    {
      id: 2,
      title: 'Solomon META-AIVI Solutions',
      category: 'ai',
      description: 'Industrial AI solutions for object detection, classification, defect analysis with real-time inferencing capabilities.',
      longDescription: 'Developed comprehensive AI solutions for manufacturing sectors including data annotation strategy, model testing, real-time optimization, and seamless API integration for edge devices.',
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=250&fit=crop',
      technologies: ['OpenCV', 'PyTorch', 'REST APIs', 'Edge Computing', 'Python', 'MongoDB'],
      features: ['Object Detection', 'Quality Control', 'Real-time Processing', 'API Integration'],
      github: 'https://github.com/netal17',
      demo: '#',
      status: 'Completed',
      year: '2023-2024',
      stars: 0,
      users: '2 Clients',
      icon: Cloud
    },
    {
      id: 3,
      title: 'Plural Virtual Assistant',
      category: 'web',
      description: 'Smart office assistant integrating facial recognition, NLP, and appointment scheduling for workplace management.',
      longDescription: 'Developed an innovative workplace management system using facial recognition with VGGFace and ResNet50, dynamic ReactJS UI, and Microsoft Flow automation for secure access control.',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=250&fit=crop',
      technologies: ['VGGFace', 'ResNet50', 'ReactJS', 'Microsoft Flow', 'Python', 'FastAPI'],
      features: ['Facial Recognition', 'NLP Processing', 'Appointment Scheduling', 'Secure Access'],
      github: 'https://github.com/netal17',
      demo: '#',
      status: 'Completed',
      year: '2023',
      stars: 0,
      users: '1 Organization',
      icon: Smartphone
    },
    {
      id: 4,
      title: 'Defect Detection System',
      category: 'ai',
      description: 'Real-time defect detection and classification system for manufacturing quality control.',
      longDescription: 'Built automated defect detection pipeline with model testing, debugging, accuracy analysis, and NG/OK classification logic optimized for real-world manufacturing environments.',
      image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=250&fit=crop',
      technologies: ['ONNX', 'Docker', 'MongoDB', 'Python', 'OpenCV', 'Model Testing'],
      features: ['Automated Detection', 'Quality Control', 'Performance Analysis', 'Real-time Processing'],
      github: 'https://github.com/netal17',
      demo: '#',
      status: 'Completed',
      year: '2023-2024',
      stars: 0,
      users: 'Industrial Clients',
      icon: Database
    },
    {
      id: 5,
      title: 'Data Annotation Pipeline',
      category: 'data',
      description: 'Automated data annotation workflows for computer vision models with quality management.',
      longDescription: 'Developed comprehensive data annotation system with quality checks, data augmentation, automated workflows using Python scripts, and support for various annotation tools.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
      technologies: ['Python', 'Roboflow', 'LabelImg', 'Data Processing', 'Quality Control'],
      features: ['Auto Annotation', 'Quality Checks', 'Data Augmentation', 'Pipeline Automation'],
      github: 'https://github.com/netal17',
      demo: '#',
      status: 'Completed',
      year: '2023-2024',
      stars: 0,
      users: 'Internal Projects',
      icon: Globe
    },
    {
      id: 6,
      title: 'Industrial Automation Scripts',
      category: 'automation',
      description: 'Python automation scripts for data processing, system monitoring, and workflow automation.',
      longDescription: 'Created comprehensive automation suite including data extraction, conversion, logging, automated backups using Cron Jobs, error handling, and system monitoring for stable AI pipeline execution.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop',
      technologies: ['Python', 'Bash', 'Cron Jobs', 'System Monitoring', 'Error Handling'],
      features: ['Data Processing', 'Auto Backups', 'Error Handling', 'System Monitoring'],
      github: 'https://github.com/netal17',
      demo: '#',
      status: 'Completed',
      year: '2023-2024',
      stars: 0,
      users: 'Production Systems',
      icon: Cloud
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'ai', label: 'AI/ML Projects', count: projects.filter(p => p.category === 'ai').length },
    { id: 'web', label: 'Web Apps', count: projects.filter(p => p.category === 'web').length },
    { id: 'data', label: 'Data Processing', count: projects.filter(p => p.category === 'data').length },
    { id: 'automation', label: 'Automation', count: projects.filter(p => p.category === 'automation').length },
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold mb-4">My Projects</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A collection of projects I've worked on, from web applications to mobile apps and infrastructure solutions
            </p>
          </motion.div>

          {/* Category Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
              <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 h-auto p-1">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="flex flex-col py-3 px-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                    <span className="font-medium text-sm">{category.label}</span>
                    <span className="text-xs opacity-75">({category.count})</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <Card className="h-full group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 flex gap-2">
                      <Badge variant={project.status === 'Completed' ? 'default' : 'secondary'}>
                        {project.status}
                      </Badge>
                    </div>
                    <div className="absolute top-4 left-4">
                      <div className="p-2 bg-white/90 backdrop-blur-sm rounded-lg">
                        <project.icon className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg group-hover:text-primary transition-colors">
                          {project.title}
                        </CardTitle>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {project.year}
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="h-3 w-3" />
                            {project.stars}
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="h-3 w-3" />
                            {project.users}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div>
                      <h4 className="font-medium text-sm mb-2">Key Features</h4>
                      <div className="flex flex-wrap gap-1">
                        {project.features.slice(0, 3).map((feature) => (
                          <Badge key={feature} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                        {project.features.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{project.features.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-sm mb-2">Technologies</h4>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 4 && (
                          <Badge variant="secondary" className="text-xs">
                            +{project.technologies.length - 4}
                          </Badge>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex gap-2 pt-2">
                      <Button variant="outline" size="sm" className="flex-1 group/btn">
                        <Github className="h-4 w-4 mr-1" />
                        Code
                      </Button>
                      {project.demo && (
                        <Button size="sm" className="flex-1 group/btn">
                          <ExternalLink className="h-4 w-4 mr-1" />
                          Demo
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <Card className="max-w-4xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Project Statistics</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">
                      {projects.length}
                    </div>
                    <div className="text-sm text-muted-foreground">Total Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">3</div>
                    <div className="text-sm text-muted-foreground">AI/ML Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">
                      {projects.filter(p => p.status === 'Completed').length}
                    </div>
                    <div className="text-sm text-muted-foreground">Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">40%</div>
                    <div className="text-sm text-muted-foreground">Error Reduction</div>
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

export default Projects;