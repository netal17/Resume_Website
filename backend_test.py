#!/usr/bin/env python3
"""
Backend API Testing for Netal Daga Portfolio
Tests all API endpoints for functionality, data structure, and error handling
"""

import requests
import json
import sys
from datetime import datetime
from typing import Dict, List, Any

# Get backend URL from frontend env
BACKEND_URL = "https://cv-portfolio-19.preview.emergentagent.com/api"

class PortfolioAPITester:
    def __init__(self):
        self.base_url = BACKEND_URL
        self.test_results = []
        self.failed_tests = []
        
    def log_test(self, test_name: str, success: bool, message: str, response_data: Any = None):
        """Log test results"""
        result = {
            "test": test_name,
            "success": success,
            "message": message,
            "timestamp": datetime.now().isoformat(),
            "response_data": response_data
        }
        self.test_results.append(result)
        
        if not success:
            self.failed_tests.append(result)
            
        status = "✅ PASS" if success else "❌ FAIL"
        print(f"{status}: {test_name} - {message}")
        
    def test_root_endpoint(self):
        """Test GET /api/ - Root endpoint"""
        try:
            response = requests.get(f"{self.base_url}/", timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                if "message" in data and "version" in data:
                    self.log_test("Root Endpoint", True, f"Root endpoint working. Message: {data['message']}", data)
                else:
                    self.log_test("Root Endpoint", False, "Root endpoint missing required fields (message, version)", data)
            else:
                self.log_test("Root Endpoint", False, f"Root endpoint returned status {response.status_code}", response.text)
                
        except Exception as e:
            self.log_test("Root Endpoint", False, f"Root endpoint failed with error: {str(e)}")
    
    def test_personal_info(self):
        """Test GET /api/personal-info"""
        try:
            response = requests.get(f"{self.base_url}/personal-info", timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                required_fields = ["name", "title", "email", "linkedin", "github", "location", "bio"]
                missing_fields = [field for field in required_fields if field not in data]
                
                if not missing_fields:
                    self.log_test("Personal Info", True, f"Personal info retrieved successfully for {data.get('name', 'Unknown')}", data)
                else:
                    self.log_test("Personal Info", False, f"Personal info missing fields: {missing_fields}", data)
            else:
                self.log_test("Personal Info", False, f"Personal info returned status {response.status_code}", response.text)
                
        except Exception as e:
            self.log_test("Personal Info", False, f"Personal info failed with error: {str(e)}")
    
    def test_skills(self):
        """Test GET /api/skills"""
        try:
            response = requests.get(f"{self.base_url}/skills", timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                if isinstance(data, list) and len(data) > 0:
                    # Check first skill structure
                    first_skill = data[0]
                    required_fields = ["category", "skills", "icon", "color"]
                    missing_fields = [field for field in required_fields if field not in first_skill]
                    
                    if not missing_fields:
                        self.log_test("Skills", True, f"Skills retrieved successfully. Found {len(data)} skill categories", {"count": len(data), "categories": [s.get("category") for s in data]})
                    else:
                        self.log_test("Skills", False, f"Skills missing fields: {missing_fields}", data)
                else:
                    self.log_test("Skills", False, "Skills returned empty or invalid data", data)
            else:
                self.log_test("Skills", False, f"Skills returned status {response.status_code}", response.text)
                
        except Exception as e:
            self.log_test("Skills", False, f"Skills failed with error: {str(e)}")
    
    def test_experience(self):
        """Test GET /api/experience"""
        try:
            response = requests.get(f"{self.base_url}/experience", timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                if isinstance(data, list) and len(data) > 0:
                    # Check first experience structure
                    first_exp = data[0]
                    required_fields = ["title", "company", "period", "description", "achievements", "technologies"]
                    missing_fields = [field for field in required_fields if field not in first_exp]
                    
                    if not missing_fields:
                        self.log_test("Experience", True, f"Experience retrieved successfully. Found {len(data)} experiences", {"count": len(data), "companies": [e.get("company") for e in data]})
                    else:
                        self.log_test("Experience", False, f"Experience missing fields: {missing_fields}", data)
                else:
                    self.log_test("Experience", False, "Experience returned empty or invalid data", data)
            else:
                self.log_test("Experience", False, f"Experience returned status {response.status_code}", response.text)
                
        except Exception as e:
            self.log_test("Experience", False, f"Experience failed with error: {str(e)}")
    
    def test_projects(self):
        """Test GET /api/projects"""
        try:
            response = requests.get(f"{self.base_url}/projects", timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                if isinstance(data, list) and len(data) > 0:
                    # Check first project structure
                    first_project = data[0]
                    required_fields = ["title", "description", "technologies", "impact", "category"]
                    missing_fields = [field for field in required_fields if field not in first_project]
                    
                    if not missing_fields:
                        self.log_test("Projects", True, f"Projects retrieved successfully. Found {len(data)} projects", {"count": len(data), "titles": [p.get("title") for p in data]})
                    else:
                        self.log_test("Projects", False, f"Projects missing fields: {missing_fields}", data)
                else:
                    self.log_test("Projects", False, "Projects returned empty or invalid data", data)
            else:
                self.log_test("Projects", False, f"Projects returned status {response.status_code}", response.text)
                
        except Exception as e:
            self.log_test("Projects", False, f"Projects failed with error: {str(e)}")
    
    def test_blog(self):
        """Test GET /api/blog"""
        try:
            response = requests.get(f"{self.base_url}/blog", timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                if isinstance(data, list) and len(data) > 0:
                    # Check first blog structure
                    first_blog = data[0]
                    required_fields = ["title", "excerpt", "date", "readTime", "category"]
                    missing_fields = [field for field in required_fields if field not in first_blog]
                    
                    if not missing_fields:
                        self.log_test("Blog", True, f"Blog posts retrieved successfully. Found {len(data)} posts", {"count": len(data), "titles": [b.get("title") for b in data]})
                    else:
                        self.log_test("Blog", False, f"Blog missing fields: {missing_fields}", data)
                else:
                    self.log_test("Blog", False, "Blog returned empty or invalid data", data)
            else:
                self.log_test("Blog", False, f"Blog returned status {response.status_code}", response.text)
                
        except Exception as e:
            self.log_test("Blog", False, f"Blog failed with error: {str(e)}")
    
    def test_testimonials(self):
        """Test GET /api/testimonials"""
        try:
            response = requests.get(f"{self.base_url}/testimonials", timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                if isinstance(data, list) and len(data) > 0:
                    # Check first testimonial structure
                    first_testimonial = data[0]
                    required_fields = ["name", "company", "text"]
                    missing_fields = [field for field in required_fields if field not in first_testimonial]
                    
                    if not missing_fields:
                        self.log_test("Testimonials", True, f"Testimonials retrieved successfully. Found {len(data)} testimonials", {"count": len(data), "names": [t.get("name") for t in data]})
                    else:
                        self.log_test("Testimonials", False, f"Testimonials missing fields: {missing_fields}", data)
                else:
                    self.log_test("Testimonials", False, "Testimonials returned empty or invalid data", data)
            else:
                self.log_test("Testimonials", False, f"Testimonials returned status {response.status_code}", response.text)
                
        except Exception as e:
            self.log_test("Testimonials", False, f"Testimonials failed with error: {str(e)}")
    
    def test_contact_form(self):
        """Test POST /api/contact"""
        try:
            # Test valid contact form submission
            contact_data = {
                "name": "John Smith",
                "email": "john.smith@example.com",
                "subject": "Portfolio Inquiry",
                "message": "Hello Netal, I'm interested in discussing a potential collaboration opportunity. Your portfolio showcases impressive work!"
            }
            
            response = requests.post(f"{self.base_url}/contact", json=contact_data, timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                if data.get("success") and "message" in data:
                    self.log_test("Contact Form", True, f"Contact form submission successful: {data['message']}", data)
                else:
                    self.log_test("Contact Form", False, "Contact form response missing success/message fields", data)
            else:
                self.log_test("Contact Form", False, f"Contact form returned status {response.status_code}", response.text)
                
        except Exception as e:
            self.log_test("Contact Form", False, f"Contact form failed with error: {str(e)}")
    
    def test_invalid_endpoints(self):
        """Test error handling for invalid endpoints"""
        try:
            response = requests.get(f"{self.base_url}/nonexistent", timeout=10)
            
            if response.status_code == 404:
                self.log_test("Error Handling", True, "404 error properly returned for invalid endpoint")
            else:
                self.log_test("Error Handling", False, f"Invalid endpoint returned unexpected status {response.status_code}")
                
        except Exception as e:
            self.log_test("Error Handling", False, f"Error handling test failed: {str(e)}")
    
    def test_contact_form_validation(self):
        """Test contact form validation"""
        try:
            # Test invalid email
            invalid_contact = {
                "name": "Test User",
                "email": "invalid-email",
                "subject": "Test",
                "message": "Test message"
            }
            
            response = requests.post(f"{self.base_url}/contact", json=invalid_contact, timeout=10)
            
            if response.status_code == 422:  # Validation error
                self.log_test("Contact Validation", True, "Contact form properly validates email format")
            elif response.status_code == 400:
                self.log_test("Contact Validation", True, "Contact form properly validates input data")
            else:
                self.log_test("Contact Validation", False, f"Contact form validation returned unexpected status {response.status_code}")
                
        except Exception as e:
            self.log_test("Contact Validation", False, f"Contact validation test failed: {str(e)}")
    
    def run_all_tests(self):
        """Run all API tests"""
        print(f"🚀 Starting Portfolio API Tests")
        print(f"📍 Testing backend at: {self.base_url}")
        print("=" * 60)
        
        # Run all tests
        self.test_root_endpoint()
        self.test_personal_info()
        self.test_skills()
        self.test_experience()
        self.test_projects()
        self.test_blog()
        self.test_testimonials()
        self.test_contact_form()
        self.test_invalid_endpoints()
        self.test_contact_form_validation()
        
        # Print summary
        print("\n" + "=" * 60)
        print("📊 TEST SUMMARY")
        print("=" * 60)
        
        total_tests = len(self.test_results)
        passed_tests = total_tests - len(self.failed_tests)
        
        print(f"Total Tests: {total_tests}")
        print(f"Passed: {passed_tests}")
        print(f"Failed: {len(self.failed_tests)}")
        print(f"Success Rate: {(passed_tests/total_tests)*100:.1f}%")
        
        if self.failed_tests:
            print("\n❌ FAILED TESTS:")
            for test in self.failed_tests:
                print(f"  - {test['test']}: {test['message']}")
        
        print("\n" + "=" * 60)
        return len(self.failed_tests) == 0

if __name__ == "__main__":
    tester = PortfolioAPITester()
    success = tester.run_all_tests()
    
    if not success:
        sys.exit(1)
    else:
        print("🎉 All tests passed!")
        sys.exit(0)