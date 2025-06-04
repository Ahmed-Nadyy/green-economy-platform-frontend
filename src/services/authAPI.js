import api from './axios';

const authAPI = {
  login: (data) => api.post('/auth/login', data),

  verifyLogin: (data) => api.post('/auth/verify-login', data),

  resendOtp: (data) => api.post('/auth/resend-otp', data),

  register: (formData) =>
    api.post('/auth/register', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }),

  verifyAccount: (data) => api.post('/auth/verify-account', data),
};

export default authAPI;
