import api from './axios';

const ContactAPI = {
  getAllMedia: () => api.get('/media'),

  updateMedia: (data) =>
    api.patch('/media', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    }),

};

export default ContactAPI;