import api from './axios';

const jobRequestAPI = {
  getAllJobRequests: () => api.get('/job-requests'),

  getJobRequestById: (id) => api.get(`/job-requests/${id}`),

  createJobRequest: (data) => api.post('/job-requests', data),
  deleteJobRequest: (id) => api.delete(`/job-requests/${id}`),
  
};

export default jobRequestAPI;
