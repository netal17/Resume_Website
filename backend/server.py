from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime
from bson import ObjectId


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI(title="Netal Daga Portfolio API", version="1.0.0")

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Portfolio Models
class PersonalInfo(BaseModel):
    name: str
    title: str
    subtitle: str
    email: str
    linkedin: str
    github: str
    location: str
    bio: str
    image: str

class SkillCategory(BaseModel):
    category: str
    skills: List[str]
    icon: str
    color: str

class Experience(BaseModel):
    title: str
    company: str
    period: str
    type: str
    description: str
    achievements: List[str]
    technologies: List[str]

class Project(BaseModel):
    title: str
    description: str
    image: str
    technologies: List[str]
    impact: str
    category: str
    githubUrl: Optional[str] = ""
    demoUrl: Optional[str] = ""

class BlogPost(BaseModel):
    title: str
    excerpt: str
    date: str
    readTime: str
    category: str
    image: str

class Testimonial(BaseModel):
    name: str
    company: str
    text: str
    image: str

class ContactMessage(BaseModel):
    name: str
    email: EmailStr
    subject: str
    message: str

class ContactMessageCreate(BaseModel):
    name: str
    email: EmailStr
    subject: str
    message: str

# Portfolio API Routes
@api_router.get("/")
async def root():
    return {"message": "Netal Daga Portfolio API", "version": "1.0.0"}

@api_router.get("/personal-info", response_model=PersonalInfo)
async def get_personal_info():
    try:
        personal_info = await db.personal_info.find_one()
        if not personal_info:
            raise HTTPException(status_code=404, detail="Personal info not found")
        
        # Remove MongoDB _id from response
        personal_info.pop('_id', None)
        return PersonalInfo(**personal_info)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error fetching personal info: {str(e)}")

@api_router.get("/skills", response_model=List[SkillCategory])
async def get_skills():
    try:
        skills = await db.skills.find({"isActive": True}).sort("order", 1).to_list(100)
        # Remove MongoDB _id from each skill
        for skill in skills:
            skill.pop('_id', None)
        return [SkillCategory(**skill) for skill in skills]
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error fetching skills: {str(e)}")

@api_router.get("/experience", response_model=List[Experience])
async def get_experience():
    try:
        experiences = await db.experience.find({"isActive": True}).sort("order", 1).to_list(100)
        # Remove MongoDB _id from each experience
        for exp in experiences:
            exp.pop('_id', None)
        return [Experience(**exp) for exp in experiences]
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error fetching experience: {str(e)}")

@api_router.get("/projects", response_model=List[Project])
async def get_projects(category: Optional[str] = None):
    try:
        query = {"isActive": True}
        if category and category != "All":
            query["category"] = category
        
        projects = await db.projects.find(query).sort("order", 1).to_list(100)
        # Remove MongoDB _id from each project
        for proj in projects:
            proj.pop('_id', None)
        return [Project(**proj) for proj in projects]
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error fetching projects: {str(e)}")

@api_router.get("/blog", response_model=List[BlogPost])
async def get_blog():
    try:
        blogs = await db.blog.find({"isPublished": True}).sort("date", -1).to_list(100)
        # Remove MongoDB _id from each blog
        for blog in blogs:
            blog.pop('_id', None)
        return [BlogPost(**blog) for blog in blogs]
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error fetching blog posts: {str(e)}")

@api_router.get("/testimonials", response_model=List[Testimonial])
async def get_testimonials():
    try:
        testimonials = await db.testimonials.find({"isActive": True}).sort("order", 1).to_list(100)
        # Remove MongoDB _id from each testimonial
        for test in testimonials:
            test.pop('_id', None)
        return [Testimonial(**test) for test in testimonials]
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error fetching testimonials: {str(e)}")

@api_router.post("/contact")
async def submit_contact(contact_data: ContactMessageCreate):
    try:
        # Create contact message document
        contact_message = {
            "name": contact_data.name,
            "email": contact_data.email,
            "subject": contact_data.subject,
            "message": contact_data.message,
            "isRead": False,
            "createdAt": datetime.utcnow()
        }
        
        # Insert into database
        result = await db.contact_messages.insert_one(contact_message)
        
        if result.inserted_id:
            return {
                "success": True, 
                "message": "Thank you for your message! I'll get back to you soon.",
                "id": str(result.inserted_id)
            }
        else:
            raise HTTPException(status_code=500, detail="Failed to save contact message")
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error submitting contact: {str(e)}")

# Legacy status endpoints for compatibility
class StatusCheck(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)

class StatusCheckCreate(BaseModel):
    client_name: str

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.dict()
    status_obj = StatusCheck(**status_dict)
    _ = await db.status_checks.insert_one(status_obj.dict())
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find().to_list(1000)
    return [StatusCheck(**status_check) for status_check in status_checks]

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
