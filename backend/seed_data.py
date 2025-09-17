"""
Database seeding script for Netal Daga's portfolio
Run this script to populate MongoDB with initial portfolio data
"""

import asyncio
from motor.motor_asyncio import AsyncIOMotorClient
import os
from dotenv import load_dotenv
from pathlib import Path

# Load environment variables
ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Portfolio data to seed
portfolio_data = {
    "personal_info": {
        "name": "Netal Daga",
        "title": "AI/ML Developer",
        "subtitle": "Computer Vision, Backend Engineering & Intelligent Automation",
        "email": "npsdaga@gmail.com",
        "linkedin": "https://www.linkedin.com/in/netal-daga/",
        "github": "https://github.com/netaldaga",
        "location": "Pune, India",
        "bio": "AI/ML Developer specializing in Computer Vision, Backend Engineering, and Intelligent Automation. Passionate about building intelligent systems that solve real-world problems with measurable impact.",
        "image": "https://customer-assets.emergentagent.com/job_cv-portfolio-19/artifacts/496r75cd_NetalDaga.jpeg"
    },
    
    "skills": [
        {
            "category": "Computer Vision & NLP",
            "skills": ["YOLOv8", "Faster R-CNN", "CNNs", "OpenCV", "PyTorch", "TensorFlow", "Hugging Face", "spaCy", "NLTK"],
            "icon": "Brain",
            "color": "bg-purple-100 text-purple-600",
            "order": 1,
            "isActive": True
        },
        {
            "category": "Data & Processing",
            "skills": ["Solomon META-AIVI", "LabelImg", "Roboflow", "Python Scripting", "Pandas", "NumPy"],
            "icon": "Database",
            "color": "bg-green-100 text-green-600",
            "order": 2,
            "isActive": True
        },
        {
            "category": "Deployment & DevOps",
            "skills": ["ONNX", "Docker", "Ubuntu Linux", "Shell Scripting", "Bash"],
            "icon": "Cloud",
            "color": "bg-blue-100 text-blue-600",
            "order": 3,
            "isActive": True
        },
        {
            "category": "Backend & APIs",
            "skills": ["FastAPI", "Flask", "MongoDB", "REST APIs", "JSON", "Webhooks", "Postman", "JWT Authentication"],
            "icon": "Code",
            "color": "bg-orange-100 text-orange-600",
            "order": 4,
            "isActive": True
        },
        {
            "category": "Automation & Tools",
            "skills": ["Cron Jobs", "Microsoft Flow", "Python", "Real-time Analytics"],
            "icon": "Zap",
            "color": "bg-red-100 text-red-600",
            "order": 5,
            "isActive": True
        }
    ],
    
    "experience": [
        {
            "title": "AI Developer",
            "company": "NextGen AI Vision System",
            "period": "2024",
            "type": "Project",
            "description": "Developed and integrated multiple YOLOv8 models for industrial inspection systems.",
            "achievements": [
                "Achieved 40% reduction in inspection errors",
                "Decreased operational risk by 2%",
                "Created unified FastAPI endpoint with JWT authentication",
                "Built real-time dashboards for visual analytics and performance tracking"
            ],
            "technologies": ["YOLOv8", "FastAPI", "JWT", "Real-time Analytics", "Computer Vision"],
            "order": 1,
            "isActive": True
        },
        {
            "title": "Developer & Tester",
            "company": "Solomon META-AIVI",
            "period": "2023-2024",
            "type": "Project",
            "description": "Led data annotation strategy and optimized real-time inferencing for AI vision systems.",
            "achievements": [
                "Improved model accuracy through strategic data annotation",
                "Optimized real-time inferencing via threshold tuning and ROI adjustments",
                "Resolved network latency issues for better performance",
                "Enhanced system reliability and response times"
            ],
            "technologies": ["Solomon META-AIVI", "Data Annotation", "Model Optimization", "Performance Tuning"],
            "order": 2,
            "isActive": True
        },
        {
            "title": "AI Developer",
            "company": "Plural Virtual Assistant",
            "period": "2023",
            "type": "Project",
            "description": "Developed a comprehensive smart office assistant with multiple AI capabilities.",
            "achievements": [
                "Built facial recognition system for user identification",
                "Implemented NLP for natural language processing",
                "Created appointment scheduling automation",
                "Integrated Microsoft Flow for workflow automation"
            ],
            "technologies": ["Facial Recognition", "NLP", "Microsoft Flow", "Automation", "Smart Systems"],
            "order": 3,
            "isActive": True
        }
    ],
    
    "projects": [
        {
            "title": "NextGen AI Vision System",
            "description": "Industrial inspection system using multiple YOLOv8 models with real-time analytics dashboard.",
            "image": "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
            "technologies": ["YOLOv8", "FastAPI", "JWT", "Real-time Analytics"],
            "impact": "40% reduction in inspection errors, 2% decrease in operational risk",
            "category": "Computer Vision",
            "githubUrl": "",
            "demoUrl": "",
            "isActive": True,
            "isFeatured": True,
            "order": 1
        },
        {
            "title": "Solomon META-AIVI Integration",
            "description": "Data annotation and model optimization platform for AI vision systems.",
            "image": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
            "technologies": ["Solomon META-AIVI", "Data Annotation", "Model Optimization"],
            "impact": "Improved model accuracy and reduced latency",
            "category": "AI/ML",
            "githubUrl": "",
            "demoUrl": "",
            "isActive": True,
            "isFeatured": True,
            "order": 2
        },
        {
            "title": "Plural Virtual Assistant",
            "description": "Smart office assistant with facial recognition, NLP, and automated scheduling.",
            "image": "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=400&fit=crop",
            "technologies": ["Facial Recognition", "NLP", "Microsoft Flow"],
            "impact": "Automated office workflows and improved productivity",
            "category": "Automation",
            "githubUrl": "",
            "demoUrl": "",
            "isActive": True,
            "isFeatured": True,
            "order": 3
        }
    ],
    
    "blog": [
        {
            "title": "Optimizing YOLOv8 for Industrial Inspection",
            "excerpt": "Learn how to fine-tune YOLOv8 models for industrial applications and achieve significant error reduction.",
            "date": "2024-01-15",
            "readTime": "5 min read",
            "category": "Computer Vision",
            "image": "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=200&fit=crop",
            "isPublished": True,
            "slug": "optimizing-yolov8-industrial-inspection"
        },
        {
            "title": "Building Scalable FastAPI Endpoints for AI Models",
            "excerpt": "Best practices for creating robust and scalable API endpoints for machine learning model deployment.",
            "date": "2024-01-10",
            "readTime": "7 min read",
            "category": "Backend Development",
            "image": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop",
            "isPublished": True,
            "slug": "scalable-fastapi-endpoints-ai-models"
        }
    ],
    
    "testimonials": [
        {
            "name": "Project Manager",
            "company": "NextGen AI Vision",
            "text": "Netal's expertise in computer vision and his ability to deliver measurable results made a significant impact on our inspection system efficiency.",
            "image": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
            "isActive": True,
            "order": 1
        },
        {
            "name": "Technical Lead",
            "company": "AI Development Team",
            "text": "His technical skills in YOLOv8 and FastAPI, combined with his problem-solving approach, consistently delivered high-quality solutions.",
            "image": "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=100&h=100&fit=crop&crop=face",
            "isActive": True,
            "order": 2
        }
    ]
}

