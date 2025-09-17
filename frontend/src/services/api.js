// API service layer for portfolio backend
const API_BASE = process.env.REACT_APP_BACKEND_URL + '/api';

// Helper function to handle API responses
const handleResponse = async (response) => {
  if (!response.ok) {
    const error = await response.json().catch(() => ({ detail: 'Network error' }));
    throw new Error(error.detail || `HTTP ${response.status}`);
  }
  return response.json();
};

// Portfolio API service
export const portfolioService = {
  // Get personal information
  getPersonalInfo: async () => {
    const response = await fetch(`${API_BASE}/personal-info`);
    return handleResponse(response);
  },

  // Get skills by category
  getSkills: async () => {
    const response = await fetch(`${API_BASE}/skills`);
    return handleResponse(response);
  },

  // Get work experience
  getExperience: async () => {
    const response = await fetch(`${API_BASE}/experience`);
    return handleResponse(response);
  },

  // Get projects with optional category filter
  getProjects: async (category = null) => {
    const url = category && category !== 'All' 
      ? `${API_BASE}/projects?category=${encodeURIComponent(category)}`
      : `${API_BASE}/projects`;
    const response = await fetch(url);
    return handleResponse(response);
  },

  // Get blog posts
  getBlog: async () => {
    const response = await fetch(`${API_BASE}/blog`);
    return handleResponse(response);
  },

  // Get testimonials
  getTestimonials: async () => {
    const response = await fetch(`${API_BASE}/testimonials`);
    return handleResponse(response);
  },

  // Submit contact form
  submitContact: async (contactData) => {
    const response = await fetch(`${API_BASE}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contactData)
    });
    return handleResponse(response);
  }
};

// Create custom hooks for data fetching
export const usePortfolioData = () => {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  const fetchData = async (fetchFunction) => {
    try {
      setLoading(true);
      setError(null);
      const result = await fetchFunction();
      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, fetchData };
};

// Export default service
export default portfolioService;