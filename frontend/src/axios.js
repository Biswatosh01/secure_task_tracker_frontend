import axios from 'axios';

console.log('API Base URL:', process.env.VUE_APP_API_URL); // Add this line for debugging

// Create an Axios instance with the base URL
const api = axios.create({
    baseURL: process.env.VUE_APP_API_URL, 
    headers: {
        'Content-Type': 'application/json', // Ensure requests are JSON
        Accept: 'application/json',         // Explicitly accept JSON responses
    },
  });

// Automatically attach the JWT token to requests (if available)
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token'); // Fetch token from localStorage
  if (token) {
    config.headers.Authorization = `Bearer ${token}`; // Attach token in Authorization header
  }
  return config;
});

export default api;