async def seed_database():
    """Seed the database with initial portfolio data"""
    try:
        print("🌱 Starting database seeding...")
        
        # Clear existing data (optional - comment out if you want to keep existing data)
        print("🗑️  Clearing existing collections...")
        await db.personal_info.delete_many({})
        await db.skills.delete_many({})
        await db.experience.delete_many({})
        await db.projects.delete_many({})
        await db.blog.delete_many({})
        await db.testimonials.delete_many({})
        
        # Seed personal info
        print("👤 Seeding personal info...")
        await db.personal_info.insert_one(portfolio_data["personal_info"])
        
        # Seed skills
        print("🛠️  Seeding skills...")
        await db.skills.insert_many(portfolio_data["skills"])
        
        # Seed experience
        print("💼 Seeding experience...")
        await db.experience.insert_many(portfolio_data["experience"])
        
        # Seed projects
        print("🚀 Seeding projects...")
        await db.projects.insert_many(portfolio_data["projects"])
        
        # Seed blog
        print("📝 Seeding blog posts...")
        await db.blog.insert_many(portfolio_data["blog"])
        
        # Seed testimonials
        print("⭐ Seeding testimonials...")
        await db.testimonials.insert_many(portfolio_data["testimonials"])
        
        print("✅ Database seeding completed successfully!")
        print(f"📊 Seeded {len(portfolio_data['skills'])} skill categories")
        print(f"📊 Seeded {len(portfolio_data['experience'])} experiences")
        print(f"📊 Seeded {len(portfolio_data['projects'])} projects")
        print(f"📊 Seeded {len(portfolio_data['blog'])} blog posts")
        print(f"📊 Seeded {len(portfolio_data['testimonials'])} testimonials")
        
    except Exception as e:
        print(f"❌ Error seeding database: {str(e)}")
    finally:
        # Close the connection
        client.close()

if __name__ == "__main__":
    asyncio.run(seed_database())