import axios from 'axios';

// ✅ Use the environment variable for deployed backend
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const api = axios.create({
  baseURL: API_BASE_URL,
});

// ✅ Automatically add JWT token if available
const token = localStorage.getItem('jwt');
if (token) {
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

// ✅ Ensure POST requests send JSON
api.defaults.headers.post['Content-Type'] = 'application/json';

export default api;
