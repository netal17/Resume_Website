// Mock data for Netal Daga's portfolio
export const portfolioData = {
  personal: {
    name: "Netal Daga",
    title: "AI/ML Developer",
    subtitle: "Computer Vision, Backend Engineering & Intelligent Automation",
    email: "npsdaga@gmail.com",
    linkedin: "https://www.linkedin.com/in/netal-daga/",
    github: "https://github.com/netaldaga", // Placeholder
    location: "Pune, India",
    bio: "AI/ML Developer specializing in Computer Vision, Backend Engineering, and Intelligent Automation. Passionate about building intelligent systems that solve real-world problems with measurable impact.",
    image: "https://customer-assets.emergentagent.com/job_cv-portfolio-19/artifacts/496r75cd_NetalDaga.jpeg"
  },
  
  skills: {
    "Computer Vision & NLP": [
      "YOLOv8", "Faster R-CNN", "CNNs", "OpenCV", "PyTorch", 
      "TensorFlow", "Hugging Face", "spaCy", "NLTK"
    ],
    "Data & Processing": [
      "Solomon META-AIVI", "LabelImg", "Roboflow", "Python Scripting",
      "Pandas", "NumPy"
    ],
    "Deployment & DevOps": [
      "ONNX", "Docker", "Ubuntu Linux", "Shell Scripting", "Bash"
    ],
    "Backend & APIs": [
      "FastAPI", "Flask", "MongoDB", "REST APIs", "JSON", 
      "Webhooks", "Postman", "JWT Authentication"
    ],
    "Automation & Tools": [
      "Cron Jobs", "Microsoft Flow", "Python", "Real-time Analytics"
    ]
  },

  experience: [
    {
      id: 1,
      title: "AI Developer",
      company: "NextGen AI Vision System",
      period: "2024",
      type: "Project",
      description: "Developed and integrated multiple YOLOv8 models for industrial inspection systems.",
      achievements: [
        "Achieved 40% reduction in inspection errors",
        "Decreased operational risk by 2%",
        "Created unified FastAPI endpoint with JWT authentication",
        "Built real-time dashboards for visual analytics and performance tracking"
      ],
      technologies: ["YOLOv8", "FastAPI", "JWT", "Real-time Analytics", "Computer Vision"]
    },
    {
      id: 2,
      title: "Developer & Tester",
      company: "Solomon META-AIVI",
      period: "2023-2024",
      type: "Project",
      description: "Led data annotation strategy and optimized real-time inferencing for AI vision systems.",
      achievements: [
        "Improved model accuracy through strategic data annotation",
        "Optimized real-time inferencing via threshold tuning and ROI adjustments",
        "Resolved network latency issues for better performance",
        "Enhanced system reliability and response times"
      ],
      technologies: ["Solomon META-AIVI", "Data Annotation", "Model Optimization", "Performance Tuning"]
    },
    {
      id: 3,
      title: "AI Developer",
      company: "Plural Virtual Assistant",
      period: "2023",
      type: "Project",
      description: "Developed a comprehensive smart office assistant with multiple AI capabilities.",
      achievements: [
        "Built facial recognition system for user identification",
        "Implemented NLP for natural language processing",
        "Created appointment scheduling automation",
        "Integrated Microsoft Flow for workflow automation"
      ],
      technologies: ["Facial Recognition", "NLP", "Microsoft Flow", "Automation", "Smart Systems"]
    }
  ],

  education: [
    {
      degree: "B. Tech in Artificial Intelligence & Data Science",
      institution: "Vishwakarma Institute of Information Technology",
      location: "Pune",
      year: "2024",
      description: "Specialized in AI/ML, Computer Vision, and Data Science with focus on practical applications."
    }
  ],

  projects: [
    {
      id: 1,
      title: "NextGen AI Vision System",
      description: "Industrial inspection system using multiple YOLOv8 models with real-time analytics dashboard.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
      technologies: ["YOLOv8", "FastAPI", "JWT", "Real-time Analytics"],
      impact: "40% reduction in inspection errors, 2% decrease in operational risk",
      category: "Computer Vision"
    },
    {
      id: 2,
      title: "Solomon META-AIVI Integration",
      description: "Data annotation and model optimization platform for AI vision systems.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technologies: ["Solomon META-AIVI", "Data Annotation", "Model Optimization"],
      impact: "Improved model accuracy and reduced latency",
      category: "AI/ML"
    },
    {
      id: 3,
      title: "Plural Virtual Assistant",
      description: "Smart office assistant with facial recognition, NLP, and automated scheduling.",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=400&fit=crop",
      technologies: ["Facial Recognition", "NLP", "Microsoft Flow"],
      impact: "Automated office workflows and improved productivity",
      category: "Automation"
    }
  ],

  testimonials: [
    {
      id: 1,
      name: "Project Manager",
      company: "NextGen AI Vision",
      text: "Netal's expertise in computer vision and his ability to deliver measurable results made a significant impact on our inspection system efficiency.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Technical Lead",
      company: "AI Development Team",
      text: "His technical skills in YOLOv8 and FastAPI, combined with his problem-solving approach, consistently delivered high-quality solutions.",
      image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=100&h=100&fit=crop&crop=face"
    }
  ],

  blog: [
    {
      id: 1,
      title: "Optimizing YOLOv8 for Industrial Inspection",
      excerpt: "Learn how to fine-tune YOLOv8 models for industrial applications and achieve significant error reduction.",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "Computer Vision",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=200&fit=crop"
    },
    {
      id: 2,
      title: "Building Scalable FastAPI Endpoints for AI Models",
      excerpt: "Best practices for creating robust and scalable API endpoints for machine learning model deployment.",
      date: "2024-01-10",
      readTime: "7 min read",
      category: "Backend Development",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop"
    }
  ]
};