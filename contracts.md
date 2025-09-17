# API Contracts & Backend Integration Plan

## Overview
This document outlines the API contracts and integration plan for Netal Daga's portfolio website backend implementation.

## Current Mock Data Structure
- **File**: `/app/frontend/src/data/mock.js`
- **Contains**: Personal info, skills, experience, projects, education, testimonials, blog, etc.
- **Status**: Using real data from resume + user-provided email and photo

## Backend Implementation Plan

### 1. Database Models (MongoDB Collections)

#### PersonalInfo Collection
```javascript
{
  _id: ObjectId,
  name: String,
  title: String,
  subtitle: String,
  email: String,
  linkedin: String,
  github: String,
  location: String,
  bio: String,
  image: String,
  createdAt: Date,
  updatedAt: Date
}
```

#### Skills Collection
```javascript
{
  _id: ObjectId,
  category: String, // "Computer Vision & NLP", "Data & Processing", etc.
  skills: [String], // Array of skill names
  icon: String, // Icon identifier
  color: String, // Color class for UI
  order: Number, // Display order
  isActive: Boolean
}
```

#### Experience Collection
```javascript
{
  _id: ObjectId,
  title: String,
  company: String,
  period: String,
  type: String, // "Project", "Job", etc.
  description: String,
  achievements: [String],
  technologies: [String],
  order: Number,
  isActive: Boolean
}
```

#### Projects Collection
```javascript
{
  _id: ObjectId,
  title: String,
  description: String,
  image: String,
  technologies: [String],
  impact: String,
  category: String,
  githubUrl: String,
  demoUrl: String,
  isActive: Boolean,
  isFeatured: Boolean,
  order: Number
}
```

#### Blog Collection
```javascript
{
  _id: ObjectId,
  title: String,
  excerpt: String,
  content: String, // Full blog content
  date: Date,
  readTime: String,
  category: String,
  image: String,
  isPublished: Boolean,
  slug: String
}
```

#### Testimonials Collection
```javascript
{
  _id: ObjectId,
  name: String,
  company: String,
  text: String,
  image: String,
  rating: Number,
  isActive: Boolean,
  order: Number
}
```

#### ContactMessages Collection
```javascript
{
  _id: ObjectId,
  name: String,
  email: String,
  subject: String,
  message: String,
  isRead: Boolean,
  createdAt: Date,
  ipAddress: String
}
```

### 2. API Endpoints

#### Portfolio Data APIs (GET)
- `GET /api/personal-info` - Get personal information
- `GET /api/skills` - Get all skills by category
- `GET /api/experience` - Get work experience
- `GET /api/projects` - Get all projects (with filter options)
- `GET /api/projects/featured` - Get featured projects only
- `GET /api/blog` - Get published blog posts
- `GET /api/blog/:slug` - Get single blog post
- `GET /api/testimonials` - Get active testimonials

#### Contact API (POST)
- `POST /api/contact` - Submit contact form

#### Admin APIs (Future Enhancement)
- `POST /api/admin/login` - Admin authentication
- `PUT /api/admin/personal-info` - Update personal info
- `POST /api/admin/projects` - Add new project
- `PUT /api/admin/projects/:id` - Update project
- `DELETE /api/admin/projects/:id` - Delete project
- `GET /api/admin/contact-messages` - Get contact messages

### 3. Frontend Integration Changes

#### Remove Mock Dependency
- Replace `import { portfolioData } from '../data/mock'` with API calls
- Create service functions for API communication
- Add loading states and error handling

#### API Service Layer
Create `/app/frontend/src/services/api.js`:
```javascript
const API_BASE = process.env.REACT_APP_BACKEND_URL + '/api';

export const portfolioService = {
  getPersonalInfo: () => fetch(`${API_BASE}/personal-info`),
  getSkills: () => fetch(`${API_BASE}/skills`),
  getExperience: () => fetch(`${API_BASE}/experience`),
  getProjects: (category) => fetch(`${API_BASE}/projects${category ? `?category=${category}` : ''}`),
  getBlog: () => fetch(`${API_BASE}/blog`),
  getTestimonials: () => fetch(`${API_BASE}/testimonials`),
  submitContact: (data) => fetch(`${API_BASE}/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
};
```

### 4. Implementation Steps

1. **Database Setup**: Create MongoDB models and seed with current mock data
2. **API Development**: Implement GET endpoints for portfolio data
3. **Contact Form**: Implement POST endpoint for contact form submissions
4. **Frontend Integration**: Update components to use API instead of mock data
5. **Error Handling**: Add loading states and error boundaries
6. **Testing**: Test all endpoints and frontend integration

### 5. Key Features to Implement

#### Contact Form Functionality
- Store submissions in database
- Send email notifications (optional)
- Input validation and sanitization
- Rate limiting to prevent spam

#### Dynamic Content Loading
- Fetch data from API on component mount
- Loading skeletons while data loads
- Error handling with retry options
- Caching for better performance

#### Data Validation
- Input validation on both client and server
- XSS protection for contact form
- File upload validation for images

### 6. Environment Variables Required

Backend `.env` additions:
```
MONGO_URL=mongodb://localhost:27017/portfolio
DB_NAME=portfolio_db
EMAIL_SERVICE=gmail (optional)
EMAIL_USER=your-email@gmail.com (optional)
EMAIL_PASS=your-app-password (optional)
```

Frontend `.env` (already exists):
```
REACT_APP_BACKEND_URL=http://localhost:8001
```

## Integration Timeline

1. **Phase 1**: Backend API development (Models + GET endpoints)
2. **Phase 2**: Contact form backend implementation
3. **Phase 3**: Frontend API integration
4. **Phase 4**: Testing and refinements

## Success Criteria

- ✅ Contact form submissions stored in database
- ✅ All portfolio data served from database instead of mock
- ✅ Proper error handling and loading states
- ✅ Mobile and desktop compatibility maintained
- ✅ Performance optimization with caching