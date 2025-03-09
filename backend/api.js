import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5002/api'  // Updated port to match your backend
});

// Add token to requests
API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

// Auth endpoints
export const login = (formData) => API.post('/auth/login', formData);
export const register = (formData) => API.post('/auth/register', formData);
export const logout = () => API.post('/auth/logout');
export const forgotPassword = (email) => API.post('/auth/forgot-password', { email });

// Menu endpoints
export const getAllMenuItems = () => API.get('/menu');
export const getMenuItemById = (id) => API.get(`/menu/${id}`);
export const getMenuByCategory = (category) => API.get(`/menu/category/${category}`);
export const searchMenu = (query) => API.get(`/menu/search/${query}`);
export const getSpecialMenu = (type) => API.get(`/menu/special/${type}`);

// Order endpoints
export const placeOrder = (orderData) => API.post('/orders', orderData);
export const getOrders = () => API.get('/orders');
export const getOrderById = (id) => API.get(`/orders/${id}`);
export const updateOrderStatus = (id, status) => API.put(`/orders/${id}/status`, { status });
export const cancelOrder = (id, reason) => API.delete(`/orders/${id}`, { data: { reason } });

// Feedback endpoints
export const submitFeedback = (feedbackData) => API.post('/feedback', feedbackData);
export const getFeedback = () => API.get('/feedback');
export const getFeedbackById = (id) => API.get(`/feedback/${id}`);
export const updateFeedbackResponse = (id, response) => API.put(`/feedback/${id}/respond`, { response });

// Error handler
API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // Handle specific error cases
      switch (error.response.status) {
        case 401:
          localStorage.removeItem('token');
          window.location.href = '/login';
          break;
        case 403:
          console.error('Access forbidden');
          break;
        case 404:
          console.error('Resource not found');
          break;
        default:
          console.error('An error occurred:', error.response.data.message);
      }
    }
    return Promise.reject(error);
  }
);

export default API;