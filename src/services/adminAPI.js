import api from './axios';

const adminAPI = {
  getAllAdmins: () => api.get('/admins'),
  addAdmin: (data) => api.post('/admins',data),

  getAdminById: (adminId) => api.get(`/admins/${adminId}`),

  updateAdmin: (adminId, formData) =>
    api.patch(`/admins/${adminId}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }),

  deleteAdmin: (adminId) => api.delete(`/admins/${adminId}`),
};

export default adminAPI;
